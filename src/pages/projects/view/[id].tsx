import { format, parseISO } from 'date-fns';

import { MainContent } from '../../../styles/qrcode';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import ProjectContentWrapper from '../../../components/project-wrapper';
import { ProjectDocumentForm } from '../../../components/project-documments';
import { graphqlRequestClient } from '../../../lib/graphql.request';
import { useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useGetProjectByIdQuery(
    graphqlRequestClient,
    { id: Number(id) },
    { enabled: !!id }
  );

  useEffect(() => {
    if (data) console.log('Project details:', data);
  }, [data]);

  const project = data?.getProjectById;

  return (
    <PrivateLayout
      title="Project Details"
      description="View and manage project details, documents, and logs."
    >
      <ProjectContentWrapper projectId={Number(id)}>
        <MainContent>
          <div className="w-full max-w-3xl">
            {isLoading && <p>Loading...</p>}
            {/* {error && <p className="text-red-600">Error loading project.</p>} */}

            {!isLoading && project && (
              <div className="bg-white shadow rounded-lg p-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{project.name}</h1>
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Status:</strong> {project.status}</p>
                  <p>
                    <strong>Start Date:</strong>{' '}
                    {project.startDate ? format(parseISO(project.startDate), 'MM/dd/yyyy') : 'N/A'}
                  </p>
                  <p>
                    <strong>End Date:</strong>{' '}
                    {project.endDate ? format(parseISO(project.endDate), 'MM/dd/yyyy') : 'N/A'}
                  </p>
                </div>

                {/* <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Responsible</h2>
                  {project.responsible ? (
                    <p>
                      {project.responsible.firstName} {project.responsible.lastName} (ID: {project.responsible.id})
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">No responsible user assigned.</p>
                  )}
                </div> */}

                <div>
                  <ProjectDocumentForm projectId={Number(project.id)} />
                </div>
              </div>
            )}
          </div>
        </MainContent>
      </ProjectContentWrapper>
    </PrivateLayout>
  );
};

export default ProjectDetailsPage;
