import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              href="#"
              className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <Image
            src="/illustration-working.svg"
            alt=""
            width={733}
            height={482}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
