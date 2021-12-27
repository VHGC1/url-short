import React, { useState } from "react";
import { Button } from "./CopyButton.styled";

const CopyButton = ({ copy }) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(copy.current.innerText);
    setCopied(true);
  }

  return (
    <Button copied={copied} onClick={copyToClipboard}>
      {copied ? "Copied!" : "copy"}
    </Button>
  );
};

export default CopyButton;
