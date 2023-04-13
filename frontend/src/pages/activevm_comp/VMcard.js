const VMcard = (props) => {

    const pass = props.passwd;
    const bpass = btoa(pass);
    const link_to_go = `http://localhost:8888/?hostname=0.tcp.in.ngrok.io&port=${props.port_no}&username=${props.username}&password=${bpass}`

    return (
        <>
            <div className="h-fit w-[40rem] bg-[#F9F9F9] rounded-2xl my-10 ml-10 overflow-hidden relative group">
                <div className="h-fit w-full flex gap-2 items-center justify-between px-4 py-4">
                <h1 className="text-2xl font-Poppins">{props.username}</h1>
                </div>
                <a className="h-full flex items-center px-2 py-1 bg-[#1D4ED8] font-Poppins text-white absolute top-0 right-0 translate-x-24 group-hover:translate-x-0" href={link_to_go}>connect</a>
                <div className="h-fit w-full flex gap-10 items-center px-4 py-4 font-Poppins">
                   <h1> <span className="font-bold text-gray-500">Processor</span> <br /> {props.processor}</h1> 
                   <h1> <span className="font-bold text-gray-500">RAM</span> <br /> {props.memory}</h1> 
                   <h1> <span className="font-bold text-gray-500">CPU</span> <br /> {props.cpu}</h1> 
                </div>
            </div>
        </>
   )
}

export default VMcard;

//<h1>{props.hostname}</h1>
//<p>{props.port_no}</p>
//<p>{props.username}</p>
//<p>{props.passwd}</p>
//<h1>hostname</h1>
//it worked -> http://localhost:8888/?hostname=0.tcp.in.ngrok.io&port=10784&username=arhant&password=dHQ=
