import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Home.css";

export default function Contact() {
  const { register } = useForm();
  console.log(register("name"));
  // const nameRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const [person, setperson] = useState({
  //   name: "",
  //   email: "",
  // });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(person);
    // console.log(nameRef.current?.value);
    // console.log(emailRef.current?.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="name-div">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            className="name"
            id="name"
            autoComplete="off"
            // onChange={(e) => {
            //   setperson({
            //     ...person,
            //     name: e.target.value,
            //   });
            // }}
            name="name"
            placeholder="Enter Your Name"
            // ref={nameRef}
          />
        </div>
        <div className="email-div">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="Enter your email"
            autoComplete="off"
            // onChange={(e) => {
            //   setperson({
            //     ...person,
            //     email: e.target.value,
            //   });
            // }}
            // ref={emailRef}
          />
        </div>
        <div className="btn">
          <button type="submit" className="connect">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
