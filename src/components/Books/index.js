import React, { useState, useEffect } from "react";
import "./styles.css";
import Shape1 from "../../assets/img/Shape-1.png";
import Shape from "../../assets/img/Shape.png";

function Books() {
  const [books, setbooks] = useState();
  const url =
    "https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies";
  useEffect(() => {
    const getBooks = async () => {
      const option = {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MzIwMTgyMDA4OTUsImlhdCI6MTYzMjAyMTgwMDg5NX0.HLSJBnwo_PpRsycGWz4Pgzkqzj-MvLyNDGXpqGdb7ik",
        },
      };
      const request = await fetch(url, option);
      const books = await request.json();
      setbooks(books.data);
    };
    getBooks();
  }, []);

  console.log(books);
  return (
    <section className="books">
      <div className="title-row-books">
        <p className="title">Books</p>
        <div className="logout-col">
          <p className="welcome">
            Bem vindo, <span>Gulherme!</span>
          </p>
          <button className="logout-btn">
            <img src={Shape1} />
            <img src={Shape} />
          </button>
        </div>
      </div>
      <div className="books-row">
        {books?.map(
          ({
            id,
            title,
            imageUrl,
            authors,
            pageCount,
            published,
            publisher,
          }) => (
            <div key={id} className="book-card">
              <div className="book-img">
                <img src={imageUrl} />
              </div>
              <div className="book-info">
                <h3>{title}</h3>
                <div className="authors">
                  {authors.map((author) => (
                    <p key={author} className="author">
                      {author}
                    </p>
                  ))}
                </div>
                <p className="sub-infos">{pageCount} páginas</p>
                <p className="sub-infos">Editora {publisher}</p>
                <p className="sub-infos">Publicado em {published}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Books;
