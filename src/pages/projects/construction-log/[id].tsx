import { FaCheckCircle, FaExclamationCircle, FaTools } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';

import { FaEye } from 'react-icons/fa';
import { FcTimeline } from 'react-icons/fc';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import ProjectContentWrapper from '../../../components/project-wrapper/';
import React from 'react';
import {graphqlRequestClient} from '../../../lib/graphql.request';
import { useEffect } from 'react';
import { useGetLogsByProjectQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const ICONS_MAP = {
  OBSERVATION: <FcTimeline className="text-xl" />,
  ISSUE: <FaExclamationCircle className="text-red-600 text-xl" />,
  GOOD_PRACTICE: <FaCheckCircle className="text-green-600 text-xl" />,
  MATERIAL_RECEIPT: <FaTools className="text-yellow-500 text-xl" />,
  DAILY_CHECKIN: <FaCheckCircle className="text-blue-600 text-xl" />,
  OTHER: <FcTimeline className="text-xl" />,
};

const ConstructionLogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useGetLogsByProjectQuery(
    graphqlRequestClient,
    {
      projectId: typeof id === 'string' ? parseInt(id) : 0,
    },
    { enabled: !!id }
  );

  const logs = data?.getLogsByProject || [];



  ///get data 
  useEffect(() => {
    console.log('Fetched logs:', logs);
    logs.forEach((log) => {
      console.log(`Log ID ${log.id} - Type:`, log.type);
    });
  }, [logs]);


  return (
    <PrivateLayout
      headTitle="Construction Log"
      metaContent="Timeline of construction project logs"
      metaName="description"
    >
            <ProjectContentWrapper projectId={Number(id)}>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Construction Log</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-600">Failed to load construction logs.</p>}

        {logs.length === 0 ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4 rounded">
            <p>No logs available for this project.</p>
          </div>
        ) : (
          <ul className="relative border-l border-gray-300 space-y-6">
            {[...logs]
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((log) => (
                <li key={log.id} className="ml-4">
                  <div className="absolute -left-3 top-1.5 bg-white border border-gray-300 rounded-full p-1">
                    {ICONS_MAP[log.type] || <FcTimeline className="text-xl" />}
                  </div>
                  <div className="bg-white p-4 rounded-md shadow relative">


                    <button
                      onClick={() => router.push(`/projects/construction-log/view/${log.id}`)}
                      className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition"
                      title="View log details"
                    >
                      <FaEye className="text-xl" />
                    </button>


                    <h3 className="text-lg font-semibold text-gray-800">{log.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{log.description}</p>
                    <p className="text-xs text-gray-500">
                      {format(parseISO(log.createdAt), 'PPPpp')} –{' '}
                      <span className="font-medium">{log.user?.firstName} {log.user?.lastName}</span>
                    </p>
                    {log.images && Array.isArray(log.images) && (
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {log.images.map((img: string, idx: number) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Log image ${idx + 1}`}
                            className="w-full h-32 object-cover rounded"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        )}
        
      </div>
      </ProjectContentWrapper>
    </PrivateLayout>
  );
};

export default ConstructionLogPage;
