import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeEditor = () => {
  const [code, setCode] = useState(`const greeting = "Hello, world!";`);

  return (
    <LiveProvider code={code} disabled>
      <LiveEditor onChange={setCode} />
      <LiveError />
      <LivePreview />
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </LiveProvider>
  );
};

export default CodeEditor;
