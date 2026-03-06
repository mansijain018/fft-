import React from "react";
import { MapPin, Map } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">

            <img
              src="/jinfra-logo.png"
              alt="logo"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-lg font-semibold text-[#DD0000]">  
                Jinfra
              </h1>

              <p className="text-xs text-gray-500">
                Building Infrastructure with Purpose
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 text-gray-600">
            <Map size={30} />
            <span className="text-sm">Patna, Bihar, India</span>
          </div>

  

        </div>
      </div>
    </div>
  );
};

export default TopBar;