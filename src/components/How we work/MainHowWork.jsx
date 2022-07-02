import React, { useState } from "react";
import "./MainHowWork.css";
import mktplace from "./Assets/mktplace.png";
import service from "./Assets/services.png";

function MainHowWork() {
  return (
    <section>
      <div className="containerCard">
        <img src={mktplace} alt="marketplace" />
        <p>
          {" "}
          Nós somos um empresa focada em realizar encontros entre pessoas que
          oferecem servicos e aquelas que contratam, evitando a burocracia das
          mídias tradicionais com segurança e garantia de qualidade. Além disso,
          temos a menores taxas do mercado!
        </p>
      </div>

      <div className="containerCard">
        <img src={service} alt="serviço descrito na imagem" />
        <div className="containerContentProducts">
          <p>
            Se você está procurando por um serviço e não sabe onde encontrar ou
            a pesquisa não te leva a lugar nenhum. Nós somos a sua solução!
            Basta acessar a lista de serviços oferecido pelos nossos ninjas
            parceiros.
          </p>
          <button>Contrate um ninja</button>
        </div>
        <div div className="containerContentProducts">
          <p>
            Se você está querendo oferecer seus serviços a um maior número de
            pessoas de forma simples, rápida e barata. Se torne um ninja
            colaborador!
          </p>
          <button>Vire um ninja</button>
        </div>
      </div>
    </section>
  );
}

export default MainHowWork;
