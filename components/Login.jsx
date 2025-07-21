export const Login = () => {
  return (
    <div className="flex flex-1 flex-col text-xs sm:text-sm justify-center items-center bg-green-300 ">
      <h1 className="font-extrabold text-2xl">Login</h1>
      <input
        type="text"
        placeholder="Email address..."
        className="outline-none text-slate-900 p-2 w-full max-w-[30ch]"
      />
    </div>
  );
};
