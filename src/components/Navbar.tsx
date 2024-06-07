import React from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

type Props = {};

export default function Navbar({ }: Props) {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a>
                    </div>
                    
                    <div className="ml-auto flex items-center">
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                Sign in
                            </a>
                            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                Create account
                            </a>
                        </div>

                        <div className="hidden lg:ml-8 lg:flex">
                            <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                <img
                                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                                    alt=""
                                    className="block h-auto w-5 flex-shrink-0"
                                />
                                <span className="ml-3 block text-sm font-medium">CAD</span>
                                <span className="sr-only">, change currency</span>
                            </a>
                        </div>

                        {/* Search */}
                        <div className="flex lg:ml-6">
                            <a href="#" className="p-2 text-teal-200 hover:text-white">
                                <span className="sr-only">Search</span>
                                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        </div>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-6">
                            <a href="#" className="group -m-2 flex items-center p-2">
                                <ShoppingBagIcon
                                    className="h-6 w-6 flex-shrink-0 text-teal-200 group-hover:text-white"
                                    aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                <span className="sr-only">items in cart, view bag</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
