import React from 'react'
import { Box, Badge, Image, AspectRatio } from "@chakra-ui/react"

const Project = ({project}) => {
    return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" my={4}>
      <AspectRatio w="400px" ratio={16 / 9}>
        <Image src={project.image} alt="project" objectFit="cover" />
        </AspectRatio>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Top
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.name}
        </Box>

        <Box>
          {project.area}
          <Box as="span" color="gray.600" fontSize="sm">
            &#13217;
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default Project
