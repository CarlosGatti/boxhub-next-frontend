import { Container, MainContent } from '../../../styles/qrcode';
import { useEffect, useRef, useState } from 'react';

import { Html5QrcodeScanner } from 'html5-qrcode';
import Image from 'next/image';
import Link from 'next/link';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import graphqlRequestClient from '../../../lib/graphql.request';
import { useGetContainerByCodeQuery } from '../../../generated/graphql';

const QrCodeScanner = () => {
  const [result, setResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  const { data, error, isFetching } = useGetContainerByCodeQuery(
    graphqlRequestClient,
    { code: result || '' },
    { enabled: !!result }
  );

  useEffect(() => {
    if (error) {
      setErrorMessage('Failed to get container data.');
    }
  }, [error]);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: 250 },
      false
    );

    scannerRef.current.render(
      (decodedText) => {
        setResult(decodedText);
        if (scannerRef.current) {
          scannerRef.current.clear().catch((err) =>
            console.error('Failed to clear scanner:', err)
          );
        }
      },
      (scanError) => {
        console.error('QR Code scanning error:', scanError);
      }
    );

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((err) =>
          console.error('Failed to clear scanner:', err)
        );
      }
    };
  }, []);

  // Função para iniciar um novo escaneamento
  const handleScanAnother = () => {
    setResult(null);
    scannerRef.current?.render(
      (decodedText) => {
        setResult(decodedText);
        if (scannerRef.current) {
          scannerRef.current.clear().catch((err) =>
            console.error('Failed to clear scanner:', err)
          );
        }
      },
      (scanError) => {
        console.error('QR Code scanning error:', scanError);
      }
    );
  };

  return (
    <PrivateLayout
      title="Scan QR Code"
      description="Scan QR Code to find a container"
      
    >
      <Container>
 
          {/* <MenuBar /> */}

          <MainContent>
          <div className="flex flex-col items-center min-h-screen">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Scan QR Code</h1>
              <div id="reader" className="mb-6 border border-gray-300 rounded-lg"></div>

              {isFetching ? (
                <p className="text-gray-500">Loading container data...</p>
              ) : data?.getContainerByCode ? (
                <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Container Details</h2>

                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="font-semibold text-gray-700">Name:</span> {data.getContainerByCode.name}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold text-gray-700">Description:</span> {data.getContainerByCode.description}
                    </p>
                    {data.getContainerByCode.family && (
                      <p className="text-lg">
                        <span className="font-semibold text-gray-700">Family:</span> {data.getContainerByCode.family.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">Items:</p>
                    <ul className="space-y-2">
                      {data.getContainerByCode.items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between">
                          <Image src={item.imageUrl} alt="Item" width={50} height={50} />
                          <span className="text-gray-800">{item.name}</span>
                          <span className="text-gray-500">Qtt: {item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Link href={`/qrcode-app/items/${data.getContainerByCode.id}`}>
                      <div className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600">
                        Add Item to Container
                      </div>
                    </Link>
                  </div>
                </div>
              ) : result ? (
                <p className="text-red-500">No container found for this QR Code.</p>
              ) : null}

              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

              {/* Botão para escanear novamente */}
              <div className="mt-6">
                <button
                  onClick={handleScanAnother}
                  className="w-full px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Scan Another Box
                </button>
              </div>
            </div>
            </div>
          </MainContent>
        
      </Container>
    </PrivateLayout>
  );
};

export default QrCodeScanner;
