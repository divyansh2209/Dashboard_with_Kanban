import OrdersTable from "../../components/OrdersTable";
import { ordersData } from "../../data/dummy";
import ShimmerButton from '../../components/ShimmerButton';


export function Orders() {
  console.log(ordersData)

  return (
    <div>
      <div className='px-5 flex justify-between items-center'>
        <h2 className='text-3xl bold text-gray-500 m-5 '>Order Details</h2>
        <div>
          <ShimmerButton>Add</ShimmerButton>
        </div>
      </div>
      <div className='border-2 border-black rounded-xl m-5'>
        <OrdersTable data={ordersData} />
      </div>
    </div>
  );
}
