import { FaArrowLeft, FaCheckCircle, FaExclamationCircle, FaTools } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import {
    useAddLogCommentMutation,
    useGetCommentsByLogQuery,
} from '../../../../generated/graphql';

import { Comment } from '../../../../components/commnent';
import { CommentInput } from '../../../../components/_ui/CommentInput';
import { FcTimeline } from 'react-icons/fc';
import { PrivateLayout } from '../../../../layouts/PrivateLayout';
import ProjectContentWrapper from '../../../../components/project-wrapper';
import React from 'react';
import { graphqlRequestClient } from '../../../../lib/graphql.request';
import { useEffect } from 'react';
import { useGetLogByLogIdQuery } from '../../../../generated/graphql';
import { useRouter } from 'next/router';

const ICONS_MAP = {
    OBSERVATION: <FcTimeline className="text-xl" />,
    ISSUE: <FaExclamationCircle className="text-red-600 text-xl" />,
    GOOD_PRACTICE: <FaCheckCircle className="text-green-600 text-xl" />,
    MATERIAL_RECEIPT: <FaTools className="text-yellow-600 text-xl" />,
    DAILY_CHECKIN: <FaTools className="text-blue-600 text-xl" />,
    OTHER: <FcTimeline className="text-xl" />,
};

const LogDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading, error } = useGetLogByLogIdQuery(
        graphqlRequestClient,
        {
            logId: typeof id === 'string' ? parseInt(id) : 0,
        },
        { enabled: !!id }
    );

    const log = data?.getLogByLogId;
    const logId = log?.id;

    const {
        data: commentsData,
        refetch: refetchComments,
    } = useGetCommentsByLogQuery(
        graphqlRequestClient,
        { logId: Number(logId) },
        { enabled: !!logId }
    );

    const comments = commentsData?.getCommentsByLog ?? [];

    useEffect(() => {
        if (!logId) return;
        refetchComments();
    }, [logId, refetchComments]);

    const { mutateAsync: addComment } = useAddLogCommentMutation(
        graphqlRequestClient,
        { onSuccess: () => refetchComments() }
    );

    return (
        <PrivateLayout
            title='Log Detail'
            description='View detailed information about a specific construction log entry.'
        >
            <ProjectContentWrapper projectId={Number(id)}>
                <div className="max-w-5xl mx-auto space-y-10">
                    {isLoading && <p>Loading...</p>}
                    {!log && !isLoading && !error && (
                        <p className="text-gray-500">No log found.</p>
                    )}

                    {log && (
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    {ICONS_MAP[log.type] || <FcTimeline className="text-xl" />}
                                    <h1 className="text-3xl font-semibold text-gray-800">{log.title}</h1>
                                </div>
                                {/* Exemplo de espaço para redes sociais ou ações futuras */}
                                <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                                    <div
                                        onClick={() => router.push('/projects/construction-log/' + log.project.id)}
                                        className="flex items-center text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                                    >
                                        <FaArrowLeft className="mr-1" />
                                        Back
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 text-lg">{log.description}</p>
                            <p className="text-sm text-gray-500 mb-6">
                                {format(parseISO(log.createdAt), 'PPPpp')} by{' '}
                                <span className="font-medium">{log.user?.firstName} {log.user?.lastName}</span>
                            </p>

                            {log.images?.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {log.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`Image ${idx}`}
                                            className="w-full h-48 object-cover rounded-xl border"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <section className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

                        {comments.length === 0 ? (
                            <p className="text-sm text-gray-500 mb-4">No comments yet.</p>
                        ) : (
                            <div className="space-y-4 mb-4">
                                {comments.map(c => (
                                    <Comment key={c.id} comment={c} onReplySuccess={refetchComments} />
                                ))}
                            </div>
                        )}

                        <CommentInput
                            onSubmit={(content: string) =>
                                addComment({ logId: Number(logId), content })
                            }
                        />
                    </section>
                </div>
            </ProjectContentWrapper>
        </PrivateLayout>
    );
};

export default LogDetailPage;
