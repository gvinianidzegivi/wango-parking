import { Search } from "lucide-react";
import "./index.scss";

export const Header = () => {
  return (
    <header className="flex">
      <a href="#" className="logo">
        Wango Parking
      </a>
      <div className="flex items-center">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Freelancers
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
        <button>
          <Search className="text-white" size={"17px"} />
        </button>
      </div>
    </header>
  );
};
