import { Container, MainContent } from '../../../styles/qrcode';

import { PermitForm } from '../../../components/permit-form';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import ProjectContentWrapper from '../../../components/project-wrapper/';
import { graphqlRequestClient } from '../../../lib/graphql.request';
import { useGetPermitsQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

export default function PermitsPage() {
  const { query } = useRouter();
  const projectId = Number(query.id);        // "id" vem do [id].tsx

  if (!projectId) {
    return <p className="p-6">Loading...</p>; // ou skeleton
  }

  const { data, isLoading, error } = useGetPermitsQuery(
    graphqlRequestClient,
    { projectId },
    { enabled: !!projectId }
  );

  return (
    <PrivateLayout headTitle="Permits / Inspections" metaContent="Manage permits">
      <ProjectContentWrapper projectId={Number(projectId)}>
        <MainContent>
          <Container>
            <h1 className="text-2xl font-bold mb-6">Permits / Inspections</h1>
            <p className="text-gray-600 mb-4">
              Manage permits and inspections for your project.
            </p>
            <PermitForm projectId={projectId} />



            {data && data.getPermitsByProject.length > 0 ? (
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Uploaded Permits</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.getPermitsByProject.map((permit) => (
                    <div key={permit.id} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base font-semibold text-gray-800">{permit.kind}</h3>
                        <span className="text-xs text-gray-500">{new Date(permit.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{permit.status || 'No status provided.'}</p>
                      <div className="flex justify-end">
                        <a
                          href={permit.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm font-medium hover:underline"
                        >
                          View Document →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 mt-8">No permits found for this project.</p>
            )}




          </Container>
        </MainContent>
      </ProjectContentWrapper>
    </PrivateLayout>
  );
}