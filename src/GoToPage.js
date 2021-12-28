import React, { useState } from "react";
import "./Menu.css";

// const Page = React.forwardRef((props, ref) => {
const GoToPageForm = ({ book, refs }) => {
  const [turnToPage, setTurnToPage] = useState(0);

  const goToPage = (e) => {
    e.preventDefault();
    book.current.pageFlip().turnToPage(parseInt(turnToPage));
    if (refs) {
      refs.forEach((ref) => {
        ref.current.classList.remove("open");
      });
    }
    // refMenuBtn.current.classList.remove("open");
    // refTurnPage.current.classList.remove("open");
  };

  return (
    <form className="goToPageForm" onSubmit={goToPage}>
      <p>Go to page...</p>
      <input
        type="number"
        value={turnToPage}
        onChange={(e) => setTurnToPage(e.target.value)}
        onFocus={(e) => setTurnToPage("")}
      ></input>
      <button className="btnGo" type="submit">GO</button>
    </form>
  );
};

export default GoToPageForm;
