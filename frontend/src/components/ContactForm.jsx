import { useForm } from "react-hook-form";
import api from "../utils/axiosConfig";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await api.post("/contact", data);
      reset();
      toast.success(res.data.msg);
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Something went wrong");
    }
  };

  
  return (
    <div className="w-full md:w-1/2 flex items-center">
        <div className="w-full bg-white h-fit rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Save a Contact
            </h1>

            <form
                onSubmit={handleSubmit(submitHandler)}
                className="space-y-4"
                autoComplete="off"
            >
            {/* Name */}
            <div>
                <label className="block text-md font-medium text-gray-700 mb-2 pt-2">
                Name
                </label>
                <input
                {...register("name", {
                    required: "Name is required",
                    minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                    },
                })}
                type="text"
                placeholder="Enter full name"
                autoComplete="off"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                        ${
                        errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "focus:ring-blue-500"
                        }`}
                />
                {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label className="block text-md font-medium text-gray-700 mb-2 pt-2">
                Phone Number
                </label>
                <input
                {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                    },
                })}
                type="text"
                placeholder="Enter phone number"
                autoComplete="off"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                    ${
                    errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                />
                {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label className="block text-md font-medium text-gray-700 mb-2 pt-2">
                Email Address
                </label>
                <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email address",
                    },
                })}
                type="email"
                placeholder="Enter email address"
                autoComplete="off"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                    ${
                    errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                />
                {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                </p>
                )}
            </div>

            {/* Message */}
            <div>
                <label className="block text-md font-medium text-gray-700 mb-2 pt-2">
                Message (Optional)
                </label>
                <textarea
                {...register("message", {
                    maxLength: {
                    value: 200,
                    message: "Message cannot exceed 200 characters",
                    },
                })}
                placeholder="Write message here..."
                rows="3"
                autoComplete="off"
                className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2
                    ${
                    errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                />
                {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 hover:cursor-pointer transition duration-200"
            >
                Save Contact
            </button>
            </form>
        </div>
    </div>

  );
};

export default ContactForm;
