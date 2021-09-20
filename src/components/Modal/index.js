import React from "react";
import Modal from "react-modal";
import "./styles.css";
import quote from "../../assets/img/Quotes.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "769px",
    height: "608px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function ModalBook({ bookid, acessToken }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [book, setbook] = React.useState();
  let bookCard = document.querySelectorAll(".book-img");
  bookCard = Array.from(bookCard);
  console.log(bookCard);
  const url = `https://books.ioasys.com.br/api/v1/books/${bookid}`;
  React.useEffect(() => {
    const getBook = async () => {
      const option = {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: "Bearer " + acessToken,
        },
      };
      const request = await fetch(url, option);
      const book = await request.json();
      setbook(book);
    };
    getBook();
  }, [bookid]);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  bookCard.map((book) => book.addEventListener("click", openModal));

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="close-btn">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            close
          </button>
        </div>
        <div className="modal-book">
          <div className="col-img-modal">
            <img src={book?.imageUrl} />
          </div>
          {console.log(book)}
          <div className="col-book-info">
            <h1 className="book-title">{book?.title}</h1>
            <p className="book-info-title">INFORMAÇÕES</p>
            <div className="book-info-row">
              <div className="book-info-col1">
                <p className="book-info">Páginas</p>
                <p className="book-info">Editora</p>
                <p className="book-info">Publicação</p>
                <p className="book-info">Idioma</p>
                <p className="book-info">Título Original</p>
                <p className="book-info">ISBN-10</p>
                <p className="book-info">ISBN-13</p>
              </div>
              <div className="book-info-col2">
                <p className="book-info-text">{book?.pageCount}</p>
                <p className="book-info-text">{book?.publisher}</p>
                <p className="book-info-text">{book?.published}</p>
                <p className="book-info-text">{book?.language}</p>
                <p className="book-info-text">{book?.title}</p>
                <p className="book-info-text">{book?.isbn10}</p>
                <p className="book-info-text">{book?.isbn13}</p>
              </div>
            </div>

            <div className="book-row-description">
              <p>RESENHA DA EDITORA</p>
              <p className="book-info-text-description">
                <img src={quote} />
                {book?.description}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalBook;
