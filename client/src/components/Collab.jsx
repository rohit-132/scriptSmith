import React, { useState } from "react";

const collaborators = [
  {
    id: 1,
    name: "Faizan Ahemad",
    email: "Example@gmail.com",
    image: "letter-f.png",
    status: "Available",
    statusColor: "green",
  },
  {
    id: 2,
    name: "Shlok Kulkarni",
    email: "Example@gmail.com",
    image: "letter-s.png",
    status: "Busy",
    statusColor: "red",
    disabled: true,
  },
];

const CollaboratorsList = () => {
  const [requests, setRequests] = useState({});

  const sendRequest = (id) => {
    setRequests((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      className="absolute left-0 top-1/2 h-full overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4"
      style={{
        width: "400px",
        marginTop: "10%",
        marginLeft: "30px",
        transform: "translateY(-50%)",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {collaborators.map(
          ({ id, name, email, image, status, statusColor, disabled }) => (
            <li key={id} className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    {name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {email}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center bg-${statusColor}-100 text-${statusColor}-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-${statusColor}-900 dark:text-${statusColor}-300`}
                >
                  <span
                    className={`w-2 h-2 me-1 bg-${statusColor}-500 rounded-full`}
                  ></span>
                  {status}
                </span>
                <button
                  onClick={() => sendRequest(id)}
                  className={`${
                    requests[id]
                      ? "bg-black"
                      : `bg-${statusColor}-500 hover:bg-blue-700`
                  } text-white text-xs font-medium px-2.5 py-0.5 rounded-full transition`}
                  disabled={requests[id] || disabled}
                >
                  {requests[id]
                    ? "Request Sent"
                    : disabled
                    ? "Unavailable"
                    : "Collaborate"}
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CollaboratorsList;
