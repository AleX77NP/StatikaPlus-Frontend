import React from 'react'
import dynamic from 'next/dynamic'
import {Text} from '@chakra-ui/react'

const Map = dynamic(() => import('./Map'), { ssr: false })

const Contact = () => {
    return (
        <div style={{marginTop: '40px' ,position: 'relative'}}>
        <Text
        style={{marginBottom: '40px'}}
        fontSize="5xl"
        fontWeight="thin"
        textAlign="center"
        >Kontakt</Text>
        <Map />
        </div>
    )
}

export default Contact
