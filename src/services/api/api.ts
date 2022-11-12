import testData from '../../test/testData.json';

const Api = {
  getData: async () => {
    return new Promise((res) => {
      res({
        data: testData,
      });
    });
  },
};

export default Api;
