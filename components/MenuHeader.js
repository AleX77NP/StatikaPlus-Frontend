import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from "@chakra-ui/react"

  import {
      DragHandleIcon, EmailIcon, HamburgerIcon, QuestionIcon, InfoIcon
  } from '@chakra-ui/icons'

  import React from 'react'
  
  const MenuHeader = ({scrollHandle, references}) => {
      return (
        <div>
            <Menu>
                <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
                <MenuList>
                <MenuItem onClick={() => scrollHandle(references[0])} icon={<InfoIcon />}>
                        O nama
                    </MenuItem>
                    <MenuItem onClick={() => scrollHandle(references[1])} icon={<DragHandleIcon />}>
                        Projekti
                    </MenuItem>
                    <MenuItem onClick={() => scrollHandle(references[2])} icon={<QuestionIcon />}>
                        FAQs
                    </MenuItem>
                    <MenuItem onClick={() => scrollHandle(references[3])} icon={<EmailIcon />}>
                        Kontakt
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
      )
  }
  
  export default MenuHeader
  