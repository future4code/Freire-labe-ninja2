import React from "react";

import { CartItem } from "../Cart/CartItem";

export const JobsList = ({ jobsList, selectedBrand, minimo, maximo, query }) => {
  
  return (
    <div>
      {jobsList
        .filter(job => {
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
          console.log(selectedBrand)
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
          return <CartItem
            key={job.id}
            job={job}
          />
        })
      }
    </div>
  )
}
