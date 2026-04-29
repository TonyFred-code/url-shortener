import { useState } from "react";

export default function Form() {
  const [url, setUrl] = useState("");
  // const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  function inputUrl(e) {
    setFormError(null);
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const inputURL = formData.get("url").trim();

    if (!inputURL || inputURL === "") {
      setFormError("Please add a link");
      return;
    }
  }

  return (
    <section className="relative p-6 bg-linear-to-b from-white to-gray-400/20 md:bg-none lg:px-24 lg:py-15 flex justify-center">
      <div className="w-full h-1/2 absolute left-0 bg-white top-0 z-10"></div>
      <div className="w-full h-1/2 left-0 bg-gray-400/20 absolute bottom-0 z-10"></div>
      <form
        className="flex flex-col gap-4 bg-[url(/images/bg-shorten-mobile.svg)] bg-size-[75%_60%] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-top-right bg-purple-950 bg-no-repeat p-5 rounded-xl relative z-20 lg:flex-row lg:gap-8 w-10/12 lg:max-w-4xl md:bg-cover"
        onSubmit={handleSubmit}
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
          className="text-center poppins-bold text-white bg-blue-400 p-4 rounded-lg lg:px-15"
        >
          Shorten it!
        </button>
      </form>
    </section>
  );
}
