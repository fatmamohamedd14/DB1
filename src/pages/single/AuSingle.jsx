import React, { useEffect, useState } from "react";
import "./UsSingle.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import { getSingleAuthor } from "../../api/authorsApis";
import { useParams } from "react-router-dom";

const AuSingle = () => {
  const [author, setAuthor] = useState(null);
  const [apiStatus, setApiStatus] = useState("idle");
  const { autherId } = useParams();
  console.log(autherId);
  useEffect(() => {
    if (autherId) {
      getSingleAuthor({ setApiStatus, id: autherId, setAuthor });
    }
  }, [autherId]);
  console.log(author);

  return (
    <div className="single">
      <Sidebar />
      <div className="w-full ">
        <Navbar />

        {apiStatus === "loading" ? (
          <p>loading ...</p>
        ) : apiStatus === "success" ? (
          <div className="top p-5">
            <div className="left">
              {/* <div className="editButton">Edit</div> */}
              {/* <h1 className="title">Information</h1> */}
              <img src={author?.image} alt="" className=" w-48  object-cover" />
              <div className="item mt-5">
                <div className="details space-y-3">
                  {/* <h1 className="itemTitle">{author?.name}</h1> */}
                  <div className="detailItem">
                    <span className=" font-bold text-2xl">Name: </span>
                    <span className="itemValue text-xl">{author?.name}</span>
                  </div>
                  <div className=" ">
                    <span className="font-bold text-2xl">Breif: </span>
                    <span className="text-xl">{author?.brief}</span>
                  </div>
                  {/* <div className="detailItem">
                    <span className="itemKey">Country : </span>
                    <span className="itemValue">America</span>
                  </div> */}
                  {/* <div className="detailItem">
                    <span className="itemKey">type of his books</span>
                    <span className="itemValue">Rommance</span>
                  </div> */}
                  {/* <div className="detailItem">
                    <span className="itemKey">About him</span>
                    <span className="itemValue">kngdjbnjrbghfbgdsj</span>
                  </div> */}
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl mt-8">Author books</h3>
                  <div className="flex flex-col gap-4">
                    {author?.mybooks && author.mybooks.length > 0 ? (
                      author.mybooks.map((book) => {
                        return (
                          <div
                            className="flex gap-3 items-start border bg-white drop-shadow rounded overflow-hidden"
                            key={book._id}
                          >
                            <img className="w-32" src={book.imgCover} alt="" />
                            <div className=" py-2">
                              <h3 className="text-2xl font-bold">
                                {book.title}
                              </h3>
                              <p className="bookDiscrepyion">
                                {book.description}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="w-full border min-h-[300px] grid place-content-center">
                        no books available for this author
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        ) : (
          apiStatus === "failed" && <p>error hppend</p>
        )}
      </div>
    </div>
  );
};

export default AuSingle;
