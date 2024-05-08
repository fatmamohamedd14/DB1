import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
  return (
    <div className="w-full min-h-[300px] bg-white border rounded drop-shadow-md p-5 flex flex-col justify-between">
      <div className="space-y-3">
        <h3 className="text-4xl font-bold">{data.title} </h3>
        <p className="text-gray-800 text-2xl">
          View, delete or add new {data.name.toLowerCase()} to the system{" "}
        </p>
      </div>
      <Link
        to={data.route}
        className="underline text-xl text-gray-600 hover:text-blue-400 duration-150"
      >
        View {data.name}
      </Link>
    </div>
  );
};
export default HomeCard;
