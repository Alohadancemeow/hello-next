import React from "react";

interface Props {
  statusCode: String;
}

const Error = ({ statusCode }: Props) => {
  return (
    <div>
      <h1>Error Page 404 Not found</h1>
      <h1>StatusCode: {statusCode}</h1>
    </div>
  );
};

export default Error;

// # Called in server-side
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  // # redirect to index page
  if (statusCode == 404) {
    res.writeHead(301, { Location: "/" });
    res.end();
    return {};
  } else {
    return { statusCode };
  }
};
