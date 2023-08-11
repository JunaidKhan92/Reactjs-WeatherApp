import React from 'react';
import '../index.css';
import All from './All';


const Blogs = (props) => {
    return (
        <>
            <div className='allBlog'>
              <h1>All Blogs</h1>
               <All/>
            </div>
        </>
    )
}
export default Blogs;