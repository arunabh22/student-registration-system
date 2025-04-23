import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-gray-50 w-64 h-screen p-3">
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/course"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 ${isActive ? "bg-blue-200 font-semibold" : ""}`}>
            Course Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/student"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 ${isActive ? "bg-blue-200 font-semibold" : ""}`}>
            Student Management
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;