import { Container, WrapperBody } from '../../../../styles/qrcode';
import { FaDownload, FaPrint } from 'react-icons/fa';

import { Header } from '../../../../components/_ui/Header';
import { MainContent } from '../../../../styles/qrcode';
import { MainLayout } from '../../../../layouts/MainLayout';
import { MenuBar } from '../../../../components/_ui/MenuBar';
import QRCode from 'qrcode';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useCreateContainerMutation } from '../../../../generated/graphql';
import { useCurrentUser } from '../../../../context/CurrentUser';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CreateContainer: React.FC = () => {
  const router = useRouter();
  const { id: storageId } = router.query;
  const { currentUser } = useCurrentUser();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null); // URL para exibir o QR Code

  const { mutateAsync: createContainer } = useCreateContainerMutation(graphqlRequestClient);

  // Gera o código QR e a URL correspondente
  const handleGenerateCode = async () => {
    const generatedCode = `container-${storageId}-${Date.now()}`;
    setQrCode(generatedCode);

    try {
      const qrUrl = await QRCode.toDataURL(generatedCode); // Gera a URL da imagem do QR Code
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('Error generating QR Code:', error);
    }
  };

  // Lógica para criar o container
  const handleCreateContainer = async () => {
    if (!name || !description || !qrCode) {
      alert('All fields are required!');
      return;
    }

    try {
      await createContainer({
        name,
        description,
        qrCode,
        code: qrCode, // Aqui o código gerado é o mesmo do QR Code
        storageId: parseInt(storageId as string, 10),
      });
      alert('Container created successfully!');
      router.push(`/qrcode-app/container/list`);
    } catch (error) {
      console.error('Error creating container:', error);
      alert('Failed to create container.');
    }
  };

// Função para baixar o QR Code como imagem
const handleDownloadQrCode = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // Evita o reload da página
  if (qrCodeUrl) {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `${qrCode}.png`;
    link.click();
  }
};

// Função para imprimir o QR Code diretamente
const handlePrintQrCode = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // Evita o reload da página
  if (qrCodeUrl) {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print QR Code</title>
          </head>
          <body>
            <img src="${qrCodeUrl}" style="width: 100%; max-width: 300px;" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  }
};

  return (
    <MainLayout
      headTitle="Scan QR Code"
      metaContent="Scan QR Code to find a container"
      metaName="description"
    >
      <Container>
        <Header />
        <WrapperBody>
          {/* <MenuBar /> */}

          <MainContent>
  <div className="p-6 bg-white rounded-lg shadow-md max-w-md ">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Container</h1>

    <form className="space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          placeholder="Enter container name"
        />
      </div>

      {/* Description Input */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          placeholder="Enter container description"
        />
      </div>

      {/* QR Code Generator */}
      <div>
        <label className="block text-sm font-medium text-gray-700">QR Code:</label>
        <button
          type="button"
          onClick={handleGenerateCode}
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Generate QR Code
        </button>

        {qrCodeUrl && (
          <div className="mt-6 flex flex-col items-center gap-4">
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="w-40 h-40 rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500">Code: {qrCode}</p>

            {/* Botões de Download e Print */}
            <div className="flex gap-4">
              <button
                onClick={handleDownloadQrCode}
                className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-200"
                title="Download QR Code"
              >
                <FaDownload size={20} />
              </button>

              <button
                onClick={handlePrintQrCode}
                className="flex items-center justify-center w-12 h-12 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                title="Print QR Code"
              >
                <FaPrint size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 mt-6">
        <button
          type="button"
          onClick={handleCreateContainer}
          className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        >
          Save Container
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          className="w-full px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>
      </div>
    </form>
  </div>
</MainContent>


        </WrapperBody>
      </Container>
    </MainLayout>
  );
};

export default CreateContainer;
