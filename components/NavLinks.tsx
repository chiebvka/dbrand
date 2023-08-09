import React from 'react'

type Props = {}

export default function NavLinks({}: Props) {
    const links = [{ name: "Limited Edition" }, { name: "Skins"}, { name: "Cases"}, { name: "Screen Protectors"}, { name: "Gaming"}, { name: "Artifacts"}, { name: "Help"}]
  return (
    <div className='flex flex-col md:flex-row'>
        {links?.map(link=> (
            <div className='flex '>
                <ul className='px-3 text-left flex flex-col md:cursor-pointer'>
                    <li className=' flex flex-col  py-7'>{link.name}</li>
                </ul>
            </div>
        ))}
    </div>
  )
}