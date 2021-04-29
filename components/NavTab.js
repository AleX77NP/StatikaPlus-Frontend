import React from 'react'
import {Tabs, Tab, TabList, Text} from '@chakra-ui/react'

const NavTab = ({scrollHandle, references}) => {
    return (
        <div>
            <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList>
                    <Tab onClick={() => scrollHandle(references[0])}>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    O nama
                    </Text>
                    </Tab>
                    <Tab onClick={() => scrollHandle(references[1])}>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    Projekti
                    </Text>
                    </Tab>
                    <Tab onClick={() => scrollHandle(references[2])}>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "20px" }}>
                    FAQs
                    </Text>
                    </Tab>
                    <Tab onClick={() => scrollHandle(references[3])}>
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
