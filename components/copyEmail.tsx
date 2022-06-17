import useClipboard from "../hooks/useClipboard";

const CopyEmail: React.FC<{}> = function () {
  const [isCopied, setCopied] = useClipboard("emidio.torre@gmail.com", {
    successDuration: 3000,
  });
  return (
    <div
      onClick={setCopied}
      className="cursor-pointer transition-all duration-300  bg-white px-4 py-2 rounded-full text-primo hover:bg-primo hover:text-secondo text-xl uppercase"
    >
      {isCopied ? "Email address copied!" : "say Hi! 👋 "}
    </div>
  );
};
export default CopyEmail;
