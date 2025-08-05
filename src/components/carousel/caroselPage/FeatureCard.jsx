import { Button } from "flowbite-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ExplodingRibbonandConfetti from './../../../assets/animation/ExplodingRibbonandConfetti.lottie'
import WebDesignIllustration from './../../../assets/animation/WebDesignIllustration.lottie'
const FeatureCard = () => (
    <div className="bg-purple-100 p-8 rounded-lg shadow-lg text-left h-full flex w-full items-center justify-center">
        <div className="container  h-full flex flex-col md:flex-row">

            <div className="basis-full md:basis-1/2 h-auto m:h-full flex flex-col justify-center relative">
                            <DotLottieReact className="absolute h-full"
                    src={ExplodingRibbonandConfetti}
                    loop
                    autoplay
                    speed={0.5}
                />
                <div>
                    <h2 className="text-2xl font-bold text-purple-800">Lessons and insights from 8 years</h2>
                    <p className="text-gray-600 mt-4">Where to grow your business as a photographer: site or social media?</p>
                    <Button className="bg-[#56B050]">Register</Button>
                </div>
            </div>
            <div className="basis-full md:basis-1/2">
                <DotLottieReact
                src={WebDesignIllustration}
                loop
                autoplay
                />
            </div>
        </div>
    </div>
);
export default FeatureCard;    