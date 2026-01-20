import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Card from "../../components/Card/card";
import Conversation from "../../components/Conversation/Conversation";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImageIcon from "@mui/icons-material/Image";
import Ad from "../../components/Advertisement/ad";

const Message = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
      <div className="w-full flex justify-between pt-5">
        {/* Left side */}
        <div className="w-full md:w-[70%]">
          <Card padding={0}>
            {/* Header */}
            <div className="border-b border-gray-300 px-5 py-2 font-semibold text-lg">
              Messaging
            </div>

            {/* New Message Button */}
            <div className="border-b border-gray-300 px-5 py-2">
              <div className="py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex-semibold flex gap-2 w-fit rounded-2xl text-white">
                Focused <ArrowDropDownIcon />
              </div>
            </div>

            {/* Chat Section */}
            <div className="w-full md:flex">
              {/* Left Chat List */}
              <div className="h-[590px] overflow-auto w-full md:w-[40%] border-r border-gray-400">
                {/* chat list items here */}
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>

              {/* Right Chat Window */}
              <div className="w-full md:w-[60%] border border-gray-400">
                {/* Header */}
                <div className="border-b border-gray-300 py-2 px-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">User 1</p>
                    <p className="text-sm text-gray-400">hi this is user 1</p>
                  </div>

                  <MoreHorizIcon />
                </div>

                {/* Chat Body */}
                <div className="h-[360px] w-full overflow-auto border-b border-gray-300">
                  <div className="w-full border-b border-gray-300 p-4 items-center">
                    <img
                      className="rounded-full cursor-pointer w-16 h-15"
                      src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                      alt="user"
                    />
                    <div className="my-2">
                      <div className="text-md">User 1</div>
                      <div className="text-smtext-gray-500">
                        Phi this is user 1
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    {/* for each message */}
                    <div className="flex w-full cursor-pointer border-b border-gray-300 gap-3 p-4">
                      {/* Avatar */}
                      <div className="shrink-0">
                        <img
                          className="w-8 h-8 rounded-full cursor-pointer"
                          src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                          alt="user"
                        />
                      </div>

                      {/* Message Content */}
                      <div className="w-full mb-2">
                        <div className="text-md font-medium">User 1</div>

                        <div className="text-sm mt-1 hover:bg-gray-200 p-2 rounded">
                          This is text message
                        </div>

                        <div className="my-2">
                          <img
                            className="w-[240px] h-[180px] rounded-md"
                            src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                            alt="message"
                          />
                        </div>
                      </div>
                    </div>
                    {/* for each message */}
                    <div className="flex w-full cursor-pointer border-b border-gray-300 gap-3 p-4">
                      {/* Avatar */}
                      <div className="shrink-0">
                        <img
                          className="w-8 h-8 rounded-full cursor-pointer"
                          src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                          alt="user"
                        />
                      </div>

                      {/* Message Content */}
                      <div className="w-full mb-2">
                        <div className="text-md font-medium">User 1</div>

                        <div className="text-sm mt-1 hover:bg-gray-200 p-2 rounded">
                          This is text message
                        </div>

                        <div className="my-2">
                          <img
                            className="w-[240px] h-[180px] rounded-md"
                            src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                            alt="message"
                          />
                        </div>
                      </div>
                    </div>
                    {/* for each message */}
                    <div className="flex w-full cursor-pointer border-b border-gray-300 gap-3 p-4">
                      {/* Avatar */}
                      <div className="shrink-0">
                        <img
                          className="w-8 h-8 rounded-full cursor-pointer"
                          src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                          alt="user"
                        />
                      </div>

                      {/* Message Content */}
                      <div className="w-full mb-2">
                        <div className="text-md font-medium">User 1</div>

                        <div className="text-sm mt-1 hover:bg-gray-200 p-2 rounded">
                          This is text message
                        </div>

                        <div className="my-2">
                          {/* <img
                            className="w-[240px] h-[180px] rounded-md"
                            src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
                            alt="message"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Space for typing message */}
                <div className="p-2 w-full border-b border-gray-200">
                  <textarea
                    rows={4}
                    className="bg-gray-200 outline-none rounded-xl text-sm w-full p-3"
                    placeholder="Write a message..."
                  />
                </div>

                {/* Actions */}
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <label htmlFor="messageImage" className="cursor-pointer">
                      <ImageIcon />
                    </label>

                    <input id="messageImage" type="file" className="hidden" />
                  </div>
                  <div className="px-3 py-1 cursor-pointer rounded-2xl border bg-blue-950 text-white">
                    Send
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* Right Side */}
        <div className="hidden md:flex md:w-[25%]">
          <div className="sticky top-19">
            <Ad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
