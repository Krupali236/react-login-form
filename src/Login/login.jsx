import { useState } from "react";
import bg from "../assets/bg/1.jpg";

const Login = () => {
  const [value, setValue] = useState({ username: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValid = () => {
    const alphabetRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};

    if (!value.username || !alphabetRegex.test(value.username)) {
      errors.username = "Please enter a valid username";
    }
    if (!value.password || !passwordRegex.test(value.password)) {
      errors.password =
        "Password must be at least 8 characters with uppercase, lowercase, and a number";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (handleValid()) {
      alert("Submitted Successfully");
      setValue({ username: "", password: "" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-blue-900">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-3">
        {/* Left Side Image (Hidden on Small Screens) */}
        <div className="hidden md:block w-full">
          <img
            src={bg}
            alt="bg"
            className="h-full w-full object-cover rounded-s-2xl"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="col-span-2 p-8">
          <form className="font-sans text-center" onSubmit={handleOnSubmit}>
            <h3 className="font-medium text-3xl mb-6">Login to Your Account</h3>

            {/* Username Input */}
            <div className="my-4">
              <input
                type="text"
                name="username"
                value={value.username}
                placeholder="Username"
                className={`w-full sm:w-96 p-3 border rounded-2xl ${
                  error.username ? "border-red-600" : "border-gray-300"
                }`}
                onChange={handleChange}
              />
              {error.username && (
                <p className="text-red-600 mt-1">{error.username}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="my-4">
              <input
                type="password"
                name="password"
                value={value.password}
                placeholder="Password"
                className={`w-full sm:w-96 p-3 border rounded-2xl ${
                  error.password ? "border-red-600" : "border-gray-300"
                }`}
                onChange={handleChange}
              />
              {error.password && (
                <p className="text-red-600 mt-1">{error.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="my-6">
              <button
                type="submit"
                className="w-full sm:w-96 bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700"
              >
                Login
              </button>
            </div>

            {/* Forgot Password */}
            <div className="my-3">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Social Login Buttons */}
            <div className="my-3">
              <h4 className="font-bold mb-2">Or Login With</h4>
              <div className="flex flex-col lg:flex-row sm:flex-col justify-center items-center sm:space-x-0 lg:space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 my-2 rounded-lg hover:bg-blue-700 w-40">
                  Facebook
                </button>
                <button className="bg-red-600 text-white px-4 py-2  my-2 rounded-lg hover:bg-red-700 w-40">
                  Google
                </button>
                <button className="bg-sky-500 text-white px-4 py-2 my-2  rounded-lg hover:bg-sky-600 w-40">
                  Twitter
                </button>
              </div>
            </div>

            {/* Register Link */}
            <div className="my-3">
              <p className="font-medium">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Register here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
