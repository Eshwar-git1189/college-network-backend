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
          src="data:image/png;base64,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"
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
