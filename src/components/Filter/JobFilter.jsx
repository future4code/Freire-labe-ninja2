import React from "react";
import './JobFilter.css';

export const JobFilter = ({setSelectedBrand, selectedBrand, minimo, setMinimo, maximo, setMaximo}) => {
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    return (
        <div className='ProductFilter'>
            <select
                value={selectedBrand}
                onChange={handleBrandChange}>
                <option value="MENOR">Menor Preço</option>
                <option value="MAIOR">Maior Preço</option>
                <option value="CRESCENTE">A - Z</option>
                <option value="DECRESCENTE">Z - A</option>
            </select>

            <input type="number" placeholder='Valor mínimo' value={minimo} onChange={(e) => setMinimo(e.target.value)} />
            <input type="number" placeholder='Valor máximo' value={maximo} onChange={(e) => setMaximo(e.target.value)} />
        </div>
    )
}