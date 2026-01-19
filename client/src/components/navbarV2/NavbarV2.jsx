import React, { useState } from "react";
import "./NavbarV2.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { useLocation } from "react-router-dom";

const NavbarV2 = () => {
  const [dropDown, setdropDown] = useState(false);
  const location = useLocation();

  const getIconStyle = (path) => ({
    color: location.pathname === path ? "black" : "gray",
  });

  const getIconUnderLine = (path) =>
    location.pathname === path ? "border-b-2 border-black" : "";

  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-100">
      {/* Left */}
      <div className="flex gap-2 items-center">
        <img
          className="w-8 h-8"
          src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"
          alt="LinkedIn"
        />

        <div className="relative">
          <input
            className="searchInput bg-gray-100 rounded-sm h-10 px-4 w-[280px]"
            placeholder="Search"
            // onFocus={() => setdropDown(true)}
            // onBlur={() => setdropDown(false)}
          />

          {dropDown && (
            <div className="absolute w-88 left-0 bg-gray-200">
              <div className="flex gap-2 mb-1 items-center cursor-pointer">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                />
                <div>Danish</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="hidden md:flex gap-10">
        <div className="flex flex-col items-center cursor-pointer">
          <HomeIcon sx={getIconStyle("/feeds")} />
          <div className={`text-sm ${getIconUnderLine("/feeds")}`}>Home</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <GroupIcon sx={getIconStyle("/mynetwork")} />
          <div className={`text-sm ${getIconUnderLine("/mynetwork")}`}>
            My Network
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <GroupsIcon sx={getIconStyle("/club")} />
          <div className={`text-sm ${getIconUnderLine("/club")}`}>Clubs</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <NotificationsIcon sx={getIconStyle("/alert")} />
          <div className={`text-sm ${getIconUnderLine("/alert")}`}>Alerts</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <MessageIcon sx={getIconStyle("/message")} />
          <div className={`text-sm ${getIconUnderLine("/message")}`}>
            Message
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="https://via.placeholder.com/40"
            className="w-8 h-8 rounded-full"
            alt="me"
          />
          <div className={`text-sm ${getIconUnderLine("/me")}`}>Me</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarV2;
