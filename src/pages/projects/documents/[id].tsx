// pages/company/documents.tsx
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import ProjectContentWrapper from '../../../components/project-wrapper';
import { ProjectDocumentForm } from '../../../components/project-documments';
import ProjectSidebar from '../../../components/project-sidebar';
import {graphqlRequestClient} from '../../../lib/graphql.request';
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
      headTitle="Company Documents"
      metaContent="Download every document your company has uploaded"
    >
                      <ProjectContentWrapper projectId={Number(id)}>
      {/* --- Wrapper flex: sidebar à esquerda + conteúdo ao lado --- */}
      <div className="flex">
        {/* Como não estamos em um projeto específico, 
           basta passar 0 ou omitir o prop dependendo 
           de como você tipou o sidebar */}
        <ProjectSidebar projectId={0} />

        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">All Company Documents</h1>

          {isLoading && <p>Loading…</p>}
          {error && (
            <p className="text-red-600">
              Something went wrong while fetching your documents.
            </p>
          )}

          {data && (
            // seu componente já recebe a lista e o onRefetch
            <div>
            <ProjectDocumentForm projectId={Number(id)} />
            {/* Aqui você pode adicionar mais lógica ou componentes conforme necessário */}
          </div>
          )}
        </main>
      </div>
      </ProjectContentWrapper>
    </PrivateLayout>
  );
};

export default CompanyDocumentsPage;
