import React from 'react'
import {
    Box,
    Text,
    Flex
  } from "@chakra-ui/react"

const Footer = () => {
    return (
        <div style={{width: '100%', height: '300px', backgroundImage: 'linear-gradient(to left, #A60321, #3C038C)'}}>
            <Flex
            lexWrap="wrap" 
            alignItems="center"
            justifyContent="space-between"
            width="70%"
            maxW="95%"
            height="100%"
            mx="auto"
            >
                <Box>
                    <Text fontSize="4xl" fontWeight="thin" color="white">Statikaplus</Text>
                </Box>

                <Box>
                    <Text color="white">Statikaplus</Text>
                </Box>

                <Box>
                    <Text color="white">Statikaplus</Text>
                </Box>

            </Flex>
        </div>
    )
}

export default Footer
