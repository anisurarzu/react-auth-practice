import React from "react";
import { useFormik } from "formik";
import { Button, Input } from "antd";
import * as Yup from "yup";
import { apiRequest } from "./api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Too Short!").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await apiRequest(
          "https://archilawn-server.onrender.com/login",
          "POST",
          values
        );
        toast.success("Login successful!");
        console.log(response);
      } catch (error) {
        toast.error("Login failed!");
        console.error(error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-2 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-4 py-2 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex justify-center">
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
