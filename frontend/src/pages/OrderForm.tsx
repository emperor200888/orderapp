import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const OrderForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      customerName: '',
      product: '',
      quantity: 1,
      price: 0,
      status: 'pending',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Order Data:', data);
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Order' : 'Create New Order'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Customer Name</label>
          <input {...register('customerName', { required: true })} />
        </div>
        <div>
          <label>Product</label>
          <input {...register('product', { required: true })} />
        </div>
        <div>
          <label>Quantity</label>
          <input type="number" {...register('quantity', { required: true })} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" {...register('price', { required: true })} />
        </div>
        <div>
          <label>Status</label>
          <select {...register('status', { required: true })}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <button type="submit">{id ? 'Update Order' : 'Create Order'}</button>
      </form>
    </div>
  );
};

export default OrderForm;
