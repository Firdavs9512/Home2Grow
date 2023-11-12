import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0">
      <div className="w-full h-full backdrop-blur-md flex items-center justify-center text-center">
        <div className="w-[400px] p-3 h-auto bg-slate-700 flex bg-opacity-70 rounded-md text-start">
          <div className="w-full">
            <h4 className="flex items-end gap-1">
              <span>Waiting</span>
              <div className="flex items-center gap-1 mb-1.5">
                <span className="sr-only">Loading...</span>
                <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-1 w-1 bg-white rounded-full animate-bounce"></div>
              </div>
            </h4>
            <p className="text-sm text-slate-400">
              Please wait while we are starting your service
            </p>
          </div>
          <div className="1/10 flex justify-center text-center items-center">
            {/* <div class="relative">
                  <div class="h-10 w-10 rounded-full border-t-8 border-b-8 border-slate-700 border-opacity-70"></div>
                  <div class="absolute top-0 left-0 h-10 w-10 rounded-full border-t-8 border-b-8 border-lime-500 animate-spin"></div>
                </div> */}
            <div
              aria-label="Loading..."
              role="status"
              className="flex items-center mx-auto"
            >
              <svg
                className="h-10 w-10 animate-spin stroke-gray-300"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
