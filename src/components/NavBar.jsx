import { BsHexagonHalf } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <NavLink to="/">
      <div className="bg-slate-600 flex justify-start items-center py-2">

        <BsHexagonHalf color="white" className="size-[30px] m-2 ml-8" />
        <span className="text-white text-[28px]">Hexa Courses</span>

      </div>
    </NavLink>
  )
}

export default NavBar;