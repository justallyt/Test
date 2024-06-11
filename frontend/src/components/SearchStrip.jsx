import strip from "../assets/strip.jpg"
import { IoSearchOutline } from "react-icons/io5";

const SearchStrip = () => {
  return (
    <div className="search-strip">
             <div className="search-strip-image">
                      <img src={strip} alt="" />
             </div>
             <div className="search-strip-texts">
                          <h1>Search Ello</h1>
                         <p>Browse through our awesome catalogue and find valuable books for your students.</p>
             </div>
             <div className="search-strip-control">
                        <span><IoSearchOutline /></span>
                        <input type="text" className="search-control" placeholder="Search books"  />
             </div>
    </div>
  )
}

export default SearchStrip