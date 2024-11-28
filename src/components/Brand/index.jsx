import React from 'react'
import s from './styles.module.scss'
import { Box, Flex, Text } from '@chakra-ui/react'
const Brand = () => {
    return (
        <Flex flexDir={"column"} gap={10} color={"#fff"} bgColor={"#252527"} className={s.brand}>
            <Text className={s.brand__top}>
                About the brand
            </Text>
            <Text className={s.brand__mid}>
                We take care of <br /> our clients and <br /> our people.
            </Text>
            <Text className={s.brand__bottom}>
                Share your company's mission, vision, or background with your <br /> potential clients. Set yourself apart from the competition with a <br /> strong brand persona that puts your clients first.
            </Text>
        </Flex>
    )
}

export default Brand