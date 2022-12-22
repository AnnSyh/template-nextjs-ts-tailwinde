import Link from "next/link";
import { useRouter } from "next/router";

const nav = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "postsStatic", path: "/postsstatic" },
  { id: 3, title: "ssg-ssr", path: "/postsstatic/ssg-ssr" },
  { id: 4, title: "pre-rendering", path: "/postsstatic/pre-rendering" },
  { id: 5, title: "contacts", path: "/contacts" },
  { id: 6, title: "posts", path: "/posts" },
];

const Navbar = () => {
  const { pathname } = useRouter(); //подсвечиваем акт ссылку

  return (
    <div className="navbar-wrap">
      <ul className="navbar-ul">
        {nav.map(({ id, title, path }) => (
          <li key={id} className="h-[100%]">
            <Link
              className={`flex items-center h-[100%] px-5 ${
                path === pathname ? "active-link" : null
              }`}
              href={path}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
