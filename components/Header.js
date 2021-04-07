import Link from "next/link";
import Image from "next/image";

const Header = () => (
  // This is the main header element on the which routes you to the about / contacts and projects pages
  <div>
    <div>
      <Image src="/portfolio 3.jpg" width={1280} height={500} alt="portfolio" />
    </div>

    <Link href="/about">
      <a>
        <u>about</u>
      </a>
    </Link>
    <Link href="/skills">
      <a>
        <u>skills</u>
      </a>
    </Link>
    <Link href="/projects">
      <a>
        <u>projects</u>
      </a>
    </Link>
    <Link href="/contact">
      <a>
        <u>contact</u>
      </a>
    </Link>
    <style jsx>
      {`
        a {
          color: blue;
          margin-left: 20px;
          text-decoration: none;
          font-size: 25px;
          text-transform: uppercase;
          font-family: gill sans;
        }
      `}
    </style>
  </div>
);

export default Header;
