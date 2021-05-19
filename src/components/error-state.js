import React from "react";
import ErrorStateIllustration from "./error-state-illustration";
import NotFoundIllustration from "./not-found-illustration";

const ErrorState = (props) => {
  const { error } = props;

  return (
    <div className="p-8 text-gray-500 text-center w-full">
      {typeof error === "string" && error?.match(/no results found/i) ? (
        <NotFoundIllustration />
      ) : (
        <ErrorStateIllustration />
      )}
      <span className="block mt-6">
        <b>Error: </b>
        {error?.message}
      </span>
    </div>
  );
};

export default ErrorState;
