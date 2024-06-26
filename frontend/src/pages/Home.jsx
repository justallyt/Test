import { useState } from "react";
import BooksBody from "../components/BooksBody"
import Header from "../components/Header"
import SearchStrip from "../components/SearchStrip"
import "../styles/home.css"
import { BookContext } from "../contexts/bookContext";

const Home = () => {
  const [bookData, setBookData] = useState([])
  return (
    <>
         <Header />
         <BookContext.Provider value={[bookData, setBookData]}>
                 <SearchStrip />
                <BooksBody />
         </BookContext.Provider>

         <div className="footer">
                  <p>All rights reserved &copy; { new Date().getFullYear()} Ello Inc</p>
         </div>
    </>
  )
}

export default Home