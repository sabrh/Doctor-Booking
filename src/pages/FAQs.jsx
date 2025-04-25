import React, {useEffect, useState} from 'react';

const Blogs = () => {
  const [blogs, setBlogs]=useState([]);
  useEffect(() => {
    fetch('/faq.json')
    .then((res)=>res.json())
    .then((data)=>setBlogs(data))
    .catch((error)=>console.log('Error fetching Blogs data:', error))
  }, [])

    return (
      <>
      <div className='py-10 rounded-lg justify-center text-center'>
      <h1 className='font-bold text-2xl mb-2'>FAQ</h1>
      <p className='px-20 mb-2'>Let's explore some frequently asked questions about this website. </p>
      </div>

      <div className='mx-2 md:mx-8 lg:mx-20'>
        {blogs.map((item, index) => (
          <div key={index} className="mb-8 p-4 rounded-lg shadow-md bg-white">
            <h3>{item.question}</h3>
            <p><b className='text-blue-400'>Answer:</b> {item.answer}</p>
            <p className='text-gray-500'>Posted on: {item.date_posted}</p>
          </div>
        ))}

      </div>
     </>
    );
};

export default Blogs;