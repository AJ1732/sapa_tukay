import React from 'react'
import data from '../../assets/data/db.json'
import Button from '../../components/Buttons/Button'

const Blog = () => {
  const {left, right} = data;
  console.log(left.list);
  return ( 
    <section className='min-h-[31.25rem] py-16 | flex justify-between items-end'>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/ec8f/178f/46b877507d3c8195b7722c0740079cab?Expires=1702857600&Signature=QJ-mVPIxehy3gnlW0RlkjBYvqGoCKCcKoZI-ruNnAH5R8or~WydSEOYXezKYcQLmRQKHy-6fF5BZt0NvJTHNlkhpTGBVovcHuv2SY6IH7cK3say75F5jmr2gwGkVcADoal0W6h1XyeqGssZf16Q~oQMxo2zV7AtGAPIkrwskGirUbx3FqUw88Q8epc6lurMnnoXPP68g9vIn5OaZXseXKp6IQsn2vqrsJFAKEn2UkLDk8Lnb6jUKOG5F2Ib0nARQ1UG80MbK6q~2saVGoGJncJX1eQuG2SyDXkBOffII6Q8wp3gEx6wvHHPcGw2jWyPpbVqE2v2tgXA1oibTjN8eIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>

      <div className='max-w-[37.125rem] | flex flex-col gap-4'>
        <h3 className='text-[2rem] font-bold'>{left.heading}</h3>
        <p className='text-gray050'>{left.description}</p>
        
        <div>
          <ul className='pt-2 | text-gray050 | flex flex-col justify-center items-start gap-2'>
            {left.list.map( item => (
              <li key={item.id}>
                <span className='pl-2'>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-5'>
          <Button text={"Donate na"} />
        </div>
      </div>
    </section>
  )
}

export default Blog