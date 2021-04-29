import React from 'react'
import { Text } from "@chakra-ui/react"

const Title = ({title}) => {
    return (
        <Text
        fontSize="5xl"
        fontWeight="thin"
        textAlign="center"
        >{title}</Text>
    )
}

export default Title
