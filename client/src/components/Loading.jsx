import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="animate-spin size-12 border-4 border-blue-600 border-t-transparent rounded-full"
        role="status"
        aria-label="loading"
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;