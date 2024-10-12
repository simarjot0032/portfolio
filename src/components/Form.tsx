import toast from "react-hot-toast";
import "../styles/Form.css";
import { useState, useRef } from "react";
export default function Form() {
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const phoneNumberRef = useRef<any>(null);
  const messageRef = useRef<any>(null);
  function handleFormSubmit(e: any) {
    e.preventDefault();
    const databaseURL =
      "https://portfolio-426ad-default-rtdb.firebaseio.com/Form.json";
    if (
      nameRef.current.value &&
      emailRef.current.value &&
      phoneNumberRef.current.value &&
      messageRef.current.value
    ) {
      let userDetails = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phoneNo: phoneNumberRef.current.value,
        message: messageRef.current.value,
      };
      let { name, email, phoneNo, message } = userDetails;
      try {
        let response = fetch(databaseURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        });
        sucessState();
      } catch (e: any) {
        console.log(e.message);
      }
    } else {
      toast.error("Please Enter all Feilds");
    }
  }
  function sucessState() {
    toast.success("Form sucessfully submitted");
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
    messageRef.current.value = "";
  }
  return (
    <>
      <div className="contact-form-container">
        <div className="form-container">
          <h2 className="form-heading">Contact US!</h2>
          <div className="form-content-container">
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="input-contianer">
                <label htmlFor="user-name">Name:</label>
                <input
                  type="text"
                  id="user-name"
                  placeholder="Enter your name"
                  ref={nameRef}
                />
              </div>
              <div className="input-container">
                <label htmlFor="user-email">Email:</label>
                <input
                  type="email"
                  id="user-email"
                  placeholder="Enter your email"
                  ref={emailRef}
                />
              </div>
              <div className="input-container">
                <label htmlFor="user-phone-number">Phone No.</label>
                <input
                  type="tel"
                  id="user-phone-number"
                  placeholder="Enter your phone number with country code"
                  ref={phoneNumberRef}
                />
              </div>
              <div className="input-container">
                <label htmlFor="user-message">Message</label>
                <input
                  type="text"
                  id="user-message"
                  placeholder="Enter you message in short"
                  ref={messageRef}
                />
              </div>
              <button type="submit" id="submit-btn">
                Submit !
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
