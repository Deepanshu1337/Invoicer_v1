import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  setList,
  list,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  // form submit function to add items to list
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount("");

    setList((list) => [...list, newItems]);
    setIsEditing(false);
    console.log(list);
  };

  // using useEffect to get amount with some dependencies
  useEffect(() => {
    setAmount(quantity * price);
  }, [quantity, price, setAmount]);

  //Getting total sum of amounts

  useEffect(() => {
    const totalAmount = list.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0);
    setTotal(totalAmount);
  }, [list,setTotal]);

  // function for editing the items
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // function for deleting the items
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Add  Edited item" : "Add Item"}
        </button>
      </form>

      {/* showing item so that we can see, edit and delete before preview*/}

      {list.length === 0 ? null : (
        <table className="w-full mb-10 border border-2">
          <thead>
            <tr className="bg-gray-200 p-1 m-10">
              <th>Item description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
              <th></th>
              <th></th>
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody className="text-center">
            {list.map(({ id, description, quantity, price, amount }) => {
              return (
                <React.Fragment key={id}>
                  <tr>
                    <td className="text-left px-5">{description}</td>
                    <td>{quantity}</td>
                    <td>&#8377; {price}</td>
                    <td>&#8377; {amount}</td>
                    <td>
                      <button onClick={() => editRow(id)}>
                        <CiEdit className="text-green-800 font-extrabold text-xl m-1" />
                      </button>
                    </td>
                    <td>
                      <button onClick={(e) => deleteRow(id)}>
                        <MdDeleteOutline className="text-red-500 font-bold text-xl m-1" />
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
          <tfoot className="border border-y-2">
            <tr>
              <th scope="row" colSpan="3" className="text-end">
                Total amount
              </th>
              <td className="text-center font-bold">&#8377; {total}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default TableForm;
