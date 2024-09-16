const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "U10" },
    {
      $set: { price: 1255 },
    }
  );
  console.log(result);
};

updateData();
