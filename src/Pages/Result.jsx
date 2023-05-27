import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Result = () => {

    const {totalKeyPressed,correctKeyPressed}=useSelector((store)=>store.TypeMasterReducer)


  return (
    <Box  bgColor={"#747a7d"} color={"white"} borderRadius={"20px"}   textAlign={"center"} boxShadow={"xl"} w={["400px","800px"]} m={"auto"} mt={"100px"} padding={"50px 0px"}  backgroundImage={"https://www.typingtest.com/forms/img/center-back.svg"} backgroundRepeat={"no-repeat"} backgroundPosition={"bottom"}>
         <Heading mb={"30px"}>Your Result</Heading>

         <Text mb={"20px"}>Total Key Pressed :- {totalKeyPressed}</Text>
         <Text mb={"20px"}>Accuracy  :- {((correctKeyPressed/totalKeyPressed)*100).toFixed(2)} %</Text>
        
 
         <Link to="/"><Button mt="25px" padding={"20px 40px"} fontSize={"22px"} colorScheme='blue' >Start Again</Button></Link>

         <Image src="https://www.typingtest.com/forms/img/lady.svg"  position={"absolute"} top={"250px"}/>
      </Box>
  )
}

export default Result