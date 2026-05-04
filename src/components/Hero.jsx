export default function Hero() {
  return (
    <section className="flex flex-col p-3 md:flex-row overflow-hidden md:px-12 lg:px-32 max-h-200 gap-8 md:py-8">
      <div className="flex flex-col items-center text-center md:flex-1 md:text-left md:items-start md:justify-center">
        <h1 className="text-5xl poppins-extrabold lg:text-7xl text-gray-900 mb-4">
          More than just shorter links
        </h1>
        <p className="text-gray-500 text-xl">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <button
          type="button"
          className="my-4 rounded-full bg-blue-400 text-white py-3 px-12 poppins-bold capitalize md:my-8 cursor-pointer hover:bg-blue-450"
        >
          get started
        </button>
      </div>
      <div className="-order-1 md:order-0 flex-1">
        <img
          src="/images/illustration-working.svg"
          className="max-w-none w-[135%] translate-x-[4.5%] h-full"
          alt=""
        />
      </div>
    </section>
  );
}
