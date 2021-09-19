import React, { useState, useEffect } from "react";
import "./styles.css";

function Books({ acessToken, refreshToken, id, name }) {
  const [books, setbooks] = useState();
  const url =
    "https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies";
  useEffect(() => {
    const getBooks = async () => {
      const option = {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: "Bearer " + acessToken,
        },
      };
      const request = await fetch(url, option);
      const books = await request.json();
      setbooks(books.data);
    };
    getBooks();
  }, []);

  return (
    <section className="books">
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
                <h1>{title}</h1>
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
