import React from "react";

/*Components*/
import { JobsList } from "../components/List/JobsList";
import { SearchInput } from "../components/Search/SearchInput";
import { JobFilter } from "../components/Filter/JobFilter";

export const Services = ({jobsList, setJobsList, selectedBrand,setSelectedBrand, minimo, setMinimo, maximo, setMaximo, query, setQuery, cartList, setCartList, quantItensCart, setQuantItensCart}) => {
    return (
        <div>
            <SearchInput
                query={query}
                setQuery={setQuery}
            />

            <JobFilter
                setJobsList={setJobsList}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                minimo={minimo}
                setMinimo={setMinimo}
                maximo={maximo}
                setMaximo={setMaximo}
                query={query}
                setQuery={setQuery}
            />

            <JobsList
                jobsList={jobsList}
                minimo={minimo}
                maximo={maximo}
                query={query}
                selectedBrand={selectedBrand}

                setCartList={setCartList}

                quantItensCart={quantItensCart}
                setQuantItensCart={setQuantItensCart}
            />
        </div>
    )
}