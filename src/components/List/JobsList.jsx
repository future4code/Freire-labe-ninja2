import React from "react";

import { CartItem } from "../Cart/CartItem";

export const JobsList = ({ jobsList, selectedBrand, minimo, maximo, query }) => {

  return (
    <div>
      {jobsList
        .filter(job => {
          return job.name.toLowerCase().includes(query.toLowerCase())
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
              return nextProduct.name.localeCompare(currentProduct.name)
            case "DECRESCENTE":
              return -1 * nextProduct.name.localeCompare(currentProduct.name)
            default:
              return currentProduct.name - nextProduct.name
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
