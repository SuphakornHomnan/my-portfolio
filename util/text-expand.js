import { useState, Fragment } from "react";

export const truncateDescription = ({
  description,
  maxLength,
  isTruncated,
}) => {
  if (description === undefined || description === null) {
    return "";
  }
  if (description.length <= maxLength) {
    return description;
  }

  return isTruncated ? `${description.slice(0, maxLength)}` : description;
};

export const TextExpand = ({ text, maxLength, className }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => setIsTruncated(!isTruncated);

  const linkText = isTruncated ? "more" : "less";
  const showLink = text.length > maxLength && isTruncated;

  return (
    <div className={className}>
      <p style={{ display: "inline" }}>
        {truncateDescription({ description: text, maxLength, isTruncated })}
      </p>
      {showLink && (
        <button
          href="#"
          onClick={toggleTruncate}
          style={{ color: "#06B2F7", marginLeft: "5px" }}
          onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
          onMouseLeave={(e) => (e.target.style.color = "#06B2F7")}
        >
          ...See {linkText}
        </button>
      )}
    </div>
  );
};

export const DescriptionExpand = ({ description }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => setIsTruncated(!isTruncated);

  return (
    <p className="text-xs text-zinc-50 lg:text-sm">
      {isTruncated ? (
        <>
          <button
            onClick={toggleTruncate}
            style={{ color: "#06B2F7", marginLeft: "5px" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.target.style.color = "#06B2F7")}
            type="button"
          >
            ...See More
          </button>
        </>
      ) : (
        description.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line.trim()}
            <br />
          </Fragment>
        ))
      )}
    </p>
  );
};
