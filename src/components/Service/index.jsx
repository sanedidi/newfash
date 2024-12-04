import React from 'react'
import s from './styles.module.scss'
import { Flex, Grid, Text } from '@chakra-ui/react'
const Service = () => {
    return (
        <Flex className={s.service}>
            <Flex className={s.service__box} justifyContent={"center"} m={"auto"} alignItems={"center"}>
                <Grid className={s.service__init} gridTemplateColumns={"1fr 1fr"}>
                    <Text className={s.service__left}>
                        We are a <br />
                        full-service <br /> salon.
                    </Text>
                    <Text className={s.service__right}>
                        What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.
                    </Text>
                </Grid>
            </Flex>
        </Flex>
    )
}

export default Service