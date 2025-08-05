import Carousel from "react-multi-carousel";
import '../../node_modules/react-multi-carousel/lib/styles.css';
export default function OurClients(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
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
            <div>
                <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>  
                    <div>Item 5</div>                  
                    <div>Item 6</div>
                    <div>Item 7</div>
                    <div>Item 8</div>
                </Carousel>;
            </div>
        </div>
    </>
} 

