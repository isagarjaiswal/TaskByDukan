import React, { useState } from "react";
import "./dashBoard.css";

const DashBoard = () => {
  return (
    <div class="div">
      <div class="div-2">
        <div class="column">
          <div class="div-3">
            <div class="div-4">
              <div class="div-5">
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0007cc88f57856907f8949d65f5353aa509ed5c5b69b4735094b3f3a8a57ad0a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                  class="img"
                />
              </div>
              <span class="span">
                <div class="div-6">Nishyan</div>
                <div class="div-7">Visit store</div>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5f608b6ce9730cea85c11c8d232d87963ed700103a61e54af2a14cec35feae?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-2"
              />
            </div>
            <span class="span-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a7988b0bc9c88a82962ed9021169f6462d3b59f10963986c56cf32b90d74cf8?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-3"
              />
              <div class="div-8">Home</div>
            </span>
            <span class="span-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96eb989a027521b0715802bb31b2b72fa88b7052dfe8366115623bf45a1f82e?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-4"
              />
              <div class="div-9">Orders</div>
            </span>
            <span class="span-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b71c5101ee750c9729fdbcdd6b664572144bd278dbf74309f3c1829ad00a722f?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-5"
              />
              <div class="div-10">Products</div>
            </span>
            <span class="span-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15227a862674cc19f40ba54101042c807b20d21a7f994f57eb894fe309be1d33?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-6"
              />
              <div class="div-11">Delivery</div>
            </span>
            <span class="span-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7bcc2abd1f7595ad2e0a035c5443941fae311f0b7f0675e4ced94a89333e4a?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-7"
              />
              <div class="div-12">Marketing</div>
            </span>
            <span class="span-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ceb8ba3c08fff529bcbcf9f77fde6aca9b11e8d670da77497cc3d4aa60d63c4?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-8"
              />
              <div class="div-13">Analytics</div>
            </span>
            <span class="span-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9035aaec1fc4191caabb99a0e91088cfc015ee5d8d63020b3587676244e47ab2?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-9"
              />
              <div class="div-14">Payments</div>
            </span>
            <span class="span-9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/261f5b222d46bb3f9eb26f089223c47b2669bef28b65982bff57937ea6a42709?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-10"
              />
              <div class="div-15">Tools</div>
            </span>
            <span class="span-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/398147d215494e2a649db0e6f083d31a7da1eaac9f84422ed58ed344bd43dbdb?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-11"
              />
              <div class="div-16">Discounts</div>
            </span>
            <span class="span-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1bf415a25a92c4f08a52dcb803e9446db6a3ff255599e9ec53fe63fb68dc508?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-12"
              />
              <div class="div-17">Audience</div>
            </span>
            <span class="span-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7733996352466d3ba10ca45dbcfa296f2be83088a527ad5c0cf581bd4d89b05?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-13"
              />
              <div class="div-18">Appearance</div>
            </span>
            <span class="span-13">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb87a662bc23be225b4672f79bade128268c4abaf3d73d60c4c7c94de05a7d6c?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                class="img-14"
              />
              <div class="div-19">Plugins</div>
            </span>
            <div class="div-20">
              <div class="div-21">
                <div class="div-22">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18bfcf8360a4061c32b9df570f220cd12e7f4f6d0b178024b822aa2f5a3c896?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                    class="img-15"
                  />
                </div>
                <span class="span-14">
                  <div class="div-23">Available credits</div>
                  <div class="div-24">222.10</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="column-2">
          <span class="span-15">
            <div class="div-25">
              <div class="div-26">
                <span class="span-16">
                  <div class="div-27">Payments</div>
                  <span class="span-17">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e27715ab3e3e99b784d1cf54df0a29fdeed92df66f208be5d38820d78487a429?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                      class="img-16"
                    />
                    <div class="div-28">How it works</div>
                  </span>
                </span>
                <span class="span-18">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7840744c2624dafa0d096a9fa15ad9037d64a52bd889abe0a301e047532b129c?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                    class="img-17"
                  />
                  <div class="div-29">Search features, tutorials, etc.</div>
                </span>
              </div>
              <div class="div-30">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f661af3dc565a0aefaaba360d137a91fea851e0043ee556a566ee8c83f99f90?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                  class="img-18"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/78d8255dd3019f6a9795c41aa94bffdf72299f0c074381b9eb350b8051b71ff4?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                  class="img-19"
                />
              </div>
            </div>
            <span class="span-19">
              <div class="div-31">Overview</div>
              <span class="span-20">
                <div class="div-32">Last Month</div>
                <img
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
            <div class="div-40">
              <div class="div-41">
                <span class="span-23">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a80267f4e75606e3f8f2c358a6c63628cbce63f8afaa2f68d7a8b80298095c6?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                    class="img-21"
                  />
                  <div class="div-42">Search by order ID...</div>
                </span>
                <div class="div-43">
                  <span class="span-24">
                    <div class="div-44">Sort</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/839991b1a9d3407ee2e929ae655a5862a654b7b8c4eca91069bbfd496a22f628?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                      class="img-22"
                    />
                  </span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/292f7ba24753d98c8b1dfb784cfd238342ba9e34a3c5df64d81152c052e02429?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                    class="img-23"
                  />
                </div>
              </div>
              <div class="div-45">
                <span class="span-25">
                  <div class="div-46">Order ID</div>
                  <span class="span-26">
                    <div class="div-47">Order date</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cdf9113b25292e3ceffbdf2bc62c138c89fabee2c670bbb79382c5a563b27fc?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                      class="img-24"
                    />
                  </span>
                </span>
                <span class="span-27">
                  <div class="div-48">Order amount</div>
                  <span class="span-28">
                    <div class="div-49">Transaction fees</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f35ad51b2137de33ded8d9c409b98a2b5a2c4bc61df5659d8a3ddf8e9ecbb8?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                      class="img-25"
                    />
                  </span>
                </span>
              </div>
              <div class="div-50">
                <div class="div-51">
                  <span class="span-29">#281209</span>
                  <span class="span-30">7 July, 2023</span>
                  <span class="span-31">₹1,278.23</span>
                  <span class="span-32">₹22</span>
                </div>
                <div class="div-52"></div>
              </div>
              <div class="div-53">
                <div class="div-54">
                  <span class="span-33">#281209</span>
                  <span class="span-34">7 July, 2023</span>
                  <span class="span-35">₹1,278.23</span>
                  <span class="span-36">₹22</span>
                </div>
                <div class="div-55"></div>
              </div>
              <div class="div-56">
                <div class="div-57">
                  <span class="span-37">#281209</span>
                  <span class="span-38">7 July, 2023</span>
                  <span class="span-39">₹1,278.23</span>
                  <span class="span-40">₹22</span>
                </div>
                <div class="div-58"></div>
              </div>
              <div class="div-59">
                <div class="div-60">
                  <span class="span-41">#281209</span>
                  <span class="span-42">7 July, 2023</span>
                  <span class="span-43">₹1,278.23</span>
                  <span class="span-44">₹22</span>
                </div>
                <div class="div-61"></div>
              </div>
              <div class="div-62">
                <div class="div-63">
                  <span class="span-45">#281209</span>
                  <span class="span-46">7 July, 2023</span>
                  <span class="span-47">₹1,278.23</span>
                  <span class="span-48">₹22</span>
                </div>
                <div class="div-64"></div>
              </div>
              <div class="div-65">
                <div class="div-66">
                  <span class="span-49">#281209</span>
                  <span class="span-50">7 July, 2023</span>
                  <span class="span-51">₹1,278.23</span>
                  <span class="span-52">₹22</span>
                </div>
                <div class="div-67"></div>
              </div>
              <div class="div-68">
                <div class="div-69">
                  <span class="span-53">#281209</span>
                  <span class="span-54">7 July, 2023</span>
                  <span class="span-55">₹1,278.23</span>
                  <span class="span-56">₹22</span>
                </div>
                <div class="div-70"></div>
              </div>
              <div class="div-71">
                <div class="div-72">
                  <span class="span-57">#281209</span>
                  <span class="span-58">7 July, 2023</span>
                  <span class="span-59">₹1,278.23</span>
                  <span class="span-60">₹22</span>
                </div>
                <div class="div-73"></div>
              </div>
              <div class="div-74">
                <div class="div-75">
                  <span class="span-61">#281209</span>
                  <span class="span-62">7 July, 2023</span>
                  <span class="span-63">₹1,278.23</span>
                  <span class="span-64">₹22</span>
                </div>
                <div class="div-76"></div>
              </div>
              <div class="div-77">
                <div class="div-78">
                  <span class="span-65">#281209</span>
                  <span class="span-66">7 July, 2023</span>
                  <span class="span-67">₹1,278.23</span>
                  <span class="span-68">₹22</span>
                </div>
                <div class="div-79"></div>
              </div>
              <div class="div-80">
                <div class="div-81">
                  <span class="span-69">#281209</span>
                  <span class="span-70">7 July, 2023</span>
                  <span class="span-71">₹1,278.23</span>
                  <span class="span-72">₹22</span>
                </div>
                <div class="div-82"></div>
              </div>
              <div class="div-83">
                <div class="div-84">
                  <span class="span-73">#281209</span>
                  <span class="span-74">7 July, 2023</span>
                  <span class="span-75">₹1,278.23</span>
                  <span class="span-76">₹22</span>
                </div>
                <div class="div-85"></div>
              </div>
              <div class="div-86">
                <div class="div-87">
                  <span class="span-77">#281209</span>
                  <span class="span-78">7 July, 2023</span>
                  <span class="span-79">₹1,278.23</span>
                  <span class="span-80">₹22</span>
                </div>
                <div class="div-88"></div>
              </div>
              <div class="div-89">
                <div class="div-90">
                  <span class="span-81">#281209</span>
                  <span class="span-82">7 July, 2023</span>
                  <span class="span-83">₹1,278.23</span>
                  <span class="span-84">₹22</span>
                </div>
                <div class="div-91"></div>
              </div>
              <div class="div-92">
                <div class="div-93">
                  <span class="span-85">#281209</span>
                  <span class="span-86">7 July, 2023</span>
                  <span class="span-87">₹1,278.23</span>
                  <span class="span-88">₹22</span>
                </div>
                <div class="div-94"></div>
              </div>
              <div class="div-95">
                <div class="div-96">
                  <span class="span-89">#281209</span>
                  <span class="span-90">7 July, 2023</span>
                  <span class="span-91">₹1,278.23</span>
                  <span class="span-92">₹22</span>
                </div>
                <div class="div-97"></div>
              </div>
              <div class="div-98">
                <div class="div-99">
                  <span class="span-93">#281209</span>
                  <span class="span-94">7 July, 2023</span>
                  <span class="span-95">₹1,278.23</span>
                  <span class="span-96">₹22</span>
                </div>
                <div class="div-100"></div>
              </div>
              <div class="div-101">
                <div class="div-102">
                  <span class="span-97">#281209</span>
                  <span class="span-98">7 July, 2023</span>
                  <span class="span-99">₹1,278.23</span>
                  <span class="span-100">₹22</span>
                </div>
                <div class="div-103"></div>
              </div>
              <div class="div-104">
                <div class="div-105">
                  <span class="span-101">#281209</span>
                  <span class="span-102">7 July, 2023</span>
                  <span class="span-103">₹1,278.23</span>
                  <span class="span-104">₹22</span>
                </div>
                <div class="div-106"></div>
              </div>
              <div class="div-107">
                <span class="span-105">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cf1d4ee6692cb5a173aa36f921bca0dc6b7cdb56296972665f8f16abf418fb4?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                    class="img-26"
                  />
                  <div class="div-108">Previous</div>
                </span>
                <span class="span-106">
                  <div class="div-109">1</div>
                  <div class="div-110">...</div>
                  <span class="span-107">10</span>
                  <div class="div-111">11</div>
                  <div class="div-112">12</div>
                  <div class="div-113">13</div>
                  <div class="div-114">14</div>
                  <div class="div-115">15</div>
                  <div class="div-116">16</div>
                  <div class="div-117">17</div>
                  <div class="div-118">18</div>
                </span>
                <span class="span-108">
                  <div class="div-119">Next</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d46cc7bbcab3183a98a9a4cb2d57e6270b75b052c48f571e526ff4b3305327d?apiKey=2c882f42c3724c3cbf99af0a3ebc91e5&"
                    class="img-27"
                  />
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
