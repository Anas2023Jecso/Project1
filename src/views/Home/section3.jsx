import Card from "../../components/card";
import Titles from "../../components/title";
import '../../assets/css/home.css'

function Section3() {
    return (
      <div className="section2" id="ser">
        <Titles />
        <div className="cards ">
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/Canada.png"
            subText="NIF em 3 dias"
            price="€ 30"
            head="NIF"
          />
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/NISS.png"
            subText="NISS em 3 dias"
            price="€ 30"
            head="NISS"
          />
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/Bank.png"
            subText="1 Conta bancária"
            price="€ 30"
            head="Conta bancária"
          />
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/Company.png"
            subText="1 Conta bancária"
            price="€ 30"
            head="Representante Fiscal"
          />
        </div>
      </div>
    );
  }

  export default Section3