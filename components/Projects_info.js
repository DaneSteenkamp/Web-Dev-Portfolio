import Link from "next/link";

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
        <Link href="https://github.com/DaneSteenkamp/Capstone_ItunesB">
          <a>
            <u>Project 1 Itunes Search App</u>
          </a>
        </Link>
      </li>
      <br></br>
      <li>
        <Link href="https://game-danesteenkampdesigner-gmailcom.vercel.app/">
          <a>
            <u>Project 2 Memory Game</u>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Project_info;
