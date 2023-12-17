import React, {useState} from "react";
import cn from 'classnames'

type Props = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export const Pagination = ({totalUserCount, pageSize, onPageChanged, currentPage}: Props) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={''}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>пред.</button>}
        {pages
            .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
            .map(el => {
                return <span
                    className={cn({
                        ['']: currentPage === el
                    }, '')}
                    key={el}
                    onClick={() => {
                        onPageChanged(el)
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