import s from "./Users.module.css";
import React from "react";

type PropsType = {
    totalUserCount: number
    pageSize: number
    currentPage:number
    onPageChanged: (page: number) => void
}

export const Pagination = (props :PropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }
    return  <div>
        {slicedPages.map((el, index) => {
            return <span key={index} className={props.currentPage === el
                ? s.selectedPage
                : ''} onClick={() => {
                props.onPageChanged(el)
            }}> {el} </span>
        })}
    </div>
}