export default function NavBar() {
  return (
    <nav className="hidden flex-1 md:flex justify-between">
      <ul className="flex gap-12 capitalize text-gray-900">
        <li>
          <a href="#">features</a>
        </li>
        <li>
          <a href="#">pricing</a>
        </li>
        <li>
          <a href="#">resources</a>
        </li>
      </ul>
      <ul className="flex gap-12 capitalize">
        <li>
          <a href="#">login</a>
        </li>
        <li className="">
          <a href="#" className="bg-blue-400 rounded-full px-6 py-3 text-white">
            sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}
