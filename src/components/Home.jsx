import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {

    // const arr=[1,2,3,4,5,];
    // return (
    //     <div>
    //         <h1>Home</h1>
    //         <Link to="/login">Login</Link>

    //         {arr.map((a)=><p>{a}</p>)}
    //     </div>
    // )
  const [books, setBooks] = useState(null);
  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();

      setBooks(data);
    }
  }, []);

    useEffect(() => {
        getData();

        async function getData() {
            const response = await fetch(
                "https://www.anapioficeandfire.com/api/books"
            );
            const data = await response.json();

            setBooks(data);
        }
    }, []);

  return (
    <div className="App">
      {books && (
        <div className="books">
          {books.map((book, index) => (
            <div key={index}>
              <h2>{book.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}
