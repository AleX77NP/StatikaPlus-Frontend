import React, { useState } from 'react'
import { Flex } from "@chakra-ui/react"
import Project from './Project'
import Title from './Title'

const ProjectList = () => {

    const [projects] = useState([
        {
            "name": "Projekat broj 1",
            "image": "https://i.pinimg.com/originals/a6/a7/cf/a6a7cfbf00c115d6499dab93dd69b6c2.jpg",
            "area": 300
        },
        {
            "name": "Projekat broj 2",
            "image": "https://st.hzcdn.com/simgs/02d135cb062e5216_8-6049/home-design.jpg",
            "area": 800
        },
        {
            "name": "Projekat broj 3",
            "image": "https://images.in.locan.to/4-BHK-8-Marla-Good-Looking-House-For-Sale-In-Jalandhar/vap_5058602414.jpg",
            "area": 10000
        },
        {
            "name": "Projekat broj 4",
            "image": "https://www.spl-eng.com/wp-content/uploads/2019/03/building11.jpg",
            "area": 7000
        },
        {
            "name": "Projekat broj 5",
            "image": "https://mmh-pre-defined.s3.ap-south-1.amazonaws.com/completed-project/500_1607077602_134.jpg",
            "area": 350
        },
        {
            "name": "Projekat broj 6",
            "image": "https://static.wixstatic.com/media/d67247_af8c18af97b54d0a9eba76c2f4fd3fb5~mv2_d_2479_1653_s_2.jpg/v1/fill/w_552,h_372,al_c,q_80,usm_0.66_1.00_0.01/d67247_af8c18af97b54d0a9eba76c2f4fd3fb5~mv2_d_2479_1653_s_2.webp",
            "area": 200
        }

    ])

    return (
        <div style={{marginTop: '50px', marginBottom: '50px'}}>
        <Title title="Naši projekti" />
        <Flex flexDirection={["column","row"]} width="90%" mx="auto" my="40px" flexWrap="wrap" justifyContent="space-evenly" alignItems="center" overflowX="scroll">
            {
                projects.map((project) => (
                    <div key={project.name} style={{maxWidth: '99%'}}>
                        <Project project={project} />
                    </div>
                ))
            }
        </Flex>
        </div>
    )
}

export default ProjectList
