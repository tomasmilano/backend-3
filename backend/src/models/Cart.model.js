import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
    {
        products: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                quantity: Number,
            },
        ],
        userEmail: String,
    },
    { timestamps: true }
);

export const CartModel = mongoose.model('Cart', cartSchema);
