import React from "react";

const Navbar = () => {
  const GITHUB_URL = "https://github.com/Navyap013";

  const openGitHub = () => {
    window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="relative z-10 bg-slate-800 text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-5 h-14">
        <div className="font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>

        <button
          onClick={openGitHub}
          className="text-white bg-green-600 rounded-full flex gap-2 items-center hover:bg-green-700 transition px-3 py-1.5"
        >
          <img className="invert w-6 h-6" src="/github.svg" alt="GitHub logo" />
          <span className="font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
