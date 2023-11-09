import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/book/" + id)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Book Detail</h2>
            </div>
            {bookData && (
              <div className="card-body">
                <img src={bookData.image} alt="book" />
                <div className="card-text">
                  <h3>
                    {bookData.name} - ({bookData.id})
                  </h3>
                  <h4>Author: {bookData.author}</h4>
                  <h4>Price: {bookData.price}</h4>
                  <h4>Genre: {bookData.genre}</h4>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
