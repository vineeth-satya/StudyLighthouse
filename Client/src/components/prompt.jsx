import React from "react";

const flexItemsCenter = 'flex items-center';
const roundedFull = 'rounded-full';

const Prompt = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

    <div className={`${flexItemsCenter} space-x-2 mt-20 ml-96`}> {/* Increased margin-left */}
      <div className="bg-black text-white px-2 py-1 rounded-full">Hello!</div>
      <img
        className={`w-8 h-8 ${roundedFull}`}
        src="https://img.icons8.com/?size=96&id=Hj21JM30swCm&format=png"
        alt="User Avatar"
      />
    </div>
    </div>
  );
}

export default Prompt;