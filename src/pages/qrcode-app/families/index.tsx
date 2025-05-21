import { Container, MainContent, WrapperBody } from '../../../styles/qrcode';
import { useCreateFamilyMutation, useGetAllFamiliesQuery, useRemoveFamilyMutation } from '../../../generated/graphql';
import { useEffect, useState } from 'react';

import { Header } from '../../../components/_ui/Header';
import Link from 'next/link';
import { MainLayout } from '../../../layouts/MainLayout';
import { MenuBar } from '../../../components/_ui/MenuBar'
import graphqlRequestClient from '../../../lib/graphql.request';

const ManageFamilies = () => {
  const [families, setFamilies] = useState([]);
  const [newFamily, setNewFamily] = useState('');

  // Fetch all families
  const { data: dataFamily, refetch } = useGetAllFamiliesQuery(graphqlRequestClient);

  // Create a new family
  const { mutateAsync: createFamily } = useCreateFamilyMutation(graphqlRequestClient);

  // Remove a family
  const { mutateAsync: removeFamily } = useRemoveFamilyMutation(graphqlRequestClient);

  // Handle adding a family
  const handleAddFamily = async () => {
    if (newFamily.trim() !== '') {
      try {
        await createFamily({ name: newFamily });
        setNewFamily(''); // Clear input field
        await refetch(); // Refresh family list
      } catch (error) {
        console.error('Error creating family:', error);
      }
    }
  };

  // Handle removing a family
  const handleRemoveFamily = async (id: number) => {

    if (!id) {
      console.error('Family ID is required to remove a family.');
      return;
    }

    try {
      await removeFamily({ id }); // Call mutation to remove family
      await refetch(); // Refresh family list
    } catch (error) {
      console.error('Error removing family:', error);
    }
  };

  const handleAddContainer = async (id: number) => {
    console.log('Add container to family:', id);
    // Redirect to create container page box/[id]/container/create

  }

  useEffect(() => {
    if (dataFamily?.getAllFamilies) {
      setFamilies(dataFamily.getAllFamilies);
    }
  }, [dataFamily]);

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
    
          <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
              <div className="border-b pb-4 mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Create Storare</h1>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="familyName" className="text-sm font-medium text-gray-700">
                    Storage Name:
                  </label>
                  <input
                    type="text"
                    id="familyName"
                    value={newFamily}
                    onChange={(e) => setNewFamily(e.target.value)}
                    placeholder="Enter storage name"
                    className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddFamily}
                  className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 focus:ring focus:ring-blue-200"
                >
                  Add Storage
                </button>
              </form>

              {/* Family List */}
              {families.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Storage List</h2>
                  <ul className="space-y-2">
                    {families.map((family: any, index: number) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
                      >
                        <span className="text-gray-800">{family.name}</span>
                        <div className="flex items-center gap-2">



                          <Link href={`/qrcode-app/container/create/${family.id}`}>
                            <div className="px-2 py-1 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600">
                              Add Box
                            </div>
                          </Link>


                          <button
                            onClick={() => handleRemoveFamily(parseInt(family.id))}
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

        </WrapperBody>
      </Container>
    </MainLayout>
  );
};

export default ManageFamilies;
