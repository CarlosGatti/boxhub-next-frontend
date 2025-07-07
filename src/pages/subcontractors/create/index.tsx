import { Container, MainContent } from '../../../styles/qrcode';
import React, { useState } from 'react';

import { PrivateLayout } from '../../../layouts/PrivateLayout';
import {graphqlRequestClient} from '../../../lib/graphql.request';
import { useCreateSubcontractorMutation } from '../../../generated/graphql';

const CreateSubcontractorPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    trade: '',
    bankAccount: '',
    paymentPreference: '',
    notes: '',
    priority: false,
    createdViaPublicForm: false,
  });

  const { mutateAsync: createSubcontractor } = useCreateSubcontractorMutation(graphqlRequestClient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    console.log('Submitting subcontractor data:', formData);


    e.preventDefault();
    try {



      await createSubcontractor({
        data: {
          companyName: formData.companyName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          trade: formData.trade,
          bankAccount: formData.bankAccount,
          paymentPreference: formData.paymentPreference,
          notes: formData.notes,
          priority: formData.priority,
          createdViaPublicForm: formData.createdViaPublicForm,
        },
      });

      alert('Subcontractor created successfully!');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        trade: '',
        bankAccount: '',
        paymentPreference: '',
        notes: '',
        priority: false,
        createdViaPublicForm: false,
      });
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <PrivateLayout
      headTitle="Create Subcontractor"
      metaContent="Form to create subcontractor entry"
      metaName="description"
    >
      <Container>
        <MainContent>
          <div className="min-h-screen bg-gray-100 flex justify-center">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
              <div className="border-b pb-4 mb-4">
                <h1 className="text-2xl font-bold text-gray-800">New Subcontractor</h1>
              </div>

              <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
                <Input label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
                <Input label="Contact Name" name="contactName" value={formData.contactName} onChange={handleChange} />
                <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
                <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                <Input label="Trade" name="trade" value={formData.trade} onChange={handleChange} />

                <Input label="Bank Account" name="bankAccount" value={formData.bankAccount} onChange={handleChange} />
                <Input label="Payment Preference" name="paymentPreference" value={formData.paymentPreference} onChange={handleChange} />
                <TextArea label="Notes" name="notes" value={formData.notes} onChange={handleChange} />

                <div className="flex items-center gap-4">
                  <Checkbox label="Priority" name="priority" checked={formData.priority} onChange={handleChange} />
                  <Checkbox label="Registered via Public Form" name="createdViaPublicForm" checked={formData.createdViaPublicForm} onChange={handleChange} />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200"
                >
                  Create Subcontractor
                </button>
              </form>
            </div>
          </div>
        </MainContent>
      </Container>
    </PrivateLayout>
  );
};

// Componentes auxiliares
const Input = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
    />
  </div>
);

const TextArea = ({ label, name, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
    />
  </div>
);

const Checkbox = ({ label, name, checked, onChange }) => (
  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
    />
    {label}
  </label>
);

export default CreateSubcontractorPage;
