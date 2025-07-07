import { useCreateInsuranceMutation, useGetSubcontractorByIdQuery } from '../../../generated/graphql';
import { useEffect, useState } from 'react';

import { MainContent } from '../../../styles/qrcode';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import axios from 'axios';
import graphqlRequestClient from '../../../lib/graphql.request';
import { useRouter } from 'next/router';

const CreateInsurancePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: subcontractorData, isLoading: loadingSub } = useGetSubcontractorByIdQuery(
    graphqlRequestClient,
    { id: Number(id) },
    { enabled: !!id }
  );

  const [formData, setFormData] = useState({
    company: '',
    expiration: '',
    file: null as File | null,
  });

  const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_FRONTEND_URL_LOCAL
    : process.env.NEXT_PUBLIC_FRONTEND_URL_PROD;

  const { mutateAsync: createInsurance, isLoading: submitting } = useCreateInsuranceMutation(graphqlRequestClient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file' && files && files.length > 0) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadFileToServer = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post<{ url: string }>(baseUrl + '/uploads/insurance', formData);
    return res.data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !formData.file) {
      alert('Please select a file to upload.');
      return;
    }
  
    try {
      const documentUrl = await uploadFileToServer(formData.file);
  
      await createInsurance({
        subcontractorId: parseInt(id as string, 10),
        data: {
          company: formData.company,
          expiration: new Date(formData.expiration).toISOString(),
          documentUrl,
          subcontractor: {
            connect: { id: parseInt(id as string, 10) }
          }
        },
      });
  
      alert('Insurance created successfully');
      router.push(`/subcontractors/view/${id}`);
    } catch (error) {
      console.error('Error creating insurance:', error);
      alert('There was an error saving the insurance.');
    }
  };
  

  return (
    <PrivateLayout headTitle="Add Insurance" metaContent="Add insurance info" metaName="description">
      <MainContent>
        <div className="min-h-screen bg-gray-100 flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4">Add Insurance</h1>

            {loadingSub ? (
              <p className="text-gray-500">Loading subcontractor info...</p>
            ) : subcontractorData?.getSubcontractorById ? (
              <SubcontractorCard data={subcontractorData.getSubcontractorById} />
            ) : (
              <p className="text-red-500">Subcontractor not found.</p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
              <Input label="Insurance Company" name="company" value={formData.company} onChange={handleChange} />
              <Input label="Expiration Date" name="expiration" type="date" value={formData.expiration} onChange={handleChange} />
              <FileInput label="Insurance Document" name="file" onChange={handleChange} />

              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded py-2"
              >
                {submitting ? 'Saving...' : 'Save Insurance'}
              </button>
            </form>
          </div>
        </div>
      </MainContent>
    </PrivateLayout>
  );
};

// --- Components ---
const Input = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium mb-1">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded"
    />
  </div>
);

const FileInput = ({ label, name, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium mb-1">{label}</label>
    <input
      id={name}
      name={name}
      type="file"
      accept="application/pdf,image/*"
      onChange={onChange}
      className="border border-gray-300 p-2 rounded bg-white"
    />
  </div>
);

const SubcontractorCard = ({ data }) => (
  <div className="mb-6 border p-4 rounded bg-gray-50 shadow-inner">
    <p className="text-lg font-semibold">{data.companyName}</p>
    <p className="text-sm text-gray-700">Contact: {data.contactName}</p>
    <p className="text-sm text-gray-700">Trade: {data.trade}</p>
    <p className="text-sm text-gray-700">Email: {data.email}</p>
    <p className="text-sm text-gray-700">Phone: {data.phone}</p>
  </div>
);

export default CreateInsurancePage;
