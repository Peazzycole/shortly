"use client";

import React, { useState } from "react";

type FormProp = {
  getDataFromForm: (data: { oldLink: string; newLink: string }) => void;
};

const Form = (props: FormProp) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    if (link === "") {
      setError("Field cannot be empty");
      return;
    }

    const url = "https://url-shortener23.p.rapidapi.com/shorten";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "8324b42b68msh65958239040c55ap1513d5jsn5ba234e8ed75",
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
    } catch (error) {
      console.error(error);
      setError("Request failed");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      id="link-form"
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
    >
      <input
        type="text"
        value={link}
        className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
        placeholder="Shorten a link here"
        id="link-input"
        onChange={(e) => setLink(e.target.value)}
      />

      <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
        Shorten It!
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
