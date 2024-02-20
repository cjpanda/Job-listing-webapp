import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-1 items-center justify-between pt-10">
      <Link to="/" className="text-3xl font-bold text-primary cursor-pointer">
        glumos
      </Link>
      <ul className="flex gap-10 font-bold">
        <li className="text-light cursor-pointer">Login</li>
        <li className="text-primary cursor-pointer">Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
