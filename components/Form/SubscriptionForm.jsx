import React, { useState, useContext, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";

import { StoreContext } from "../../lib/Store";

// Custom Form
const CustomForm = ({ status, message, onValidated }) => {
  let [emailValue, setEmailValue] = useState("");
  const getInputValue = (value) => setEmailValue(value);

  let { setSubscriptionModal, loading, setLoading } = useContext(StoreContext);

  console.log(status);

  useEffect(() => {
    if (status === "success" || status === "error") setLoading(false);
    if (status === "success") setSubscriptionModal(true);
  }, [status, setSubscriptionModal, setEmailValue, setLoading]);

  let handleForm = (e) => {
    e.preventDefault();

    emailValue.indexOf("@") > -1 &&
      onValidated({
        EMAIL: emailValue,
      });
    setLoading(true);
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
      <Button
        label="Join the Waitlist"
        isFilled={emailValue.length > 1 ? true : false}
        isLoading={loading}
      />
    </form>
  );
};

// Mailchimp Form
export const SubscriptionForm = () => {
  let u = process.env.MAILCHIMP_U;
  let id = process.env.MAILCHIMP_ID;

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
