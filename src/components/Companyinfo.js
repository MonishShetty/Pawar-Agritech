import React from 'react'

export default function Companyinfo() {
  return (
    <div>
      <section className="py-10 pt-4 pb-4  bg-green-900 sm:py-16 mt-14 lg:py-24">
        <div className="md:px-4 mx-auto max-w-7xl lg:px-8">


          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-12 text-green-900 h-12 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3.31 2.69-6 6-6zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>


                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-green-900">Mr.Vishal Pawar</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-green-900">CEO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-12 text-green-900 h-12 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 3h-1V2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H9V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 7v2h2V7H7zm4 0v2h2V7h-2zm4 0v2h2V7h-2zM5 20V10h14v10H5z" />
                  </svg>

                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-green-900">2023</h4>
                    <p className="mt-1.5 text-lg text-green-900 font-medium leading-tight ">Year of Establishment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-12 h-12 text-green-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-green-900">Supplier & Trader</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-green-900">Nature of Business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-12 h-12 text-green-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-green-900">98%</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-green-900">Customer success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


