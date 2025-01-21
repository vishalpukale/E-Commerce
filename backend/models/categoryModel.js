import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: 'string',
        trim: true,
        required: true,
        maxLength: 32,
        unique: true
    },
});

const Category = mongoose.model('Category', categorySchema)
export default Category;