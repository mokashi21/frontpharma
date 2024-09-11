import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const doctors = [
    {
      name: "Dr. Sarah Williams",
      speciality: "Cardiology",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Michael Brown",
      speciality: "Neurology",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Emma Davis",
      speciality: "Pediatrics",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Sarah Williams",
      speciality: "Cardiology",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Michael Brown",
      speciality: "Neurology",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Emma Davis",
      speciality: "Pediatrics",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Sarah Williams",
      speciality: "Cardiology",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Michael Brown",
      speciality: "Neurology",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Dr. Emma Davis",
      speciality: "Pediatrics",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const today = new Date();
  const todayDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]; // Corresponding to Sunday to Saturday

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .delete("http://localhost:3002/logout", {
        headers: {
          'auth-token': localStorage.getItem('token') // Ensure this matches how the token is stored
        }
      })
      .then((response) => {
        console.log(response.data.message); // Successfully logged out
        localStorage.removeItem('token'); // Clear the token on the client side
        navigate("/"); // Redirect to home page after logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  
  

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white shadow-lg p-3 md:h-auto flex-shrink-0">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Calendar</h3>
          <div className="overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-2">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    index === todayDayIndex
                      ? "bg-yellow-200 text-blue-900"
                      : "bg-blue-200 text-blue-900"
                  } font-semibold`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center text-blue-700 text-lg font-medium">
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
        <div className="overflow-y-auto max-h-96">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Doctors</h3>
          <ul className="space-y-4">
            {doctors.map((doctor, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 p-2 bg-blue-100 rounded-lg shadow-sm"
              >
                <img
                  src={doctor.avatar}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-blue-900 font-semibold">{doctor.name}</p>
                  <p className="text-blue-600">{doctor.speciality}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition duration-300"
            >
              Profile
            </Link>
            <nav className="hidden md:flex space-x-5">
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center px-4  text-lg font-medium text-blue-800 hover:text-blue-600 transition duration-300">
                  Planning
                  <ChevronDownIcon className="ml-2 h-5 w-5" />
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/mtp"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-blue-100 text-blue-900" : "text-blue-700"
                        }`}
                      >
                        MTP
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              <Link
                to="/reports"
                className="text-blue-800 hover:text-blue-600 transition duration-300"
              >
                Reports
              </Link>
              <Link
                to="/status"
                className="text-blue-800 hover:text-blue-600 transition duration-300"
              >
                Status
              </Link>
            </nav>
          </div>
          <div className="flex items-center ps-7">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-sm font-medium text-blue-700">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-xl text-blue-700 font-semibold">
                  MR
                </div>
                <ChevronDownIcon className="ml-2 h-5 w-5" />
              </Menu.Button>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-900" : "text-blue-700"
                      }`}
                    >
                      <p>Email: medicalrep@example.com</p>
                      <p>Employee ID: 12345</p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-900" : "text-blue-700"
                      }`}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-blue-50">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Medical Rep Dashboard
          </h1>
          <p className="text-lg text-blue-700">Welcome to your dashboard</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
