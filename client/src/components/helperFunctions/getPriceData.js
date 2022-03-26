import api from "../../config/api";

const priceData = async (data) => {
  try {
    const res = await api.post("/stockprice", data);
    const obj = res.data["Time Series (Daily)"];
    const priceData = obj[Object.keys(obj)[0]];
    return [priceData, Math.round(priceData["4. close"])];
  } catch (e) {
    console.log(e);
  }
};

export default priceData;
