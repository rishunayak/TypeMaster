import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCorrectKey, setCurrentKey, setTotalKey } from '../Redux/TypeMaster/action'
import { useNavigate } from 'react-router-dom'

const TypeMaster = () => {
 
    const nav=useNavigate()
    const {currentKey,time,type}=useSelector((store)=>store.TypeMasterReducer)
    const [count,setCount]=useState(0)
    const dispatch=useDispatch()
    useEffect(()=>
    {
        dispatch(setCurrentKey())
        
    },[count])

    const [correct,setCorrect]=useState(0)
    const [total,setTotal]=useState(0)

  

   const [input,setInput]=useState("")

 

   const handleInput=(v)=>
   {
      setInput(v)
     
     
    //   if(currentKey===v)
    //   {
    //     setCount(count+1)
    //     setInput("")
    //     setWrong("white")
    //   }
    //   else if(currentKey.substring(0,v.length)===v)
    //   {

    //     setWrong("white")
    //   }
    //   else
    //   {

    //       setWrong("red")
    //   }


    //  console.log(v[v.length-1],currentKey[currIndex])
    //  if(v[v.length-1]==currentKey[currIndex])
    //  {
    //     setCurrIndex((prv)=>prv+1)
    //  }

     if(v[v.length-1]==currentKey[currIndex])
     {
        setCorrect(correct+1)
       
     }
     setCurrIndex(currIndex+1)
     setTotal(total+1)

      if(currentKey.length-1===currIndex)
      {
        setCount(count+1)
        setInput("")
        setCurrIndex(0)
      }



   }
 
 console.log(correct,total)

 
   const [minutes, setMinutes] = useState(+time);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {

          dispatch(setTotalKey(total))
          dispatch(setCorrectKey(correct))
 
          clearInterval(interval);
          nav("/result")
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

 const [name,setName]=useState(["a","b","c"])

 const [currIndex,setCurrIndex]=useState(0)

 
 


  return (
    <>
      
      
      


      <Box  bgColor={"#747a7d"} color={"white"} borderRadius={"20px"}   textAlign={"center"} boxShadow={"xl"} w={["400px","800px"]} m={"auto"} mt={"100px"} padding={"50px 0px"}  backgroundImage={"https://www.typingtest.com/forms/img/center-back.svg"} backgroundRepeat={"no-repeat"} backgroundPosition={"bottom"}>
        
        <Box mr={"90%"} fontSize={"20px"} color={minutes==0 && seconds<=20 ?"red":"white"}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </Box>
        
         <Heading mb={"100px"} backgroundColor={"#747a7d"}>
          {
            currentKey.split("")?.map((ele,i)=><span style={{backgroundColor:i===currIndex?"red":"#747a7d"}}>{ele}</span>)
          }
         </Heading>

         
         <Box>
         <Input bgColor={"white"} type='text' color={"black"} value={input} onChange={(e)=>handleInput(e.target.value)} width={"50%"} placeholder='Enter the word Given Above'/>
        
         </Box>
        
         <Image src="https://www.typingtest.com/forms/img/lady.svg"  position={"absolute"} top={"200px"}/>
      </Box>

    </>
  )
}

export default TypeMaster