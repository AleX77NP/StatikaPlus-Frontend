import React from 'react'
import {
    Box,
    Text,
    Flex,
    Link,

  } from "@chakra-ui/react"
  import { ArrowUpIcon } from '@chakra-ui/icons'

const Footer = ({scrollHandle, references}) => {

    const toTop = () => {
        window.scrollTo({top: '0', behavior: 'smooth'})
    }

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
                        <Link onClick={() => scrollHandle(references[0])} fontSize="lg" color="white">O nama</Link>
                        <Link onClick={() => scrollHandle(references[1])} fontSize="lg" color="white">Projekti</Link>
                        <Link onClick={() => scrollHandle(references[2])} fontSize="lg" color="white">FAQs</Link>
                        <Link onClick={() => scrollHandle(references[3])} fontSize="lg" color="white">Kontakt</Link>
                    </Flex>
                </Box>

                <Box mx="auto">
                    <ArrowUpIcon w={8} h={8} color="white" onClick={toTop} cursor="pointer" />
                </Box>

            </Flex>
        </div>
    )
}

export default Footer
