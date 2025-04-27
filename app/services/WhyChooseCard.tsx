import Image from 'next/image'
import React from 'react'

type Props = {
    image: string
    title: string
}

const WhyChooseCard = ({image, title}: Props) => {
  return (
    <div>
        <Image src={image} alt="Why Choose Us" width={70} height={70} className="mx-auto" />
        <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
        <p className='mt-2 text-center text-gray-700 text-xsfont-medium text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dicta aliquid aliquam. Laudantium.</p>
    </div>
  )
}

export default WhyChooseCard