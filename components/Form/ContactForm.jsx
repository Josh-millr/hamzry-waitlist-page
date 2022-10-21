import React, { useState, useEffect, useContext } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";

import { StoreContext } from "../../lib/Store";

// Custom Form
const CustomForm = ({ status, message, onValidated }) => {
  let [emailValue, setEmailValue] = useState("");
  let [fullname, setFullName] = useState("");
  let [optMessage, setOptMessage] = useState("");

  let { contactModal ,setContactModal } = useContext(StoreContext);

  useEffect(() => {
    if (status === "error") setContactModal(true);
  }, [status, setContactModal, setEmailValue]);
console.log(contactModal)
  let handleForm = (e) => {
    e.preventDefault();

    // Chech email value
    emailValue.indexOf("@") > -1 &&
      onValidated({
        EMAIL: emailValue,
        MERGE1: fullname,
        MERGE2: optMessage,
      });
  };
  console.log(status);

  return (
    <form
      onSubmit={(e) => handleForm(e)}
      className="grid w-full place-items-center items-end gap-y-[8px] sm:gap-x-[16px] lg:place-items-start"
    >
      <TextInput
        label="Full Name"
        type="text"
        placeholder="eg. samuel maddu oge "
        getValue={setFullName}
        value={fullname}
      />
      <TextInput
        label="Email Address"
        type="email"
        placeholder="eg. joshuae.miller100@gmail.com"
        getValue={setEmailValue}
        value={emailValue}
      />
      <TextArea
        label="Optional Message"
        placeholder="Your message to us (optional"
        getValue={setOptMessage}
        value={optMessage}
      />
      <Button label="Submit" />
    </form>
  );
};

// Mailchimp Form
export const ContactForm = () => {
  let u = "5749b703f6ec75b763ba46600";
  let id = "b80962623e";

  const postUrl = `https://hamzry.us8.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
