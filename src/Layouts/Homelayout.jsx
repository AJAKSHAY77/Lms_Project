

import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import {Link} from "react-router-dom"

import Footer from "../components/Footer";



function HomeLayout({children}) {
  function ChangeWidth() {
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = 0;
  }

  function hidedrawer() {
    const element = document.getElementsByClassName("drawer-toggle");

    element[0].checked = false;

    ChangeWidth();
  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={ChangeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>

        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hidedrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>

            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/courses"}>All courses</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
          </ul>
        </div>
      </div>
       {children}

     <Footer/> 
     
    </div>
  );
}

export default HomeLayout;
