import React, { useState } from "react";
import "./MainHowWork.css";
import mktplace from "./Assets/mktplace.png";
import service from "./Assets/services.png";

function MainHowWork({setPage}) {
  return (
    <section>
      <div className="containerCard">
        <img src={mktplace} alt="marketplace" />
        <p>
          Nós somos um empresa focada em realizar encontros entre pessoas que
          oferecem servicos e aquelas que contratam, evitando a burocracia das
          mídias tradicionais com segurança e garantia de qualidade. Além disso,
          temos a menores taxas do mercado!
        </p>
      </div>

      <div className="how-links">
        <div className="btn-ninja" onClick={() => setPage("services")}>
          <p>
            Se você está procurando por um produto e/ou serviço e a pesquisa não te leva a lugar nenhum?
          </p>
          <button>Contrate um ninja</button>
        </div>
        <div className="btn-ninja" onClick={() => setPage("form")}>
          <p>
            Você quer oferecer seus produtos e/ou serviços a um maior número de pessoas de forma simples e rápida?
          </p>
          <button>Vire um ninja</button>
        </div>
      </div>

      <div className="containerCard">
        <p>
          Nós somos um empresa focada em realizar encontros entre pessoas que
          oferecem servicos e aquelas que contratam, evitando a burocracia das
          mídias tradicionais com segurança e garantia de qualidade. Além disso,
          temos a menores taxas do mercado!
        </p>
        
        <img src={service} alt="serviço descrito na imagem" />  
      </div>
    </section>
  );
}

export default MainHowWork;
