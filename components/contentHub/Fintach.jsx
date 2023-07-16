import React from 'react'
import Card from './Card'


const data = [
  {
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/62865eb33e556bc296b0b4f9_vinay_bagri_750-removebg-preview%20(1).png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:"Future of Banking - Reflections from Niyo’s Vinay Bagri "
  },
  {
      img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddd3be7667ca8256284a7_60585e5c7156321099663ad6_Blog-Image---Walrus%25252525402x-p-800.jpeg",
      img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
      role:"blog",
      desc:"Why Walrus is on a mission to make money cool again"
  },
  {
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddff791eb1476938ef0a7_5fc0d8d3d52e0d7c924f9f6e_CG_team-p-800.jpeg",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
    role:"blog",
    desc:"Accel partners with Credgenics to accelerate India's financial inclusion journey"
},
{
  img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddeba8e4b26635401254d_5fdacdf192e3e0cb94a4b068_UNI%252525252520(1)-p-800.jpeg",
  img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
  role:"blog",
  desc:"Our Investment in Uni"
},
{
  img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede049b201d343f5931178_5ff2c3240e4f30cbd5430cc1_varun%252525252520dua%252525252520acko-p-500.png",
  img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
  role:"podcast",
  desc:"Coverfox to Acko: Startup Journey in the Insurance Market"
},
{
  img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60edde4ecfa68e89b633ea4f_5fbe59daf2ca148296757764_Screenshot%2525252525202020-11-25%252525252520at%2525252525206.png",
  img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
  role:"blog",
  desc:"Simility: Future Forward with PayPal"
}
]

function Fintach() {
  return (
    <div className='w-full h-full grid md:grid-cols-3 grid-cols-1  gap-0 gap-x-[24px] gap-y-[40px]'>
    {
      data.map((item,index)=>{
        return(
          <Card key={index} item={item}/>
        )
      })
    }
    </div>
  )
}

export default Fintach