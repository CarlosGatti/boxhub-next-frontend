import { Container, MainContent, WrapperBody } from '../../../../styles/qrcode';
import {
  useEditItemMutation,
  useGetItemByIdQuery
} from '../../../../generated/graphql';

import Link from 'next/link';
import { PrivateLayout } from '../../../../layouts/PrivateLayout';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function EditItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useGetItemByIdQuery(
    graphqlRequestClient,
    {
      id: id ? parseInt(id as string, 10) : 0, // type-safe ID
    },
    {
      enabled: !!id, // só faz a requisição se houver id
    }
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      description: '',
      imageUrl: '',
      quantity: 1,
      category: '',
    },
  });

  // Preenche o formulário assim que os dados forem carregados
  useEffect(() => {
    if (data?.getItemById) {
      reset({
        name: data.getItemById.name,
        description: data.getItemById.description,
        imageUrl: data.getItemById.imageUrl,
        quantity: data.getItemById.quantity,
        category: data.getItemById.category,
      });
    }
  }, [data, reset]);

  const editItemMutation = useEditItemMutation(graphqlRequestClient);

  const onSubmit = async (formData: any) => {
    try {
      await editItemMutation.mutateAsync({
        id: parseInt(id as string, 10),
        name: formData.name,
        description: formData.description,
        imageUrl: formData.imageUrl,
        quantity: formData.quantity,
        category: formData.category,
      });
      router.push(`/qrcode-app/items/list`);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <PrivateLayout
      title="Edit Item"
      description="Edit the details of an existing item"
      loading={isLoading}
    >

<Container>
        
        
        <MainContent>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded shadow-md space-y-4 max-w-xl mx-auto"
        >
          <div className="flex flex-col gap-4">
            {/* Pré-visualização da imagem carregada */}
            {data?.getItemById?.imageUrl && (
              <div className="mt-4">
                <p className="block text-sm font-medium text-gray-700 mb-1">Preview</p>
                <img
                  src={data.getItemById.imageUrl}
                  alt={data.getItemById.name}
                  className="w-full max-w-sm mx-auto rounded shadow"
                />
              </div>
            )}
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register('description')}
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>








          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              {...register('quantity', { min: 1 })}
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              {...register('category')}
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>
          <div className="flex justify-between mt-6">
            <Link
              href="/items"
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      </MainContent>
      </Container>
    </PrivateLayout>
  );
}
