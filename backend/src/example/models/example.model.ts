import * as mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  test: String,
  isDeleted: { type: Boolean, default: false },
});

export default mongoose.model("example", exampleSchema);
