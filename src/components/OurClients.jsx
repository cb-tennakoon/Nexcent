import Carousel from "react-multi-carousel";
import '../../node_modules/react-multi-carousel/lib/styles.css';

import '../../src/assets/ourclients/Logo.png';
import logo from '../assets/ourclients/Logo.png';
import logo1 from '../assets/ourclients/Logo1.png';
import logo2 from '../assets/ourclients/Logo2.png';
import logo3 from '../assets/ourclients/Logo3.png';
import logo4 from '../assets/ourclients/Logo4.png';
import logo5 from '../assets/ourclients/Logo5.png';
import logo6 from '../assets/ourclients/Logo6.png';
// import logo7 from '../assets/ourclients/Logo7.png';
const logoList =[logo,logo1,logo2,logo3,logo4,logo5,logo6]
export default function OurClients(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
};
    return <>
        <div className="container mx-auto">
            <div>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="relative h-24 p-4 flex items-center justify-center">
                <Carousel 
                    arrows={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    autoPlay={true}
                    className="w-full max-w-5xl">
                    {
                        logoList.map(
                            (logoSrc, index)=>(
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        className="h-[48px] w-[55px] object-contain"
                                        src={logoSrc}
                                        alt={`Client logo ${index + 1}`}
                                    />
                                </div>
                            )
                        )
                    }
                </Carousel>
            </div>
        </div>
    </>
} 

