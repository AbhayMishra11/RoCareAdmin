import React from 'react'

const PageHeader = () => {
  return (
    <>
       <div className='flex gap-2 items-center'>
        <label>Show</label>
        <select className='w-[60px] outline-none p-1 border border-gray-400 '>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label>Entries</label>
        </div>
        <div>
          <label>Search: </label>
          <input type='text' className='p-1 outline-0 border border-gray-400' />
        </div>
    </>
  )
}

export default PageHeader
