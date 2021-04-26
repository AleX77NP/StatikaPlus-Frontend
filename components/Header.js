import React from 'react'
import NavTab from './NavTab'
import MenuHeader from './MenuHeader'
import {Flex, Box, Spacer, Text} from '@chakra-ui/react'
import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.main}>
            <Flex ml={10} mr={10} mt={10}
            direction="row"
            >
                <Box>
                <Image
                src="/logo.png"
                alt="logo"
                objectFit={"contain"}
                width={200}
                height={40}
                />
                </Box>
                <Spacer />
                <Box>
                <div className={styles.nav}>
                <NavTab />
                </div>
                </Box>
                <Spacer />
                <Box pl={5}>
                <div class={styles.menu}>
                <MenuHeader />
                </div>
                </Box>
            </Flex>
            <div className={styles.slogan}>
            <Text fontSize="3xl"
            bgGradient="linear(to-l, #3C038C,#A60321)"
            bgClip="text"
            fontWeight="bold"
            >
             Najtraženiji među najboljima. Neka Vaš objekat iz snova postane stvarnost.
            </Text>
            </div>
        </div>
    )
}

export default Header
