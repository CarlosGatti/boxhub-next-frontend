// components/ProjectContentWrapper.tsx
import ProjectSidebar from '../project-sidebar'

export default function ProjectContentWrapper({
  projectId,
  children,
}: {
  projectId: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      {/* Sidebar lateral com largura fixa */}
      <aside className="hidden md:block w-60 shrink-0">
        <ProjectSidebar projectId={projectId} />
      </aside>

      {/* Conteúdo principal flexível */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
