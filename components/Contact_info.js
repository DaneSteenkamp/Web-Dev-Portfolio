import Link from "next/link";

const Contact_info = () => (
  //This function renders all the Contact info
  <div>
    <h4 className="contactinfo">Contact Info</h4>
    <style jsx>
      {`
        h4 {
          color: blue;
        }
      `}
    </style>
    <ul>
      <li>
        Address: 105 Cornerstone 5 Fountain road Tygervalley Waterfront
        Bellville 7530{" "}
      </li>
      <li>Cell: 076 877 5680</li>
      <li>Email: danesteenkamp.designer@gmail.com</li>
    </ul>
  </div>
);

export default Contact_info;
