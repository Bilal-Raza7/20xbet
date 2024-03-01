import React from "react";

const Ledger = () => {
  return (
    <>
      <div className="container m-6">
        <div className="overflow-x-auto">
          <p className="text-lg xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm text-center text-base-400 font-bold my-3">
            My Ledger
          </p>
          <table className="table-xs xl:table lg:table md:table-md sm:table-sm">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>Match Name</th>
                <th> Won By</th>
                <th>Won</th>
                <th>Lost</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>3 Patti</th>
                <td>Raza</td>
                <td>3</td>
                <td>3</td>
                <td>3000</td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>Andar Bahar</th>
                <td>Raza</td>
                <td>3</td>
                <td>3</td>
                <td>3000</td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>Casino</th>
                <td>Raza</td>
                <td>3</td>
                <td>3</td>
                <td>3000</td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>Ludo</th>
                <td>Raza</td>
                <td>3</td>
                <td>3</td>
                <td>3000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Ledger;
