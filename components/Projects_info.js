import Link from "next/link";
import Image from "next/image";

const Project_info = () => (
  // This function provides the link to my Project page
  <div>
    <h4 className="contactinfo">Projetcs</h4>
    <style jsx>
      {`
        h4 {
          color: blue;
        }
      `}
    </style>
    <ul>
      <li>
        <Link href="https://game-danesteenkampdesigner-gmailcom.vercel.app/">
          <a>
            <u>Project 1 Memory Game</u>
          </a>
        </Link>
        <h5>Libraries & Frameworkes Used </h5>
        <Image src="/react-logo.png" width={150} height={50} />
      </li>

      <br></br>
      <li>
        <Link href="https://github.com/DaneSteenkamp/Itunes-App.git">
          <a>
            <u>Project 2 Itunes Search App</u>
          </a>
        </Link>
        <h5>Libraries & Frameworkes Used </h5>
        <Image src="/react-logo.png" width={150} height={50} />
        <Image src="/express.png" width={150} height={50} />
        <Image src="/node.png" width={75} height={75} />
      </li>
    </ul>
  </div>
);

export default Project_info;
