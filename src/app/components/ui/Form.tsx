"use client";

import React, { useState } from "react";
import Spinner from "./Spinner";
import * as dotenv from "dotenv";

type FormProp = {
  getDataFromForm: (data: { oldLink: string; newLink: string }) => void;
};

const Form = (props: FormProp) => {
  dotenv.config();

  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (link === "") {
      setError("Field cannot be empty");
      return;
    }
    setIsLoading(true);
    const url = "https://url-shortener23.p.rapidapi.com/shorten";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY!,
        "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: link,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const formData = {
        oldLink: link,
        newLink: result.short_url,
      };

      props.getDataFromForm(formData);

      setLink("");
      setError("");
      setIsLoading(false);
    } catch (error) {
      setError("Request failed");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      id="link-form"
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3 dark:bg-white"
    >
      <input
        type="text"
        value={link}
        className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none dark:placeholder-white dark:bg-darkViolet"
        placeholder="Shorten a link here"
        id="link-input"
        onChange={(e) => setLink(e.target.value)}
      />

      <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
        {isLoading ? <Spinner /> : "Shorten It!"}
      </button>

      <div
        id="err-msg"
        className="absolute left-7 bottom-3 text-red text-sm italic"
      >
        {error}
      </div>
    </form>
  );
};

export default Form;
