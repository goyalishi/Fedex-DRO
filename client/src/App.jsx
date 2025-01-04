import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col md:flex-row flex-grow">
        <section className="w-full md:w-[35%] bg-white p-4 shadow">
          <Form />
        </section>
        <section className="w-full md:w-[65%] p-4">
          <Map />
        </section>
      </main>
      <Sidebar />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;