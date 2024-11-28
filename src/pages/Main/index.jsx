import React from 'react'
import Banner from '../../components/Main'
import Service from '../../components/Service'
import MainService from '../../components/MainService'
import Prods from '../../components/Products'
import Clients from '../../components/client'
import Brand from '../../components/Brand'
import Contact from '../../components/ContactUs'


const Main = () => {
    return (
        <>
            <Banner />
            <Service />
            <MainService />
            <Prods />
            <Clients />
            <Brand />
            <Contact />
        </>
    )
}

export default Main