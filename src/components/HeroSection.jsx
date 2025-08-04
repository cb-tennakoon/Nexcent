import Illustration from "../assets/Nexcent/Illustration.png";
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
// import { features } from "../constants";
//import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";
// import { Button } from "flowbite-react";

import Carousel from "./carousel/Carousel";
export default function HeroSection(){
    return <>
    <div className=" mx-auto bg-[#f5f7fa]">
        {/* <div className="flex flex-wrap">
            <div className="basis-full md:basis-2/3">
                <div>
                    <h1 >Lessons and insights from 8 years</h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button className="bg-[#4caf4f] py-4 px-6 rounded-md">Register</button>
                </div>
            </div>
            <div className="basis-full md:basis-1/3 md:shrink-0">
                    <div>
                        <img src={Illustration}/>
                    </div>
            </div>
        </div> */}
        <Carousel/>
    </div>

</>

}