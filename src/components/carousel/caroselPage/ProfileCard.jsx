const ProfileCard = () => (
    <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center h-full  w-full flex items-center justify-center ">
        <div className="container flex flex-col md:flex-row ">
            <div className="basis-full md:basis-1/3">
                <h2 className="text-2xl font-bold text-green-800">User Profile</h2>
                <p className="text-gray-600 mt-4">Name: John Doe</p>
                <p className="text-gray-600">Role: Developer</p>
            </div>
            <div className="basis-full md:basis-2/3">
                <p>up to date, audited 278 packages in 3s</p>
            </div>
        </div>
    </div>
);
export default ProfileCard;    