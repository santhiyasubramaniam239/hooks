import React,{useRef, useEffect}from "react";
const StyleElement = () =>{
    const colorParagraph = useRef(null);
    const colors=['#d529d0','#03a9f4','#d14614fa','#d51858','#9c27b0','#ff5722'];
    const selectedColor = useRef(null);

    useEffect(()=>{
        console.log(colorParagraph);
        console.log(colorParagraph.current);
    });

    useEffect(()=>{
        console.log('statement executedfor selectedColor refhook changes');
    },[selectedColor.current]);

    const styleParagraph=()=>{
        const randomColor = Math.floor(Math.random()* colors.length);
        colorParagraph.current.style.color = colors[randomColor];
        selectedColor.current = colors[randomColor];
        console.log('selected color', selectedColor.current);
    }
   return(
    <div>
        <button onClick={()=>{styleParagraph()}}>Click me</button>
        <p ref={colorParagraph}>Welcome back to the channel</p>
    </div>
   )
};

export default StyleElement;