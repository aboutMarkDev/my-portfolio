"use client";

import React from "react";
import { useSectionContext } from "@/context/SectionContext";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmailSchema } from "@/lib/validations";

const words = [
  {
    text: "Let's",
  },
  {
    text: "start",
  },
  {
    text: "building",
  },
  {
    text: "awesome",
  },
  {
    text: "apps!",
    className: "text-primary",
  },
];

type FormTypeValues = z.infer<typeof sendEmailSchema>;

export default function Contact() {
  const { sectionRefs } = useSectionContext();

  const { pending } = useFormStatus();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypeValues>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormTypeValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="py-8 space-y-10" id="contact" ref={sectionRefs[3]}>
      <div className="w-full max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center">
        <h3 className="text-lg">The road to success starts here.</h3>

        <TypewriterEffectSmooth words={words} />

        <h2 className="text-muted-foreground">
          Feel free to react out to me by sending an email. And I will respond
          as soon as possible!
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto py-5 space-y-5"
      >
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <Input id="name" className="h-10" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            className="h-10"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            className="h-[16rem] resize-none"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <Button
          disabled={pending}
          type="submit"
          size="lg"
          className="w-full hover:bg-secondary font-medium"
        >
          {pending ? "Loading..." : "Send"}
        </Button>
      </form>

      <h4 className="text-center">Thank you for visiting my page!</h4>
    </section>
  );
}
