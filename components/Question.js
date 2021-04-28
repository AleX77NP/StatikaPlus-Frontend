import React from 'react'
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from "@chakra-ui/react"

const Question = ({question}) => {
    return (
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    <Text fontSize="xl" fontWeight="medium">
                    {question.title}
                    </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Text fontSize="xl" color="gray.600">
                {question.answer}
                </Text>
                </AccordionPanel>
            </AccordionItem>
    )
}

export default Question
