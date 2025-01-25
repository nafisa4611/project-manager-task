import React from 'react'
import Header from "./Header"
import ProjectContent from "./ProjectContent/ProjectContent"
import Sidebar from "./Sidebar"

export default function Page() {
  return (
    <>
        <body className="bg-gray-900 text-white">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Header />
            <ProjectContent />
          </main>
        </div>
      </body>
    </>
  )
}
