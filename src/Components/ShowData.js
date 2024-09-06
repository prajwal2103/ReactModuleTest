import React from 'react'

const ShowData = ({ data }) => {
  return (
    <div className='w-full'>
      <table className='w-full' border={'1px'}>
        <tbody>
          {
            data.map((item) => (
              <tr className='border-b border-gray-800 'key={item.id}>
                <td className='text-left py-2 flex items-center gap-2 pl-2' >
                  <img  src={item.image} alt='image'    className='w-[15px]'/>
                  {item.name}
                  </td>
                <td className='text-center py-2'>{item.symbol}</td>
                <td className='text-center py-2'>${item.current_price.toLocaleString()}</td>
                <td className='text-center py-2'>${item.total_volume.toLocaleString()}</td>
                <td className='text-center py-2'>{Math.floor(item.market_cap_change_percentage_24h*100)/100}%</td>
                <td className='text-center py-2'>Mkt Cap : ${item.market_cap.toLocaleString()}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowData
