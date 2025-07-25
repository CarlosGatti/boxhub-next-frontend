import { Container, ImageCrop, MainContent } from '../../../styles/qrcode';

import { PrivateLayout } from '../../../layouts/PrivateLayout';
import { UploadPhotoWithCrop } from '../../../components/_ui/UploadPhotoWithCrop';
import {graphqlRequestClient} from '../../../lib/graphql.request';
import { uploadImages } from '../../../lib/imgBB';
import { useCreateItemMutation } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { useState } from 'react';

const AddItemPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('');

    const { mutateAsync: createItem } = useCreateItemMutation(graphqlRequestClient);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('containerId:', id);
        e.preventDefault();
        if (!name || !description || !imageUrl || quantity < 1 || !category) {
            alert('Please fill all fields!');
            return;
        }

        let finalImageUrl = imageUrl;

        if (imageUrl && !imageUrl.includes('imgbb')) {
          const { data } = await uploadImages(imageUrl);
          finalImageUrl = data.url;
        }
        
        await createItem({
          name,
          description,
          imageUrl: finalImageUrl,
          quantity,
          category,
          containerId: parseInt(id as string, 10),
        });

        try {
            await createItem({
                name,
                description,
                imageUrl,
                quantity,
                category,
                containerId: parseInt(id as string, 10),
            });

            alert('Item created successfully!');
            router.replace('/qrcode-app/items/list');

        } catch (error) {
            console.error('Error creating item:', error);
            alert('Failed to create item.');
        }
    };

    return (
        <PrivateLayout
            title="Scan QR Code"
            description="Scan QR Code to find a container"
        >
            <Container>
                <MainContent>
                    <div className="min-h-screen">
                        <div className="max-w-md bg-white p-6 rounded-md shadow-md">

                            <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Item</h1>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Item Name:</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter item name"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description:</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Enter item description"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Image URL:</label>
                                    <ImageCrop>
                                        <UploadPhotoWithCrop
                                            setBanner={(value: string) => setImageUrl(value)}
                                            imageUser={imageUrl}
                                        />

                                    </ImageCrop>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Qtt:</label>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                        min="1"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Category:</label>
                                    <input
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="Enter category"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between space-x-4">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Save Item
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => router.back()}
                                        className="w-full px-4 py-2 bg-gray-300 text-black rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </MainContent>
            </Container>
        </PrivateLayout>
    );
};

export default AddItemPage;