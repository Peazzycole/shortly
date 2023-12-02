"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type LinkWrapperProps = {
  links: {
    oldLink: string;
    newLink: string;
  }[];
};

const LinkWrapper = (props: LinkWrapperProps) => {
  const [copied, setCopied] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      {props.links.map((link, i) => (
        <div
          className="flex flex-col items-center justify-between w-full p-6 bg-white dark:bg-darkViolet rounded-lg md:flex-row"
          key={i}
        >
          <p className="font-bold text-center text-veryDarkViolet md:text-left truncate max-w-[30ch] dark:text-white">
            {link.oldLink}
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan truncate max-w-[20ch]">
              {link.newLink}
            </div>
            <CopyToClipboard
              text={link.newLink}
              onCopy={() => {
                setCopied(true);
                setIndex(i);
              }}
            >
              <button
                className={`p-2 px-8 text-white ${
                  index === i && copied
                    ? "bg-darkViolet dark:bg-grayishViolet"
                    : "bg-cyan "
                } rounded-lg hover:opacity-70 focus:outline-none`}
              >
                Copy
              </button>
            </CopyToClipboard>
          </div>
        </div>
      ))}
    </>
  );
};

export default LinkWrapper;
