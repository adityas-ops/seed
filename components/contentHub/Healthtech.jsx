import React from 'react'
import Card from './Card'


const data = [
  {
      img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddd26ba93df9a88fc5b12_drug-discovery-with-AI-p-800.jpeg",
      img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
      role:"blog",
      desc:"Revolutionizing drug discovery with AI"
  },
  {
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede0f220f6581f08a4dc70_5fe4711df6f5aa2a07ba0f61_Murali-radhika.png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:"Understanding the Value of AI in Healthcare"
  },
  {
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede0eb5c297d54e0622ce5_5fbfde06377fbe5d8cba813c_Dr-Bertalam-radhika.png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
    role:"blog",
    desc:"Future of Digital Health"
},
{
  img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddfe6ec9448750939f89b_5fa42c26b4f40598713c68d9_onco-p-800.jpeg",
  img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
  role:"podcast",
  desc:"Reimagining Cancer Care in India - the Onco.com Story"
},
{
  img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60ede0adf689865fb24a8b5a_606cae0c4e05dcbfb15b0c28_5ff2bd2f0d901fb33c2860bd_kiran%252525252520mazumdar%252525252520shaw-p-500-(1).png",
  img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
  role:"blog",
  desc:"On the Biocon journey and why entrepreneurs need to be risk-takers"
},

{
  img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60edd9a2ae82365a48517d35_5f3390e3c1fd3269515068ad_20_radhika%252525252520accel.png",
  img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
  role:"blog",
  desc:"Healthcare Landscape in India"
}
]
function Healthtech() {
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

export default Healthtech