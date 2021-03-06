import React from "react";
import './List.css';

/*Components*/
import { JobItem } from "./JobItem";

export const JobsList = ({ jobsList, minimo, maximo, query, selectedBrand, setCartList, quantItensCart, setQuantItensCart}) => {
  return (
    <div className="services-list">
      {jobsList.filter(job => {
          return (job.title.toLowerCase().includes(query.toLowerCase())
            || job.description.toLowerCase().includes(query.toLowerCase())
          )
        })
        .filter(job => {
          return minimo === "" || job.price >= minimo
        })
        .filter(job => {
          return maximo === "" || job.price <= maximo
        })
        .sort((currentProduct, nextProduct) => {
          switch (selectedBrand) {
            case "MENOR":
              return currentProduct.price - nextProduct.price
            case "MAIOR":
              return nextProduct.price - currentProduct.price
            case "CRESCENTE":
              return -1 * nextProduct.title.localeCompare(currentProduct.title)
            case "DECRESCENTE":
              return nextProduct.title.localeCompare(currentProduct.title)
            default:
              return currentProduct.title - nextProduct.title
          }
        })
        .map(job => {
          return (            
            <JobItem
              key={job.id}
              job={job}

              setCartList={setCartList}

              quantItensCart={quantItensCart}
              setQuantItensCart={setQuantItensCart}
            />
          )
        })
      }
    </div>
  )
}
