import axios from "axios";

const url = "https://api.wtftools.port203.de/";

export default {
  async getContracts() {
    // const url = "https://api.wtftools.port203.de/revive";
    return await axios.post(url + "contracts", {
      userID: "2793691",
      //   userName: "Anti0815",
      //   requestChannel: "VueTest",
    });
  },
  async getContractDetails(id) {
    // const url = "https://api.wtftools.port203.de/contract";
    console.log(id);
    return await axios.post(url + "contract", {
      userID: "2793691",
      //   id: id,
      //   userName: "Anti0815",
      //   requestChannel: "VueTest",
    });
  },
};
