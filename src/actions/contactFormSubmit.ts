"use server";
import emailjs from "@emailjs/browser";

export const validateAndSendEmail = async (
  currentFormRef: HTMLFormElement | null,
): Promise<{ success: boolean; message: string }> => {
  try {
    new Promise((resolve) => setTimeout(resolve, 1500));

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (currentFormRef) {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, currentFormRef, {
        publicKey: PUBLIC_KEY,
      });

      currentFormRef.reset();

      return {
        success: true,
        message: "Form submitted successfully",
      };
    }

    return {
      success: false,
      message: "Error trying to send email",
    };
  } catch (error) {
    console.log("ERROR TRYING TO SEND EMAILS: ", error);
    return {
      success: false,
      message: "Error trying to send email",
    };
  }
};
