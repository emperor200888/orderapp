import { Schema, model, Document } from 'mongoose';

export interface IOrder extends Document {
  customerName: string;
  product: string;
  quantity: number;
  price: number;
  totalPrice: number;
  status: 'pending' | 'completed' | 'canceled';
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    customerName: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: {type: String, enum: ['pending', 'completed', 'canceled'], required: true},
  },
  { timestamps: true }
);

orderSchema.pre('save', function (next) {
  this.totalPrice = this.quantity * this.price;
  next();
});

export const Order = model<IOrder>('Order', orderSchema);
