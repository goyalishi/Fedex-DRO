import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
        <h2 className="text-lg font-bold mb-4">Emissions Data</h2>
        {/* Add emissions data here */}
      </div>
    </div>
  );
};

export default Modal;