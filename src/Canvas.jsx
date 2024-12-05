import React, { useEffect, useRef, useState } from 'react'
import images from './images'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Canvas() {
    const [currentFrame, setCurrentFrame] = useState({frame:0});
    const canvasRef = useRef(null);

    useGSAP(() => {
       gsap.to(currentFrame,{
        frame:149,
        duration:3,
        repeat:-1,
        ease:'linear',
        onUpdate:() => {
            setCurrentFrame({frame:Math.round(currentFrame.frame)})
        }
       })
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = images[currentFrame.frame];
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        };
    }, [currentFrame])
  return (
    <div>
      <canvas id='canvas' ref={canvasRef} className='w-[18rem] h-[18rem]'>

      </canvas>
    </div>
  )
}

export default Canvas
