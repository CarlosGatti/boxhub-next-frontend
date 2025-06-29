import { format, parseISO } from 'date-fns';
import { CommentInput } from '../_ui/CommentInput';
import {
  useAddLogCommentReplyMutation,
  type LogComment,
} from '../../generated/graphql';
import graphqlRequestClient from '../../lib/graphql.request';

export const Comment = ({
  comment,
  onReplySuccess,
}: {
  comment: LogComment;
  onReplySuccess?: () => void;
}) => {
  const { mutateAsync: reply } = useAddLogCommentReplyMutation(
    graphqlRequestClient,
    {
      onSuccess: () => {
        if (onReplySuccess) onReplySuccess();
      },
    }
  );

  return (
    <div className="border-b pb-6 mb-6">
      <div className="flex items-start gap-3 mb-2">
        <img
          src={comment.user.profilePicture || '/default-avatar.png'}
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm">
            <span className="font-semibold">
              {comment.user.firstName} {comment.user.lastName}
            </span>{' '}
            <span className="text-gray-500">
              {format(parseISO(comment.createdAt), 'PPPpp')}
            </span>
          </p>
          <p className="text-sm mt-1">{comment.content}</p>
        </div>
      </div>

      {/* replies */}
      {comment.replies?.length > 0 && (
        <div className="ml-12 space-y-4">
          {comment.replies.map((r) => (
            <div key={r.id} className="flex items-start gap-3">
              <img
                src={r.user.profilePicture || '/default-avatar.png'}
                alt="User avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs">
                  <span className="font-medium">
                    {r.user.firstName} {r.user.lastName}
                  </span>{' '}
                  – {format(parseISO(r.createdAt), 'PPPpp')}
                </p>
                <p className="text-sm">{r.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* new reply input */}
      <div className="ml-12 mt-4">
        <CommentInput
          placeholder="Reply…"
          onSubmit={(content) =>
            reply({ commentId: Number(comment.id), content })
          }
        />
      </div>
    </div>
  );
};
