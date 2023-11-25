import s from "./Users.module.css";
import React, {useState} from "react";

type PropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export const Pagination = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.pagination}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>пред.</button>}
        {pages
            .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
            .map(el => {
                return <span
                    key={el}
                    onClick={(e) => {
                        props.onPageChanged(el)
                    }}>
                    {el}
                </span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>
                след.
            </button>}
    </div>
}