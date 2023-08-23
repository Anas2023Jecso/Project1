import Footer from "../components/footer";
import MainFooter from "../components/mainFooter";
import Navbar from "../components/navbar";
import Section4 from "../views/Home/section4";
import Section5 from "../views/Home/section5";
import Section6 from "../views/Home/section6";
import Section7 from "../views/Home/section7";
import Section1 from "../views/bankAccount/section1";
import Section2 from "../views/bankAccount/section2 copy";




function BankAccount () {
    return (
        <div>
            <Navbar />
            <Section1 />
            <Section2></Section2>
            <Section4 />
            <Section6 />
            <Section7 />
            <MainFooter />
            <Footer />
        </div>
    );
}


export default BankAccount;