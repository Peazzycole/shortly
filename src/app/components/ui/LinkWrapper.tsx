type LinkWrapperProps = {
  links: {
    oldLink: string;
    newLink: string;
  }[];
};

const LinkWrapper = (props: LinkWrapperProps) => {
  return (
    <>
      {props.links.map((link, i) => (
        <div
          className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
          key={i}
        >
          <p className="font-bold text-center text-veryDarkViolet md:text-left truncate max-w-[30ch]">
            {link.oldLink}
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan truncate max-w-[20ch]">
              {link.newLink}
            </div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default LinkWrapper;
