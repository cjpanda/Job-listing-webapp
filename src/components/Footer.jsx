import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/facebook.png";
import LinkedIn from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="max-width padding-x py-20 lg:flex  justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white cursor-pointer">
            glumos
          </h1>
          <p className=" text-white text-sm pt-7">Block E, Level 2,</p>
          <p className=" text-white text-sm">Faculty of Business and Law,</p>
          <p className=" text-white text-sm pb-7">100213 Lagos NIgeria.</p>
          <div className="flex gap-5 items-center">
            <img
              src={Instagram}
              width={40}
              height={40}
              className="bg-white p-2 rounded-full"
            />
            <img
              src={Facebook}
              width={40}
              height={40}
              className="bg-white p-2 rounded-full"
            />
            <img
              src={LinkedIn}
              width={40}
              height={40}
              className="bg-white p-2 rounded-full"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-12 text-white font-light">
          <ul className="">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li className="my-5">
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
          <ul>
            <li className="cursor-pointer">Browse Jobs</li>
            <li className="my-5 cursor-pointer">Browse Companies</li>
            <li className="cursor-pointer">Browse Jobs</li>
          </ul>
          <ul>
            <li className="cursor-pointer">Freelance Jobs</li>
            <li className="my-5 cursor-pointer">Fulltime Jobs</li>
          </ul>
          <ul>
            <li className="cursor-pointer">&copy; 2024 cjpanda_dev</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
