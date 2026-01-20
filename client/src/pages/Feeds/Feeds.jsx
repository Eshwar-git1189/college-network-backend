import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Card from "../../components/Card/card";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Ad from "../../components/Advertisement/ad";
import Post from "../../components/Post/post";
import PostModel from "../../components/PostModel/PostModel";
import AddPostModel from "../../components/addPostModel/AddPostModel";

const Feeds = () => {
  const [addPostModel, setPostModel] = useState(false);
  const handleOpenPostModel = ()=>{
    setPostModel(prev=>!prev)
  }
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
      {/* left side */}
      <div className="w-[22%] sm:block sm:w-[23%] hidden py-5 sticky top-19">
        <div className="h-fit">
          <ProfileCard />
        </div>
        <div className="w-full my-5">
          <Card padding="p-1">
            <div className="w-full flex justify-between">
              <div>Profile Viewers</div>
              <div className="text-blue-900">23</div>
            </div>

            <div className="w-full flex justify-between mt-2">
              <div>Post Impressions</div>
              <div className="text-blue-900">90</div>
            </div>
          </Card>
        </div>
      </div>

      {/* middle side */}
      <div className="w-full py-5 sm:w-[50%]">
        <div>
          <Card padding="p-4">
            {/* Top Input */}
            <div className="flex gap-2 items-center">
              <img
                src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                className="rounded-4x1 w-13 h-13 border-2 border-white cursor-pointer"
                alt="profile"
              />

              <div
                onClick={() => setPostModel(true)}
                className="w-full border py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100"
              >
                Start a post
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex mt-3">
              <div
                onClick={() => setPostModel(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                <VideoCallIcon sx={{ color: "#378FE9" }} />
                <span>Video</span>
              </div>

              <div
                onClick={() => setPostModel(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                <InsertPhotoIcon sx={{ color: "#70B5F9" }} />
                <span>Photo</span>
              </div>

              <div
                onClick={() => setPostModel(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                <BookmarkIcon sx={{ color: "#E06847" }} />
                <span>Article</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="border-b-1 border-gray-400 w-full my-5" />

        <div className="w-full flex flex-col gap-5">
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      {/* right side */}
      <div className="w-[22%] hidden lg:block">
        <div>
          <Card padding="p-4">
            <div className="text-xl font-semibold">AskOnce Updates</div>
            <div className="text-gray-600 text-sm">Top stories</div>

            <div className="my-2">
              <div className="text-md font-medium">
                Buffett to remain Berkshire chair
              </div>
              <div className="text-xs text-gray-400">2h ago</div>
            </div>

            <div className="my-2">
              <div className="text-md font-medium">
                Foreign investments surge again
              </div>
              <div className="text-xs text-gray-400">3h ago</div>
            </div>
          </Card>
        </div>

        <div className="my-5 sticky top-15">
          <Ad />
        </div>
      </div>

      {addPostModel && (
        <PostModel closeModel={handleOpenPostModel} title={""}>
          <AddPostModel/>
        </PostModel>
      )}
    </div>
  );
};

export default Feeds;
