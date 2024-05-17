const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

const MyModel = mongoose.model('ModelName');


const instance = new MyModel();
instance.my.key = 'hello';
await instance.save();