"use client";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form
      action={formAction}
      className=" px-10 py-20 rounded-lg -bg--bgSoft flex w-1/4 flex-col gap-5 -text--text"
    >
      <h1 className=" text-center text-2xl font-bold">Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        className=" p-3 rounded-md -bg--bg  border border-teal-800 outline-none"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className=" p-3 rounded-md border -bg--bg border-teal-800 outline-none"
      />
      <button className=" bg-teal-500 rounded-md text-white font-bold w-full p-3 hover:opacity-85">
        Login
      </button>
      {state && <small className=" text-center text-red-400">{state}</small>}
    </form>
  );
}
