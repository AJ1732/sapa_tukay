import React from 'react'
import Button from '../../components/Buttons/Button'
import kuda from '../../assets/images/kuda.png'
import opay from '../../assets/images/opay.png'
import palmpay from '../../assets/images/palmpay.png'
import paypal from '../../assets/images/paypal.svg'

const Hero = () => {
  return (
    <section className='max-w-7xl m-auto pt-12 px-8 | flex flex-col justify-between items-center sm:flex-row'>
      {/* Hero Content */}
      <div className='max-w-[30.75rem]'>
        <div className='flex flex-col gap-6 mb-20'>
          <h2 className='text-head font-bold'>Na beg , we dey beg</h2>

          <p className='pb-2'>Urgent 2k is a valid Nigerian currency. It is more than an emergency fund; it is a lifesaver, a life jacket when you are drowning. In fact, this currency has officially been recognized.</p>

          <Button text={`Urgent tukay`} />
        </div>

        {/* Sponsors */}
        <div>
          <p className='font-medium'>Who supports us</p>
          <div className='flex justify-center items-center gap-2.5'>
            <img className='w-fit h-fit' src={paypal} alt="paypal" />
            <img className='w-fit h-fit' src={opay} alt="opay" />
            <img className='w-fit h-fit' src={palmpay} alt="palmpay" />
            <img className='w-fit h-fit' src={kuda} alt="kuda" />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div>
        <img 
          className='w-[41.25rem] h-[41.25rem]'
          src="https://s3-alpha-sig.figma.com/img/2b27/df40/fa2cc0e7a083f2d05ef535aa9b894eb4?Expires=1702857600&Signature=hPXuoZudRHR1kqFs1Dav~tKVjymku~FNRgIAipDG2NBmk5RqQ2QGRNS7iO2Z5nSLTzMo8-vVFQQsVVQKj4OB~PnaiXRxvzQ0zgmHCP7PHtpW6P4TeaJkT90Igv4NnShWzjzHY6OWxkwAABBXTLzFqQvC4GDuFA3ePfbTvehcp88GsbRfMzYnRppmVfaliX5Z0FrQx51WoEw-7pIPucYCZ677L4rIIuqTGWtwaCRIVD~HqWKnDT5GNYlK5IVkrKPwreJtAe5h9FmSEQ0zCm5UOqIkMRSbGexHVDJRIv35yhyzA0Ld0KeHzzJFuD1PnhSX90PTLlU7YHQZEwje0uQUYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
    </section>
  )
}

export default Hero