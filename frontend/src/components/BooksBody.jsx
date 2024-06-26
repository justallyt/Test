import { GoPlus } from "react-icons/go";
import { useQuery, gql } from '@apollo/client';
import { useContext, useEffect } from "react";
import { BookContext } from "../contexts/bookContext";

const GET_BOOKS = gql`
query BookQuery {
     books {
          title
          author
          coverPhotoURL
          readingLevel
      }
  }
`
const BooksBody = () => {
   const { data } = useQuery(GET_BOOKS)

   const [bookData, setBookData] = useContext(BookContext);

   useEffect(() => {
        if(data){
              setBookData(data.books)
        }
   }, [data, setBookData])

  return (
    <div className="books-body">
             <div className="inner-row">
                   { data ?
                         <div className="books-body-content">
                              {  bookData && bookData.length > 0 ?  
                                      <>
                                             { bookData.map((book, i) => 
                                                    <div className="book-moja" key={book.title+i}>
                                                            <div className="book-image">
                                                                     <img src={`./src/${book.coverPhotoURL}`} alt="" />
                                                            </div>
                                                            <div className="book-texts">
                                                                    <h3>{book.title}</h3>
                                                                    <div className="book-texts-inner">
                                                                           <h4>Author: <span>{book.author}</span></h4>
                                                                           <h5>Reading Level: <span>{book.readingLevel}</span></h5>
                                                                    </div>
                                                            </div>
                                                          
                                               </div>
                                             )}
                                      </>
                                  :
                                  <p>Fetching the books...</p>
                             }
                         </div>
                      : 
                      <p className="error">Sorry! Books couldn&apos;t be fetched at this time, please try again later.</p>
                    }
              </div>
    </div>
  )
}

export default BooksBody