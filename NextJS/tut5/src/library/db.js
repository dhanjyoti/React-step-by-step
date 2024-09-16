const { username, password } = process.env;
console.log("user", username, password);
export const connectionStr =
  "mongodb+srv://"+username+":"+password+"@cluster0.o6wf8.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";

