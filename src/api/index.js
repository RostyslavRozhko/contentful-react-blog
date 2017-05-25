import { normalize, schema } from "normalizr";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "4mzy74xi5sgd",
  accessToken: "0a4c99a6852f6f0b8268748296e98ab0da92d004527807ea788720f75fa5e9ae"
});

const preNormalize = data => {
  let arr = [];
  data.map(entry => arr.push(entry.fields));

  const fields = new schema.Entity("fields");
  const list = [fields];
  return normalize(arr, list);
};

export const getAllEntries = () => {
  return client.getEntries().then(response => preNormalize(response.items));
};
