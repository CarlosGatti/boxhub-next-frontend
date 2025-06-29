import Link from 'next/link';
import { useCurrentUser } from '../../../../context/CurrentUser';

interface IdentityCurrentUserProps {
  displayName?: boolean;
}

export const IdentityCurrentUser = ({
  displayName = true,
}: IdentityCurrentUserProps) => {
  const { currentUser } = useCurrentUser();

  return (
    <div className="flex items-center">
      <Link href="/account/profile">
        <div className="flex items-center cursor-pointer">
          <img
            src={
              currentUser?.profilePicture?.replace('https', 'http') ||
              '/image/no-photo.png'
            }
            alt="foto de perfil"
            className="w-10 h-10 rounded-full object-cover"
          />
          {displayName && (
            <div className="ml-3">
              <strong className="block text-sm font-semibold">
                {currentUser?.firstName} {currentUser?.lastName}
              </strong>
              <span className="text-xs text-gray-500">
                {currentUser?.nickname}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
