import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Satvik Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span>Resort.com - All Rights Copyright
        Reserved To{" "}
       
          MANAN GUPTA
        
      </p>
    </footer>
  );
}
