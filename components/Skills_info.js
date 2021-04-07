import Link from "next/link";

const Skills_info = () => (
  //This function renders all the About info
  <div>
    <div className="maindivwrapper">
      <div className="mainsidebar">
        <h4 className="designskills">Design Skills</h4>
        <style jsx>
          {`
            h4 {
              color: blue;
            }
          `}
        </style>
        <ul>
          <li>Illistrator</li>
          <li>Photoshop</li>
          <li>Corel Draw</li>
          <li>Auto Cad</li>
          <li>Inventor</li>
          <li>Revit</li>
          <li>Sketchup</li>
          <li>Cinema 4D</li>
        </ul>

        <h4 className="webdevskills">Web Dev Skills</h4>
        <ul className="code">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>Git hub</li>
        </ul>
      </div>
      <div className="mainheader">
        <h3 className="education">Education</h3>
        <style jsx>
          {`
            h3 {
              color: blue;
            }
          `}
        </style>
        <p>2020 – Current Hyperion Dev</p>
        <ul>
          <li>Web Development Bootcamp</li>
        </ul>
        <p>2007 – 2009 BHC School of Design (Pty) Ltd</p>
        <ul>
          <li>Diploma in interior design</li>
          <li>BTEC Edexel Interior Design</li>
        </ul>
        <p> 2005 Wholesale & Retail SETA</p>
        <ul>
          <li>Certificate in Wholsesale & Retail</li>
          <li>National qualification frame work level 2</li>
        </ul>
        <p> 2001 Bellville Technical School</p>
        <ul>
          <li>Matriculated</li>
        </ul>

        <h3 className="workexp">Work Experience</h3>
        <ul className="coricraft">
          <li>6th April 2017- Current</li>
          <li>
            <strong>Company:</strong>

            <p className="bold">Coricraft</p>
          </li>
          <li>
            <strong>Title:</strong>{" "}
            <p className="bold">CAD Technician Prototype</p>
          </li>
          <ul>
            <li>
              Program and load furniture parts onto server for CNC machines to
              cut for production.{" "}
            </li>
            <li>
              Produce manufacturing drawings so Frame makers understand how to
              assemble frames.{" "}
            </li>
            <li>Draw up detailed layouts of CPT & JHB Factories</li>
          </ul>
        </ul>

        <ul className="streetfever">
          <li>May 2016 – March 2017 </li>
          <li>
            <strong>Company:</strong>
            <p className="bold">Street Fevert</p>{" "}
          </li>
          <li>
            <strong>Title:</strong>
            <p className="bold">Store Developer</p>{" "}
          </li>
          <li>
            <strong>Role:</strong>
          </li>
          <ul>
            <li>Design and complete retail drawing packs all SF stores </li>
            <li>Coordinate the purchasing of all building materials </li>
            <li>
              Coordinate the logistics of delivering building materials to site{" "}
            </li>
            <li>Project manage the sites and liaise with all contractors</li>
            <li>Supply a cost break down on completion of the store</li>
          </ul>
        </ul>

        <ul className="planit">
          <li>Mid July 2015 – 9th May 2016</li>
          <li>
            <strong>Company:</strong> <p className="bold">Plan-it Design</p>
          </li>
          <li>
            <strong>Title:</strong> <p className="bold">Retail Designer</p>
          </li>
          <li>
            <strong>Role:</strong>
          </li>
          <ul>
            <li>Create and implement concepts for various retail stores</li>
            <li>Complete 2D Drawing packs</li>
            <li>Complete 2D Detail packs</li>
            <li>3D realistic rendered drawings</li>
          </ul>
        </ul>

        <ul className="mm">
          <li>1st March 2015 – Mid July 2015</li>
          <li>
            <strong>Company:</strong>{" "}
            <p className="bold">Marketing Merchants</p>{" "}
          </li>
          <li>
            <strong>Title:</strong> <p className="bold">Exhibition Designer</p>
          </li>
          <li>
            <strong>Role:</strong>
          </li>
          <ul>
            <li>3D realistic rendered drawings</li>
            <li>Costing drawings </li>
            <li>Electrical drawings</li>
            <li>Full Production drawings </li>
            <li>Design and set-up artwork for print</li>
            <li>Brief manufacturers</li>
            <li>On-site project management and instillation</li>
          </ul>
        </ul>

        <ul className="pvd">
          <li>2013 – 31st Feb 2015</li>
          <li>
            <strong>Company:</strong> <p className="bold">Petra Vonk Design</p>
          </li>
          <li>
            <strong>Title:</strong> <p className="bold">Head Designer</p>
          </li>
          <li>
            <strong>Role:</strong>
          </li>
          <ul>
            <li>Site survey</li>
            <li>3D realistic rendered drawings</li>
            <li>Technical and Electrical Drawings</li>
            <li>Design and set-up artwork for print</li>
            <li>Brief manufacturers</li>
            <li>On-site project management and instillation</li>
            <li>Manage warehouse and stock control</li>
          </ul>
          <p>
            Achievements: Best Stand Award (Engen Retailers Convention 2014)
            Plascon Colour Award ( VIP media lounge Decorex 2014) Best Stand
            Award (Spar Retailers Trade Show 2013)
          </p>
        </ul>

        <ul className="scan">
          <li>2013 – 31st Feb 2015</li>
          <li>
            <strong>Company:</strong> <p className="bold">Scan Display</p>
          </li>
          <li>
            <strong>Title:</strong>{" "}
            <p className="bold">Exhibition & Retail Designer</p>
          </li>
          <li>
            <strong>Role:</strong>
          </li>
          <ul>
            <li>
              Design Exhibition stands and Environments according to budget
            </li>
            <li>3D realistic rendered drawings</li>
            <li>Technical and Electrical Drawings</li>
            <li>Design and set-up artwork for print</li>
            <li>Brief manufacturers</li>
            <li>On-site project management and instillation</li>
            <li>Manage warehouse and stock control</li>
          </ul>
          <p>
            Achievements: Best Stand Award (Engen Retailers Convention 2014)
            Plascon Colour Award ( VIP media lounge Decorex 2014) Best Stand
            Award (Spar Retailers Trade Show 2013)
          </p>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills_info;
