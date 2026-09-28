import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  },
  description: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 500
  },
  images: {
    type: [{
      fileId: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }],
    validate: {
      validator: (images) => images.length <= 5,
      message: 'A product can have at most 5 images'
    },
  },
  price: {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ['ZAR', 'USD', 'INR'],
      default: 'ZAR'
    }
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true
  }
}, { timestamps: true })


const ProductModel = mongoose.model("products", productSchema)

export default ProductModel



/**
 * 
 *    product :{
 *     title: "test title 1",
 *     description: "test description 1",
 *     images: [ "https://imagekit.io_1", "https://imagekit.io_2" ],
 *     price: { amount:100, currency:"INR" },
 *     sizes:[
 *       { size:"M",stock:20 },
 *       { size:"XL",stock:40}
 *     ],
 *     seller: seller_id
 *    }
 * 
 */