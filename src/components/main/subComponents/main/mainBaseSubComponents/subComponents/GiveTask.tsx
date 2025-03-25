import axios from "axios";
import React, {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface usersInterface {
  fullname: string;
  diversion: string;
  imgUrl: string;
}

const GiveTask: React.FC<{ setClick: (arg: boolean) => void }> = ({
  setClick,
}) => {
  const [users, setUsers] = useState<usersInterface[]>([]);
  useEffect(() => {
    const takeSpecificUsersFromDb = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7205/api/tasks/getUsersForTasks",
          {
            withCredentials: true,
          }
        );
        setUsers(response.data);
      } catch (err) {
        console.log(`There is an error: ${err}`);
      }
    };
    takeSpecificUsersFromDb();
  }, []);
  const handleClick = useCallback(() => {
    setClick(false);
  }, [setClick]);
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#fff6]  flex justify-center items-center z-[150]  ">
      <div className="bg-[#d3cfcf] w-1/2 h-3/4 relative text-sidebarChoose flex items-center  shadow-bottom-right flex-col rounded-xl">
        <h1 className="h-10% min-h-[70px] w-full flex justify-center items-center bg-sidebarChoose font-bold shadow-bottom-right text-white rounded-tl-xl rounded-tr-xl">
          დავალების გაცემა
        </h1>
        <div className="w-95% h-70% mt-[2%] overflow-y-scroll  min-h-[350px] bg-white ">
          {users.map((user, index) => (
            <div className="h-30% flex items-center mt-3 bg-[#d3cfcf] gap-3 text-sm hover:opacity-70 cursor-pointer relative justify-center">
              <img
                src={`${user.imgUrl}`}
                className="left-0 absolute h-80% w-[100px] object-cover "
                alt={`${user.fullname}`}
              />
              <div className="w-80% h-80% flex flex-col items-center">
                <p className="w-80% flex justify-center font-bold ">{`${user.fullname}`}</p>

                <p className="w-80% flex justify-start ">
                  <span className="font-bold">განხრა: </span>
                  {user.diversion}
                </p>
                <p className="w-80% flex justify-start ">
                  <span className="font-bold">თანამდებობა:</span> მთავარი შრომის
                  ინსპექტორის მოადგილე
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[16%]  w-95% justify-end items-center flex gap-[2%]">
          <button className="bg-sidebarChoose text-white font-semibold w-20% h-1/2 rounded-lg shadow-bottom-right">
            გაგზავნა
          </button>
          <button
            className="bg-sidebarChoose text-white font-semibold  w-20% h-1/2 rounded-lg shadow-bottom-right"
            onClick={() => handleClick()}
          >
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveTask;
