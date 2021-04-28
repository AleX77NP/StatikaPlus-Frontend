import React, { useState } from 'react'
import {
    Accordion,
    Flex,
    Text,
  } from "@chakra-ui/react"
import Question from './Question'

const QuestionList = () => {

    const [questions] = useState([
        {
            "title": "Koja je cena po metru kvadratnom, i da li je cena fiksna ili se moze menjati ?",
            "answer": "Cena po metru kvadratnom je 1 evro."
        }, 
        {
            "title": "Da li je moguce placanje na rate ?",
            "answer": "Da, placanje na rate je moguce."
        },
        {
            "title": "Da li je nadzor ukljucen u cenu projekta ?",
            "answer": "Nadzor nije ukljucen u pocetnu cenu, i placa se odvojeno."
        }
    ])

    return (
        <div style={{marginTop: '40px', marginBottom: '40px'}}>
        <Text
        fontSize="5xl"
        fontWeight="thin"
        textAlign="center"
        >Često postavljana pitanja</Text>
        <Flex flexDirection="column" width="70%" mx="auto" my="40px">
            <Accordion allowToggle>
            {
                questions.map((question) => (
                    
                    <Question question={question} />
                ))
            }
            </Accordion>
        </Flex>
        </div>
    )
}

export default QuestionList
