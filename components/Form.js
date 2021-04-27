import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Box,
    Button,
    Text,
    Flex
  } from "@chakra-ui/react"

const Form = () => {
    return (
        <div style={{marginTop: '50px', marginBottom: '40px'}}>
          <Flex
          flexWrap="wrap" 
          alignItems="center"
          justifyContent="center"
          width="70%"
          maxW="95%"
          mx="auto"
          >
            <Box mb={4}>
                <Text fontSize="lg" color="#3C038C" fontWeight="semibold">Ulica Miodraga Jovanovića 7</Text>
                <Text fontSize="lg" color="#3C038C" fontWeight="semibold" mb={5}>Novi Pazar 36300</Text>
                <Text fontSize="lg" color="#3C038C">063/773-2-514</Text>
                <Text fontSize="lg" color="#3C038C">065/833-1-330</Text>
            </Box>

            <form style={{width: '450px', margin: 'auto', maxWidth: '95%'}}>
            <Box boxShadow="xl" p="6" mb="4" borderWidth="1px" rounded="lg">
                <FormControl id="name" isRequired>
                    <FormLabel>Ime i prezime</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email adresa</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="title" isRequired>
                    <FormLabel>Naslov</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="message" isRequired>
                    <FormLabel>Poruka</FormLabel>
                    <Textarea />
                </FormControl>
                <Button colorScheme="blue" size="md" type="submit">
                    Pošalji
                </Button>
            </Box>
            </form>

            <Box mb={4}>
                <Text fontSize="lg" fontWeight="semibold" color="#A60321" mb={2}>milanovicnp@gmail.com</Text>
                <Text fontSize="lg" fontWeight="semibold" color="#A60321">enes.skrijelj@gmail.com</Text>
            </Box>
         </Flex>
        </div>
    )
}

export default Form
