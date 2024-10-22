"use client";

import Button from "./Button";

function RegisterNow() {
  return (
    <div className="grid-row-2 grid gap-[1.6rem] rounded-[1.6rem] bg-primary p-[3.2rem] lg:grid-cols-[0.6fr_1.4fr] lg:gap-x-[2rem]">
      <p className="text-[2rem] font-bold text-neutral-0 lg:text-[2.4rem]">
        Register Now So You Don&apos;t Miss Our Programs
      </p>

      <div className="flex items-center gap-[1.2rem] rounded-[1.4rem] bg-neutral-0 p-[1.2rem] max-lg:flex-col">
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full rounded-[0.8rem] border-[0.1rem] border-neutral-40 p-[1.4rem_2.8rem]"
        />
        <Button type="subscribe" size="large" className="max-lg:w-full">
          Subcribe Now
        </Button>
      </div>
    </div>
  );
}

export default RegisterNow;
