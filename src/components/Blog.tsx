import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import "../styles/Blog.css";
import Blogcards from "../components/Blogcards";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Blog() {
  const blogcontent = [
    {
      title: "What is web dev? How to start it?",
      description:
        "this is sample inro for blog for tesing snflanfaslkfnaslfnalsfnaslfn alkfnalfka",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <div className="main-blog">
        <div className="blog-container">
          <div className="blog-container-heading">
            <div className="blog-icon">
              <MdOutlineMarkUnreadChatAlt
                size={35}
                color="var(--primarycolor)"
              />
            </div>
            <div className="blog-heading"> Blogs</div>
          </div>
          <div className="blog-content-conatiner">
            <div className="content">
              Welcome to my <b>Blogs</b> Page{" "}
              <span style={{ fontSize: "1.5rem" }}>&#128075;</span>. <br />{" "}
              <br /> My blog page is a vibrant space where curiosity meets
              creativity, and each post is a journey waiting to be explored.
              Whether you're a seasoned enthusiast or a casual reader, our
              collection of articles covers a spectrum of topics – from the
              latest trends in technology to insights on web development,
              sprinkled with a touch of inspiration. <br />
              <br />
              Join us on this intellectual adventure as we delve into the realms
              of innovation, share valuable insights, and spark engaging
              conversations. Your journey into the world of ideas starts here.
              Happy reading!
            </div>
          </div>
          <div className="blogscard-container">
            {blogcontent.map((blog) => {
              return (
                <Link to="/What is web" className="link">
                  <Blogcards
                    key={blog.title}
                    heading={blog.title}
                    intro={blog.description}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
