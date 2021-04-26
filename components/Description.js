import React from 'react'
import styles from './Description.module.css'
import {Flex, Text} from '@chakra-ui/react'

const Description = () => {
    return (
        <div className={styles.main}>
            <Flex
            flexDirection="row"
            justifyContent="space-between"
            >
            <div className={styles.left}>
            <Text fontSize="3xl"
            bgGradient="linear(to-l, #3C038C,#A60321)"
            bgClip="text"
            fontWeight="bold"
            >
             Najtraženiji među najboljima.
            </Text>
            </div>

            <div className={styles.right}>
            <Text fontSize="3xl"
            bgGradient="linear(to-l, #3C038C,#A60321)"
            bgClip="text"
            fontWeight="bold"
            >
            Neka Vaš objekat iz snova postane stvarnost.
            </Text>
            </div>
            </Flex>
        </div>
    )
}

export default Description
