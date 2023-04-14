import MidLeft from "./MidLeft";
import MidRight from "./MidRight";
import Box1 from "./Box1";
import Box2 from "./Box2";
const Mid1= () => {
    return (
        <>
        <div className="bg-gray-950 text-white text-6xl font-bold py-28 px-12 my-20">
            SetUp Ngrok
        </div>
        <div className="grid gap-7">
             <Box1 
             heading="1.Unzip to install"
             para="On Linux or OS X you can unzip ngrok from a terminal with the following command. On Windows,just double click ngrok.Zip to extract it."
             Command1="unzip /path/to/ngrok.zip"
             />
             <Box1
             heading="2.Connect your account"
             para="Running this command will add your authtoken to the default ngrok.yml configuration file. This will grant you access to more features and longer session times. 
             Running tunnels will be listed on the endpoint page of the dashboard."
             Command1="ngrok config add-authtoken "
             />
             <Box2
             heading="3.Final step"
             para="Start you 22 port"
             Command1="sudo systemctl start sshd.service"
             Command2="ngrok tcp 22"
             />
        </div>
    
        </>
    )
}

export default Mid1;
