import React from 'react'

const Button = ({text}) => {
  return (
    <button className='w-fit flex gap-1.5 | py-3 px-5 | bg-primary rounded-md '>
      <span className='font-semibold'>{text}</span>
      <img 
        className='w-6 h-6'
        src="https://s3-alpha-sig.figma.com/img/4cf9/df78/0d2826dc958b865b1fed43098135fbb7?Expires=1702857600&Signature=gKXBeSBgeRqbgI6R6F~nu8fEJOdXPBgtL~FOS8PWFx02eF6gXTaldEydRVBL7Wd06V3EGY9UCkbjMdtHwHMOtWNSkEAYINp5r2G17HWsBFpUhliud~OHz9Yl~xEnNwBLrphE0W9ElqnpMfyUJlEas4VI67QQHtc2c2zIu3CbpxuqL0s-M5HbfRQYig1cbQQIOgvyYAtxBCboUE3pFeaxRDfH2KrfmNOOgJMbGN1kdL769M1BlAuhmH6wNiV6WlpRjeLCeriDrYsCVaJD1oY68y8faswA8FGQ~T-UVbV0mdfoFzt0iy2BgSDqgzM7Xhh6aCJoPXfq-aFL8sKLb5TYJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />  
    </button>
  )
}

export default Button