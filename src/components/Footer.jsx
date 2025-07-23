import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 left-0 w-full py-4 z-50">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <div>Your passwords. Your control.</div>
      </div>
    </div>
  );
};

export default Footer;
