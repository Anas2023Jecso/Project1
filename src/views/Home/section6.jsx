import Accordian from "../../components/Accordian";
import Title3 from "../../components/title copy 2";



function Section6() {
    return (
        <div>
            <div class="overflow-hidden bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div>
                    <Title3></Title3>    
                    <Accordian />
                    </div>
                        <img src="https://res.cloudinary.com/dk3wwfwyv/image/upload/v1692445396/rhwrj4tapt5y9b9gefbx.jpg" alt="Product screenshot" class="opip w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="2600" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Section6;