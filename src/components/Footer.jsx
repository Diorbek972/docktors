//icons
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="container my-5">
      <div className="row aligv items-center">
        <div className="col-md-3">
          <h2>Get In Touch</h2>
          <p className="my-3 ">the quick fox jumps over the
            lazy dog</p>
          <FaFacebook className="footer-icons" />
          <CiInstagram className="footer-icons" />
          <FaTwitter className="footer-icons" />
        </div>
        <div className="col-md-3 text-color">
          <h2>Company info</h2>
          <li className="my-3"><a href="#">About Us</a></li>
          <li className="my-3"><a href="#">Carrier</a></li>
          <li className="my-3"><a href="#">We are hiring</a></li>
          <li className="my-3"><a href="#">Blog</a></li>
        </div>
        <div className="col-md-3 text-color">
          <h2>Features</h2>
          <li className="mb-3 mt-4"><a href="#">About Us</a></li>
          <li className="my-3"><a href="#">Carrier</a></li>
          <li className="my-3"><a href="#">We are hiring</a></li>
          <li className="my-3"><a href="#">Blog</a></li>
        </div>
        <div className="col-md-3 text-color">
          <h2>Resources</h2>
          <li className="mb-3 mt-4"><a href="#">About Us</a></li>
          <li className="my-3"><a href="#">Carrier</a></li>
          <li className="my-3"><a href="#">We are hiring</a></li>
          <li className="my-3"><a href="#">Blog</a></li>
        </div>
      </div>
    </div>
  )
}
