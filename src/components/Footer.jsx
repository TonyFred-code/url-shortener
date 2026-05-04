export default function Footer() {
  return (
    <footer className="px-6 py-12 flex flex-col gap-8 items-center text-center bg-gray-950 capitalize poppins-medium lg:flex-row lg:text-left lg:items-stretch">
      <h2 className="text-white text-4xl poppins-bold lg:flex-1 text-center my-4">
        shortly
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-3 gap-8 md:w-full md:justify-around">
        <div className="space-y-4">
          <h3 className="text-white poppins-bold">features</h3>
          <ul className="space-y-0.5 text-white/70">
            <li className="cursor-pointer hover:text-blue-400">
              link shortening
            </li>
            <li className="cursor-pointer hover:text-blue-400">
              branded links
            </li>
            <li className="cursor-pointer hover:text-blue-400">analytics</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-white poppins-bold">resources</h3>
          <ul className="space-y-0.5 text-white/70">
            <li className="cursor-pointer hover:text-blue-400">blog</li>
            <li className="cursor-pointer hover:text-blue-400">developers</li>
            <li className="cursor-pointer hover:text-blue-400">support</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-white poppins-bold">company</h3>
          <ul className="space-y-0.5 text-white/70">
            <li className="cursor-pointer hover:text-blue-400">about</li>
            <li className="cursor-pointer hover:text-blue-400">our team</li>
            <li className="cursor-pointer hover:text-blue-400">careers</li>
            <li className="cursor-pointer hover:text-blue-400">contact</li>
          </ul>
        </div>
        <ul className="flex gap-6 py-3 text-white">
          <li>
            <a
              href="https://www.facebook.com/"
              className="cursor-pointer hover:text-blue-400"
            >
              <img src="/images/icon-facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <img src="/images/icon-twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <img src="/images/icon-pinterest.svg" alt="Pinterest" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="hover:text-blue-400 cursor-pointer"
            >
              <img src="/images/icon-instagram.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
