import React from "react";

import { ContactUsButton } from "../buttons";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <div className="border-b-2 border-b-white">
        <input className=" bg-transparent outline-none border-none text-white p-4" placeholder="İsim" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="border-b-2 border-b-white">
          <input className=" bg-transparent outline-none border-none text-white p-4" placeholder="Email" />
        </div>
        <div className="border-b-2 border-b-white">
          <input className="bg-transparent outline-none border-none text-white p-4" placeholder="İsim" />
        </div>
      </div>
      <div className="border-b-2 border-b-white">
        <input className=" bg-transparent outline-none border-none text-white p-4" placeholder="İsim" />
      </div>
      <ContactUsButton />
    </form>
  );
};

export default ContactForm;