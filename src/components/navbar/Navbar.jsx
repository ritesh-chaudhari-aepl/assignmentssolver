import { nav } from "../../data/nav";

function Navbar() {
  function handleScroll(section) {
    let value = document.getElementById(section);
    console.log(value);
    if (value) {
      value.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
  return (
    <nav>
      <ul className="flex sm:gap-4">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={name}>
              <a
                onClick={() => handleScroll(href)}
                className="text-white cursor-pointer hover:text-pink-darkPink  rounded-md font-Arvo sm:text-base font-medium transition"
                // href={href}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
