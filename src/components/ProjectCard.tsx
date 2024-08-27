interface Props {
  imagelink: string;
  heading: string;
  tags: any;
  text: string;
  projectlink: string;
}
export default function ({
  imagelink,
  heading,
  tags,
  text,
  projectlink,
}: Props) {
  return (
    <>
      <div className="project-cards">
        <div className="project-card-image">
          <img src={imagelink} alt="" className="project-image" />
        </div>
        <div className="project-card-content">
          <div className="project-card-content-heading">{heading}</div>
          <div className="project-card-content-tags">
            {tags.map((tag: any) => {
              return <div className="tag-name">{tag}</div>;
            })}
          </div>
          <div className="project-card-content-text">{text}</div>
        </div>
        <div className="view-btn-div">
          <a
            href={projectlink}
            style={{ textDecoration: "none" }}
            className="view"
          >
            View
          </a>
        </div>
      </div>
    </>
  );
}
