import React from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignin,
}: Props) {
  return (
    <div className="">
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm  ">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full bg-white text-black"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full bg-white text-black"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  );
}
