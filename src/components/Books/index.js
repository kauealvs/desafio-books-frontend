import React, { useState, useEffect, useContext } from "react";
import { LoginApiContext } from "../../stores/LoginApiContext";
import ModalBook from "../Modal";
import "./styles.css";
function Books() {
  const [books, setbooks] = useState();
  const data = useContext(LoginApiContext);

  const url =
    "https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies";
  useEffect(() => {
    const getBooks = async () => {
      const option = {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: "Bearer " + data.acessToken,
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
            language,
            description,
            isbn10,
            isbn13,
          }) => (
            <div
              key={id}
              className="book-card"
              onClick={() => data.setbookid(id)}
            >
              <div className="book-img">
                <img src={imageUrl} />
              </div>
              <div className="book-info">
                <h1>{title}</h1>
                <div className="authors">
                  {authors.map((author) => (
                    <>
                      <p key={author} className="author">
                        {author}
                      </p>
                    </>
                  ))}
                </div>
                <div className="sub-infos">
                  <p className="sub-infos">{pageCount} páginas</p>
                  <p className="sub-infos">Editora {publisher}</p>
                  <p className="sub-infos">Publicado em {published}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <ModalBook bookid={data.bookid}></ModalBook>
    </section>
  );
}

export default Books;
