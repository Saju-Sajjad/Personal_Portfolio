import React, { useState, useEffect } from "react";
import "./Contact.css";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
import G from "../../Assist/Image/6.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => emailjs.init("4OEMNkj1CriUZq_ps"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_oe0uk8g";
    const templateId = "template_5l6fg1a";

    const emailParams = {
      from_name: name,
      to_email: email,
      message: msg,
    };

    try {
      setLoading(true);
      const response = await emailjs.send(serviceId, templateId, emailParams);
      if (response.status === 200) {
        // Clear fields and show success message
        setName("");
        setEmail("");
        setMsg("");
        setSuccessMessage("Email sent successfully! Thank you!");
      } else {
        console.log("Email sending failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="7">
      <div className="card card0 boder-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row boder-line">
                <img src={G} alt="Contacts Us" className="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card boder-0 px-4 py-5">
              <div className="row">
                <div className="row">
                  <h6>
                    Contact With
                    <a href="https://www.linkedin.com/in/sajjad-hussain-6148a2247/">
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href="https://github.com/Saju-Sajjad">
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                    <a href="https://www.facebook.com/sajusadj.sajjad">
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </a>
                    <a href="https://twitter.com/sajjadh01278554">
                      <BsTwitter color="blue" size={30} className="ms-2" />
                    </a>
                  </h6>
                </div>
                <div className="row xp-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3" style={{ marginBottom: "3px" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="md-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3" style={{ marginTop: "3px" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="md-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3" style={{ marginTop: "3px" }}>
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Enter Your Message"
                    className="md-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <button
                    onClick={handleSubmit}
                    className="button"
                    type="submit"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
                {successMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
