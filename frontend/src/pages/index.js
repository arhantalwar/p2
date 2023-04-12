import Fpart from "./home_comp/Fpart";
import Navbar from "./home_comp/Navbar";
import Spart from "./home_comp/Spart";
import Tpart from "./home_comp/Tpart";

export default function Home() {
  return (
      <>
      <Navbar />
      <Fpart />

      <div className="h-fit w-screen bg-black px-10 py-10 flex justify-center items-center gap-20">
      <Spart url="https://www.flaticon.com/svg/vstatic/svg/3917/3917267.svg?token=exp=1681245645~hmac=cdf4902766d9710d3d04530dcda78271" 
             heading="Save Your Time"
             para="Get more work done in less time" />
      <Spart url="https://cdn-icons.flaticon.com/svg/3916/3916676.svg?token=exp=1681247376~hmac=6b96566581aa91785d7974dd766e7ae8" 
             heading="Low On Cost"
             para="It's afforable" />
      <Spart url="https://cdn-icons.flaticon.com/svg/3917/3917293.svg?token=exp=1681247376~hmac=5dc4fba23205ae0400e4e36a56800a04" 
             heading="Always Up"
             para="Give When you can" />
      <Spart url="https://cdn-icons.flaticon.com/svg/3917/3917591.svg?token=exp=1681247828~hmac=a7fecc9b0d38519ee79a0d83c880ce82" 
             heading="Secure"
             para="It's just you and no-one-else" />
      </div>

      <Tpart />

      </>
  )
}
