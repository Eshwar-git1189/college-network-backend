import React, { useState } from "react";
import Card from "../Card/card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";

const Post = () => {
  const [seeMore, setseeMore] = useState(false);
  const [comment, setComment] = useState(false);
  const handleSendComment = (e) => {
    e.preventDefault();
  };
  const desc =
    "lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusamus quidem, quod odit corrupti alias rerum voluptas quia quaerat ipsam natus dolorum enim perferendis cumque voluptatibus, vel iusto. Perspiciatis, impedit!";

  return (
    <Card padding={0}>
      <div className="flex gap-3 p-4">
        <div className="w-12 h-12 rounded-4xl">
          <img
            className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer"
            src=""
            alt="profile"
          />
        </div>

        <div>
          <div className="text-lg font-semibold">Dummy User</div>
          <div className="text-xs text-gray-500">SDE-II Eng. @Amazon</div>
        </div>
      </div>

      <div className="text-md p-4 my-3 whitespace-pre-line grow">
        {seeMore ? desc : `${desc.slice(0, 50)}...`}{" "}
        <span
          onClick={() => setseeMore((prev) => !prev)}
          className="cursor-pointer text-gray-500"
        >
          {seeMore ? "See Less" : "See More"}
        </span>
      </div>
      <div className="w-[100%] h-[300px]">
        <img
          className="w-full h-full object-cover"
          src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/bolivia-landscape.jpg"
          alt="post"
        />
      </div>

      <div className="my-2 p-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 12 }} />
          <div className="text-sm text-gray-600">Like</div>
        </div>

        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-600">2 Comments</div>
        </div>
      </div>
      <div className="flex p-1">
        <div className="w-[33%] flex justify-center items-center gap-2 border-r border-gray-100 p-2 hover:bg-gray-100 cursor-pointer">
          <ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} />
          <span>Like</span>
        </div>

        <div onClick={()=>setComment(true)} className="w-[33%] flex justify-center items-center gap-2 border-r border-gray-100 p-2 hover:bg-gray-100 cursor-pointer">
          <CommentIcon sx={{ fontSize: 22 }} />
          <span>Comment</span>
        </div>

        <div className="w-[33%] flex justify-center items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
          <SendIcon sx={{ fontSize: 22 }} />
          <span>Share</span>
        </div>
      </div>

      {/* Comment section */}
      {comment && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img
              src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
              className="rounded-full w-12 h-12 border-white cursor-pointer"
              alt="profile"
            />

            <form className="w-full flex gap-2" onSubmit={handleSendComment}>
              <input
                placeholder="Add a comment..."
                className="w-full border py-3 px-5 rounded-3xl hover:bg-gray-100"
              />
              <button
                className="cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          {/* other’s comment section */}
          <div className="w-full p-4">
            <div className="my-4">
              <div className="flex gap-3">
                <img
                  src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                  className="rounded-full w-10 h-10 border-2 border-white cursor-pointer"
                  alt="user"
                />

                <div className="cursor-pointer">
                  <div className="text-md font-medium">Dummy User</div>
                  <div className="text-sm text-gray-500">@Amazon SDE-II</div>
                </div>
              </div>
              <div className="px-11 my-2"> Hi this is beautifull</div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
