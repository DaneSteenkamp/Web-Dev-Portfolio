import Link from "next/link";
import Image from "next/image";

const About_info = () => (
  //This function renders all the About info
  <div>
    <br></br>
    <Image src="/Profile Pic.jpg" width={200} height={200} />
    <Image src="/Design : Code.png" width={600} height={200} alt="design" />
    <h3 className="name">Dane Steenkamp</h3>
    <div className="intro">
      Hello I am a creative thinker that has been exposed to multitude of design
      discipline’s over my 10-year career. Such as Draughting, 3d Design
      Rendering, Graphic Design, Exhibition Design, CNC Programing and Furniture
      production. As well as my passion for Design I have always had a keen
      interest in computers and all things Tech. Therefore I have enrolled and
      am currently completing my Web Development Boot camp with HyperionDev. I
      look forward using my Design knowledge and development skill to design and
      implement aesthetically pleasing and functional web sites and
      applications.
    </div>

    <style jsx>
      {`
        h3 {
          color: blue;
        }
      `}
    </style>
  </div>
);

export default About_info;
