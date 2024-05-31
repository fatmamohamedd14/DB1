import { useEffect, useState } from "react";
import ReactModal from "../../../component/ReactModal";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import { editUserData } from "../../../api/usersApis";

const EditUserModal = ({ user, getUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      email: user?.email,
      name: user?.name,
      role: user?.role,
    },
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("role", data.role);
    await editUserData({ formData, setFormStatus, id: user._id });
  };
  useEffect(() => {
    if (formStatus === "success") {
      setFormStatus("idle");
      setModalIsOpen(false);
      getUser();
    }
  }, [formStatus, getUser]);
  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        className="text-xl flex items-center gap-2 border-b border-black hover:text-blue-500 hover:border-b-blue-500 duration-150"
      >
        Edit <EditIcon />
      </button>

      <ReactModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <h2 className="text-xl font-semibold">Edit User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label htmlFor="name">Name</label>
            <input
              defaultValue={user.name}
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter the name",
                },
              })}
              className="border p-2 rounded-md w-full focus:outline-none focus:border-slate-800"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input
              defaultValue={user.email}
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter the email",
                },
              })}
              className="border p-2 rounded-md w-full focus:outline-none focus:border-slate-800"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Role</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setValue("role", "user")}
                className={`border px-3 py-1.5 rounded ${
                  watch("role") === "user" && "bg-green-400"
                }`}
              >
                User
              </button>
              <button
                type="button"
                onClick={() => setValue("role", "admin")}
                className={`border px-3 py-1.5 rounded ${
                  watch("role") === "admin" && "bg-green-400"
                }`}
              >
                Admin
              </button>
            </div>
          </div>
          <button className="text-white bg-slate-800 w-full text-center py-2 rounded-lg">
            Submit
          </button>
        </form>
      </ReactModal>
    </>
  );
};
export default EditUserModal;
