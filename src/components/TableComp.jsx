import React from 'react'


export const Table = (data) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">EmployeeID</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Title</th>
                                    <th scope="col" className="px-6 py-4">Hire Date</th>
                                    <th scope="col" className="px-6 py-4">Country</th>
                                    <th scope="col" className="px-6 py-4">Reports To</th>
                                    <th scope="col" className="px-6 py-4">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.map((employee) => (
                                    <tr
                                        key={employee.EmployeeID}
                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{employee.EmployeeID}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{employee.Name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{employee.Title}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{employee.HireDate}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{employee.Country}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-lg">{employee.ReportsTo}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <img src={employee.EmployeeImage} alt={`${employee.Name}'s avatar`} width="50" height="50" />
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

