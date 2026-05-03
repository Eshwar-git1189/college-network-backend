import React, { useState } from "react";
import Ad from "../../components/Advertisement/ad";
import Card from "../../components/Card/card";
import Dp from "../../assets/dp.jpg";
import EditIcon from "@mui/icons-material/Edit";
import Post from "../../components/Post/post";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";
import PostModel from "../../components/PostModel/PostModel";
import ImageModel from "../../components/ImageModel/ImageModel";
import EditInfoModel from "../../components/editInfoModel/EditInfoModel";

const Profile = () => {
  const [imageModel, setImageModel] = useState(false);
  const [circularImage, setCircularImage] = useState(true);

  const [infoModel, setInfoModel] = useState(false);
  const [aboutModel, setAboutModel] = useState(false);

  const handleAboutModel = () => {
    setAboutModel((prev) => !prev);
  };
  const handleInfoModel = () => {
    setInfoModel((prev) => !prev);
  };
  const handleImageModelOpenClose = () => {
    setImageModel((prev) => !prev);
  };
  const handleOnEditCover = () => {
    setImageModel(true);
    setCircularImage(false);
  };
  const handleCircularImageOpen = () => {
    setImageModel(true);
    setCircularImage(true);
  };

  return (
    <div className="px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full bg-gray-100">
      <div className="flex justify-between mt-5">
        {/* Left Side Main Section */}
        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                {/* Cover */}
                <div className="relative w-full h-[200px]">
                  {/* Cover Image */}
                  <div
                    onClick={handleOnEditCover}
                    className="absolute cursor-pointer top-3 right-3 z-28 w-[35px] flex justify-center items-center 
                    h-[35px] rounded-full p-3 bg-white"
                  >
                    <EditIcon />
                  </div>
                  <img
                    src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/mountains-and-lake-landscape-scenic.jpg"
                    className="w-full h-[200px] rounded-tr-lg rounded-tl-lg"
                    alt="cover"
                  />

                  {/* Profile Image */}
                  <div
                    onClick={handleCircularImageOpen}
                    className="absolute object-cover top-24 left-6 z-10"
                  >
                    <img
                      className="w-35 h-35 rounded-full border-2 border-white cursor-pointer"
                      src={Dp}
                      alt="profile"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="mt-10 relative px-8 py-2">
                  <div
                    onClick={handleInfoModel}
                    className="absolute cursor-pointer top-3 right-3 z-28 w-[35px] flex justify-center items-center 
                    h-[35px] rounded-full p-3 bg-white"
                  >
                    <EditIcon />
                  </div>
                  <div className="w-full">
                    <div className="text-2xl font-semibold">User 1</div>
                    <div className="text-gray-700">
                      I am a software engineer
                    </div>
                    <div className="text-sm text-gray-500">Delhi, India</div>

                    <div className="text-md text-blue-800 w-fit cursor-pointer hover:underline">
                      2 Connections
                    </div>

                    <div className="md:flex w-full justify-between">
                      {/* Left Buttons */}
                      <div className="my-5 flex gap-5">
                        <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">
                          Open
                        </div>

                        <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">
                          Share
                        </div>

                        <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">
                          Logout
                        </div>
                      </div>

                      {/* Right Buttons */}
                      <div className="my-5 flex gap-5">
                        <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">
                          Message
                        </div>

                        <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">
                          Connect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">About</div>
                <div
                  className="'absolute cursor-pointer top-3 right-3 z-28 w-[35px] flex justify-center items-center 
                    h-[35px] rounded-full p-3 bg-white"
                >
                  <EditIcon />
                </div>
              </div>

              <div className="text-gray-700 text-md w-[80%] mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi exercitationem...
              </div>
            </Card>
          </div>
          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Skills</div>
              </div>

              <div className="text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap">
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  React JS
                </div>

                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Node JS
                </div>

                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Express JS
                </div>

                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  MongoDB
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Activity</div>
              </div>
              <div className="mt-2 cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">
                Posts
              </div>
              {/* Parent div for scrollable Activity */}
              <div className="overflow-x-auto my-2 flex gap-1 overflow-y-hidden">
                <div className="cursor-pointer shrink-0 w-90">
                  <Post profile={1} />
                </div>
                <div className="cursor-pointer shrink-0 w-90">
                  <Post profile={1} />
                </div>
                <div className="cursor-pointer shrink-0 w-90">
                  <Post profile={1} />
                </div>
              </div>
              <div className=" text-center cursor-pointer">
                Show all posts {<ArrowRightAltIcon />}
              </div>
            </Card>
          </div>
          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Experience</div>
                <div className="cursor-pointer">
                  <AddIcon />
                </div>
              </div>
              <div className="mt-5">
                <div className="p-2 border-t border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">
                      DSE Engineer | Full Stack Engineer
                    </div>
                    <div className="text-sm">Amizon</div>
                    <div className="text-sm text-gray-500">
                      March 2022 Present
                    </div>
                    <div className="text-sm text-gray-500">Delhi, India</div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>

                <div className="p-2 border-t-1 border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">
                      DSE Engineer | Full Stack Engineer
                    </div>
                    <div className="text-sm">Amizon</div>
                    <div className="text-sm text-gray-500">
                      March 2022 Present
                    </div>
                    <div className="text-sm text-gray-500">Delhi, India</div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-19 w-full">
            <Ad />
          </div>
        </div>
      </div>
      {imageModel && (
        <PostModel title="Upload Image" closeModel={handleImageModelOpenClose}>
          <ImageModel isCircular={circularImage} />
        </PostModel>
      )}
      {infoModel && (
        <PostModel title="Edit Info" closeModel={handleInfoModel}>
          <EditInfoModel />
        </PostModel>
      )}
    </div>
  );
};

export default Profile;
