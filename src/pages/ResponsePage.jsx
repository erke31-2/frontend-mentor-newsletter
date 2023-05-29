import { Link, useLocation } from "react-router-dom";
import iconSuccess from "../assets/images/icon-success.svg";
const ResponsePage = () => {
  const location = useLocation();
  const { email } = location.state;

  return (
    <section className="h-[100%] w-[375px] mx-auto flex flex-col justify-around p-8 desktop:gap-3 desktop:border desktop:justify-center desktop:w-[460px] desktop:h-max desktop:bg-White desktop:rounded-[40px] font-RobotoBold">
      <div className="space-y-6">
        <img src={iconSuccess} alt="success" />
        <h2 className="text-5xl flex flex-col font-bold">
          Thanks for <span>subscribing!</span>
        </h2>
        <p className="font-RobotoRegular">
          A confirmation email has been sent to {email}.Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <Link to="/" className="bg-DarkSlateGrey py-3 rounded-xl desktop:mt-4 text-White text-center hover:bg-Tomato transition-all duration-500">
        Dismiss message
      </Link>
    </section>
  );
};
export default ResponsePage;
