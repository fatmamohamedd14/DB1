import React, { useCallback, useEffect, useState } from "react";
import "./UsSingle.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import { useParams } from "react-router-dom";
import { getSingleBook } from "../../api/booksApi";
import EditBook from "../../component/forms/EditBook";

const BkSingle = () => {
  const [bookData, setBookData] = useState(null);
  const [apiStatus, setApiStatus] = useState("idle");
  const { bookId: id } = useParams();
  const fetchSingleBook = useCallback(async () => {
    await getSingleBook({ setApiStatus, setBookData, id });
  }, [id]);
  useEffect(() => {
    if (id) {
      fetchSingleBook();
    }
  }, [id, fetchSingleBook]);
  console.log(bookData);
  console.log(apiStatus);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="p-5">
          {apiStatus === "loading" ? (
            <div className="p-5 w-full">loading ...</div>
          ) : apiStatus === "success" ? (
            <BookShowCase
              fetchSingleBook={fetchSingleBook}
              bookData={bookData}
            />
          ) : (
            apiStatus == "failed" && (
              <div className="grid place-content-center min-h-[400px] ">
                error happend
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default BkSingle;

const BookShowCase = ({ bookData, fetchSingleBook }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-10 p-2 rounded border  justify-stretch">
        <div className="flex items-start justify-between">
          <img
            src={bookData?.imgCover}
            className="border border-black w-[250px]"
            alt=""
          />
          <EditBook getBook={fetchSingleBook} data={bookData} />
        </div>
        <div className="flex flex-col h-full justify-between items-stretch">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{bookData?.title}</h1>
            <p className="text-xl">{bookData?.description}</p>
          </div>
          <div>
            {!!bookData?.rateAvg && (
              <p>Avrage rating ⭐: {bookData?.rateAvg}</p>
            )}
            {!!bookData?.rateCount && (
              <p>number of rates: {bookData.rateCount}</p>
            )}
          </div>
          <a
            href={bookData?.bookContent}
            className="underline hover:text-blue-500 duration-150 text-lg"
          >
            Book content
          </a>
        </div>
      </div>
      <div className="rounded border space-y-2 p-2 py-3">
        <h2 className="text-3xl font-bold pb-3 border-b">Author</h2>
        <h3 className="text-xl font-bold">
          Name: <span className="font-normal">{bookData.author.name}</span>
        </h3>
        <p className="text-xl font-bold">
          About: <span className="font-normal">{bookData.author.brief}</span>
        </p>
        <p className="text-xl">{bookData?.description}</p>
      </div>

      {bookData?.myReviews && bookData?.myReviews.length > 0 && (
        <div className="rounded border space-y-4 p-2 py-3">
          <h2 className="text-3xl font-bold pb-3 border-b">Reviews</h2>

          {bookData?.myReviews.map((review, index) => {
            return (
              <div className="space-y-2" key={index}>
                <h3 className="text-xl font-semibold">{review.user.name}</h3>
                <p>review: {review.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
