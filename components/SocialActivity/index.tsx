
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialActivity = () => {
  return (
    <section className='w-full bg-white py-10 my-44'>
      <div className='container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-6'>
        <div className='w-full lg:w-1/3 flex items-center gap-x-6 lg:gap-x-10'>
          <Image src={"/images/social-activity/profile.png"} className='w-32 lg:w-60' width={400} height={400} alt='ahir yousefi, ahir' />
          <div className='flex flex-col gap-y-3 text-black'>
            <h3 className='text-xl font-mono'>Ahir yousefi</h3>
            <div className='flex items-center gap-x-3'>
              <span className='text-3xl font-mono'>170K</span>
              <span className='font-light'>Followers</span>
            </div>
            <Link href={"#"} className='hidden lg:block bg-black px-4 py-2 w-2/3 text-white text-center text-sm mt-10'>
              Follow
            </Link>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <p className='text-[#7A7A7A] text-sm lg:text-base max-w-xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialActivity