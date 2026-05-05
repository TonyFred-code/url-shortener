export default function Boost() {
  return (
    <section className="px-6 py-28 bg-purple-950 text-white text-center flex flex-col items-center justify-center gap-8 bg-[url('/images/bg-boost-mobile.svg')] bg-cover md:bg-[url('/images/bg-boost-desktop.svg')] md:py-14">
      <h2 className="text-3xl font-bold">Boost your links today</h2>
      <button
        type="button"
        className="rounded-full py-3 px-12 font-bold bg-blue-400 capitalize text-xl hover:bg-blue-450 cursor-pointer"
      >
        get started
      </button>
    </section>
  );
}
