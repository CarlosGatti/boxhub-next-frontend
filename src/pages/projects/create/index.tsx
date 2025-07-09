import { Container, MainContent } from '../../../styles/qrcode';
import { ProjectStatus, useCreateProjectMutation } from '../../../generated/graphql';
import React, { useState } from 'react';

import { PrivateLayout } from '../../../layouts/PrivateLayout';
import {graphqlRequestClient} from '../../../lib/graphql.request';
import { useRouter } from 'next/router';

const CreateProjectPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    client: '',
    location: '',
    status: 'PLANNING',
    startDate: '',
    endDate: '',
  });

  const userId = 1; // ajuste conforme autenticação real

  const { mutateAsync: createProject, isLoading } = useCreateProjectMutation(graphqlRequestClient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProject({
      data: {
        name: form.name,
        client: form.client,
        location: form.location,
        status: form.status as ProjectStatus,
        startDate: new Date(form.startDate).toISOString(),
        endDate: form.endDate ? new Date(form.endDate).toISOString() : null,
        responsible: { connect: { id: userId } },
      },
    });
    alert('Subcontractor created successfully!');
    router.push('/projects/');
  };

  return (
    <PrivateLayout 
      title="Create Project"
      description="Create a new project to manage your tasks and resources"
    >
      <Container>
        <MainContent>
          <div className="min-h-screen bg-gray-100 flex justify-center">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
              <div className="border-b pb-4 mb-4">
                <h1 className="text-2xl font-bold text-gray-800">New Project</h1>
              </div>
              <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
                <Input label="Project Name" name="name" value={form.name} onChange={handleChange} />
                <Input label="Client Name" name="client" value={form.client} onChange={handleChange} />
                <Input label="Location" name="location" value={form.location} onChange={handleChange} />
                <Select label="Status" name="status" value={form.status} onChange={handleChange}>
                  <option value="PLANNING">Planning</option>
                  <option value="EXECUTING">Executing</option>
                  <option value="FINISHED">Finished</option>
                  <option value="ON_HOLD">On Hold</option>
                  <option value="CANCELED">Canceled</option>
                </Select>
                <Input label="Start Date" name="startDate" type="date" value={form.startDate} onChange={handleChange} />
                <Input label="End Date" name="endDate" type="date" value={form.endDate} onChange={handleChange} />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 focus:ring focus:ring-gray-200"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create Project'}
                </button>
              </form>
            </div>
          </div>
        </MainContent>
      </Container>
    </PrivateLayout>
  );
};

interface InputProps {
  label: string;
  name: string;
  value: string | number | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange, type = 'text' }) => (
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

interface SelectProps {
  label: string;
  name: string;
  value: string | number | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, name, value, onChange, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
    >
      {children}
    </select>
  </div>
);

export default CreateProjectPage;
