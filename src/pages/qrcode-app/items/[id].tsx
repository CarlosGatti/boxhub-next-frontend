import { Container, MainContent, WrapperBody } from '../../../../styles/qrcode';

import { Header } from '../../../../components/_ui/Header';
import Image from 'next/image';
import { MainLayout } from '../../../../layouts/MainLayout';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useGetAllItemsQuery } from '../../../../generated/graphql';
import { useState } from 'react';

const AllItemsPage = () => {
  const { data, isLoading, error } = useGetAllItemsQuery(graphqlRequestClient);
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading items...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading items: {error.message}</div>;
  }

  const filteredItems = data?.getAllItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <MainLayout
      headTitle="All Items"
      metaContent="View all items and search for specific items"
      metaName="description"
    >
      <Container>
        <Header />
        <WrapperBody>
          <MainContent>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
              <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">All Items</h1>

                {/* Search Bar */}
                <div className="mb-8">
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Grid of Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col max-w-md mx-auto w-full"
                    >
                      {/* Item Image */}
                      <div className="flex justify-center items-center bg-gray-100 p-4 border-b">
                        <div className="relative w-32 h-32">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="p-4 flex flex-col space-y-2">
                        <h2 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="text-sm text-gray-600">Quantity: <span className="font-medium">{item.quantity}</span></p>
                        <p className="text-sm text-gray-600">Category: <span className="font-medium">{item.category}</span></p>
                        {item.container && (
                          <p className="text-sm text-blue-600">Container: {item.container.name}</p>
                        )}
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

export default AllItemsPage;
