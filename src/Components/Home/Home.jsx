import React from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineDollar} from 'react-icons/ai'
import {TbNotes, TbWallet} from 'react-icons/tb'
import Cards from './Cards';
import Charts from '../Charts/Charts';
import TableComponent from '../Tables/TableComponent';
import CircleProgress from '../Charts/CircleProgress';


function Home() { 

  return (
    <main className='main-container'>

        <div className='main-cards'>
            <Cards text={'Earning'} amount={'$198K'}
              icon={<AiOutlineDollar color='green' className='display-6'/>}
              bgColor={'rgb(180, 255, 167'} 
              details={<span><span className='text-bold text-success'>↑37.8%</span> this month</span>} 
            />
            <Cards text={'Orders'} amount={'$2.4K'}
              icon={<TbNotes color='purple' className='display-6'/>}
              bgColor={'rgb(239, 167, 255)'}
              details={<span><span className='text-bold text-danger'>ↆ2%</span> this month</span>} 
            />
            <Cards text={'Balance'} amount={'$2.4K'} 
              icon={<TbWallet color='blue' className='display-6'/>}
              bgColor={'rgb(167, 236, 255)'}
              details={<span><span className='text-bold text-danger'>ↆ2%</span> this month</span>} 
            />
            <Cards text={'Total Sales'} amount={'$89K'}
              icon={<HiOutlineShoppingBag color='red' className='display-6'/>}
              bgColor={'rgb(255, 167, 167)'}  
              details={<span><span className='text-bold text-success'>↑11%</span> this week</span>} 
            />
        </div>

        <Charts/>
        

        <TableComponent/>
    </main>
  )
}

export default Home
