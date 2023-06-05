import Avatar from './Avatar';
function Widgetsmall() {
  return (
    <div className="flex-1 shadow-md rounded-xl p-4">
      <h2 className=" lg:text-2xl sm:text-xl  text-lg font-semibold">
        New Join Members
      </h2>
      <ul className="mt-8 space-y-6">
        <li className="flex justify-between items-center ">
          <div className="flex items-center gap-6 ">
            <Avatar />
            <div className="flex flex-col">
              <span className="font-semibold">Jhon Doe</span>
              <span className="text-gray-500">Software Enginer</span>
            </div>
          </div>
          <button className="gap-2 btn-outline btn-info btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex items-center  gap-6 ">
            <Avatar />
            <div className="flex flex-col">
              <span className="font-semibold">Jhon Doe</span>
              <span className="text-gray-500">Software Enginer</span>
            </div>
          </div>
          <button className="gap-2 btn-outline btn-info btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex items-center gap-6 ">
            <Avatar />
            <div className="flex flex-col">
              <span className="font-semibold">Jhon Doe</span>
              <span className="text-gray-500">Software Enginer</span>
            </div>
          </div>
          <button className="gap-2 btn-outline btn-info btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex items-center  gap-6 ">
            <Avatar />
            <div className="flex flex-col">
              <span className="font-semibold">Jhon Doe</span>
              <span className="text-gray-500">Software Enginer</span>
            </div>
          </div>
          <button className="gap-2 btn-outline btn-info btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Widgetsmall;
