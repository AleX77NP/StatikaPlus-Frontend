import React from 'react'
import {
    Box,
    Text,
    Flex,
    Link,

  } from "@chakra-ui/react"
  import { ArrowUpIcon } from '@chakra-ui/icons'

const Footer = () => {
    return (
        <div style={{width: '100%', height: '300px', backgroundImage: 'linear-gradient(to left, #A60321, #3C038C)'}}>
            <Flex
            flexWrap="wrap" 
            alignItems="center"
            justifyContent="space-between"
            width="70%"
            maxW="95%"
            height="100%"
            mx="auto"
            >
                <Box mx="auto">
                    <Text fontSize="4xl" fontWeight="thin" color="white">Statikaplus</Text>
                </Box>

                <Box width="300px">
                    <Flex
                    flexDirection={['column', 'row', 'row']}
                    flexWrap="wrap" 
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    maxW="100%"
                    height="100%"
                    mx="auto"
                    >
                        <Link fontSize="lg" color="white">O nama</Link>
                        <Link fontSize="lg" color="white">Projekti</Link>
                        <Link fontSize="lg" color="white">FAQ</Link>
                        <Link fontSize="lg" color="white">Kontakt</Link>
                    </Flex>
                </Box>

                <Box mx="auto">
                    <ArrowUpIcon w={8} h={8} color="white" />
                </Box>

            </Flex>
        </div>
    )
}

export default Footer
