import React from 'react'
import {Flex, Box, Text} from '@chakra-ui/react'

const About = () => {
    return (
        <>
            <Text 
            fontSize="5xl"
            fontWeight="thin"
            textAlign="center"
            >
                Zašto Statikaplus ?
            </Text>
            <Flex flexWrap="wrap" alignItems="center" maxW="900px" justifyContent="center" mx="auto" mt="10">

                <Box as="a" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
                    <Text fontSize="4xl" mb="2" fontFamily="normal">Neosporiv kvalitet &#x2606;</Text>
                    <Text fontSize="lg" color="gray.500">Preko 30 godina rada. Uvek pratimo moderne trendove i tehnologije.</Text>
                </Box>
                <Box as="a" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
                    <Text fontSize="4xl" mb="2" fontFamily="normal" mb="2">Efikasnost &#x26A1;</Text>
                    <Text fontSize="lg" color="gray.500">Vreme je novac. A novac je prioritet i za Vas, i za nas.</Text>
                </Box>
                <Box as="a" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
                    <Text fontSize="4xl" mb="2" fontFamily="normal" mb="2">Povoljne cene &euro;</Text>
                    <Text fontSize="lg" color="gray.500">Najpovoljnije cene po kvadratu u regionu. Tu smo za Vas.</Text>
                </Box>
                <Box as="a" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
                    <Text fontSize="4xl" mb="2" fontFamily="normal" mb="2">Pouzdanost &#x263A;</Text>
                    <Text fontSize="lg" color="gray.500">Hiljade zadovoljnih klijenata. Hiljade objekata.</Text>
                </Box>
            </Flex>
        </>
    )
}

export default About
