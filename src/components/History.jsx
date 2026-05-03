import { arrayOf, shape, string } from "prop-types";
import { useEffect, useRef, useState } from "react";

function CopyButton({ text }) {
  const [textCopied, setTextCopied] = useState(false);
  const [copyError, setCopyError] = useState(null);
  const timeoutRef = useRef(null);

  async function handleCopyText() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    try {
      await navigator.clipboard.writeText(text);
      setTextCopied(true);
    } catch (error) {
      setCopyError(error);
      console.error(error);
    } finally {
      timeoutRef.current = setTimeout(() => {
        setCopyError(null);
        setTextCopied(false);
      }, 2000);
    }
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <button
      type="button"
      className={`py-1 px-8 rounded capitalize text-white cursor-pointer ${textCopied ? "bg-purple-950" : copyError ? "bg-red-400" : "bg-blue-400 hover:bg-blue-450 focus-visible:bg-blue-450"}`}
      onClick={handleCopyText}
    >
      {textCopied ? "copied!" : copyError ? "failed!" : "copy"}
    </button>
  );
}

CopyButton.propTypes = {
  text: string.isRequired,
};

function ShortenedLink({ longUrl, shortenedUrl }) {
  return (
    <li className="bg-white rounded flex p-6 flex-col md:flex-row md:items-center gap-8">
      <span className="flex-1 text-gray-900 truncate min-w-0">{longUrl}</span>
      <div className="flex gap-3 md:items-center flex-col md:flex-row">
        <a href={shortenedUrl} className="text-blue-400">
          {shortenedUrl}
        </a>
        <CopyButton text={shortenedUrl} />
      </div>
    </li>
  );
}

ShortenedLink.propTypes = {
  longUrl: string.isRequired,
  shortenedUrl: string.isRequired,
};

export default function History({ links }) {
  return (
    <div className="bg-gray-400/20 p-4 flex justify-center">
      {links.length > 0 && (
        <ul className="flex lg:max-w-4xl w-10/12 flex-col gap-3">
          {links.map((link) => (
            <ShortenedLink
              key={link.longUrl}
              longUrl={link.longUrl}
              shortenedUrl={link.shortUrl}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

History.propTypes = {
  links: arrayOf(shape({ longUrl: string, shortUrl: string })).isRequired,
};
