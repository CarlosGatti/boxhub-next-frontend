import { Container, MainContent } from '../../../../styles/qrcode';
import { useEffect, useState } from 'react';

import { LogType } from '../../../../generated/graphql';
import { PrivateLayout } from '../../../../layouts/PrivateLayout';
import graphqlRequestClient from '../../../../lib/graphql.request';
import { resizeImage } from '../../../../lib/resizeImage';
import { useAddConstructionLogMutation } from '../../../../generated/graphql';
import { useRouter } from 'next/router';

const CreateConstructionLogPage = () => {
    const router = useRouter();
    const { id } = router.query;



    const [form, setForm] = useState({
        title: '',
        description: '',
        type: 'GENERAL',
        images: [] as string[],
    });

    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const { mutateAsync: addLog, isLoading, error } = useAddConstructionLogMutation(graphqlRequestClient);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const previews: string[] = [];
        const resizedImages: string[] = [];

        for (const file of files) {
            const resized = await resizeImage(file);
            resizedImages.push(resized);
            previews.push(URL.createObjectURL(file));
        }

        setForm((prev) => ({ ...prev, images: resizedImages }));
        setPreviewUrls(previews);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        console.log('Project ID:', id);
        if (!id) return;
        console.log('Submitting form:', form);
        try {
            await addLog({
                data: {
                    title: form.title,
                    description: form.description,
                    type: form.type as LogType,
                    images: form.images,
                    project: { connect: { id: Number(id) } },
                    user: { connect: { id: 1 } },
                },
                projectId: Number(id),
            });

            alert('Log created successfully!');
            router.push(`/projects/construction-log/${id}`);
        } catch (err: any) {
            console.error('Error creating log:', err);
            alert(`Failed to create log: ${err?.message || 'Unknown error'}`);
          }
    };

    return (
        <PrivateLayout headTitle="Create Construction Log" metaContent="Log form for project">
            <Container>
                <MainContent>
                    <div className="min-h-screen flex justify-center px-4">
                        <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
                            <h1 className="text-2xl font-bold mb-6 text-center">New Construction Log</h1>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block font-medium mb-1">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium mb-1">Description</label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 resize-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium mb-1">Log Type</label>
                                    <select
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    >
                                        <option value="OBSERVATION">Observation</option>
                                        <option value="ISSUE">Issue</option>
                                        <option value="GOOD_PRACTICE">Good Practice</option>
                                        <option value="MATERIAL_RECEIPT">Material Receipt</option>
                                        <option value="DAILY_CHECKIN">Daily Check-in</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-medium mb-1">Images (optional)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                    {previewUrls.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-3">
                                            {previewUrls.map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={src}
                                                    alt={`Preview ${index}`}
                                                    className="w-24 h-24 object-cover rounded border"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-gray-600 text-white font-semibold px-6 py-2 rounded hover:bg-gray-700"
                                    >
                                        {isLoading ? 'Saving...' : 'Create Log'}
                                    </button>
                                </div>

                                {!!error && (
                                    <p className="text-red-500 text-sm mt-2">An error occurred. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </MainContent>
            </Container>
        </PrivateLayout>
    );
};

export default CreateConstructionLogPage;
