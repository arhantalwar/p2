import Command1 from "./Command1";
const Box2= (props) => {
    return (
        <>
        <div className="grid p-10 shadow-2xl">
           <div className="pb-4">
              <h1 className="text-xl font-bold">{props.heading}</h1>
           </div>
           <div className="grid gap-2 bg-gray-50 px-23">
              <p className=" py-4 text-gray-700">{props.para}</p>
              <Command1
              CommandA={props.Command1}
              CommandB={props.Command2}
              />
              
           </div> 
           
        </div>
    
        </>
    )
}

export default Box2;
