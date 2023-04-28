import React, { useState } from "react";

export const TextExpand = ({ text, maxLength, className }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => setIsTruncated(!isTruncated);

  const getText = () => {
    if (text.length <= maxLength) {
      return text;
    }

    return isTruncated ? `${text.slice(0, maxLength)}` : text;
  };

  const linkText = isTruncated ? "more" : "less";
  const showLink = text.length > maxLength && isTruncated;

  return (
    <div className={className}>
      <p style={{ display: "inline" }}>{getText()}</p>
      {showLink && (
        <a
          href="#"
          onClick={toggleTruncate}
          style={{ color: "#06B2F7", marginLeft: "5px" }}
          onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
          onMouseLeave={(e) => (e.target.style.color = "#06B2F7")}
        >
          ...See {linkText}
        </a>
      )}
    </div>
  );
};