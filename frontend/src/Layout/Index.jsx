import React from "react";
import { Star, Send, User, Settings, Layers, PlayCircle } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { BrowserOpenURL } from "../../wailsjs/runtime";

const Index = () => {
  return (
    <div className="relative">
      <div className="w-full grid grid-cols-12 h-screen cursor-default">
        <div className="col-span-3 border-r-2 border-r-gray-600 p-3">
          <div className="mt-8 mx-3">
            <h5 className="text-sm text-slate-400 font-semibold mb-3 ml-3">
              Support
            </h5>
            <ul className="flex flex-col gap-2">
              <NavLink
                className="flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm"
                onClick={() =>
                  BrowserOpenURL("https://github.com/firdavs9512/home2grow")
                }
              >
                <Star size={22} className="text-amber-500" />
                <span className="text-sm font-medium">Sponsor on Github</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm"
                onClick={() => BrowserOpenURL("https://t.me/whoami_teem")}
              >
                <Send size={22} className="text-amber-500" />
                <span className="text-sm font-medium">Author Telegram</span>
              </NavLink>
            </ul>
          </div>
          <div className="mt-6 mx-3">
            <h5 className="text-sm text-slate-400 font-semibold mb-3 ml-3">
              Services
            </h5>
            <ul className="flex flex-col gap-2">
              <NavLink
                className="flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm"
                to={"/start-service"}
              >
                <PlayCircle size={22} className="text-amber-500" />
                <span className="text-sm font-medium">Start Service</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm"
                to={"/list-service"}
              >
                <Layers size={22} className="text-amber-500" />
                <span className="text-sm font-medium">List Service</span>
              </NavLink>
            </ul>
          </div>
          <div className="mt-6 mx-3">
            <h5 className="text-sm text-slate-400 font-semibold mb-3 ml-3">
              Settings
            </h5>
            <ul className="flex flex-col gap-2">
              <NavLink
                className="flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm"
                to={"/profile"}
              >
                <User size={22} className="text-amber-500" />
                <span className="text-sm font-medium">Profile</span>
              </NavLink>
              <NavLink
                className="flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm"
                to={"/setting"}
              >
                <Settings size={22} className="text-amber-500" />
                <span className="text-sm font-medium">Setting</span>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="col-span-9 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Index;
