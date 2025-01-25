import React, { useState } from 'react'
import Todo from './Todo'
import OnProgress from './OnProgress'
import Done from './Done'
import Revised from './Revised'
import AddTaskModal from './AddTaskModal'

export default function ProjectContent() {
    const [showModal, setShowModal] = useState(false);
    function handleClose(){
        setShowModal(false);
    }
  return (
    <>
        {showModal && <AddTaskModal onClose={handleClose} />}
        <div className="mx-auto max-w-7xl p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projectify</h2>
            <div className="flex space-x-2">
              <button
                className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                onClick={() => setShowModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mr-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
                  />
                  <path d="M15 12h-6" />
                  <path d="M12 9v6" />
                </svg>
                Add
              </button>
            </div>
          </div>

          <div className="-mx-2 mb-6 flex flex-wrap">
            <Todo />
            <OnProgress />
            <Done />
            <Revised />
          </div>
        </div>
    </>
  )
}
