import React from "react";
import Card from "../Card/card";
import Dp from "../../assets/dp.jpg"

const Ad = () => {
  return (
    <div className="sticky top-18">
      <Card padding={0}>
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
          <div className="absolute top-14 left-12 z-10">
            <img
              src={Dp}
              alt="profile"
              className="rounded-full border-2 h-14 w-14 border-white cursor-pointer"
            />
          </div>
        </div>

        <div className="px-5 my-5 mx-auto">
          <div className="text-sm font-semibold text-center">Eshwar</div>

          <div className="text-sm my-3 text-center">
            Get the latest announcements and placement news
          </div>

          <div className="text-sm my-1 border text-center p-2 rounded-2xl font-bold border-blue-900 text-white bg-blue-800 cursor-pointer">
            Explore
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Ad;
