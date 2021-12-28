import "./App.css";
import HTMLFlipBook from "react-pageflip";
// import getWindowDimensions from "./windowsDim";
import React, { useRef, useState, useEffect } from "react";
import Page from "./Page";
import Menu from "./Menu";
import GoToPageForm from "./GoToPage";
import { FlipNextPage, FlipPrevPage, OpenBook } from "./PageFlip";
import imgHr from "./img/hr.png";

function MyBook({ songsData }) {
  const book = useRef();

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  window.addEventListener("resize", updateSize);

  const TOCClick = (page) => {
    book.current.pageFlip().turnToPage(page);
  };
  return (
    <div className="bookContainer">
      {/* <FlipPrevPage book={book} />
      <FlipNextPage book={book} /> */}
      <HTMLFlipBook
        width={width}
        height={height}
        size="stretch"
        minHeight={height}
        minWidth={width}
        useMouseEvents={false}
        showCover={true}
        flippingTime={1000}
        ref={book}
      >
        <div className="coverPage">
          <OpenBook book={book} />
          <div className="BookSpine"></div>
          <div className="BookShadow"></div>

          <div className="coverPage-title">
            <h5>The</h5>
            <h3>Levendis Compendium of</h3>
            <img src={imgHr} className="title-hr" alt="" />
            <h1>Christmas Carols</h1>
          </div>
        </div>
        <div className="demoPage">
          <h1>Table of Contents</h1>
          <FlipPrevPage book={book} />
          <FlipNextPage book={book} />
          <div className="BookShadow-light"></div>
          <hr />
          <div className="TOC-Container">
            <div className="TOC">
              {songsData.map((d, i) => {
                // let lenTitle = d.name.length;
                // let lenPage = toString(d.page).length;
                // console.log(lenTitle, lenPage)
                // let numDots = 40 - (lenTitle + lenPage);
                // if (!numDots) {
                //   numDots = 5;
                // }
                // console.log(numDots);
                // let dots = Array(numDots + 1).join('.');
                return (
                  <p
                    key={i}
                    className="monospace"
                    onClick={() => TOCClick(d.page)}
                  >
                    {d.page} - {d.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        {songsData.map((d, i) => {
          console.log(songsData.length, i);
          return (
            <div key={i} className="demoPage">
              {songsData.length === parseInt(i) + 1 ? (
                <Page
                  songData={d}
                  book={book}
                  nextArrow={false}
                  prevArrow={true}
                />
              ) : (
                <Page
                  songData={d}
                  book={book}
                  nextArrow={true}
                  prevArrow={true}
                />
              )}
            </div>
          );
        })}
      </HTMLFlipBook>
      <Menu book={book} />
    </div>
  );
}

function App() {
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    // Get songs and set songsData
    fetch("./data/songs.json")
      .then((res) => res.json())
      .then((data) => {
        setSongsData(data);
      });
  }, []);

  return (
    <div className="App">
      <MyBook songsData={songsData} />
    </div>
  );
}

export default App;
