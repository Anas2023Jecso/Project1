import Footer from "../components/footer";
import MainFooter from "../components/mainFooter";
import Section1 from "../views/Home/Section1";
import Section2 from "../views/Home/section2";
import Section3 from "../views/Home/section3";
import Section4 from "../views/Home/section4";
import Section5 from "../views/Home/section5";
import Section6 from "../views/Home/section6";
import Section7 from "../views/Home/section7";



function Home() {
    return (
        <div className='home'>
           <Section1 /> 
           <Section2 />
           <Section3/>
           <Section4/>
           <Section5 />
           <Section6 />
           <Section7 />
           <MainFooter />
            <Footer />

  </div>
    )
}

export default Home;