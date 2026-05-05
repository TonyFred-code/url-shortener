import { useState } from "react";
import useURLHistory from "../hooks/useUrlHistory.jsx";
import History from "./History.jsx";
import { Loader2 } from "lucide-react";

export default function Form() {
  const [url, setUrl] = useState("");
  const [formError, setFormError] = useState(null);
  const { history, updateHistory } = useURLHistory();
  const [formLoading, setFormLoading] = useState(false);

  function inputUrl(e) {
    setFormError(null);
    setUrl(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const inputURL = formData.get("url").trim();

    if (!inputURL) {
      setFormError("Please add a link");
      return;
    }

    setFormLoading(true);
    try {
      const response = await fetch("https://api.tinyurl.com/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          /* Token is exposed client-side -- Known limitation.
          A serverless proxy would be the production solution */
          Authorization: `Bearer ${import.meta.env.VITE_URL_AUTH_TOKEN}`,
        },
        body: JSON.stringify({ url: inputURL }),
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch {
        throw new Error(
          "Server returned an unexpected response. Try again later."
        );
      }

      const { data, errors } = responseData;

      if (!response.ok) {
        let errMsg = "";

        if (errors) {
          errMsg = errors.join(" ");
        } else {
          errMsg = "Failed to create link. Try again later.";
        }

        throw new Error(errMsg);
      }

      updateHistory(data.url, data.tiny_url);
      setFormError(null);
      setUrl("");
    } catch (error) {
      setFormError(error.message);
      console.error(error.message);
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <section className="bg-linear-to-b from-white to-gray-450 py-12">
      <div className="relative px-4 bg-linear-to-b from-white to-gray-450 md:bg-none flex justify-center md:px-6 lg:px-12">
        <div className="w-full h-1/2 absolute left-0 bg-white top-0 z-10"></div>
        <div className="w-full h-1/2 left-0 bg-gray-450 absolute bottom-0 z-10"></div>
        <form
          className="flex flex-col gap-4 bg-[url(/images/bg-shorten-mobile.svg)] bg-size-[75%_60%] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-top-right bg-purple-950 bg-no-repeat p-5 rounded-xl relative z-20 lg:flex-row lg:gap-8 w-10/12 lg:max-w-4xl md:bg-cover"
          onSubmit={handleSubmit}
          aria-busy={formLoading}
        >
          <div className="space-y-2 lg:flex-1">
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Shorten a link here... "
              value={url}
              onInput={inputUrl}
              className={`${formError ? "border-red-400 placeholder:text-red-400/50" : "border-white"} w-full bg-white text-lg placeholder:text-lg placeholder:poppins-medium text-gray-900 border-4 user-invalid:border-red-400 outline-none p-4 rounded-lg lg:placeholder:text-xl lg:px-8`}
            />
            {formError && (
              <span className="italic text-red-400 text-lg">{formError}</span>
            )}
          </div>
          <button
            type="submit"
            className="text-center poppins-bold text-white bg-blue-400 p-4 outline-none focus-visible:bg-blue-450 rounded-lg lg:px-15 flex lg:self-start items-center justify-center hover:bg-blue-450 border-4 border-blue-400 hover:border-blue-450 cursor-pointer"
            disabled={formLoading}
          >
            {formLoading ? (
              <span className="flex gap-3 capitalize items-center">
                <Loader2
                  className="animate-spin"
                  size={"23px"}
                  strokeWidth={"3px"}
                />
                loading...
              </span>
            ) : (
              "Shorten it!"
            )}
          </button>
        </form>
      </div>
      {history.length > 0 && <History links={history} />}
    </section>
  );
}
