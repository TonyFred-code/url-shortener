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
            <li>link shortening</li>
            <li>branded links</li>
            <li>analytics</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-white poppins-bold">resources</h3>
          <ul className="space-y-0.5 text-white/70">
            <li>blog</li>
            <li>developers</li>
            <li>support</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-white poppins-bold">company</h3>
          <ul className="space-y-0.5 text-white/70">
            <li>about</li>
            <li>our team</li>
            <li>careers</li>
            <li>contact</li>
          </ul>
        </div>
        <ul className="flex gap-6 py-3">
          <li>
            <span>
              <img src="/images/icon-facebook.svg" alt="Facebook" />
            </span>
          </li>
          <li>
            <span>
              <img src="/images/icon-twitter.svg" alt="twitter" />
            </span>
          </li>
          <li>
            <span>
              <img src="/images/icon-pinterest.svg" alt="Pinterest" />
            </span>
          </li>
          <li>
            <span>
              <img src="/images/icon-instagram.svg" alt="Instagram" />
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
