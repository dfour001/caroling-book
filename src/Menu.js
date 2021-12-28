import React, { useRef, useEffect } from "react";
import GoToPageForm from "./GoToPage";
import "./Menu.css";

// const Page = React.forwardRef((props, ref) => {
const Menu = ({ book }) => {
  const refMenuBtn = useRef();
  const refGoToContainer = useRef();
  const refGoToTOCContainer = useRef();
  const refMenuBackground = useRef();

  // const [turnToPage, setTurnToPage] = useState(0);

  const goToTOC = () => {
    book.current.pageFlip().turnToPage(1);
    refMenuBtn.current.classList.remove("open");
    refGoToContainer.current.classList.remove("open");
    refGoToTOCContainer.current.classList.remove("open");
    refMenuBackground.current.classList.remove("open");
  };
  
  useEffect(() => {
    const menuBtn = refMenuBtn.current;
    const goToContainer = refGoToContainer.current;
    const goToTOC = refGoToTOCContainer.current;
    const menuBackground = refMenuBackground.current;

    menuBtn.addEventListener("click", function () {
      if (menuBtn.classList.contains("open")) {
        menuBtn.classList.remove("open");
        goToContainer.classList.remove("open");
        goToTOC.classList.remove("open");
        menuBackground.classList.remove("open");
      } else {
        menuBtn.classList.add("open");
        goToContainer.classList.add("open");
        goToTOC.classList.add("open");
        menuBackground.classList.add("open");
      }
    });
  }, [refMenuBtn]);

  return (
    <div className="menu">
      <div ref = {refMenuBackground} className="menuBackground"></div>
      <div id="buttonContainer">
        <div ref={refMenuBtn} className="menuBtn">
          <div className="menuIcon"></div>
        </div>
      </div>
      <div ref={refGoToContainer} className="goToContainer">
        <GoToPageForm book={book} refs={[refMenuBtn, refGoToContainer, refGoToTOCContainer, refMenuBackground]} />
      </div>

      <div ref={refGoToTOCContainer} onClick={goToTOC} className="goToTOC">
        <button>Table of<br />Contents</button>
      </div>
    </div>
  );
};

export default Menu;
