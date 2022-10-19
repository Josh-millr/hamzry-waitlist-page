import React from "react";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  TextInput,
  Button,
  TextArea,
} from "../components/index";

const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="grid grid-cols-1 grid-rows-1 px-[24px] pb-[100px] md:px-[72px] lg:grid-cols-2 lg:grid-rows-1  lg:py-[32px]">
      {/* Column 1 */}
      <div className="flex flex-col gap-y-[32px] py-[24px]">
        {/*  */}
        <div className="grid w-full place-content-center lg:place-content-start">
          <div className="block lg:hidden">
            <Image
              src="/3d-hand.svg"
              height={80}
              width={96}
              alt="Hamzry Logo"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/3d-hand.svg"
              height={146}
              width={177}
              alt="Hamzry Logo"
            />
          </div>
        </div>
        {/*  */}
        <div className="grid hidden gap-y-[8px] lg:block">
          <h2 className="text-[20px] font-bold">Follow us on social media.</h2>
          <p className="text-[14px]">
            You can send us a message too, we are so happy to respond.
          </p>
        </div>
        {/*  */}
        {/* Add the respective links */}
        <div className="hidden w-[fit-content] lg:block">
          <ul className="grid grid-cols-2 grid-rows-2 gap-[16px] font-bold underline decoration-[#009879]">
            <li className="flex gap-x-[8px]">
              <Instagram />
              <p className="text-[14px]">Instagram@Hamzry</p>
            </li>
            <li className="flex gap-x-[8px]">
              <Linkedin />
              <p className="text-[14px]">Linkedin@Hamzry</p>
            </li>
            <li className="flex gap-x-[8px]">
              <Twitter />
              <p className="text-[14px]">Twitter@Hamzry</p>
            </li>
            <li className="flex gap-x-[8px]">
              <Facebook />
              <p className="text-[14px]">Facebook@Hamzry</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Column 2 */}
      <div className="grid grid-cols-1 grid-rows-1 gap-y-[32px]">
        <div className="">
          <h1 className="text-center text-[40px] font-bold leading-tight tracking-tight lg:text-start lg:text-[40px]">
            Your
            <span className="text-[#009879]"> thoughts </span>
            <br className="block sm:hidden" />
            matter to us.
          </h1>
          <p className="text-center text-[14px] sm:text-[16px] lg:m-[0] lg:text-start">
            Let us know what you like to see on our product.
          </p>
        </div>
        <div className="">
          <form
            onSubmit={formHandler}
            className="grid w-full place-items-center items-end gap-y-[8px] sm:gap-x-[16px] lg:place-items-start"
          >
            <TextInput label="Full Name" placeholder="eg. samuel maddu oge " />
            <TextInput
              label="Email Address"
              placeholder="eg. joshuae.miller100@gmail.com"
            />
            <TextArea
              label="Optional Message"
              placeholder="Your message to us (optional"
            />
            <Button label="Submit" />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 place-items-center gap-y-[24px] py-[24px] text-center lg:hidden">
        <span className="h-[1px] w-[50%] bg-[#E8E8E8]" />
        <div className="grid gap-y-[8px]">
          <h2 className="text-[20px] font-bold">Follow us on social media.</h2>
          <p className="text-[14px]">
            You can send us a message too, we are so happy to respond.
          </p>
        </div>
        <div className="">
          <ul className="grid grid-cols-2 grid-rows-2 gap-[16px] font-bold underline decoration-[#009879]">
            <li className="flex gap-x-[8px]">
              <Instagram />
              <p className="text-[14px]">Instagram@Hamzry</p>
            </li>
            <li className="flex gap-x-[8px]">
              <Linkedin />
              <p className="text-[14px]">Linkedin@Hamzry</p>
            </li>
            <li className="flex gap-x-[8px]">
              <Twitter />
              <p className="text-[14px]">Twitter@Hamzry</p>
            </li>
            <li className="flex gap-x-[8px]">
              <Facebook />
              <p className="text-[14px]">Facebook@Hamzry</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
