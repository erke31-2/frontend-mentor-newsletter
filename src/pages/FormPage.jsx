import mobileSvg from "../assets/images/illustration-sign-up-mobile.svg";
import desktopSvg from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && emailRegex.test(email)) {
      navigate("/response", { state: { email } });
    } else {
      setError("Valid email required");
    }
  };
  return (
    <section className="h-screen mx-auto w-[375px] flex flex-col desktop:flex-row-reverse desktop:w-max desktop:h-max desktop:bg-White desktop:p-6 desktop:rounded-2xl desktop:items-center">
      <img src={mobileSvg} alt="mobile-svg" className="mb-5 desktop:hidden" />
      <img src={desktopSvg} alt="desktop-svg" className="hidden desktop:block" />
      <div>
        <article className="px-6 py-4 flex flex-col gap-6">
          <h1 className="font-RobotoBold text-4xl desktop:text-5xl">
            Stay updated!
          </h1>
          <p className="font-RobotoRegular">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="font-RobotoRegular flex flex-col space-y-3">
            <li className="flex items-start space-x-3">
              <img src={iconList} alt="icon-list" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex space-x-3 items-start">
              <img src={iconList} alt="icon-list" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex space-x-3 items-start">
              <img src={iconList} alt="icon-list" />
              <p>And much more</p>
            </li>
          </ul>
        </article>
        <form
          className="font-RobotoBold p-6 flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="text-sm px-1 flex justify-between py-2">
            <label htmlFor="email-input">Email address</label>
            {error && <p className="text-red-400">{error}</p>}
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@company.com"
            className={
              error
                ? "border-Tomato border-2 rounded-xl px-4 py-3 focus:outline-none"
                : "text-DarkSlateGrey rounded-xl border px-4 py-3 focus:outline-none"
            }
          />
          <button className="border rounded-xl py-3 mt-4 bg-DarkSlateGrey text-White hover:bg-Tomato transition duration-500">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </section>
  );
};
export default FormPage;
