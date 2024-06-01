import React from "react";

const Response = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div className="flex justify-center items-center mt-20 ml-1">
      <div className="flex items-center p-4 bg-gray-900 text-white rounded-lg">
        <img
          src="https://placehold.co/40x40"
          alt="chatbot icon"
          className="mr-2 w-10 h-10"
        />
        <span>Hello there!! How can I help you today?</span>
      </div>
    </div>
    </div>
  );
};

export default Response;