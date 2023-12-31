import Image from 'next/image'
import Button from './components/Button'
import Button2 from './components/Button2'

export default function Home() {
  return (
    <main>
      <div className="container md:mt-36 mt-20 md:flex mx-auto items-center justify-center p-5 ">
      <div className="left md:w-1/2 mx-8 " >
        <img className='w-80' src="fb.svg" alt="" />
        <p className='text-xl md:text-2xl mb-8 md:mx-6'>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="right flex flex-col bg-white p-8 rounded-xl md:w-1/3">
        <input className="px-4 h-12 my-2 border bottom-1 border-gray-200 rounded-lg outline-blue-400"type="text"placeholder='Email address or phone number' />
        <input className="px-4 h-12 my-2 border bottom-1 border-gray-200 rounded-lg outline-blue-400"type="password"placeholder='password' />
        <Button></Button>
        <span className='text-blue-400 text-center my-2 cursor-pointer hover:underline'>Forget Password</span>
        <hr className='my-2'/>
        <Button2/>
        
      </div>
      </div>
    </main>
  )
}
