const Spart = (props) => {
    return (
        <>
        <div className="h-52 w-64 bg-white px-10 py-14 space-y-4 rounded-xl hover:translate-y-2">
        <img 
        src={props.url}
        width="15%"
        />
        <h1 className="font-Poppins text-xl">{props.heading}</h1>
        <p className="font-Roboto font-bold text-2sm">{props.para}</p>
        </div>
        </>
    )
}

export default Spart;
