import { useRef, useState } from "react";

import Heading from "./Heading";
import Section from "./Section";
import { validateAndSendEmail } from "../actions/contactFormSubmit";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    message: "",
  });

  const submitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    setIsLoading(true);

    const response = await validateAndSendEmail(formRef.current);

    setFormStatus(response);

    setTimeout(() => {
      setFormStatus({ success: false, message: "" });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container md:pb-10">
        <Heading
          tag="Have a question or need a solution? We're just a message away."
          title="Your Next Step Starts Here"
        />
        <form
          ref={formRef}
          onSubmit={submitForm}
          className=" max-w-[50em] mx-auto"
        >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="fullName"
                className="block text-sm/6 font-medium text-gray-500"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullName"
                  required
                  minLength={3}
                  maxLength={50}
                  autoComplete="fullName"
                  placeholder="Please write your full name..."
                  //defaultValue={state.inputs?.fullName}
                  className="block w-full rounded-md bg-transparent p-3 text-base text-gray-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-500"
              >
                E-Mail
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  required
                  minLength={5}
                  maxLength={50}
                  autoComplete="email"
                  placeholder="Please write your email..."
                  //defaultValue={state.inputs?.email}
                  className="block w-full rounded-md bg-transparent p-3 text-base text-gray-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="subject"
                className="block text-sm/6 font-medium text-gray-500"
              >
                Subject
              </label>
              <div className="mt-2">
                <input
                  type="subject"
                  name="subject"
                  required
                  minLength={3}
                  maxLength={50}
                  autoComplete="subject"
                  placeholder="Please write your subject..."
                  //defaultValue={state.inputs?.subject}
                  className="block w-full rounded-md bg-transparent p-3 text-base text-gray-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm/6 font-medium text-gray-500"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  rows={3}
                  required
                  minLength={3}
                  maxLength={500}
                  placeholder="Please write your message..."
                  //defaultValue={state.inputs?.message}
                  className="block w-full rounded-md bg-transparent p-3 text-base text-gray-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {formStatus.message && (
              <div className="col-span-full">
                {formStatus.success ? (
                  <p className="text-sm/6 font-semibold text-green-500">
                    {formStatus.message}
                  </p>
                ) : (
                  <p className="text-sm/6 font-semibold text-red-500">
                    {formStatus.message}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="reset"
              disabled={isLoading}
              className="text-sm/6 font-semibold text-gray-500"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-indigo-600 disabled:bg-indigo-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
