import Layout from '../components/Layout/Layout'
import React from 'react'

const Contact = () => {
  
   
      return (
        <Layout>
          <h1 className="font-bold text-3xl p-4 m-4">Contact us Page</h1>
          <form>
            <input
              type="text"
              className="border border-black p-2 m-2"
              placeholder="name"
            />
            <input
              type="text"
              className="border border-black p-2 m-2"
              placeholder="message"
            />
            <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
          </form>
  </Layout>
    
  )
}

export default Contact