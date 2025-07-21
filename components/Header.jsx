const Header = () => {
  return (
    <>
      <div className="sticky top-0 w-full left-0 bg-green-300 text-green-700 dark:text-green-700 flex justify-between items-center p-4 px-6 border-b border-white">
        <h1 className="text-3xl sm:text-6xl select-none">TODO LIST</h1>
        <i className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
      </div>
    </>
  );
};

export default Header;
