import React from "react";
import "./PageFlip.css";



const FlipNextPage = ({ book }) => {
  const btnNextClick = () => {
    book.current.pageFlip().flipNext();
  };

  return (
    <>
      <button className="PageFlip-btn PageFlip-btnNext" onClick={btnNextClick}>
        <p>&gt;</p>
      </button>
    </>
  );
};

const FlipPrevPage = ({book}) => {
  const btnPrevClick = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <>
      <button className="PageFlip-btn PageFlip-btnPrev" onClick={btnPrevClick}>
        <p>&lt;</p>
      </button>
    </>
  );
};

const OpenBook = ({book}) => {
  const btnNextClick = () => {
    book.current.pageFlip().flipNext();
  };

  return (
    <>
      <button className="PageFlip-btn PageFlip-OpenBook" onClick={btnNextClick}>
        <p>Open Book</p>
      </button>
    </>
  );
};

export {FlipNextPage, FlipPrevPage, OpenBook};
