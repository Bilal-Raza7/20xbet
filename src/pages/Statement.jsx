import React from "react";

const Statement = () => {
  return (
    <>
      <div className="container m-6">
        <div className="overflow-x-auto">
          <table className="table-xs xl:table lg:table md:table-md sm:table-sm">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                {/* <th></th> */}
                <th className="text-md xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm text-end">
                  My Statement
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="text-lg">
                <th>Date</th>
                <th> Description</th>
                <th>Prev Balance</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>17 feb 2024</th>
                <td>Opening Balance by Raza</td>
                <td>0</td>
                <td>500</td>
                <td>0</td>
                <td>500</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>17 feb 2024</th>
                <td>Opening Balance by Raza</td>
                <td>0</td>
                <td>500</td>
                <td>0</td>
                <td>500</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>17 feb 2024</th>
                <td>Opening Balance by Raza</td>
                <td>0</td>
                <td>500</td>
                <td>0</td>
                <td>500</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>17 feb 2024</th>
                <td>Opening Balance by Raza</td>
                <td>0</td>
                <td>500</td>
                <td>0</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statement;
