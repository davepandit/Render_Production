import { useState } from "react";
import { useGetUsersQuery } from "./slice/userSlice";

function App() {
  const [show, setShow] = useState(false);
  //get the data from the backend
  const { data: user, isLoading } = useGetUsersQuery();

  console.log("Here is the user:", user);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      {isLoading ? (
        <div>Loading......❤️</div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center ">
          <div className="text-center text-3xl font-bold mt-11">
            This is going in Production❤️
          </div>
          <button
            className="bg-gray-200 rounded-md px-4 py-2 font-semibold"
            onClick={handleClick}
          >
            Get User
          </button>
          {show ? (
            <div className="flex flex-col gap-3">
              <span>{user.message[0].name}</span>
              <span>{user.message[0].email}</span>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default App;
