import React from 'react';
import Accordion from "react-bootstrap/Accordion";


const FAQ = () => {
    return (
        <div className="container mt-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What are the main challenges of machine learning?</Accordion.Header>
            <Accordion.Body>
            Common issues in Machine Learning Inadequate Training Data. ... Poor quality of data. ... Non-representative training data. ... Overfitting and Underfitting. ... Monitoring and maintenance. ... Getting bad recommendations. ... Lack of skilled resources. ... Customer Segmentation.
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
            <Accordion.Header> What is the limitations of machine learning?</Accordion.Header>
            <Accordion.Body>
            What is the limitations of machine learning? Image result Poor transfer learning ability, reusability of modules, and integration. Systems are opaque, making them very hard to debug. Performance cannot be audited or guaranteed at the 'long tail' They encode correlation, not causation or ontological relationships.
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

export default FAQ;