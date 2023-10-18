import React from 'react'
import Table from 'react-bootstrap/Table';
import './Table.css'
import SearchBar from '../SearchBar';

const TableComponent = () => {
  const details = [
    {
    imgUrl : 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=sph',
    productName:'Abstract 3D',
    productDesc: 'Lorem ipsum dolor sit amet',
    stock:'32 in stocks',
    price: '$ 45.99',
    sales:20
    },
    {
      imgUrl : 'https://img.freepik.com/premium-photo/solar-systems-solitary-planet-neptune-blue-planet-from-fiction-this-images-components-were-provided-by-nasa_872147-18277.jpg',
      productName:'Sarphens illustration',
      productDesc: 'Lorem ipsum dolor sit amet',
      stock:'32 in stocks',
      price: '$ 45.99',
      sales:20
    },
  ]
  return (
    <div className='table-div shadow rounded p-3 mt-3'>
      <div className='d-flex justify-content-between'>
        <div>
          <p className='text-bold text-dark'>Product Sell</p>
        </div>
        <div className='text-dark'>
          <SearchBar/>
        </div>
      </div>
    <Table className='table-style' responsive="sm">
      <thead>
        <tr>
          <th className='text-muted small col-5'>Product Name</th>
          <th className='text-muted small'>Stocks</th>
          <th className='text-muted small'>Price</th>
          <th className='text-muted small'>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        {details.map((data)=>{
          return (
            <tr>
              <td className='col-5'>
                <div className='d-flex'>
                  <div className='me-2'>
                    <img src={data.imgUrl} alt="" width={70}/>
                  </div>
                  <div>
                    <p className='text-bold m-0'>{data.productName}</p>
                    <p className='text-muted small m-0'>{data.productDesc}</p>
                  </div>
                </div>
              </td>
              <td>{data.stock}</td>
              <td>{data.price}</td>
              <td>{data.sales}</td>
            </tr>
          )
        })}
        
      </tbody>
    </Table>
    
  </div>
  )
}

export default TableComponent
