import React, { use, useCallback, useEffect, useRef, useState } from 'react'

function Passwordgenerator() {
  
let [length,setlength]=useState(6)
let [numberallowed,setnumberallowed]=useState(false)
let [characterallowed,setcharacterallowed]=useState(false)
let [password,setpassword]=useState("")



const Passwordgen=useCallback(()=>{
  
let pass=""   
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"   

if(numberallowed) str+="1234567890";
if(characterallowed) str+="!@#$%^&*()_+-=~"


for(let i=0;i<length;i++){

let char=Math.floor(Math.random() * str.length)
pass +=str.charAt(char)
}

setpassword(pass)
console.log(str)



},[length,numberallowed,characterallowed])



useEffect(()=>{

Passwordgen()

},[length,numberallowed,characterallowed,Passwordgen])




let reference=useRef(null)

let copy=()=>{
  
reference.current.select()
reference.current.setSelectionRange(0,10)
window.navigator.clipboard.writeText(password)

}



  return (
 <>   
<div className=' w-full max-w-md mx-auto shadow-md rounded-2xl px-4 my-8 text-orange-500 bg-gray-700'>
<h1 className='text-2xl text-white text-center my-3'>Password generator</h1>


<div className='flex shadow rounded-2xl overflow-hidden mb-4'>
<input type="text" 
 value={password}
 className='outline-none w-full  py-1 px-3 bg-white placeholder-gray-400'
 placeholder='password'
 ref={reference}
 onChange={function(e){inputvalue(e.target.value)}}
/>
<button 
className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
onClick={()=>{copy()}}
>copy</button>

</div>

<div className='flex items-center gap-x-1'>
<input type="range" 
min={6}
max={20}
value={length}
className='cursor-pointer'
onChange={(e)=>{
setlength(e.target.value)
}}
/>
<label>length: {length}</label>

<div className='flex items-center gap-x-1'>
<input type="checkbox"
defaultChecked={numberallowed}
onChange={()=>{
setnumberallowed((previous)=>{return !previous})  
}}
/>
<label>Numbers</label>
</div>

<div className='flex items-center gap-x-1'>
<input type="checkbox"
defaultChecked={characterallowed}
onChange={()=>{
setcharacterallowed((previous)=>{return !previous})  
}}
/>
<label>Characters</label>
</div>



</div>
  


</div>
</> 
) 
}

export default Passwordgenerator






 