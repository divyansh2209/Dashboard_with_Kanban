import React from 'react'

const OrdersTable = (data) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">OrderID</th>
                                    <th scope="col" className="px-6 py-4">CustomerName</th>
                                    <th scope="col" className="px-6 py-4">TotalAmount</th>
                                    <th scope="col" className="px-6 py-4">OrderItems</th>
                                    <th scope="col" className="px-6 py-4">Location</th>
                                    <th scope="col" className="px-6 py-4">Status To</th>
                                    <th scope="col" className="px-6 py-4">ProductImage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.map((order) => (
                                    <tr
                                        key={order.OrderID}
                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{order.OrderID}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{order.CustomerName}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{order.TotalAmount}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{order.OrderItems}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{order.Location}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">
                                            <span class={`inline-flex items-center rounded-md bg-[${order.StatusBg}] px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10`}>{order.Status}</span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <img src={order.ProductImage} alt={`${order.CustomerName}'s avatar`} width="50" height="50" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersTable