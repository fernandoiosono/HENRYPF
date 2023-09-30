import React from 'react';
import  './pagination.styles.css';


function Pagination({cardForPage, productos, paged}) {
    const pageNums = []

    for (let i = 1; i <= Math.ceil(productos/cardForPage); i++) {
        pageNums.push(i)
    }; 

    return (
        <div className='div_pagin'>
             { pageNums && pageNums.map(p => (
                    <a key={p} onClick={() => paged(p)}>{p}</a>
                  ))}  
        </div>      
    )
}

export default Pagination;