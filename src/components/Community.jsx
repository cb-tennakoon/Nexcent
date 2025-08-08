import { Card, Dropdown, DropdownItem } from "flowbite-react";
import test1 from "../assets/profile-pictures/user1.jpg";
import * as motion from "motion/react-client"

export default function Community(){
    return <>
        <div className="container m-auto">
            <div>
                <h1>Manage your entire community in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between">
                <motion.div
                    initial={{ opacity: 0, x: "-100%" }}  // start hidden & left
                    whileInView={{ opacity: 1, x: 0 }} // animate when visible
                    transition={{ duration: 1 }}
                    viewport={{once:true,amount: 0.3}}
                >
                    <Card className="max-w-sm shadow-[0_0_15px_rgba(0,0,0,0)] transition-shadow duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-gray-400 p-4">
                        <img src={test1}/>
                        <div className="flex flex-col items-center pb-10">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Membership Organisations</h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Our membership management software provides full automation of membership renewals and payments</p>
                        </div> 
                    </Card>
                </motion.div>
                <motion.div
                    initial = {{opacity:0,y:"100%"}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1}}
                    viewport={{once:true,amount: 0.3}}
                >
                <Card className="max-w-sm shadow-[0_0_15px_rgba(0,0,0,0)] transition-shadow duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-gray-400 p-4">
                    <img src={test1}/>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Membership Organisations</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </Card>
                </motion.div>
                <motion.div
                    initial = {{opacity:0,x:"100%"}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    viewport={{once:true,amount: 0.3}}
                >
                    <Card className="max-w-sm shadow-[0_0_15px_rgba(0,0,0,0)] transition-shadow duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-gray-400 p-4">
                        <img src={test1}/>
                        <div className="flex flex-col items-center pb-10">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Membership Organisations</h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </Card>
                </motion.div>
            </div>
            <div>
                <motion.div
                    style={box}
                    animate={{
                    scale: 2,
                    transition: { duration: 2 }}}
                />
                <motion.div
                style={box1}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear" }}
                />
            </div>
        </div>
    </>
}
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}
const box1 = {
    width: 100,
    height: 100,
    backgroundColor: "#98c379",
    borderRadius: 5,
}