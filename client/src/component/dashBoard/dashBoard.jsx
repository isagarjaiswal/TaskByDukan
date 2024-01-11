import React from "react";
import "./dashBoard.css";
import TableComponenet from "../tableComponent/tableComponent";
import SideBar from "../sideBar/sideBar";
import NavBar from "../navBar/navBar";


const DashBoard = () => {
  return (
    <div class="div">
      <div class="div-2">
        <SideBar />
        <div class="column-2">
          <span class="span-15">
            <NavBar />
            <span class="span-19">
              <div class="div-31">Overview</div>
              <span class="span-20">
                <div class="div-32">Last Month</div>
                <img
                  alt="Img"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea6c4d4d063668e97fd083caf97d2f32b96e8adf10b71eb46643bd88c8662b37?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                  class="img-20"
                />
              </span>
            </span>
            <div class="div-33">
              <div class="div-34">
                <div class="column-3">
                  <span class="span-21">
                    <div class="div-35">Online orders</div>
                    <div class="div-36">231</div>
                  </span>
                </div>
                <div class="column-4">
                  <span class="span-22">
                    <div class="div-37">Amount received</div>
                    <div class="div-38">₹23,92,312.19</div>
                  </span>
                </div>
              </div>
            </div>
            <div class="div-39">Transactions | This Month</div>
            <TableComponenet />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
