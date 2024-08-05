function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {/* header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3 ">
              Invoicer
            </h1>
          </div>
  
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button onClick={handlePrint} className="btn btn-print">
                  Print
                </button>
              </li>
              <li>
                <button className="btn btn-download">Download</button>
              </li>
              <li>
                <button className="btn btn-send">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* End of header */}

        {/* Your Details */}
        <section className="flex flex-col items-end justify-end">
          <h2 className="text-xl uppercase">Deepanshu Dixit</h2>
          <p>Address</p>
        </section>
        {/* End of your details */}

        {/* Client Details */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's address</p>
        </section>
        {/* End of Client Details */}

        {/* Dates */}
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoice Number : </span>dfsdfsd
            </li>
            <li>
              <span className="font-bold">Invoice Date : </span>fsdfsdd
            </li>
            <li>
              <span className="font-bold">Due date : </span>sdfsd
            </li>
          </ul>
        </article>
        {/* End of Dates */}

        {/* Table */}
        <div className="my-5">this is the table</div>
        {/* End of table */}

        {/* notes */}
        <section className="mb-5">
          {/* textarea */}
          <p>Notes to the client :</p>
        </section>
        {/* End of notes */}

        {/* Footer */}
        <ul className="flex flex-wrap items-center justify-center">
          <li className="mr-3"><span className="font-bold">your Name : </span>Deepanshu Dixit</li>
          <li className="mr-3"><span className="font-bold">Your email : </span>deepanshudixit07@gmail.com</li>
          <li className="mr-3"><span className="font-bold">Phone Number : </span>7597899179</li>
          <li className="mr-3"><span className="font-bold">Bank : </span>Deepanshu Dixit</li>
          <li className="mr-3"><span className="font-bold">Account holder : </span>Deepanshu Dixit</li>
          <li className="mr-3"><span className="font-bold">Account number : </span>123456789</li>
          <li className="mr-3"><span className="font-bold">Website : </span>deepanshudportfolio.netlify.app</li>
        </ul>
        {/* End of Footer */}
      </main>
    </>
  );
}

export default App;
