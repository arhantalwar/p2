import { useState } from "react";

const Signup = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFnameChange = (event) => {
        setFname(event.target.value);
    };

    const handleLnameChange = (event) => {
        setLname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://192.168.208.6:5000/api/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fname, lname, email, password }),
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
            <h1 className="font-Poppins text-6xl">Create an account</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="h-full w-screen py-10">
            <div className="h-[5rem] w-full flex justify-center items-center gap-5">
                <input type="text"
                        id="name" 
                        placeholder="First Name"
                        value={fname}
                        onChange={handleFnameChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
                <input type="text"
                        id="name" 
                        placeholder="Last Name"
                        value={lname}
                        onChange={handleLnameChange}
                        className="p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="email"
                        id="email" 
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange} 
                        className="w-[31rem] p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="Password"
                        id="password" 
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange} 
                        className="w-[31rem] p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="submit"
                        value="Sign Up"
                        className="w-[31rem] p-5 rounded-2xl text-xl text-white placeholder-black font-Poppins font-bold bg-black" />
            </div>
        </div>
        </form>
        <div className="h-full w-screen flex justify-center items-top gap-2">
            <h1 className="font-Roboto text-xl">Have an account?</h1>
            <h1 className="font-Roboto text-xl font-bold"><a href="Login">Log in</a></h1>
        </div>
        </>
    )
}

export default Signup;
