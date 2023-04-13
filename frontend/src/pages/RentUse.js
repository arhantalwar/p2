import { useState } from "react";

const RentUse = () => {

    const [port, setPort] = useState('');

    const handlePortChange = (event) => {
        setPort(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/updatePort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ port }),
        });
    };

    return (
        <>
        <div className="h-40 w-screen flex justify-center items-end">
            <h1 className="font-Poppins text-6xl">What you wanna do?</h1>
        </div>
        <div className="h-fit w-full flex justify-evenly items-center pt-32 pb-5 px-80">
            <div className="h-fit w-[30rem] bg-gray-100 rounded-3xl hover:bg-gray-200">
                <a href="TakeInput">
                <div className="flex px-10 mt-10"> 
                    <h1 className="font-Poppins text-5xl text-black">Rent</h1>
                </div>
                <div className="flex px-10"> 
                    <h1 className="font-Roboto text-2xl py-10 text-black">Have a machine you want to rent?</h1>
                </div>
                </a>
            </div>
            <div className="h-fit w-[30rem] bg-gray-100 rounded-3xl hover:bg-gray-200">
            <a href="ActiveVM">
                <div className="flex px-10 mt-10"> 
                    <h1 className="font-Poppins text-5xl">Use</h1>
                </div>
                <div className="flex px-10"> 
                    <h1 className="font-Roboto text-2xl py-10">use a ready-to go machine</h1>
                </div>
            </a>
            </div>
        </div>
        <div className="h-fit w-full flex justify-evenly items-center px-80 relative">
            <div className="h-fit w-[30rem] bg-gray-100 rounded-3xl">
                <div className="flex px-10 mt-10"> 
                    <h1 className="font-Poppins text-2xl">Port Update</h1>
                </div>
                <div className="flex items-center"> 
                <input type="number"
                        placeholder="Port"
                        value={port}
                        onChange={handlePortChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-white m-10" />
                <input type="submit"
                        value="update"
                        className="text-lg px-10 py-5 bg-black text-white font-Poppins rounded-3xl"
                        />
                </div>
            </div>
            <div className="h-fit w-[30rem] rounded-3xl">
            <a href="ActiveVM">
                <div className="flex px-10 mt-10"> 
                </div>
                <div className="flex px-10"> 
                </div>
            </a>
            </div>
        </div>
        </>
    )
}

export default RentUse;
