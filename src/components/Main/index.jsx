import { Box, Button, Center, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import s from './styles.module.scss'
import mainimage from '../../assets/bannerimage.jpg'
const Banner = () => {
    return (
        <Box >
            <Flex className={s.banner} flexDir={"column"} justifyContent={"space-between"}>
                <Center>
                    <Flex flexDir={"column"} gap={4}>
                        <Text className={s.banner__text}>
                            Почувствуйте истинную гармонию красоты
                        </Text>
                        <Text className={s.banner__text}>
                            Наши профессионалы <br /> помогут раскрыть вашу уникальность и сияние
                        </Text>
                    </Flex>
                </Center>
                <Center>
                    <Flex flexDir={"column"} gap={10}>
                        <Text className={s.banner__title}>
                            FASHION.UZ
                        </Text>
                        <Button color={"#000"} w={"100%"} fontSize={"18px"} cursor={"pointer"} bgColor={"#f7f6f6"}>
                            Заказать звонок
                        </Button>
                    </Flex>
                </Center>
            </Flex>
        </Box>
    )
}

export default Banner
