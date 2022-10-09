import React from "react";
import { ReactDOM } from "react";
import "../css/contact.css";

function Contact() {
  return (
    <div className="center">
      <form>
        <input type="text" placeholder="Name" name="user_name" />
        <input type="text" placeholder="Subject" name="user_subject" />
        <input type="text" placeholder="Email" name="user_email" />
        <textarea rows="5" placeholder="Message" name="message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
