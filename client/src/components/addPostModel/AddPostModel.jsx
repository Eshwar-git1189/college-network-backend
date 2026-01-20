import React from "react";
import ImageIcon from '@mui/icons-material/Image';

const AddPostModel = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-4 items-center">
        <div className="relative">
          <img
            className="w-15 h-15 rounded-full"
            src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsyhqd3dmroo.png"
            alt="Img"
          />
        </div>

        <div className="text-2xl">Mashhood Ahmad</div>
      </div>

      {/* Text Area */}
      <div>
        <textarea
          cols={50}
          rows={5}
          placeholder="What do you want to talk about?"
          className="my-3 outline-0 text-xl p-2 w-full bg-gray-100 rounded-2xl"
        ></textarea>
      </div>

      {/* Image Preview */}
      <div>
        <img
          className="w-20 h-20 rounded-xl"
          src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/mountains-and-lake.jpg"
          alt="preview"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        {/* buttons or actions here */}
        <div className="my-6">
          <label className="cursor-pointer" htmlFor="inputFile">
            <ImageIcon />
          </label>

          <input type="file" id="inputFile" className="hidden" />
        </div>
        <div className="bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-3xl h-fit">Post</div>
      </div>
    </div>
  );
};

export default AddPostModel;
