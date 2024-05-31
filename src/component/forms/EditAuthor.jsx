import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "../ReactModal";
import { editAuthor } from "../../api/authorsApis";

const EditAuthor = ({ data, getAuthor }) => {
  const id = data?._id;
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [serverError, setServerError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: data?.name || "",
      brief: data?.brief || "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brief", data.brief);
    data.image.length > 0 && formData.append("image", data.image[0]);
    editAuthor({ data: formData, setFormStatus, id, setServerError });
  };

  useEffect(() => {
    if (formStatus == "success") {
      // setFormStatus("idle");
      setIsOpen(false);
      getAuthor();
    }
  }, [formStatus]);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xl flex items-center gap-2 border-b border-black hover:text-blue-500 hover:border-b-blue-500 duration-150"
      >
        {" "}
        Edit <EditIcon />
      </button>
      <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
        <h2 className="text-2xl font-semibold">Edit Author</h2>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-h-[90dvh] overflow-auto"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="language">name</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
              placeholder="author name"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", {})}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">brief</label>
            <textarea
              type="text"
              {...register("brief", {
                required: {
                  value: true,
                  message: "brief is required",
                },
              })}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2 h-[120px] resize-none"
            />
            {errors.brief && (
              <p className="text-red-500">{errors.brief.message}</p>
            )}
          </div>

          {formStatus === "failed" && (
            <p className="text-red-500 ">something went wrong</p>
          )}
          <button
            type="submit"
            className="w-full py-2 text-center bg-slate-900 rounded active:scale-[0.98]  duration-150 text-white"
          >
            {formStatus === "loading" ? "loading.." : "Submit"}
          </button>
        </form>
      </ReactModal>
    </div>
  );
};
export default EditAuthor;
