import React from 'react'
import dynamic from 'next/dynamic'
import Title from './Title'

const Map = dynamic(() => import('./Map'), { ssr: false })

const Contact = () => {
    return (
        <div style={{marginTop: '40px',position: 'relative'}}>
        <Title title="Kontakt" />
        <Map />
        </div>
    )
}

export default Contact
