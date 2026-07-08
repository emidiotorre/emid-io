import useClipboard from "../hooks/useClipboard";

const EMAIL = "emidio.torre@gmail.com";

type Variant = "solid" | "onDark" | "ghost";

const styles: Record<Variant, string> = {
  solid:
    "bg-ink text-paper hover:bg-accent-strong focus-visible:bg-accent-strong",
  onDark:
    "bg-on-abyss text-abyss hover:bg-accent hover:text-paper focus-visible:bg-accent focus-visible:text-paper",
  ghost:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper",
};

const CopyEmail: React.FC<{ variant?: Variant; className?: string }> = ({
  variant = "solid",
  className = "",
}) => {
  const [isCopied, setCopied] = useClipboard(EMAIL, { successDuration: 2400 });
  return (
    <button
      type="button"
      onClick={setCopied}
      aria-label={`Copy email address ${EMAIL}`}
      className={`group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-mono text-xs tracking-mono uppercase transition-colors duration-300 ease-out-quart focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
          isCopied ? "bg-c-lo" : "bg-accent group-hover:bg-current"
        }`}
      />
      {isCopied ? "Copied — let's talk" : EMAIL}
    </button>
  );
};

export default CopyEmail;
