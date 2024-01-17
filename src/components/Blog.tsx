import ReactMarkdown from "react-markdown";

export default function Blog() {
  const markdown = "# Hi, *Pluto*!";
  const sample = "# markd";
  return (
    <>
      <ReactMarkdown>{sample}</ReactMarkdown>
    </>
  );
}
