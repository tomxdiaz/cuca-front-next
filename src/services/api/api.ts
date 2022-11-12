import axios from "axios";
import testData from "../../test/testData.json";

const apiHost = process.env.NEXT_PUBLIC_CUCA_API;

const Api = {
  getData: async () => {
    return new Promise(function (res) {
      setTimeout(function () {
        res({
          data: testData,
        });
      }, 300);
    });
  },

  getAllData: async (SK?: string) => {
    const res = await axios.get(`${apiHost}/alldata`);
    const fetchedData = res.data.body;

    if (SK) {
      let value = undefined;
      fetchedData.forEach((item: any) => {
        if (item.SK === SK) {
          value = JSON.parse(item.value);
        }
      });
      return value;
    }

    const mappedValues = fetchedData.map((item: any) => {
      return JSON.parse(item.value);
    });

    return mappedValues;
  },

  getSiteData: async (SK?: string) => {
    const res = await axios.get(`${apiHost}/sitedata`);
    const fetchedData = await res.data.body;

    if (SK) {
      let value = undefined;
      fetchedData.forEach((item: any) => {
        if (item.SK === SK) {
          value = JSON.parse(item.value);
        }
      });
      return value;
    }

    const mappedValues = fetchedData.map((item: any) => {
      return JSON.parse(item.value);
    });

    return mappedValues;
  },

  getUnitsData: async (SK?: string) => {
    const res = await axios.get(`${apiHost}/unitsdata`);
    const fetchedData = res.data.body;

    if (SK) {
      let value = undefined;
      fetchedData.forEach((item: any) => {
        if (item.SK === SK) {
          value = JSON.parse(item.value);
        }
      });
      return value;
    }

    const mappedValues = fetchedData.map((item: any) => {
      return JSON.parse(item.value);
    });

    return mappedValues;
  },

  getPics: async (SK?: string) => {
    const res = await axios.get(`${apiHost}/pics`);
    const fetchedData = res.data.body;

    if (SK) {
      let value = undefined;
      fetchedData.forEach((item: any) => {
        if (item.SK === SK) {
          value = JSON.parse(item.value);
        }
      });
      return value;
    }

    const mappedValues = fetchedData.map((item: any) => {
      return JSON.parse(item.value);
    });

    return mappedValues;
  },
};

export default Api;
