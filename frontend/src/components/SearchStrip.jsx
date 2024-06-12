import { useCallback, useContext, useEffect, useRef, useState } from "react";
import strip from "../assets/strip.jpg"
import { IoSearchOutline } from "react-icons/io5";
import { BookContext } from "../contexts/bookContext";
import { IoCheckmark } from "react-icons/io5";

const SearchStrip = () => {
  const [barStatus, setBarStatus] = useState(false)
  const [ results, setResults ] = useState([])
  const [addedList, setAddedList] = useState([])
  const [ msg, setMsg ] = useState("Your results will appear here")
  const [ bookData, setBookData ] = useContext(BookContext)
  const searchRef = useRef();

  const searchCallBack = useCallback((e) => {
            if(searchRef.current && !searchRef.current.contains(e.target)){
                  setBarStatus(false)
            }else{
                 setBarStatus(true)
            }
  }, [])

  useEffect(() => {
       document.addEventListener("click", searchCallBack, true)
  }, [searchCallBack])
  //search for books
  const handleSearch = (param) => {
           if(param === ''){
                 setResults([])
                 setMsg("Your results will appear here")
           }else{
                 const filtered = bookData.filter(item => 
                         item.title.toLowerCase().includes(param.toLowerCase())
                 )
                setResults(filtered)
                if(filtered.length === 0) setMsg("No book found for input query")
           }
  }

  //addition to the reading list
  const addToReadingList = (book) => {
           let bookArray = JSON.parse(localStorage.getItem("ReadingList"))
           bookArray.push(book)
           setAddedList([...addedList, book])
           localStorage.setItem("ReadingList", JSON.stringify(bookArray))
  }
 
  return (
    <div className="search-strip">
             <div className="search-strip-image">
                      <img src={strip} alt="" />
             </div>
             <div className="search-strip-texts">
                          <h1>Search Ello</h1>
                         <p>Browse through our awesome catalogue and find valuable books for your students.</p>
             </div>
            <div ref={searchRef} className="search-strip-wrapper">
                 <div className="search-strip-control">
                        <span><IoSearchOutline /></span>
                        <input 
                                 onFocus={() => setBarStatus(true)} 
                                 onChange={(e) => handleSearch(e.target.value) }
                                 type="text" className="search-control" placeholder="Search books"  />
                </div>   
                  { barStatus && 
                        <div className="search-results-wrapper">
                                   <div className="results-body">
                                             { results.length > 0  ? 
                                                  results.map((item , i) => 
                                                      <div className="result-moja" key={item+i}>
                                                       <img src={`./src/${item.coverPhotoURL}`}alt="" />
                                                        <div className="results-texts">
                                                                  <div className="texts-inner">
                                                                          <h3>{item.title}</h3>
                                                                          <p>Author: {item.author}</p>
                                                                  </div>
                                                                  { JSON.parse(localStorage.getItem("ReadingList")).length > 0 && JSON.parse(localStorage.getItem("ReadingList")).map(kitu => kitu.title).includes(item.title) ? <p className="check"><span><IoCheckmark /></span>Added</p> : 
                                                                  <button onClick={() => addToReadingList(item)} className="add-btn" title="Add to Reading List">Add</button>}
                                                        </div>
                                                 </div>
                                                  )
                                               :
                                                   <p className="placeholder">{msg}</p>
                                               }
                                   </div>
                        </div>
              }
            </div>
    </div>
  )
}

export default SearchStrip