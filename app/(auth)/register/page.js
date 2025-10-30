import RegistrationForm from "../../components/auth/RegistrationForm";
import SocialLogins from "../../components/auth/SocialLogins";
const RegistrationPage = () => {
  return (


      <div className=" grid md:grid-cols-2 lg:p-24">
      {/* Left Image */}
      <div className="hidden md:block">
        <img
          src="/login.jpg"
          alt="Login Image"
          className="w-full h-full object-cover"
        />
      </div>
 
      <div className="max-w-[450px] w-full mx-auto p-6   rounded-md">
        <h4 className="font-bold text-2xl lg:p-10 text-center">Sign up</h4>
         <RegistrationForm />
        <SocialLogins mode={"register"} />
      </div>
    </div>
   
  );
};

export default RegistrationPage;
