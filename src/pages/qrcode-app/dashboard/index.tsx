import { Container, WrapperBody } from '../../../styles/qrcode';
import { FaBox, FaCubes, FaQrcode } from 'react-icons/fa';

import { Header } from '../../../components/_ui/Header';
import { MainLayout } from '../../../layouts/MainLayout';
import { MenuBar } from '../../../components/_ui/MenuBar';
import graphqlRequestClient from '../../../lib/graphql.request';
import { useGetDashboardDataQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const { data, error, isLoading } = useGetDashboardDataQuery(graphqlRequestClient);

  const router = useRouter();

  if (isLoading) return <p>Loading dashboard...</p>;
  if (error) return <p>Error loading dashboard: {error.message}</p>;


  
    // eslint-disable-next-line react-hooks/exhaustive-deps


  return (
    <MainLayout
      headTitle="Dashboard"
      metaContent="Dashboard Overview"
      metaName="description"
    >
      <Container>
        <Header />
        <WrapperBody>
          {/* <MenuBar /> */}

          {/* Dashboard Content */}
          <div className="p-8 bg-white rounded-xl shadow-lg space-y-8">
            {/* Greeting */}
            {/* <h1 className="text-3xl font-bold text-gray-800">Welcome, {data.currentUser.firstName}!</h1> */}

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Total Containers */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
                <FaBox size={40} className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Containers</p>
                  <h2 className="text-2xl font-bold">{data.getDashboardData.totalContainers}</h2>
                </div>
              </div>

              {/* Total Items */}
              <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
                <FaCubes size={40} className="text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Items</p>
                  <h2 className="text-2xl font-bold">{data.getDashboardData.totalItems}</h2>
                </div>
              </div>

              {/* QR Code Actions */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
                <FaQrcode size={40} className="text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Quick Actions</p>
                  <button
                    onClick={() => router.push('/qrcode-app/scanner')}
                    className="text-blue-500 hover:underline"
                  >
                    Scan QR Code
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Containers */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Recent Containers</h2>
              <ul className="space-y-2">
                {data.getDashboardData.recentContainers.map((container) => (
                  <li key={container.id} className="flex justify-between items-center">
                    <span className="text-gray-800">{container.name}</span>
                    <button
                      onClick={() => router.push(`/qrcode-app/container/view/${container.id}`)}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </WrapperBody>
      </Container>
    </MainLayout>
  );
};

export default DashboardPage;
