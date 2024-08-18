"use client";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const CopyLink = () => {
  const [copied, setCopied] = useState(false);
  const link = typeof window !== "undefined" ? window?.location?.href : "";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Show check icon for 1 second
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button onClick={handleCopy} className="">
      {copied ? (
        <FiCheck className="w-5 h-5 text-green-700" />
      ) : (
        <FiCopy className="w-5 h-5 " />
      )}
    </button>
  );
};

export default CopyLink;
