import { Container, WrapperBody } from '../../../styles/qrcode';
import { FaBox, FaCubes, FaQrcode } from 'react-icons/fa';

import { CiBoxes } from "react-icons/ci";
import { Header } from '../../../components/_ui/Header';
import { MainContent } from '../../../styles/qrcode';
import { MainLayout } from '../../../layouts/MainLayout';
import { MenuBar } from '../../../components/_ui/MenuBar';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import {graphqlRequestClient} from '../../../lib/graphql.request';
import { useGetDashboardDataQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const { data } = useGetDashboardDataQuery(graphqlRequestClient);

  const router = useRouter();

  // if (isLoading) return <p>Loading dashboard...</p>;
  // if (error) return <p>Error loading dashboard: {error.message}</p>;

  return (
    <PrivateLayout title="BoxHub | Dashboard" description="Overview of your containers and items">
      <Container>
         <MainContent>
          <div className="min-h-screen bg-gray-100 flex justify-center">                        
            <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 md:p-8 space-y-10">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <SummaryCard
                  icon={<CiBoxes size={32} className="text-red-600" />}
                  title="Total Storages"
                  value={data?.getDashboardData.totalStorages ?? 0}
                  bgColor="bg-red-50"
                />
                <SummaryCard
                  icon={<FaBox size={32} className="text-blue-600" />}
                  title="Total Containers"
                  value={data?.getDashboardData.totalContainers ?? 0}
                  bgColor="bg-blue-50"
                />
                <SummaryCard
                  icon={<FaCubes size={32} className="text-green-600" />}
                  title="Total Items"
                  value={data?.getDashboardData.totalItems ?? 0}
                  bgColor="bg-green-50"
                />
                <SummaryCard
                  icon={<FaQrcode size={32} className="text-yellow-600" />}
                  title="Scan QR Code"
                  value={
                    <button
                      onClick={() => router.push('/qrcode-app/scanner')}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Start Scan
                    </button>
                  }
                  bgColor="bg-yellow-50"
                />
              </div>

              {/* Recent Containers List */}
              <div className="bg-gray-50 p-6 rounded-lg border shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Containers</h2>

                {data?.getDashboardData.recentContainers?.length === 0 ? (
                  <p className="text-sm text-gray-500">No containers found yet.</p>
                ) : (
                  <ul className="space-y-3">
                    {data?.getDashboardData.recentContainers.map((container) => (
                      <li
                        key={container.id}
                        className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
                      >
                        <span className="font-medium text-gray-800">{container.name}</span>
                        <button
                          onClick={() => router.push(`/qrcode-app/container/view/${container.id}`)}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          View
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </div>
           </MainContent>
      </Container>
    </PrivateLayout>
  );
};

const SummaryCard = ({
  icon,
  title,
  value,
  bgColor,
}: {
  icon: JSX.Element;
  title: string;
  value: string | number | JSX.Element;
  bgColor: string;
}) => {
  return (
    <div className={`flex items-center gap-4 p-5 rounded-lg shadow-sm ${bgColor}`}>
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold text-gray-800">{value}</h2>
      </div>
    </div>
  );
};

export default DashboardPage;
