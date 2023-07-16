import React from 'react'
import Card from './Card'


const data = [
  {
    id: 1,
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/618cc4e023a78e643440fd0b_Future%20of%20Crypto%20-%20Raghu%20(1).png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:" Future of Cypto - Raghu Yarlagadda on FalconX's flight and what it means"
  },
  {
    id: 2,
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/615acfdfb2354a51b5efb5b8_Bob%20Meese_Chief%20Business%20Officer%20at%20Duolingov2%20(1).png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:" Future of Edtech - Learnings from the Duolingo journey"
  },
  {
    id: 3,
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/61376a0c89c48801765fb8f3_1010%201%20(1).png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:" Future of Credit Cards - Innovation and opportunities in Indian Fintech"
  },
  {
    id: 4,
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/6113cebbb9d9387e950e1839_myglam-min-p-800.jpeg",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc4ea05b071a_blog-icon-white.svg",
    role:"blog",
    desc:"The Changing Face of Beauty and Personal Care  in the Digital Era "
  },
  {
    id: 5,
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/610d1a2b3798f1051d056595_darpan%20sanghvi%20myglamm%20(1).png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:"Future of Beauty and Personal Care: Tracking the evolution of the category in India"
  },
  {
    id: 6,
    img1:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60faf6e179fd4b141f837aec_Baskar%20Subramanian%20(1).png",
    img2:"https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/606cae0c4e05dc23465b074d_Podcast-icon-white.svg",
    role:"podcast",
    desc:"The most resilient Indian startup you haven’t heard of"
  }
]
function B2b() {
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

export default B2b