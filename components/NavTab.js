import React from 'react'
import {Tabs, Tab, TabList, Text} from '@chakra-ui/react'

const NavTab = () => {
    return (
        <div>
            <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList>
                    <Tab>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    O nama
                    </Text>
                    </Tab>
                    <Tab>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    Projekti
                    </Text>
                    </Tab>
                    <Tab>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    FAQ
                    </Text>
                    </Tab>
                    <Tab>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    Kontakt
                    </Text>
                    </Tab>
                </TabList>
            </Tabs>
        </div>
    )
}

export default NavTab
