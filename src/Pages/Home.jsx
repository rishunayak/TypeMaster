import { Box, Button, Center, Heading, Image, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BsClockFill,BsFileEarmarkTextFill} from "react-icons/bs"
import { setTimer} from '../Redux/TypeMaster/action'
import { setType } from '../Redux/TypeMaster/action'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Home = () => {

  const [time,setTime]=useState("1")
  const [type,setTypes]=useState("Easy")
  const nav=useNavigate()
  const dispatch=useDispatch()
  const handleStart=()=>
  {
    dispatch(setTimer(time))
    dispatch(setType(type))
    
      nav("/TypeTesting")
  }
 
  return (
    <>
      
      <Box  bgColor={"#747a7d"} color={"white"} borderRadius={"20px"}   textAlign={"center"} boxShadow={"xl"} w={["400px","800px"]} m={"auto"} mt={"100px"} padding={"50px 0px"}  backgroundImage={"https://www.typingtest.com/forms/img/center-back.svg"} backgroundRepeat={"no-repeat"} backgroundPosition={"bottom"}>
         <Heading mb={"30px"}>Check your typing skills in a minute</Heading>

         <Text mb={"20px"}>Select Your Test</Text>
         <Box w={"400px"} m="auto">
         <Box display={"flex"} gap={"20px"} mb={"20px"}> 
            <BsClockFill size={"40px"}/>
             <Select value={time} onChange={(e)=>setTime(e.target.value)} >
              <option style={{backgroundColor:"#747a7d"}}  value={"1"}>1 Minute Test</option>
              <option style={{backgroundColor:"#747a7d"}} value={"2"}>2 Minute Test</option>
              <option style={{backgroundColor:"#747a7d"}} value={"3"}>3 Minute Test</option>
              <option style={{backgroundColor:"#747a7d"}} value={"4"}>4 Minute Test</option>
              <option style={{backgroundColor:"#747a7d"}} value={"5"}>5 Minute Test</option>
             </Select>
         </Box>

         <Box display={"flex"} gap={"20px"}>
            <BsFileEarmarkTextFill size={"40px"}/> 
            <Select value={type} onChange={(e)=>setTypes(e.target.value)}>
              <option style={{backgroundColor:"#747a7d"}} value={"Easy"}>Easy Test</option>
              <option style={{backgroundColor:"#747a7d"}} value={"Medium"}>Medium Test</option>
              <option style={{backgroundColor:"#747a7d"}} value={"Hard"}>Hard Test</option>
             </Select>
         </Box>
         </Box>
         <Button mt="25px" padding={"20px 40px"} fontSize={"22px"} colorScheme='blue' onClick={()=>handleStart()}>Start</Button>
         <Image src="https://www.typingtest.com/forms/img/lady.svg"  position={"absolute"} top={"250px"}/>
      </Box>
    </>
  )
}

export default Home