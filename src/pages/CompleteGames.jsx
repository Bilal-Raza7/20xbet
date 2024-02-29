import React from "react";

const CompleteGames = () => {
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
                  Complete Games
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="text-lg">
                <th>Match Name</th>
                <th>Result</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>3 Patti</th>
                <td>Won</td>
                <td>300</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Andar Bahar</th>
                <td>Lost</td>
                <td>100</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Ludo</th>
                <td>Won</td>
                <td>150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompleteGames;