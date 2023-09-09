"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { contactUsFormFields } from "@/constants/form";

import ErrorSpan from "./ErrorSpan";
import { SubmitButton } from "../buttons/contact-us";
import { Modal } from "../modal";


export type SubmissionStatus = "initial" | "sending" | "success" | "error";

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = React.useState<SubmissionStatus>("initial");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      setSubmissionStatus("sending");
      await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then(res => {
        if(res.status === 201) setTimeout(() => setSubmissionStatus("success"), 2000);
        else setTimeout(() => setSubmissionStatus("error"), 2000);
      });
    } catch (err: any) {
      setSubmissionStatus("error");
    } finally {
      setTimeout(() => {
        setSubmissionStatus("initial");
        reset();
      }, 6000);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className={`flex flex-col ${errors.from_name?.message ? "text-warning" : ""}`}>
        <label htmlFor={contactUsFormFields.name}>İsim</label>
        <input
          autoComplete="off"
          className={twMerge("bg-transparent outline-none py-1 border-b-2 border-white", errors.from_name ? "border-b-2 border-warning" : "")}
          {...register(contactUsFormFields.name, {
            required: "Lütfen adınızı yazınız.",
            minLength: {
              value: 3,
              message: "Adınız en az 3 karakterden oluşmalıdır.",
            },
          })}
        />
        <ErrorSpan text={errors.from_name?.message as string} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className={`flex flex-col ${errors.reply_to?.message ? "text-warning" : ""}`}>
          <label htmlFor={contactUsFormFields.email}>Email</label>
          <input
            autoComplete="off"
            className={twMerge("bg-transparent outline-none py-1 border-b-2 border-white", errors.reply_to ? "border-b-2 border-warning" : "")}
            {...register(contactUsFormFields.email, {
              required: "Lütfen email adresinizi giriniz.",
              maxLength: {
                value: 70,
                message: "Email adresiniz en fazla 70 karakter olabilir.",
              },
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Lütfen geçerli bir email adresi giriniz.",
              },
            })}
          />
          <ErrorSpan text={errors.reply_to?.message as string} />
        </div>
        <div className={`flex flex-col ${errors.phone_number ? "text-warning" : ""}`}>
          <label htmlFor={contactUsFormFields.phone}>Telefon</label>
          <input
            autoComplete="off"
            className={twMerge("bg-transparent outline-none py-1 border-b-2 border-white", errors.phone_number ? "border-b-2 border-warning" : "")}
            {...register(contactUsFormFields.phone, {
              validate: {
                matchPattern: (v) =>
                  /^(5\d{9}|[1-9]\d{9})$/.test(v) ||
                  "Lütfen telefon numaranızı başında sıfır olmadan giriniz.",
              },
            })}
            onChange={(e) => { // used to trim the value
              const trimmedValue = e.target.value.trim();
              setValue(contactUsFormFields.phone, trimmedValue);
              trigger(contactUsFormFields.phone);
            }}
          />
          <ErrorSpan text={errors.phone_number?.message as string} />
        </div>
      </div>
      <div className={`flex flex-col ${errors.message ? "text-warning" : ""}`}>
        <label htmlFor={contactUsFormFields.message}>Mesaj</label>
        <textarea
          autoComplete="off"
          className={twMerge("bg-transparent outline-none py-1 border-b-2 border-white", errors.message ? "border-b-2 border-warning" : "")}
          cols={40} rows={5}
          {...register(contactUsFormFields.message, {
            required: "Lütfen bir mesaj giriniz.",
            validate: {
              matchPattern: (v) =>
                v.length > 25 ||
                "Mesaj en az 25 karakter olmalıdır."
            },
          })}
        />
        <ErrorSpan text={errors.message?.message as string} />
      </div>
      <SubmitButton disabled={Object.keys(errors).length > 0} status={submissionStatus} type="submit" />
      {submissionStatus === "error" &&
        <Modal onClose={() => setSubmissionStatus("initial")}>
          <div className="flex w-full h-40 items-center justify-center bg-black text-white">
            <p>Bir hata oluştu. Lütfen tekrar deneyiniz.</p>
          </div>
        </Modal>
      }
    </form>
  );
};

export default ContactForm;