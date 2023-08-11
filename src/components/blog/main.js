import { CheckIcon } from '@heroicons/react/20/solid'
import { useState, useRef, useEffect } from 'react'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Main() {
  const [price, setPrice] = useState({ price: "20" })

  const [formData, setFormData] = useState({ name: "", password: "" })

  const HandleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  }


  const Submit = (e) => {
    e.preventDefault()

  }


  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                repellendus etur quidem assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-[100%] bg-[silver] flex h-[100px] gap-[1rem]'>
              <button onClick={() => setPrice({ price: "30" })} className='bg-[#F6C90E] text-[18px] font-bold px-[15px] py-[4px] tracking-[.10em] rounded'>3 month plan</button>
              <button onClick={() => setPrice({ price: "60" })} className='bg-[#F6C90E] text-[18px] font-bold px-[15px] py-[4px] tracking-[.10em] rounded'>6 month Plan</button>
              <button onClick={() => setPrice({ price: "100" })} className='bg-[#F6C90E] text-[18px] font-bold px-[15px] py-[4px] tracking-[.10em] rounded'>12 month Plan</button>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${price.price}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={Submit} >
        <label>Name</label>
        <input placeholder='Enter name' onChange={HandleData} className='border-2 border-indigo-600 ' name='name' ></input>
        <label>Password</label>
        <input placeholder='Enter Password' onChange={HandleData} className='border-2 border-indigo-600 ' name='password'></input>
        <button type='submit' className='bg-[blue] text-white ml-5' >Submit</button>
      </form>
    </>

  )
}