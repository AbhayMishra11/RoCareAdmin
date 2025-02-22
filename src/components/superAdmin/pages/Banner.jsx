import React from 'react'
import PageHeader from './PageHeader'
import b1 from '../../../assets/b1.png'
import b2 from '../../../assets/b2.png'
import b3 from '../../../assets/b3.png'
import b4 from '../../../assets/b4.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const Banner = () => {
  const bannerList = [
    {id:1, category: 'Top Banner', img:b1},
    {id:2, category: 'Refer & Earn', img:b2},
    {id:3, category: 'Top Banner', img:b3},
    {id:4, category: 'Top Banner', img:b4},
  ]
  return (
    <div>
      <section className="w-full flex text-sm justify-between p-3 bg-white rounded-xs">
            <PageHeader />
          </section>

          <section className="bg-white rounded-xs shadow mb-1 p-4 overflow-x-auto space-y-4">

          <table className="border w-full text-sm border-collapse bg-white shadow-md rounded-lg border-[#D9D9D9] ">
              <thead className="bg-[#D9D9D9]">
                <tr className="">
                  <th className="px-4 py-2 text-left">SL. No.</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Banner Image</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {bannerList.map((item) => (
                  <tr key={item.id} className="even:bg-white odd:bg-gray-100">
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2"><img src={item.img}/></td>
                    <td className="px-4 py-2"><button
                        className="cursor-pointer hover:bg-[#7EC1B1] border border-[#7EC1B1] text-[#7EC1B1]  px-8 py-2 text-sm hover:text-white rounded-3xl"
                      >
                        Published
                      </button></td>
                    <td className="px-4 py-2">
                      <button
                        className="flex gap-2 items-center"
                      >
                       <span className='bg-[#007AFF] rounded-xl p-2 text-md text-white'> <FaRegEdit /></span>
                       <span className='bg-[#C17E7F] rounded-xl p-2 text-md text-white'> <RiDeleteBin6Line /></span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


           {/* Pagination Section */}
           <div className="flex justify-between text-sm">
              <div>
                <p>Showing 1 to 10 of 30 Entries</p>
              </div>
              <div className="flex gap-2">
                <button className=" bg-white border border-[#7EC1B1] px-4 py-2 text-[#7EC1B1] rounded-2xl">
                  Previous
                </button>
                <button className=" bg-[#7EC1B1] px-4 py-2 text-white rounded-xl">
                  1
                </button>
                <button className=" bg-white border border-[#7EC1B1] px-4 py-2 text-[#7EC1B1] rounded-2xl">
                  Next
                </button>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Banner
