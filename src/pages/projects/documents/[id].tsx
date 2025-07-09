import { MainContent } from '../../../styles/qrcode';
// pages/company/documents.tsx
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import ProjectContentWrapper from '../../../components/project-wrapper';
import { ProjectDocumentForm } from '../../../components/project-documments';
import ProjectSidebar from '../../../components/project-sidebar';
import { graphqlRequestClient } from '../../../lib/graphql.request';
import {
  useGetProjectByIdQuery
} from '../../../generated/graphql';
import { useRouter } from 'next/router';

const CompanyDocumentsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, refetch, isLoading, error } = useGetProjectByIdQuery(
    graphqlRequestClient,
    { id: Number(id) },
    { enabled: !!id }
  );

  return (
    <PrivateLayout
      title='Company Documents'
      description="Manage all company documents and resources"
    >
      <ProjectContentWrapper projectId={Number(id)}>
      <MainContent>





            {isLoading && <p>Loading…</p>}

            {typeof error === 'object' && error !== null && 'message' in error && (
              <div>
                <p className="text-red-600">
                  Error loading project: {(error as { message: string }).message}
                </p>
              </div>
            )}
            {data && (
              <div>
                <ProjectDocumentForm projectId={Number(id)} />
              </div>
            )}

       

        </MainContent>
      </ProjectContentWrapper>
    </PrivateLayout>
  );
};

export default CompanyDocumentsPage;
