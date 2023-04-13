const RentUse = () => {
    return (
        <>
        <div className="h-40 w-screen flex justify-center items-end">
            <h1 className="font-Poppins text-6xl">What you wanna do?</h1>
        </div>
        <div className="h-fit w-full flex justify-evenly items-center py-32 px-80">
            <div className="h-fit w-[30rem] bg-gray-100 rounded-3xl hover:border-gray-500">
                <a href="TakeInput">
                <div className="flex px-10 mt-10"> 
                    <h1 className="font-Poppins text-5xl">Rent</h1>
                </div>
                <div className="flex px-10"> 
                    <h1 className="font-Roboto text-2xl py-10">Have a machine you want to rent?</h1>
                </div>
                </a>
            </div>
            <div className="h-fit w-[30rem] bg-gray-100 rounded-3xl">
            <a href="ActiveVM">
                <div className="flex px-10 mt-10"> 
                    <h1 className="font-Poppins text-5xl">Use</h1>
                </div>
                <div className="flex px-10"> 
                    <h1 className="font-Roboto text-2xl py-10">Want to use a VM</h1>
                </div>
            </a>
            </div>
        </div>
        </>
    )
}

export default RentUse;
