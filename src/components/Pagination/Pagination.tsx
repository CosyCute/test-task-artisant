import React from 'react';
import './Pagination.scss'
interface PagiantionProps{
    arr?: number[],
    page: number,
    setPage: Function
}
const Pagination = (props: PagiantionProps) => {
    return (
        <div className='pagination'>
            {props.arr?.map(x =>
                <div onClick={() => props.setPage(x)} key={x} className={`pagination-item ${props.page === x ? 'selected' : ''}`}>
                    {x}
                </div>)}
        </div>
    );
};

export default Pagination;