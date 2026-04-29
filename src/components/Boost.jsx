export default function Boost() {
  return (
    <section className="px-6 py-28 boost-section bg-purple-950 text-white text-center flex flex-col items-center justify-center gap-4 bg-[url('/images/bg-boost-mobile.svg')] bg-cover md:bg-[url('/images/bg-boost-desktop.svg')] md:py-14 gap-8">
      <h2 className="text-3xl poppins-bold">Boost your links today</h2>
      <button
        type="button"
        className="rounded-full py-3 px-12 poppins-bold bg-blue-400 capitalize text-xl"
      >
        get started
      </button>
    </section>
  );
}
