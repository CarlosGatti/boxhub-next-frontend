import { Container, MainContent, WrapperBody } from '../../../styles/qrcode';
import {
  useCreateStorageMutation,
  useGetAllStoragesQuery,
  useRemoveStorageMutation,
} from '../../../generated/graphql';
import { useEffect, useState } from 'react';

import { Header } from '../../../components/_ui/Header';
import Link from 'next/link';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import graphqlRequestClient from '../../../lib/graphql.request';

const ManageStorage = () => {
  const [storages, setStorages] = useState([]);
  const [newStorageName, setNewStorageName] = useState('');

  const { data, refetch } = useGetAllStoragesQuery(graphqlRequestClient);
  const { mutateAsync: createStorage } = useCreateStorageMutation(graphqlRequestClient);
  const { mutateAsync: removeStorage } = useRemoveStorageMutation(graphqlRequestClient);

  const handleAddStorage = async () => {
    if (!newStorageName.trim()) return;

    try {
      await createStorage({ name: newStorageName });
      setNewStorageName('');
      await refetch();
    } catch (error) {
      console.error('Error creating storage:', error);
    }
  };

  const handleRemoveStorage = async (id: number) => {
    try {
      await removeStorage({ id });
      await refetch();
    } catch (error) {
      console.error('Error removing storage:', error);
    }
  };

  useEffect(() => {
    if (data?.getAllStorages) {
      setStorages(data.getAllStorages);
    }
  }, [data]);

  return (
    <PrivateLayout
      headTitle="Manage Storage"
      metaContent="Create and manage QR code storage boxes"
      metaName="description"
    >
      <Container>
        
        
          <MainContent>
          <div className="min-h-screen bg-gray-100 flex justify-center">  
              <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
                <div className="border-b pb-4 mb-4">
                  <h1 className="text-2xl font-bold text-gray-800">Create Storage</h1>
                </div>

                <form className="flex flex-col gap-4 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="storageName" className="text-sm font-medium text-gray-700">
                      Storage Name:
                    </label>
                    <input
                      type="text"
                      id="storageName"
                      value={newStorageName}
                      onChange={(e) => setNewStorageName(e.target.value)}
                      placeholder="Enter storage name"
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddStorage}
                    className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 focus:ring focus:ring-blue-200"
                  >
                    Add Storage
                  </button>
                </form>

                {storages.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Storage List</h2>
                    <ul className="space-y-2">
                      {storages.map((storage: any, index: number) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
                        >
                          <span className="text-gray-800">{storage.name}</span>
                          <div className="flex items-center gap-2">
                            <Link href={`/qrcode-app/container/create/${storage.id}`}>
                              <div className="px-2 py-1 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 cursor-pointer">
                                Add Box
                              </div>
                            </Link>
                            <button
                              onClick={() => handleRemoveStorage(parseInt(storage.id))}
                              className="px-2 py-1 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </MainContent>
      </Container>
    </PrivateLayout>
  );
};

export default ManageStorage;
