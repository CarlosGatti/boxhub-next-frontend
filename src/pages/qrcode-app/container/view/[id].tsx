import { Container, MainContent } from '../../../../styles/qrcode';

import Link from 'next/link';
import { PrivateLayout } from '../../../../layouts/PrivateLayout';
import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { graphqlRequestClient } from '../../../../lib/graphql.request';
import { useGetContainerByIdQuery } from '../../../../generated/graphql';
import { useRouter } from 'next/router';

const ContainerDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useGetContainerByIdQuery(graphqlRequestClient, {
    id: Number(id),
  }, {
    enabled: !!id,
  });

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading container details...</div>;
  }

  if (error || !data?.getContainerById) {
    return <div className="text-center text-red-600">Error loading container details.</div>;
  }

  const container = data.getContainerById;

  return (
    <PrivateLayout
      title={`Container: ${container.name}`}
      description="Detailed view of a specific container and its items."
    >
      <Container>
        <MainContent>
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{container.name}</h1>
            <p className="text-gray-600 mb-4">{container.description}</p>
            <p className="text-gray-700 mb-6">
              <strong>Storage:</strong> {container.storage?.name}
            </p>

            {/* Melhorando a seção do QR Code */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex-shrink-0">
                <QRCodeSVG value={container.qrCode} size={120} />
              </div>
              <div>
                <p className="text-gray-600">
                  Use the QR code to quickly identify and manage this container.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Items in Container</h2>
            {container.items?.length === 0 ? (
              <p className="text-gray-500">No items yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {container.items?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-4"
                  >
                    <div className="mb-2">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                    <p className="text-sm">
                      Quantity: <span className="font-medium">{item.quantity}</span>
                    </p>
                    <p className="text-sm">
                      Category: <span className="font-medium">{item.category}</span>
                    </p>
                    {/* edit item */}
                    <div className="flex justify-end">
                      <Link href={`/qrcode-app/items/edit/${item.id}`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </MainContent>
      </Container>
    </PrivateLayout>
  );
};

export default ContainerDetailsPage;
