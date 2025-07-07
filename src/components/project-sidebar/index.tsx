import {
  HiArchive,
  HiClipboardCheck,
  HiClipboardList,
  HiCog,
  HiDocumentText,
  HiOutlineViewGrid,
  HiUsers,
} from 'react-icons/hi';

import Link from 'next/link';
import { MdOutlineViewTimeline } from "react-icons/md";
import { useRouter } from 'next/router';

const nav = [
  { href: 'view', label: 'Overview', Icon: HiOutlineViewGrid },
  { href: 'construction-log', label: 'Timeline', Icon: MdOutlineViewTimeline },
  { href: 'permits', label: 'Permits', Icon: HiClipboardCheck },
  { href: 'documents', label: 'Documents', Icon: HiDocumentText },
  { href: 'materials', label: 'Materials', Icon: HiArchive },
  { href: 'tasks', label: 'Tasks', Icon: HiClipboardList },
  { href: 'subcontractors', label: 'Subs', Icon: HiUsers },
  { href: 'settings', label: 'Settings', Icon: HiCog },
];

export default function ProjectSidebar({ projectId }: { projectId?: number }) {
  const router = useRouter();

  // Pega o ID dinamicamente se não vier por prop
  const fallbackId = router.query.id || router.query.projectId;
  const id = Number(projectId ?? fallbackId);

  // Só renderiza se o ID for válido
  if (!id || isNaN(id)) return null;

  const currentPath = router.asPath;

  return (
    <aside className="w-64 h-screen overflow-y-auto border-r bg-white">
      <ul className="py-4">
        {nav.map(({ href, label, Icon }) => {
          const fullPath = `/projects/${href}/${id}`;
          const isActive = currentPath === fullPath;

          return (
            <li key={href}>
              <Link href={fullPath}>
                <div
                  className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-md transition 
                    hover:bg-gray-100 ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
