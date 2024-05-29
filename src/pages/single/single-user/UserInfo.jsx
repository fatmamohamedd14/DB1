import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
const UserInfo = ({ getUser, user }) => {
  const formatDate = (timestamp) => {
    // Convert to Date object
    const date = new Date(timestamp);

    // Extract the date in yyyy-mm-dd format
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Name:</span> {user?.name}
      </p>{" "}
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Role:</span> {user?.role}
      </p>
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Email:</span> {user?.email}
      </p>
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Age:</span> {user?.age}
      </p>
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Active:</span>{" "}
        {user?.isActive ? "True" : "False"}
      </p>
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Status:</span> {user?.status}
      </p>
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">verified:</span>{" "}
        {user?.verifyEmail ? (
          <CheckCircleIcon className="text-green-500" />
        ) : (
          <DangerousIcon className="text-red-500" />
        )}
      </p>
      <p className="border rounded-md drop-shadow-sm flex flex-col gap-2 bg-white p-2">
        <span className="font-bold">Created at:</span>{" "}
        {formatDate(user.createdAt)}
      </p>
    </div>
  );
};
export default UserInfo;
