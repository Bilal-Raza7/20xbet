import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container m-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                {/* <th></th> */}
                <th className="text-3xl text-end">Personal Info</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="text-lg">
                <th>1</th>
                <td>Client Code :</td>
                <td>Quality Control Specialist</td>
                {/* <td>Blue</td> */}
              </tr>
              {/* row 2 */}
              <tr className="text-lg">
                <th>2</th>
                <td>Client Name :</td>
                <td>Desktop Support Technician</td>
                {/* <td>Purple</td> */}
              </tr>
              {/* row 3 */}
              <tr className="text-lg">
                <th>3</th>
                <td>Contact No.:</td>
                <td>Tax Accountant</td>
                {/* <td>Red</td> */}
              </tr>
              {/* row 4 */}
              <tr className="text-lg">
                <th>4</th>
                <td>Date Of Joining :</td>
                <td>Tax Accountant</td>
                {/* <td>Red</td> */}
              </tr>
              {/* row 5 */}
              <tr className="text-lg">
                <th>5</th>
                <td>Address :</td>
                <td>Tax Accountant</td>
                {/* <td>Red</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
