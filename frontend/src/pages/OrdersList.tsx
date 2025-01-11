import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getOrders, deleteOrder } from '../services/api';
import { Link } from 'react-router-dom';

const OrdersList: React.FC = () => {
  const queryClient = useQueryClient();

  // Fetch orders using React Query
  const { data: orders, isLoading, isError, error } = useQuery({ queryKey: ['orders'], queryFn: getOrders });

  // Delete order mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] }); 
    },
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <p>Loading orders...</p>;
  if (isError && error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Orders List</h1>
      <Link to="/create">Create New Order</Link>
      <table border={1} style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order: any) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.customerName}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>{order.status}</td>
                <td>
                  <Link to={`/edit/${order._id}`}>Edit</Link>{' '}
                  <button onClick={() => handleDelete(order._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
