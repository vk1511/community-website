import React, { useContext } from "react";
import "./SpecificBlog.css";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";
import PopularPost from "../PopularPost/PopularPost";

const SpecificBlog = () => {
  const { id } = useParams();
  //const blogId = parseInt(id);
  const { blogs } = useContext(BlogContext);

  const specificBlog = blogs.find((item) => item._id === id);

  return (
    <>
      <div className="bg-white font-sans leading-normal tracking-normal container">
        <div className="text-center items-center justify-center pt-16 md:pt-22 font-medium head">
          <div className="container flex justify-around font-sans rounded mt-2 p-4 pb-0">
            <div className="flex justify-start space-x-6">
              <img
                className="w-14 h-14 rounded-full"
                src="http://i.pravatar.cc/300"
                alt="avatar-cover"
              />
              <span className="font-bold break-normal text-2xl md:text-4xl">
                Post By - {specificBlog.author}
              </span>
            </div>
            <p className="text-sm md:text-base font-bold text-gray-900">
              - {specificBlog.date} -
              <span className="text-sm md:text-base text-gray-900">
                {specificBlog.xMinsRead} min Read
              </span>
            </p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1609518045948-fdaf5cbe31ed?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded image"
          alt="specific-cover"
        />

        <div className="container content justify-center max-w-5xl mx-auto -mt-44 mb-0">
          <div className="bg-white w-auto p-5 md:p-24 text-gray-800 leading-normal shadow-md m-5">
            <h1>{specificBlog.blogTitle}</h1>
            <p className="font-normal my-5 ">{specificBlog.blogContent}</p>
            <div className="container flex justify-between space-x-1">
              <div className="flex justify-start">
                <div>
                  <button className="container flex justify-center px-4 pt-6 py-1 text-sm text-black-600 font-semibold border-none hover:border-transparent focus:outline-none transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="fill-black text-white h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 pt-6 py-1 text-sm text-black-600 font-semibold border-none hover:border-transparent focus:outline-none transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="fill-black text-white h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 pt-6 py-1 text-sm text-black-600 font-semibold border-none hover:border-transparent focus:outline-none transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="instagram fill-black h-4"
                      viewBox="0 0 22 22"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 pt-6 py-1 text-sm text-black-600 font-semibold border-none hover:border-transparent focus:outline-none transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="linkedin fill-black h-4"
                      viewBox="0 0 22 22"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19,19H16V13.7A1.5,1.5 0 0,0 14.5,12.2A1.5,1.5 0 0,0 13,13.7V19H10V10H13V11.2C13.5,10.36 14.59,9.8 15.5,9.8A3.5,3.5 0 0,1 19,13.3M6.5,8.31C5.5,8.31 4.69,7.5 4.69,6.5A1.81,1.81 0 0,1 6.5,4.69C7.5,4.69 8.31,5.5 8.31,6.5A1.81,1.81 0 0,1 6.5,8.31M8,19H5V10H8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <div>
                  <button className="container flex justify-center px-4 pt-6 py-1 text-sm text-black-600 font-semibold border-none hover:border-transparent focus:outline-none transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-hand-thumbs-up h-4 w-4 black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 pt-6 py-1 text-sm text-black-600 font-semibold border-none hover:border-transparent focus:outline-none transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-hand-thumbs-down h-4 w-4 black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="pop-title">Trending</h3>
        <hr />
        <PopularPost />
      </div>
    </>
  );
};

export default SpecificBlog;
