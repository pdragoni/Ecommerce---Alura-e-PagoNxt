import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Types.ObjectId },
    nome: { type: String, minLength: 5, required: true },
    status: { type: String, enum: ['ATIVA', 'INATIVA'], required: true },
  },
  {
    versionKey: false,
  }
)

const Categories = mongoose.model('categories', categoriesSchema);

export default Categories;