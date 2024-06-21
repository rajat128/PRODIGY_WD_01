import React ,{useEffect, useState}from 'react'

function About() {
   const [color,setcolor]=useState('red')
   let imageArray=["https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1465865523598-a834aac5d3fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1600986600826-aa5b82e73a65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1464288550599-43d5a73451b8?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
   const [image,setImage]=useState("https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
   const[i,seti]=useState(0)
   useEffect(() => {
    const intervalID = setInterval(() => {
      // j=i+1;
        seti((prevI) => (prevI + 1) % imageArray.length)
        // if(i===5){
        //   seti(0)
        // }
      setImage(imageArray[i]);
    }, 800);
    return () => clearInterval(intervalID);
  }, [imageArray]);
  const getRandomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // const getRandomImage = function () {
  //   const hex = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += hex[Math.floor(Math.random() * 16)];
  //   }
  //   return "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
  // };
  return (
    // <div id="aboutdiv" className=" transition ease-in-out delay-150 h-screen" style={{backgroundColor:color}}>
      
    // </div>
    <>
    <div >
     <div className= {`h-screen bg-no-repeat relative flex flex-col px-4 pt-24 pb-12 font-sans text-gray-700  sm:px-6 lg:px-8`}  style={{backgroundImage:`url(${image})`, backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw', }}>

  <div class="flex-1 space-y-8">
    <div class="sticky w-full max-w-xl px-8 py-12 mx-auto space-y-4 bg-white border rounded-2xl shadow-2xl">
      <h2 class="grid leading-none text-gray-900">
        <span class="text-md text-white bg-blue-800 py-3 w-24 flex justify-center rounded  cursor-pointer">About Us </span>
        <span class="font-bold font-sans text-3xl mt-5">Transforming the Way People Learn</span>
      </h2>
      <p className='font-serif text-slate-600'>
      Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential. Whether you're a student looking to improve your grades, a professional seeking to upskill, or an organization looking to enhance employee training, we have the tools and resources you need to succeed.
      </p>
<p className='font-serif text-zinc-600'>
If you're looking for an innovative and dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey. Together, we can transform the way we learn and create a better future for all.
      </p>
    </div>
   
    
  </div>
  
</div>
</div>
    </>
  )
}

export default About
