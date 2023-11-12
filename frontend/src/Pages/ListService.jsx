import { Database, Hammer, Network, Play, Settings } from "lucide-react";
import React from "react";
import Loading from "../Components/Loading";
import { StartUbuntuContainer } from "../../wailsjs/go/main/App";

const ListService = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({});

  const handleStartService = () => {
    setLoading(true);
    StartUbuntuContainer()
      .then((e) => {
        setStatus(e);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="w-full border-b border-b-gray-500 pb-5 mt-4">
        <h1 className="text-2xl font-bold">List Service</h1>
      </div>
      <div className="mt-5">
        <div className="bg-white bg-opacity-10 w-full h-28 rounded-md relative flex">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-lime-500 rounded-l-md"></div>
          <div className="w-9/12 ml-2 p-3 flex flex-col gap-5">
            <h2 className="text-lg font-medium">Ubuntu 22.04 {status?.message}</h2>
            <ul className="flex gap-5">
              <li className="flex items-center gap-2">
                <Hammer /> php 8.2{status?.status}
              </li>
              <li className="flex items-center gap-2">
                <Hammer /> nodejs 20
              </li>
              <li className="flex items-center gap-2">
                <Database /> mysql 8.0
              </li>
              <li className="flex items-center gap-2">
                <Network /> nginx 1.21
              </li>
            </ul>
          </div>
          <div className="w-3/12">
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-sm">
              <button
                className="px-4 py-2 flex items-center gap-1 bg-lime-500 rounded-md text-white font-medium"
                onClick={handleStartService}
              >
                <Play size={16} /> Start
              </button>
              <button className="px-4 py-2 flex items-center gap-1 bg-black rounded-md text-white font-medium">
                <Settings size={16} /> Setting
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{loading && <Loading />}</div>
    </div>
  );
};

export default ListService;
