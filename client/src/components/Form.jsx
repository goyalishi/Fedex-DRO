import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const Form = () => {
  const [formData, setFormData] = useState({
    start: "",
    destination: "",
    vehicle: "",
    fuelType: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handlePlaceChanged = (autocomplete, field) => {
    const place = autocomplete.getPlace();
    setFormData({ ...formData, [field]: place.formatted_address });
  };

  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Plan Your Route</h2>
      <form className="space-y-4" onSubmit={(e) => {e.preventDefault()
        console.log(formData);}
      }>
        <div>
          <label className="block text-gray-700" htmlFor="start">Starting Location</label>
          <Autocomplete
            onLoad={(autocomplete) => (window.startAutocomplete = autocomplete)}
            onPlaceChanged={() => handlePlaceChanged(window.startAutocomplete, "start")}
          >
            <input
              type="text"
              id="start"
              name="start"
              value={formData.start}
              onChange={changeHandler}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Starting Place"
            />
          </Autocomplete>
        </div>
        <div>
          <label htmlFor="destination" className="block text-gray-700">Destination</label>
          <Autocomplete
            onLoad={(autocomplete) => (window.destinationAutocomplete= autocomplete)}
            onPlaceChanged={() => handlePlaceChanged(window.destinationAutocomplete, "destination")}
          >
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={changeHandler}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Destination"
            />
          </Autocomplete>
        </div>
        <div>
          <label htmlFor="vehicle" className="block text-gray-700">Vehicle</label>
          <select
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="bus">Bus</option>
            <option value="truck">Truck</option>
          </select>
        </div>
        <div>
          <label htmlFor="fuelType" className="block text-gray-700">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="cng">CNG</option>
            <option value="electric">Electric</option>
            <option value="other">Other</option>
            
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Find Route</button>
      </form>
    </div>
  );
};

export default Form;
