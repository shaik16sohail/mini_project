import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Attempt:", { email, password, username });
  };

  return (
    <div className="flex justify-center items-center h-screen  mt-[140px] mb-[80px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-lg  border border-black w-[400px] mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">SignUp</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Role</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="Stranger">Stranger</option>
            <option value="Household">Household</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded border-black border hover:bg-black transition"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
