import { useState } from "react";

const TakeInput = () => {

    const [hostname, setHostname] = useState('');
    const [port, setPort] = useState('');
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [memory, setMemory] = useState('');
    const [processor, setProcessor] = useState('');
    const [cpu, setCpu] = useState('');

    const handleHostNameChange = (event) => {
        setHostname(event.target.value);
    };

    const handlePortChange = (event) => {
        setPort(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswd(event.target.value);
    };

    const handleMemoryChange = (event) => {
        setMemory(event.target.value);
    };

    const handleProcessorChange = (event) => {
        setProcessor(event.target.value);
    };

    const handleCpuChange = (event) => {
        setCpu(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/addVM', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hostname, port, username, passwd, memory, cpu, processor }),
        });
        if (response.ok) {
            alert('User added to database successfully!');
        } else {
            alert('Error adding user to database!');
        }
    };


    return (
        <>
        <div className="h-40 w-screen flex justify-center items-end">
            <h1 className="font-Poppins text-6xl">Just once more step...</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="h-full w-screen py-10">
            <div className="h-[5rem] w-full flex justify-center items-center gap-5">
                <input type="text"
                        placeholder="Memory"
                        value={memory}
                        onChange={handleMemoryChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
                <input type="number"
                        placeholder="CPUs"
                        value={cpu}
                        onChange={handleCpuChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="text"
                        placeholder="Processor"
                        value={processor}
                        onChange={handleProcessorChange} 
                        className="w-[31rem] p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center gap-5">
                <input type="text"
                        placeholder="Hostname"
                        value={hostname}
                        onChange={handleHostNameChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
                <input type="number"
                        placeholder="Port"
                        value={port}
                        onChange={handlePortChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange} 
                        className="w-[31rem] p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="Password"
                        placeholder="Password"
                        value={passwd}
                        onChange={handlePasswordChange} 
                        className="w-[31rem] p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="submit"
                        value="DONE"
                        className="w-[31rem] p-5 rounded-2xl text-xl text-white placeholder-black font-Poppins font-bold bg-black" />
            </div>
        </div>
        </form>
        <div className="h-full w-screen flex justify-center items-top gap-2">
        </div>
        </>
    )
} 

export default TakeInput;
