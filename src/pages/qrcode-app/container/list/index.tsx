import { Container, MainContent, WrapperBody } from '../../../../styles/qrcode';
import React, { useEffect } from 'react';

import { FiPrinter } from 'react-icons/fi'
import { Header } from '../../../../components/_ui/Header';
import { PrivateLayout } from '../../../../layouts/PrivateLayout';
import { QRCodeSVG } from 'qrcode.react';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useGetMyStoragesQuery } from '../../../../generated/graphql';
import { useRouter } from 'next/router';

const ContainersPage = () => {
  const { data, error, isLoading } = useGetMyStoragesQuery(graphqlRequestClient);
  const router = useRouter();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading storages...</div>;
  }

  if (error || !data) {
    return <div className="text-center text-red-600">Error loading storages</div>;
  }

  const printQRCode = (id: string) => {
    const qrElement = document.getElementById(`qr-${id}`)
    if (!qrElement) return

    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
    <html>
      <head>
        <title>Print QR Code</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
        </style>
      </head>
      <body>
        ${qrElement.outerHTML}
      </body>
    </html>
  `)

    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
    printWindow.close()
  }

  return (
    <PrivateLayout
      title="All Containers"
      description="List of all containers grouped by storage"
    >
      <Container>
          <MainContent>
            <div className="flex flex-col items-center min-h-screen">
              <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Your Storages & Containers</h1>

                {data.getMyStorages.length === 0 ? (
                  <div className="text-gray-600 text-center">You have no storages yet.</div>
                ) : (
                  data.getMyStorages.map((storage) => (
                    <div key={storage.id} className="mb-10">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                        Storage: {storage.name}
                      </h2>

                      {storage.containers.length === 0 ? (
                        <p className="text-sm text-gray-500 mb-6">No containers in this storage.</p>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
                          {storage.containers.map((container) => (
                            <div
                              key={container.id}
                              className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col max-w-md mx-auto w-full"
                            >
                              {/* Header */}
                              <div
                                className="p-4 border-b border-gray-200 cursor-pointer"
                                onClick={() => router.push(`/qrcode-app/container/view/${container.id}`)}
                              >
                                <h3 className="text-lg font-semibold text-gray-800 truncate">{container.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{container.description}</p>
                              </div>

                              {/* QR Code */}
                              <div className="flex justify-center p-4 border-b bg-white">
                                <div id={`qr-${container.id}`}>
                                  <QRCodeSVG value={container.code} size={100} />

                                  <button
                                    onClick={() => printQRCode(container.id.toString())}
                                    className="mt-2 text-sm text-blue-600 hover:underline flex items-center justify-center"
                                  >
                                    <FiPrinter className="mr-1" />
                                    Print QR Code
                                  </button>
                                </div>


                              </div>

                              {/* Footer */}
                              <div className="p-4 bg-gray-50 flex flex-col items-start space-y-2">
                                <p className="text-sm text-gray-600">
                                  Items: <span className="font-medium">{container.items.length}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                  Code: <span className="font-medium">{container.code}</span>
                                </p>

                                {container.items.length > 0 && (
                                  <button
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-600 w-full"
                                    onClick={() => router.push(`/qrcode-app/container/view/${container.id}`)}
                                  >
                                    View Items
                                  </button>
                                )}

                                <button
                                  className="mt-2 bg-gray-500 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-600 w-full"
                                  onClick={() => router.push(`/qrcode-app/items/${container.id}`)}
                                >
                                  Add Item
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </MainContent>
        
      </Container>
    </PrivateLayout>
  );
};

export default ContainersPage;
