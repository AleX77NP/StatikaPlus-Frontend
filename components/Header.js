import React from 'react'
import NavTab from './NavTab'
import MenuHeader from './MenuHeader'
import {Flex, Box, Spacer} from '@chakra-ui/react'
import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
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
        </div>
    )
}

export default Header
