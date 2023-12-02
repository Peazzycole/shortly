"use client";

import React, { useState } from "react";
import Form from "./ui/Form";
import LinkWrapper from "./ui/LinkWrapper";

interface LinksProp {
  oldLink: string;
  newLink: string;
}

const Shorten = () => {
  const [links, setLinks] = useState<LinksProp[]>([]);

  const getDataFromForm = (data: { oldLink: string; newLink: string }) => {
    setLinks((prev) => {
      return [data, ...prev];
    });
  };

  return (
    <section
      id="shorten"
      className="relative bg-gray-100 dark:bg-grayishViolet"
    >
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Form getDataFromForm={getDataFromForm} />
        <LinkWrapper links={links} />
      </div>
    </section>
  );
};

export default Shorten;
