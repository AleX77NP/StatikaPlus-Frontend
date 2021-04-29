import React, { useState } from 'react'
import {
    Accordion,
    Flex,
  } from "@chakra-ui/react"
import Question from './Question'
import Title from './Title'

const QuestionList = () => {

    const [questions] = useState([
        {
            "title": "Koja je cena po metru kvadratnom, i da li je cena fiksna ili se može menjati ?",
            "answer": "Cena po metru kvadratnom je 1 evro, i fiksna je."
        }, 
        {
            "title": "Da li je moguće plaćanje na rate ?",
            "answer": "Da, plaćanje na rate je moguće."
        },
        {
            "title": "Da li je nadzor uključen u cenu projekta ?",
            "answer": "Nadzor objekta nije uključen u cenu, i plaća se odvojeno."
        }, 
        {
            "title": "Koliko iznosi cena za nadzor?",
            "answer": "Cena nadzora je 2% od ukupne cene projekta."
        }
    ])

    return (
        <div style={{marginTop: '50px', marginBottom: '50px'}}>
        <Title title="Često postavljana pitanja" />
        <Flex flexDirection="column" width="70%" mx="auto" my="40px">
            <Accordion allowToggle>
            {
                questions.map((question) => (
                    <div key={question.title}>
                    <Question question={question} />
                    </div>
                ))
            }
            </Accordion>
        </Flex>
        </div>
    )
}

export default QuestionList
