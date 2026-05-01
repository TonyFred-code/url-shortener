export default function Features() {
  return (
    <section className="bg-gray-400/20 px-6 lg:px-24 lg:py-15 py-10 text-center flex flex-col gap-4 md:items-center">
      <header className="space-y-3 md:max-w-md">
        <h2 className="capitalize text-gray-950 text-2xl poppins-bold lg:text-4xl">
          advanced statistics
        </h2>
        <p className="text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <div className="relative">
        <div className="w-3 bg-blue-400 h-10/12 top-1/2 -translate-y-1/2 absolute -z-10 left-1/2 -translate-x-1/2 lg:w-10/12 lg:h-3"></div>
        <ul className="flex gap-12 my-12 flex-col items-center lg:flex-row">
          <li>
            <div className="lg:mb-30 feature-card">
              <div className="feature__icon-container">
                <span className="size-10 lg:size-12 flex items-center justify-center">
                  <img
                    src="/images/icon-brand-recognition.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </span>
              </div>
              <h3 className="feature__header">brand recognition</h3>
              <p className="feature__description">
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing. Branded links help instil confidence in
                your content.
              </p>
            </div>
          </li>
          <li>
            <div className="feature-card">
              <div className="feature__icon-container">
                <span className="size-10 lg:size-12 flex items-center justify-center">
                  <img
                    src="/images/icon-detailed-records.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </span>
              </div>
              <h3 className="feature__header">detailed records</h3>
              <p className="feature__description">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </li>
          <li>
            <div className="feature-card lg:-mb-30">
              <div className="feature__icon-container">
                <span className="size-10 lg:size-12 flex items-center justify-center">
                  <img
                    src="/images/icon-fully-customizable.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </span>
              </div>
              <h3 className="feature__header">fully customizable</h3>
              <p className="feature__description">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
