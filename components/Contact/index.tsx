
import React from 'react'

const Contatc = () => {
    return (
        <section className='container flex flex-col gap-y-3 items-center my-36'>
            <h2 className='text-3xl font-mono text-white mb-10'>
                Contact
            </h2>
            <form action="#" className='flex flex-col gap-y-6 w-full lg:w-1/2'>
                <div>
                    <label htmlFor="fullName" className='block mb-4 text-lg font-medium'>Full name</label>
                    <div className='flex items-center w-full h-16 px-4 bg-[#1B1B1B]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type="text" className='w-10/12 h-full px-4 font-light text-lg bg-transparent text[#A6A6A6] focus:border-none focus:outline-none' placeholder='Jason' />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-4 text-lg font-medium'>
                        E-mail address
                        <span className='inline-block mx-2 font-semibold text-xl text-[#FF0000]'>*</span>
                    </label>
                    <div className='flex items-center w-full h-16 px-4 bg-[#1B1B1B]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#A6A6A6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#A6A6A6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type="email" id='email' className='w-10/12 h-full px-4 font-light text-lg bg-transparent text[#A6A6A6] focus:border-none focus:outline-none' placeholder='unreal@outlook.com' />
                    </div>
                </div>
                <div>
                    <label htmlFor="Message" className='block mb-4 text-lg font-medium'>Message</label>
                    <textarea rows={200} id='Message' className='flex items-center w-full h-32 p-4 bg-[#1B1B1B]'>
                    </textarea>
                </div>
                <input type='submit' value={"Send message"} className='flex justify-center items-center w-full h-20 px-4 font-semibold bg-white text-black hover:cursor-pointer' />
            </form>
        </section>
    )
}

export default Contatc