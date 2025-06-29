import { Container, MainContent } from '../../../styles/qrcode';
import { format, isBefore, isWithinInterval, parseISO } from 'date-fns';

import { PrivateLayout } from '../../../layouts/PrivateLayout';
import graphqlRequestClient from '../../../lib/graphql.request';
import { useEffect } from 'react';
import { useGetSubcontractorByIdQuery } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const SubcontractorDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useGetSubcontractorByIdQuery(
    graphqlRequestClient,
    { id: Number(id) },
    { enabled: !!id }
  );

  useEffect(() => {
    if (data) console.log('Subcontractor details:', data);
  }, [data]);

  const subcontractor = data?.getSubcontractorById;
  const insurances = subcontractor?.insurances || [];

  const getInsuranceStatus = (expirationDate: string) => {
    const today = new Date();
    const exp = parseISO(expirationDate);

    if (isBefore(exp, today)) {
      return 'expired';
    }

    const in30Days = isWithinInterval(exp, { start: today, end: new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000) });
    return in30Days ? 'expiringSoon' : 'valid';
  };

  const statusColor = {
    expired: 'text-red-600',
    expiringSoon: 'text-yellow-600',
    valid: 'text-green-600',
  };

  return (
    <PrivateLayout
      headTitle="Subcontractor Details"
      metaContent="Detailed view of a subcontractor"
      metaName="description"
    >
      <MainContent>

        <div className="w-full max-w-3xl">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-600">Error loading subcontractor.</p>}

          {!isLoading && subcontractor && (
            <div className="bg-white shadow rounded-lg p-6 space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{subcontractor.companyName}</h1>
                <p><strong>Contact:</strong> {subcontractor.contactName}</p>
                <p><strong>Email:</strong> {subcontractor.email}</p>
                <p><strong>Phone:</strong> {subcontractor.phone}</p>
                <p><strong>Trade:</strong> {subcontractor.trade}</p>
                <p><strong>Bank Account:</strong> {subcontractor.bankAccount}</p>
                <p><strong>Payment Preference:</strong> {subcontractor.paymentPreference}</p>
                {subcontractor.notes && <p><strong>Notes:</strong> {subcontractor.notes}</p>}
                <p><strong>Priority:</strong> {subcontractor.priority ? 'Yes' : 'No'}</p>
                <p><strong>Created Via Public Form:</strong> {subcontractor.createdViaPublicForm ? 'Yes' : 'No'}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Insurances</h2>


                {insurances.length === 0 ? (
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4 rounded">
                    <p><strong>Warning:</strong> No insurance registered for this subcontractor.</p>
                  </div>
                ) : insurances.every((i) => getInsuranceStatus(i.expiration) === 'expired') ? (
                  <div className="bg-red-100 border-l-4 border-red-600 text-red-700 p-4 mb-4 rounded">
                    <p><strong>Alert:</strong> All insurance policies for this subcontractor are expired.</p>
                  </div>
                ) : null}



                {insurances.length === 0 ? (
                  <p className="text-sm text-gray-500">No insurances registered.</p>
                ) : (
                  <ul className="space-y-4">
                    {[...insurances]
                      .sort((a, b) => {
                        const statusOrder = { valid: 0, expiringSoon: 1, expired: 2 };

                        const aStatus = getInsuranceStatus(a.expiration);
                        const bStatus = getInsuranceStatus(b.expiration);

                        return statusOrder[aStatus] - statusOrder[bStatus];
                      })
                      .map((insurance) => {
                        const expDate = insurance.expiration;
                        const status = getInsuranceStatus(expDate);

                        return (
                          <li key={insurance.id} className="p-4 bg-gray-50 rounded-md shadow-sm border">
                            <p><strong>Insurance Company:</strong> {insurance.company}</p>
                            <p>
                              <strong>Expiration Date:</strong>{' '}
                              <span className={`${statusColor[status]} font-medium`}>
                                {expDate ? format(parseISO(expDate), 'MM/dd/yyyy') : 'N/A'}
                              </span>
                              {status === 'expired' && (
                                <span className="ml-2 text-xs font-semibold text-red-600 uppercase">(Expired)</span>
                              )}
                            </p>
                            {insurance.documentUrl && (
                              <p>
                                <a
                                  href={`http://localhost:3000${insurance.documentUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 underline"
                                >
                                  View Document
                                </a>
                              </p>
                            )}
                          </li>
                        );
                      })}

                  </ul>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => router.push(`/subcontractors/insurance/${subcontractor.id}`)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add/View Insurance
                </button>
              </div>
            </div>
          )}
        </div>

      </MainContent>
    </PrivateLayout>
  );
};

export default SubcontractorDetailsPage;
