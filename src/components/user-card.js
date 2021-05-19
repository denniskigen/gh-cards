import React from "react";

const UserCard = (props) => {
  const { user } = props;
  return (
    <>
      {user ? (
        <>
          <img
            className="h-44 w-44 flex-shrink-0"
            src={user.avatar_url}
            alt="Github avatar"
          />
          <div className="h-44 w-full px-8 py-4 text-left mt-0">
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="mt-1 text-gray-600 truncate overflow-clip">
              <span>
                {user.login}{" "}
                {user.company ? <span className="ml-1">&middot; </span> : null}
              </span>
              <span className="ml-1 text-gray-400">
                {user.company}{" "}
                {user.location ? <span className="ml-1">&middot; </span> : null}
              </span>{" "}
              <span className="ml-1 text-gray-400">{user.location}</span>
            </p>
            <p className="mt-2">
              {user?.bio ? (
                <span>
                  <span className="block text-gray-400 text-sm">
                    {user.bio}
                  </span>
                </span>
              ) : null}
            </p>
            <div className="mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={user?.html_url}
                className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
              >
                Visit profile
              </a>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UserCard;
