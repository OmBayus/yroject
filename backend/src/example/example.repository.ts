import ExampleModel from "./models/example.model";

import CreateExampleDto from "./dtos/create_example.dto";
import UpdateExampleDto from "./dtos/update_example.dto";

export default {
  findAll: () => {
    return ExampleModel.find({ isDeleted: false });
  },
  findOne: (id: string) => {
    return ExampleModel.findById(id, { isDeleted: false });
  },

  create: (data: CreateExampleDto) => {
    const example = new ExampleModel(data);
    return example.save();
  },
  update: (id: string, data: UpdateExampleDto) => {
    return ExampleModel.updateOne({ _id: id, isDeleted: false }, data);
  },
  remove: (id: string) => {
    return ExampleModel.updateOne({ _id: id }, { isDeleted: true });
  },
};
