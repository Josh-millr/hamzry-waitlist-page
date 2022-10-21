import React, { useState, useContext, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";

import { StoreContext } from "../../lib/Store";

// Custom Form
const CustomForm = ({ status, message, onValidated }) => {
  let [emailValue, setEmailValue] = useState("");
  const getInputValue = (value) => setEmailValue(value);

  let { setSubscriptionModal } = useContext(StoreContext);

  console.log(status);
  
  useEffect(() => {
    if (status === "error") setSubscriptionModal(true);
  }, [status, setSubscriptionModal, setEmailValue]);

  let handleForm = (e) => {
    e.preventDefault();

    // check and submit email
    emailValue.indexOf("@") > -1 &&
      onValidated({
        EMAIL: emailValue,
      });
  };

  return (
    <form
      onSubmit={(e) => handleForm(e)}
      className="grid w-full place-items-center items-end gap-y-[16px] sm:flex sm:gap-x-[16px]"
    >
      <TextInput
        label="Email Address"
        type="email"
        placeholder="eg. joshuae.miller100@gmail.com"
        getValue={getInputValue}
        value={emailValue}
      />
      <Button label="Join the Waitlist" />
    </form>
  );
};

// Mailchimp Form
export const SubscriptionForm = () => {
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
