import React, { useState } from "react";

const Filter = ()=>{
    const categorias = [
        {
            id:1,
            name: 'Nutricion deportiva',
        },
        {
            id:2,
            name: 'Proteina',
        },
        {
            id:3,
            name: 'Aminoacidos'
        },
        {
            id:4,
            name: 'Equipamiento'
        },
        {
            id:5,
            name:'Ropa deportiva'
        }
    ];

    const [selectCategoria, setSelectCategoria] = useState('');
    const handleCategoriasChange = (event)=>{
        setSelectCategoria(event.target.value);      
    };

    return (
        <div>
            <div>
                <label>Filtrar por categoria:</label>
            </div>
            <div>
                <select value={selectCategoria} onChange={handleCategoriasChange}>
                    <option value=''>Todos</option>
                    {categorias.map(categoria=>(
                    <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
                    ))}
                </select>
            </div>                   
            <label>{selectCategoria}</label>
        </div>
    );
};

export default Filter;