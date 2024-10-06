import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestBookSeller = () => {
  //  !  FavoriteBooks component ka name & export function name BestBookSeller change kiya hai
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/all-books")
    fetch(`${window.location.origin}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 6)));
  }, []);

  return (
    <>
      <div>
        <BookCards books={books} headline="Best Seller Books" />
      </div>
      {/* <div>FavoriteBooks</div>   */}
    </>
  );
};

export default BestBookSeller;
//  !  FavoriteBooks component ka name & export function name BestBookSeller me change kiya hai
