import { Container, MainContent } from '../../../styles/qrcode';
import { format, parseISO } from 'date-fns';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FcTimeline } from 'react-icons/fc';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import { ProjectDocumentForm } from '../../../components/project-documments';
import graphqlRequestClient from '../../../lib/graphql.request';
import { useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const ProjectDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading, error } = useGetProjectByIdQuery(
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
            headTitle="Project Details"
            metaContent="Detailed view of a project"
            metaName="description"
        >
            <MainContent>
                <div className="w-full max-w-3xl">
                    {isLoading && <p>Loading...</p>}
                    {error && <p className="text-red-600">Error loading project.</p>}

                    {!isLoading && project && (
                        <div className="bg-white shadow rounded-lg p-6 space-y-6">
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

                            <div>
                                <h2 className="text-xl font-semibold text-gray-700 mb-2">Responsible</h2>
                                {project.responsible ? (
                                    <p>
                                        {project.responsible.firstName} {project.responsible.lastName} (ID: {project.responsible.id})
                                    </p>
                                ) : (
                                    <p className="text-sm text-gray-500">No responsible user assigned.</p>
                                )}
                            </div>

                            <div>
                            <ProjectDocumentForm projectId={Number(project.id)} />
                            </div>

                            <div className="pt-6">
  <div className="flex flex-col md:flex-row gap-3 md:gap-4">

    {/* Inspections */}
    <ActionBtn
      label="Inspections"
      onClick={() => router.push(`/projects/permits/${project.id}`)}
      icon={<FaHouseCircleCheck />}
    />

    {/* Construction Log */}
    <ActionBtn
      label="Log Timeline"
      onClick={() => router.push(`/projects/construction-log/${project.id}`)}
      icon={<FcTimeline />}
    />

    {/* Create Log */}
    <ActionBtn
      label="New Log"
      onClick={() => router.push(`/projects/construction-log/create/${project.id}`)}
      icon={<AiOutlinePlusCircle />}
      variant="create"
    />
  </div>
</div>



                        </div>
                    )}
                </div>
            </MainContent>
        </PrivateLayout>
    );
};

export default ProjectDetailsPage;

type BtnProps = {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    /** default = “view”; “create” → verde  */
    variant?: 'view' | 'create';
  };
  
  const ActionBtn = ({ label, icon, onClick, variant = 'view' }: BtnProps) => (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md 
        font-medium shadow-sm transition
        ${variant === 'create'
          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
          : 'bg-blue-600 text-white hover:bg-blue-700'}
        `}
    >
      {/* Ícone sempre 1.1 rem para padronizar */}
      <span className="text-[1.1rem]">{icon}</span>
      {label}
    </button>
  );