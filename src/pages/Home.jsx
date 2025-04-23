import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <>
        <div>
            <h1 className="text-[70px] text-lime-700 font-extrabold font-serif">Welcome</h1>
            <span className="font-serif text-fuchsia-600 text-[20px]">This is a simple student registration system built using React.js(and Tailwind Css for styling).</span>
            <p>
                It has the following features:

                <ul className="list-disc pl-5">
                    <li>A Course Management Tab and Student Management Tab to manage Courses and Students repectively.</li>
                    <li>Dummy Data is used for representation.</li>
                    <li>Each Tab has separate buttons for various CRUD functionalities.</li>
                </ul>
            </p>

            <div className="mt-10 flex items-center justify-center border rounded-full w-[50%]  hover:text-fuchsia-600 cursor-auto py-4">
                <a href="https://github.com/arunabh22/student_registration_system" className="text-[35px] cursor-default flex">
                <FaGithubSquare className="size-14 mr-2"/>
                Source Code
                </a>
            </div>

            <div className="mt-10 flex items-center justify-center border rounded-full w-[50%]  hover:text-fuchsia-600 cursor-auto py-4">
                <a href="https://www.linkedin.com/in/arunabh-bhardwaj-26b3a2217" className="text-[35px] cursor-default flex">
                <FaLinkedin className="size-14 mr-2"/>
                View Profile
                </a>
            </div>
        </div>
    </>
  )
}

export default Home;