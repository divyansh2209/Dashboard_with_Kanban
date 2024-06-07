import React from 'react';

const List = ({ events }) => {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {events.map((event) => (
                <li key={event.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{event.title}</p>
                            {/* Check if start and end are not null before calling toString() */}
                            {event.start && (
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{event.start.toString()}</p>
                            )}
                            {event.end && (
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{event.end.toString()}</p>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default List;
