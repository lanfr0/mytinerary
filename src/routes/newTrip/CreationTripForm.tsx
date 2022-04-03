import React from "react";

export const CreationTripForm: React.FC = () => {
  return (
    <div className="bg-white text-bluePrimary rounded-xl shadow-2xl p-8">
      <form action="#" method="POST">
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-4 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-4 sm:col-span-3">
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-4 sm:col-span-3">
            <label
              htmlFor="people"
              className="block text-sm font-medium text-gray-700"
            >
              People
            </label>
            <input
              type="text"
              name="people"
              id="people"
              className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-6 sm:col-span-3">
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From
            </label>
            <input
              type="date"
              name="from"
              id="from"
              className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-6 sm:col-span-3">
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700"
            >
              To
            </label>
            <input
              type="date"
              name="to"
              id="to"
              className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md p-2"
            />
          </div>

          <div className="md:col-span-12 sm:col-span-12">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md p-2"
            />
          </div>
        </div>
        <div className="px-4 py-4 mt-4 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bluePrimary focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
