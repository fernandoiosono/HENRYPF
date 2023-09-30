import React, { useState } from "react";

const Ordering = ()=>{
    const [selectOrder, setSelectOrder] = useState('');
    const handleOrderChange = (event)=>{
        setSelectOrder(event.target.value);
    };
    return (
        <div>
            <div>
                <label>Ordenar por precio:</label>
            </div>
            <div>
                <select value={selectOrder} onChange={handleOrderChange}>
                    <option value=''></option>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
            </div>
            <div>
                <label>{selectOrder}</label>
            </div>
        </div>
    );
};

export default Ordering;