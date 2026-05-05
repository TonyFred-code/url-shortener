export default function NavBar() {
  return (
    <nav className="hidden flex-1 md:flex justify-between">
      <ul className="flex gap-12 capitalize text-gray-900 items-center">
        <li>
          <a
            href="#"
            className="capitalize  cursor-pointer text-gray-500 hover:text-gray-950"
          >
            features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="capitalize cursor-pointer text-gray-500 hover:text-gray-950"
          >
            pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="capitalize cursor-pointer text-gray-500 hover:text-gray-950"
          >
            resources
          </a>
        </li>
      </ul>
      <ul className="flex gap-12 items-center">
        <li>
          <a
            href="#"
            className="capitalize cursor-pointer text-gray-500 hover:text-gray-950"
          >
            login
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-blue-400 capitalize cursor-pointer rounded-full px-6 py-3 text-white hover:bg-blue-450"
          >
            sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}
