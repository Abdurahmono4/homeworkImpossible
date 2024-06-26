import { Form, Link, useActionData } from "react-router-dom"; // Corrected import
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const data = useActionData();
  // Assuming useActionData is defined elsewhere
  const { signin } = useLogin();
  const { registerWithGoogle } = useRegister();

  useEffect(() => {
    if (data) {
      signin(data);
    }
  }, [data]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r ">
      <Form
        method="post"
        className="card w-96 p-8shadow-lg rounded-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <input
          type="email"
          name="email"
          placeholder="yourgmail@gmail.com"
          className="input input-bordered w-full mt-2"
        />
        <input
          type="password"
          name="password"
          placeholder="********"
          className="input input-bordered w-full mt-2"
        />
        <button
          type="submit"
          className="btn btn-primary btn-block capitalize mt-4"
        >
          Login
        </button>
        <button
          type="button"
          onClick={registerWithGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2 mt-2"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-lg">Google</span>
        </button>
        <p className="text-center">
          Are you alreadey registerad ?
          <Link className="link text-cyan-400" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
