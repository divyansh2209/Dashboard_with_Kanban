import { employeesData, employeesGrid } from '../../data/dummy';
import { Table } from '../../components/TableComp';
import ShimmerButton from '../../components/ShimmerButton';


export function Employees() {


  return (
    <div>
      <div className='px-5 flex justify-between items-center'>
        <h2 className='text-3xl bold text-gray-500 m-5 '>Employee Details</h2>
        <div>
          <ShimmerButton>Add</ShimmerButton>
        </div>
      </div>
      <div className='border-2 border-black rounded-xl m-5'>
        <Table data={employeesData} />
      </div>
    </div>
  );
}
