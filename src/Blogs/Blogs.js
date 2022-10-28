import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase?</Accordion.Header>
          <Accordion.Body>
            The Firebase Realtime Database is a cloud-hosted database. Data is
            stored as JSON and synchronized in realtime to every connected
            client. When you build cross-platform apps with our Apple platforms,
            Android, and JavaScript SDKs, all of your clients share one Realtime
            Database instance and automatically receive updates with the newest
            data.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> How does the private route work?</Accordion.Header>
          <Accordion.Body>
            Path: /src/_components/PrivateRoute.jsx The react private route
            component renders child components (children) if the user is logged
            in. If not logged in the user is redirected to the /login page with
            the return url passed in the location state property. The current
            logged in user (authUser) is retrieved from Redux state with a call
            to the useSelector() hook. Redux is used in this example however it
            is not required to implement a Private Route component in React
            Router 6. You could use a different state management library or any
            approach you prefer to get the logged in status of the user.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.js: Node.js
            accepts the request from the clients and sends the response, while
            working with the request node.js handles them with a single thread.
            To operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept Asynchronous Non-blocking I/O Non-blocking I/o:
            Non-blocking i/o means working with multiple requests without
            blocking the thread for a single request. I/O basically interacts
            with external systems such as files, databases. Node.js is not used
            for CPU-intensive work means for calculations, video processing
            because a single thread cannot handle the CPU works.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
