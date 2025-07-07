import React, { useEffect, useState } from 'react';

import { PrivateLayout } from '../../layouts/PrivateLayout';
import {graphqlRequestClient} from '../../lib/graphql.request';
import { useGetAllProjectsQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

const ProjectListPage = () => {
  const router = useRouter();
  const { data, isLoading, error } = useGetAllProjectsQuery(graphqlRequestClient);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = data?.getAllProjects?.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log('Fetched projects:', data);
  }, [data]);

  return (
    <PrivateLayout
      headTitle="Projects"
      metaContent="List of all projects"
      metaName="description"
    >
    
        {/* Aqui vai o conteúdo real da página */}

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>

        <input
          type="text"
          placeholder="Search by project name..."
          className="w-full border border-gray-300 rounded-md p-2 mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error loading projects.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects?.map((project) => (
            <div key={project.id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-600">Client: {project.client}</p>
                <p className="text-sm text-gray-600">Location: {project.location}</p>
                <p className="text-sm text-gray-600">Status: {project.status}</p>
                <p className="text-sm text-gray-500 text-xs mt-1">
                  Start: {project.startDate?.slice(0, 10)} | End: {project.endDate?.slice(0, 10)}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white py-1 rounded"
                  onClick={() => router.push(`/projects/view/${project.id}`)}
                >
                  View Details
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 rounded"
                  onClick={() => router.push(`/projects/construction-log/create/${project.id}`)}
                >
                  
                  Create Construction Log
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </PrivateLayout>
  );
};

export default ProjectListPage;
