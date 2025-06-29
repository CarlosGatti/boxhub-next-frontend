import React, { useEffect, useState } from 'react';

import { PrivateLayout } from '../../layouts/PrivateLayout';
import graphqlRequestClient from '../../lib/graphql.request';
import { useGetAllSubcontractorsQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

const SubcontractorListPage = () => {
  const router = useRouter();
  const { data, isLoading, error } = useGetAllSubcontractorsQuery(graphqlRequestClient);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = data?.getAllSubcontractors?.filter((sc) =>
    sc.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

    useEffect(() => {
        // Reset search term when data changes
console.log('Data changed:', data);
    }, [data]);


  return (
    <PrivateLayout
      headTitle="Subcontractors"
      metaContent="List of subcontractors"
      metaName="description"
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Subcontractors</h1>

        <input
          type="text"
          placeholder="Search by company name..."
          className="w-full border border-gray-300 rounded-md p-2 mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error loading subcontractors.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered?.map((sc) => (
            <div key={sc.id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{sc.companyName}</h2>
                <p className="text-sm text-gray-600">{sc.contactName}</p>
                <p className="text-sm text-gray-600">{sc.email}</p>
                <p className="text-sm text-gray-600">{sc.phone}</p>
                <p className="text-sm text-gray-600">Trade: {sc.trade}</p>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white py-1 rounded"
                  onClick={() => router.push(`/subcontractors/insurance/${sc.id}`)}
                >
                  Add/View Insurance
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 rounded"
                  onClick={() => router.push(`/subcontractors/view/${sc.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrivateLayout>
  );
};

export default SubcontractorListPage;
