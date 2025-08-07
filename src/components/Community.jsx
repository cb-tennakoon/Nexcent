import { Card, Dropdown, DropdownItem } from "flowbite-react";
import test1 from "../assets/profile-pictures/user1.jpg";
export default function Community(){
    return <>
        <div className="container m-auto">
            <div>
                <h1>Manage your entire community in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between">
                <Card className="max-w-sm shadow-[0_0_15px_rgba(0,0,0,0)] transition-shadow duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-gray-400 p-4">
                    <img src={test1}/>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Membership Organisations</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </Card>
                <Card className="max-w-sm shadow-[0_0_15px_rgba(0,0,0,0)] transition-shadow duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-gray-400 p-4">
                    <img src={test1}/>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Membership Organisations</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </Card>
                <Card className="max-w-sm shadow-[0_0_15px_rgba(0,0,0,0)] transition-shadow duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-gray-400 p-4">
                    <img src={test1}/>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Membership Organisations</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </Card>
            </div>
        </div>
    </>
}