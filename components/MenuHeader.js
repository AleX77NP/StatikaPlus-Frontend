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
  
  const MenuHeader = () => {
      return (
        <div>
            <Menu>
                <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
                <MenuList>
                <MenuItem icon={<InfoIcon />} command="⌘T">
                        O nama
                    </MenuItem>
                    <MenuItem icon={<DragHandleIcon />} command="⌘T">
                        Projekti
                    </MenuItem>
                    <MenuItem icon={<QuestionIcon />} command="⌘T">
                        FAQ
                    </MenuItem>
                    <MenuItem icon={<EmailIcon />} command="⌘T">
                        Kontakt
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
      )
  }
  
  export default MenuHeader
  