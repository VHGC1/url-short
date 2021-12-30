import React, { useState } from "react";
import { ButtonCopy } from "./CopyButton.styled";

const CopyButton = ({ copy }) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(copy.current.innerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <ButtonCopy copied={copied} onClick={copyToClipboard}>
      {copied ? "Copied!" : "copy"}
    </ButtonCopy>
  );
};

export default CopyButton;
