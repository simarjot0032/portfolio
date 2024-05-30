import ContentBlog from "../Blogs/whatweb.md";
import ReactMarkdown from "react-markdown";

export default function Whatweb() {
  return (
    <>
      {/* <div className="blog">hello</div> */}
      <ReactMarkdown>{ContentBlog}</ReactMarkdown>
    </>
  );
}
