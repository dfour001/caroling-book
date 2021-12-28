import React from "react";
import "./Page.css";
import { FlipNextPage, FlipPrevPage } from "./PageFlip";

// const Page = React.forwardRef((props, ref) => {
const Page = ({songData, book, nextArrow=true, prevArrow=true}) => {
    return (
        <div className="page">
            { prevArrow ? <FlipPrevPage book={book} /> : null }
            { nextArrow ? <FlipNextPage book={book} /> : null }
            
            <div className="BookShadow-light"></div>

            <p className=""><b>{songData.page}</b></p>
            <h3>{songData.name}</h3>
            <div className="lyrics">
                {songData.lyrics.map((d, i) => {
                    return <p key={i}>{d !== "" ? d : <br key={i} />}</p>
                })}
            </div>
        </div>
    )
}

export default Page;