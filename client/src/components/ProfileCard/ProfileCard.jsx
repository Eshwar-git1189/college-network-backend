import React from "react";
import Card from "../Card/card";
import Dp from "../../assets/dp.jpg"

const ProfileCard = () => {
  return (
    <div cl>
      <Card padding="p-0">
        <div className="relative h-25">
          {/* Cover Image */}
          <div className="relative w-full h-22 rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-photo-573130.jpeg&fm=jpg"
              alt="cover"
              className="rounded-t-md h-full w-full"
            />
          </div>

          {/* Profile Image */}
          <div className="absolute top-14 left-6 z-10">
            <img
              src={Dp}
              alt="profile"
              className="rounded-full border-2 h-16 w-16 border-white cursor-pointer"
            />
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="text-xl font-semibold">Eswhar K S</div>
          <div className="text-sm my-1">CSE Sem 5</div>
          <div className="text-sm my-1"></div>
          <div className="text-sm my-1 text-blue-600 cursor-pointer">
            Java, JavaScipt, MERN Stack
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
