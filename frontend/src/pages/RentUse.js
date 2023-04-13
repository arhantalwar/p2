import { useState } from "react";

const RentUse = () => {

    const [port, setPort] = useState('');
    const [hostname, setHostname] = useState('');
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');

    const handlePortChange = (event) => {
        setPort(event.target.value);
    };

    const handleHostNameChange = (event) => {
        setHostname(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswd(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://192.168.208.6:5000/api/updatePort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hostname, port }),
        });
    };

    const handleDeletion = async (event) => {
        event.preventDefault();
        const response = await fetch('http://192.168.208.6:5000/api/deleteVM', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, passwd }),
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
                <form onClick={handleSubmit}>
                <input type="number"
                        placeholder="Port"
                        value={port}
                        onChange={handlePortChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-white mt-10 ml-10" />
                <input type="text"
                        placeholder="Hostname"
                        value={hostname}
                        onChange={handleHostNameChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-white mt-5 ml-10 mb-10 mr-10" />
                <input type="submit"
                        value="Update"
                        className="text-lg px-10 py-5 bg-black text-white font-Poppins rounded-3xl" />
                </form>
                </div>
            </div>
            <div className="h-fit w-[30rem] bg-gray-100 rounded-3xl">
            <a href="ActiveVM">
                <div className="flex px-10 mt-10"> 
                    <h1 className="font-Poppins text-2xl">Delete VM</h1>
                </div>
                <div className="flex px-10 py-20"> 
                <form onClick={handleDeletion}>
                <input type="submit"
                        value="Delete"
                        className="text-lg px-10 py-5 bg-black text-white font-Poppins rounded-3xl" />
                </form>
                </div>
            </a>
            </div>
        </div>
        </>
    )
}

export default RentUse;
