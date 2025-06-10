"use client"
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import Currentmovie from './components/Currentmovie'
import { hidden } from './components/utils/utils'
import gsap from 'gsap'
import { Draggable, InertiaPlugin, ScrollTrigger,SplitText } from 'gsap/all'
function Page() {
  useEffect(()=>{
      gsap.set(['#hero-text','#bty','#btyy','#btyyy'],{scale:0.3,opacity:0})
      gsap.registerPlugin(InertiaPlugin,ScrollTrigger,SplitText,Draggable)
      const guys = document.querySelectorAll('#btyyy')
      gsap.timeline().to(['#hero-text','#bty'],{
             scale:1,
             opacity:1,
             stagger:0.3,
             ease:"power3.inOut",
             duration:1.2
      }).to(['#btyy'],{
        scale:1,
        opacity:1,
        ease:"power3.inOut"
      },"star").to("#btyyy",{
        scale:1,
        opacity:1,
        ease:"power3.inOut",
        duration:1
      },"star").to([guys[0],guys[1]],{
        y: 30,
       scale: 1.05,
       ease: "sine.inOut",
       repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 2,
       transformOrigin: "center center"
      }).to(guys[2],{
        y:10,
        scale: 1.05,
       ease: "sine.inOut",
       repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 2,
      });
      const lets = new SplitText('#find',{type:"chars"});
      gsap.set([lets.chars,"#xcv"],{opacity:0.5})
     gsap.to(lets.chars,{
        opacity:1,
        stagger:0.5,
        scrollTrigger:{
          trigger:"#sect2",
          start:"top 85%",
          end:"top 70%",
          scrub:true,
        }
     })
     gsap.to('#xcv',{
         opacity:1,
         scrollTrigger:{
          trigger:"#sect3",
          start:"top 80%",
          end:"top 68%",
          scrub:true,
         }
     });
     const roll = document.getElementById('roller') as HTMLDivElement;
     gsap.set(roll,{
      x:`-961`,

     });
     ScrollTrigger.create({
      trigger:"#trigger1",
      start:"top center",
      onEnter:()=>{
        gsap.to(roll,{
          x:0,
           duration:1,
      ease:"sine.inOut"
        })
      }
     });
const container = document.getElementById('container')
 Draggable.create("#content",{
 type:"x",
 bounds:container,
 inertia:true,
 edgeResistance:0.65,
 ease:"power2.inOut",
 throwProps:true

})
const rows = document.getElementById('rowsa');
  if(!rows)return;
  rows.innerHTML+=rows.innerHTML
  const width = rows?.scrollWidth /2
   gsap.to(rows,{
   x:`-=${width}`,
   duration:30,
   ease:"none",
   repeat:-1
   })

  },[])
  const client = new QueryClient();
  const {status} = hidden();
  return (<div className='overflow-hidden'>
    <QueryClientProvider client={client}>
      <Hero/>
      <Section2/>
      {status&&<Currentmovie/>}
    </QueryClientProvider>
    </div>
  )
}

export default Page
