import React from 'react'
import {Flex, Box, Spacer, Text, Heading} from '@chakra-ui/react'

const About = () => {
    return (
        <div style={{width: '400px', margin: 'auto', maxWidth: '95%', justifyContent: 'center'}}>
            <Text 
            fontSize="5xl"
            fontWeight="thin"
            textAlign="center"
            >
                Zašto Statikaplus ?
            </Text>
            <Flex
            direction="row"
            justifyContent="space-around"
            >
                <Box>
                <Text>
                    Neosporiv kvalitet
                </Text>
                </Box>
                <Box>
                <Text>
                    Povoljne cene
                </Text>
                </Box>
                <Box>
                <Text>
                    Efikasnost
                </Text>
                </Box>
            </Flex>
        </div>
    )
}

export default About
