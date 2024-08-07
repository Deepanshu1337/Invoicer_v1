import React from "react";
import { useState, useEffect } from "react";

const Dates = ({ invoiceNumber, dueDate }) => {
  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return "Invalid Date";
    }
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(parsedDate);
  };

  const [invoiceDate, setInvoiceDate] = useState("");

  useEffect(() => {
    const today = formatDate(new Date());
    setInvoiceDate(today);
  }, []);

  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number : </span>
            {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice Date : </span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date : </span>
            {formatDate(dueDate)}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
