import { Container, MainContent, WrapperBody } from '../../../../styles/qrcode';

import { Header } from '../../../../components/_ui/Header';
import Image from 'next/image';
import { MainLayout } from '../../../../layouts/MainLayout';
import { MenuBar } from '../../../../components/_ui/MenuBar';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useGetAllItemsQuery } from '../../../../generated/graphql';
import { useState } from 'react';

const AllItemsPage = () => {
  const { data, isLoading, error } = useGetAllItemsQuery(graphqlRequestClient);
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading items: {error.message}</p>;

  // Filtrar os itens com base no termo de pesquisa
  const filteredItems = data.getAllItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout
      headTitle="All Items"
      metaContent="View all items and search for specific items"
      metaName="description"
    >
      <Container>
        <Header />
        <WrapperBody>
          {/* <MenuBar /> */}
          <MainContent>
          <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">All Items</h1>

              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Grid de Itens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={150}
                      height={150}
                      className="rounded-md"
                    />
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-500 mb-2">{item.description}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Category: {item.category}</p>
                    {item.container && (
                      <p className="text-sm text-blue-600">Container: {item.container.name}</p>
                    )}
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
