import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Input validation before making the API request
    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      setBanner("Please fill out all fields.");
      return;
    }

    try {
      let data = {
        name,
        email,
        phone,
        message,
      };

      const res = await axios.post("http://localhost:5000/contact", data);

      if (res.status === 200) {
        setBanner(res.data.msg);

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setBanner("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setBanner("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="container-fluid contact">
      <div className="row">
        <div className="col-lg-6 bg-success p-2 text-dark bg-opacity-10 contact-body"></div>
        <div className="col-lg-6 contact-form">
          <form onSubmit={submitForm}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={handleName}
                  value={name}
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={handleEmail}
                  value={email}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={handlePhone}
                  value={phone}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleMessage}
                value={message}
              ></textarea>
            </div>

            <p>{banner}</p>
            <button type="submit" className="btn btn-primary">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
