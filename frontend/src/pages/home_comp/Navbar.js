const Navbar = () => {
    return (
        <>
        <div className="h-24 w-screen bg-black text-white flex justify-between items-center px-24 font-Roboto">
            <h1 className="text-3xl font-Poppins">Rent_MY_Linux</h1>
            <ul className="flex gap-12 text-xl font-Poppins">
                <li><a href="Login">Login</a></li>
                <li><a href="Signup">Sign Up</a></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;
