import "./index.scss";
import { Login } from "@/auth/Login";
import { Register } from "@/auth/Register";

export const Header = () => {
  return (
    <header className="flex">
      <a href="#" className="logo">
        Wango Parking
      </a>
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
          <li className="mr-2">
            <Login />
          </li>
          <li>
            <Register />
          </li>
        </ul>
      </nav>
    </header>
  );
};
