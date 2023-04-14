import Command from "./Command";
const Box1= (props) => {
    return (
        <>
        <div className="grid p-10 shadow-2xl">
           <div className="pb-4">
              <h1 className="text-xl font-bold">{props.heading}</h1>
           </div>
           <div className="bg-gray-50 px-23">
              <p className="py-4 text-gray-700">{props.para}</p>
              <Command 
              Command={props.Command1}
              />
           </div>
        </div>
        
        </>
    )
}

export default Box1;
