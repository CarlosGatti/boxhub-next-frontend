import {
  DocumentType,
  useAddProjectDocumentMutation,
  useGetDocumentsByProjectQuery,
  useRemoveProjectDocumentMutation,
} from '../../generated/graphql';

import axios from 'axios';
import graphqlRequestClient from '../../lib/graphql.request';
import { useState } from 'react';

type Props = {
  projectId: number;
};

export const ProjectDocumentForm = ({ projectId }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    file: null as File | null,
    type: '' as DocumentType | '',
  });

  const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_FRONTEND_URL_LOCAL
    : process.env.NEXT_PUBLIC_FRONTEND_URL_PROD;


  const [uploading, setUploading] = useState(false);

  const { data, refetch, isLoading } = useGetDocumentsByProjectQuery(
    graphqlRequestClient,
    { projectId },
    { enabled: !!projectId }
  );

  const { mutateAsync: addDocument } = useAddProjectDocumentMutation(graphqlRequestClient, {
    onSuccess: () => {
      setFormData({ name: '', file: null, type: DocumentType.OTHER });
      setShowForm(false);
      refetch();
    },
  });

  const { mutateAsync: removeDocument } = useRemoveProjectDocumentMutation(graphqlRequestClient, {
    onSuccess: () => refetch(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    if (name === 'file' && files?.length > 0) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadFileToServer = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append('file', file);
    const { data } = await axios.post<{ url: string }>(
      baseUrl + '/uploads/project-documents',
      fd,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.file || !formData.name || !formData.type) {
      alert('Please fill in all fields.');
      return;
    }

    setUploading(true);
    const fileUrl = await uploadFileToServer(formData.file);
    await addDocument({
      projectId,
      name: formData.name,
      fileUrl,
      type: formData.type as DocumentType,
    });
    setUploading(false);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Project Documents</h2>

      <ul className="space-y-3 mb-4">
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          data?.getDocumentsByProject.map((doc) => (
            <li key={doc.id} className="flex justify-between items-center border p-3 rounded">
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-gray-600">
                  <a
                    href={baseUrl + doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View File
                  </a>{' '}
                  · {doc.type}
                </p>
              </div>
              <button
                onClick={() => removeDocument({ id: Number(doc.id) })}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="text-sm text-blue-600 underline"
        >
          + Add Document
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Document name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
          <input
            type="file"
            name="file"
            onChange={(e) => setFormData((prev) => ({ ...prev, file: e.target.files?.[0] || null }))}
            className="w-full border px-2 py-1 rounded"
            required
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          >
            <option value="" disabled>
              Select document type
            </option>
            {Object.values(DocumentType).map((dt) => (
              <option key={dt} value={dt}>
                {dt}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-50"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Add Document'}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-800 px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
