import React from "react";

const Footer = ({ name, email, website, phone, bankAccount, bankName }) => {
  return (
    <>
      <footer className="footer border-t-2 border-gray-200 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Owner Name : </span>
            {name}
          </li>
          <li>
            <span className="font-bold">Owner email : </span>
            {email}
          </li>
          <li>
            <span className="font-bold">Phone Number : </span>
            {phone}
          </li>
          <li>
            <span className="font-bold">Bank : </span>
            {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder : </span>
            {name}
          </li>
          <li>
            <span className="font-bold">Account number : </span>
            {bankAccount}
          </li>
          <li>
            <span className="font-bold">Website : </span>
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
