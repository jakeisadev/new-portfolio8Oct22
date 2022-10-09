import React from "react";
import "../css/contact.css";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <div className="social-media">
        <div className="icon-info">
            <a href="https://github.com/jakeisadev" target="_blank">
              <BsGithub className="icon github" />
            </a>
            <p>jakeisadev</p>
            </div>
            <div className="icon-info">
            <a
              href="https://www.linkedin.com/in/jacob-starowicz/"
              target="_blank"
            >
              <BsLinkedin className="icon linkedin" />
            </a>
            <p>jacob-starowicz</p>
            </div>
            <div className="icon-info">
            <a
              href="https://www.youtube.com/channel/UCJubnEonnxEHu-t_pMaWZWw"
              target="_blank"
            >
              <BsYoutube className="icon youtube" />
            </a>
            <p>Jake Starowicz</p>
            </div>
          </div>
      <form>
        <input type="text" placeholder="Name" name="user_name" required />
        <input type="text" placeholder="Subject" name="user_subject" required />
        <input type="text" placeholder="Email" name="user_email" required/>
        <textarea rows="5" placeholder="Message" name="message" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
