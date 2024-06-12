import { useState } from "react";
import Header from "../components/Header"
import "../styles/list.css"
import { RiDeleteBin6Line } from "react-icons/ri";
const ReadingList = () => {
  const [ list, setList] = useState([])
  const bookList = localStorage.getItem("ReadingList") ? JSON.parse(localStorage.getItem("ReadingList")) : []

  const removeFromList = (book) => {
         let newList = bookList.filter(item => item.title !== book.title);
         setList([...list, newList])
         localStorage.setItem("ReadingList", JSON.stringify(newList))
  }
  return (
    <>
          <Header />
          <div className="reading-row">
                    <h2>Reading List</h2>

                    <div className="reading-row-wrapper">
                             { bookList.length > 0 ? 
                                  bookList.map((item, i) => 
                                       <div className="book-list-moja" key={item+i}>
                                                <div className="book-left-col">
                                                          <h3>{i+1}.</h3>
                                                         <img src={`./src/${item.coverPhotoURL}`} alt="" />
                                                         <div className="book-list-texts">
                                                                  <h3>{item.title}</h3>
                                                                  <p>Reading Level: {item.readingLevel} | Author: {item.author}</p>
                                                         </div>
                                                </div>
                                                <button onClick={() => removeFromList(item)}><span><RiDeleteBin6Line /></span>Remove</button>
                                       </div>
                                  )
                               :
                                <p className="intro">Please add books to the reading list</p>
                               }
                    </div>
          </div>

          <div className="footer">
                  <p>All rights reserved &copy; { new Date().getFullYear()} Ello Inc</p>
         </div>
    </>
  )
}

export default ReadingList