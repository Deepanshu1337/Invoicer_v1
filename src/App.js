import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl  xl:max-w-4xl  bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header />

            <MainDetails name={name} address={address} />

            <ClientDetails clientName={clientName} clientAddress={clientAddress} />

            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <Table />

            <Notes notes={notes} /> 

            <Footer name={name} email={email} website={website} phone={phone} bankAccount={bankAccount} bankName={bankName} />

            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Invoice
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center ">
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="address">Enter your address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="website">Enter your website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter your website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor="phone">Enter your Phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="bankName">Enter your bank name </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name "
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">
                Enter your bank account Number
              </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your bank account number "
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName">Enter client's name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter client's name "
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Enter client's address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter client's address "
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              <label htmlFor="invoiceNumber">Enter invoice number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter invoice number "
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <label htmlFor="invoiceDate">Enter invoice date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter invoice date "
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              <label htmlFor="dueDate">Enter due date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter invoice due date "
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <label htmlFor="notes">Additional notes to client</label>
<textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to client" value={notes} onChange={(e)=> setNotes(e.target.value)}></textarea>

                
              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
