import React from "react";

const Table = ({ list,total }) => {
  return (
    <table className="w-full mb-10">
      <thead>
        <tr className="bg-gray-200 p-1">
          <th>Item description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Amount</th>
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
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
      <tfoot className="border border-y-2">
        <tr className="text-lg">
          <th scope="row" colSpan="3" className="text-end">
            Total amount
          </th>
          <td className="text-center font-bold">&#8377; {total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
