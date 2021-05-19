import React from "react";
import EmptyStateIllustration from "./empty-state-illustration";

const EmptyState = () => {
  return (
    <div className="p-8 text-gray-500 text-center w-full">
      <EmptyStateIllustration />
      <span className="block mt-6">
        Search for a user on GitHub to view their profile
      </span>
    </div>
  );
};

export default EmptyState;
