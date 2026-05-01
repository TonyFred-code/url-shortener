export default function NavBar() {
  return (
    <nav className="hidden flex-1 md:flex justify-between">
      <ul className="flex gap-12 capitalize text-gray-900 items-center">
        <li>
          <button className="capitalize">features</button>
        </li>
        <li>
          <button className="capitalize">pricing</button>
        </li>
        <li>
          <button className="capitalize">resources</button>
        </li>
      </ul>
      <ul className="flex gap-12 items-center">
        <li>
          <button className="capitalize">login</button>
        </li>
        <li className="">
          <button className="bg-blue-400 capitalize rounded-full px-6 py-3 text-white">
            sign up
          </button>
        </li>
      </ul>
    </nav>
  );
}
