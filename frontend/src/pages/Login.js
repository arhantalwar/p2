import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswdChange = (e) => {
        setPasswd(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, passwd })
        });

        if(response.ok) {
            alert('vola you can remember things!!')
        } else {
            alert('eahh!! you cant even remember a little thing! ')
        }
    }


    return (
        <>
        <div className="h-40 w-screen flex justify-center items-end">
            <h1 className="font-Poppins text-6xl">Login Here</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="h-full w-screen py-10">
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
                        value={passwd}
                        onChange={handlePasswdChange} 
                        className="w-[31rem] p-5 rounded-2xl text-black placeholder-black font-Roboto font-bold bg-gray-100" />
            </div>
            <div className="h-[5rem] w-full flex justify-center items-center">
                <input type="submit"
                        value="Login"
                        className="w-[31rem] p-5 rounded-2xl text-xl text-white placeholder-black font-Poppins font-bold bg-black" />
            </div>
        </div>
        </form>
        <div className="h-full w-screen flex justify-center items-top gap-2">
            <h1 className="font-Roboto text-xl">Don't have an account?</h1>
            <h1 className="font-Roboto text-xl font-bold"><a href="Signup">Signup in</a></h1>
        </div>
        </>
    )
}

export default Login;
