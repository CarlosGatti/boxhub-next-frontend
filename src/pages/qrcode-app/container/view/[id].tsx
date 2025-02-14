import { Container, MainContent, WrapperBody } from '../../../../styles/qrcode';

import { Header } from '../../../../components/_ui/Header';
import Image from 'next/image';
import  ItemCard from '../../../../components/Card/ItemCard';
import { MainLayout } from '../../../../layouts/MainLayout';
import { MenuBar } from '../../../../components/_ui/MenuBar';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useGetContainerByIdQuery } from '../../../../generated/graphql';
import { useRouter } from 'next/router';

const ContainerDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query; // Obtém o ID do container da URL

    const { data, error, isLoading } = useGetContainerByIdQuery(
        graphqlRequestClient,
        { id: parseInt(id as string, 10) }, // Converte o ID para número
        { enabled: !!id } // Só faz a consulta se o ID estiver definido
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.error('Error fetching container:', error);
        return <p>Error fetching container data.</p>;
    }

    if (!data || !data.getContainerById) {
        return <p>No container found.</p>;
    }

    const container = data.getContainerById;

    return (
     <MainLayout
       headTitle="Scan QR Code"
       metaContent="Scan QR Code to find a container"
       metaName="description"
     >
       <Container>
         <Header />
         <WrapperBody>
           <MenuBar />
 
           <MainContent>
     
           <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mx-auto">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">{container.name}</h1>
  <p className="text-gray-600 mb-6">{container.description}</p>
  <p className="text-gray-500">
    <strong>Family:</strong> {container.family?.name || 'N/A'}
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Items</h2>

  {container.items.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {container.items.map((item) => (
        <div key={item.id} className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="relative w-full h-40 bg-gray-200 flex items-center justify-center">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={150}
              height={150}
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.description}</p>
            <p className="text-sm text-gray-600">Qtt: {item.quantity}</p>
            <p className="text-sm text-gray-600">Category: {item.category}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">No items in this container.</p>
  )}

  <div className="flex justify-center mt-6">
    <button
      onClick={() => router.push(`/qrcode-app/items/${container.id}`)}
      className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-all"
    >
      Add Item
    </button>
  </div>
</div>

              </MainContent>
            </WrapperBody>
            </Container>
        </MainLayout>
    );
};

export default ContainerDetailsPage;
