import { Container, MainContent, WrapperBody } from '../../../../styles/qrcode';
import React, { useEffect } from 'react';

import { Header } from '../../../../components/_ui/Header';
import { MainLayout } from '../../../../layouts/MainLayout';
import { QRCodeSVG } from 'qrcode.react';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useGetAllContainersQuery } from '../../../../generated/graphql';
import { useRouter } from 'next/router';

const ContainersPage = () => {
  const { data, error, isLoading } = useGetAllContainersQuery(graphqlRequestClient);
  const router = useRouter();

  useEffect(() => {
    if (data && data.getAllContainers.length === 0) {
      console.log('No containers found');
    }
  }, [data, router]);

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading containers...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading containers: {error}</div>
  }

  return (
    <MainLayout
      headTitle="All Containers"
      metaContent="List of all containers"
      metaName="description"
    >
      <Container>
        <Header />
        <WrapperBody>
          <MainContent>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
              <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">All Containers</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
                  {data?.getAllContainers.map((container) => (
                    <div
                      key={container.id}
                      className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col max-w-md mx-auto w-full"
                    >
                      {/* Header Section */}
                      <div
                        className="p-4 border-b border-gray-200 cursor-pointer"
                        onClick={() => router.push(`/qrcode-app/container/view/${container.id}`)}
                      >
                        <h2 className="text-xl font-semibold text-gray-800 truncate">{container.name}</h2>
                        <p className="text-sm text-gray-500 mt-2">{container.description}</p>
                      </div>

                      {/* QR Code Section */}
                      <div className="flex justify-center p-4 border-b bg-white">
                        <QRCodeSVG value={container.code} size={100} />
                      </div>

                      {/* Footer Section */}
                      <div className="p-4 bg-gray-50 flex flex-col items-start space-y-2">
                        <p className="text-sm text-gray-600">
                          Items: <span className="font-medium">{container.items.length}</span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Code: <span className="font-medium">{container.code}</span>
                        </p>
                        <button
                          className="mt-4 bg-gray-500 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-600 transition-colors w-full text-center"
                          onClick={() => router.push(`/qrcode-app/items/${container.id}`)}
                        >
                          Add Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MainContent>
        </WrapperBody>
      </Container>
    </MainLayout>
  );
};

export default ContainersPage;
