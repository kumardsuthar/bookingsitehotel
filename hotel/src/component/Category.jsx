import React from 'react'
import cateimg01 from '../media/categoryimg/cate-01.jpg'
function Category({catetitle , catepalce}) {
  return (
    <div className='category'>
       <div>
          <img src={cateimg01} alt="" />
       </div>
       <div>
           <h4>{catetitle}</h4>
           <p>{catepalce}</p>
       </div>
    </div>
  )
}

export default Category
