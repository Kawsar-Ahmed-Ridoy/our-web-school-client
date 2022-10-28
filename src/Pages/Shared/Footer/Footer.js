import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
          <footer style={{
        background: "white",
        position: "fixed",
        bottom: "0",
        margin: "auto",
        width: "100%"
      }}>
      <p className="text-center align-content-end text-secondary py-3 border m-0">
        Copyright 2022 Our Web School
      </p>
    </footer>
        </div>
    );
};

export default Footer;