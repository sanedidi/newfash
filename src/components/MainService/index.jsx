import React from 'react'
import s from './styles.module.scss'
import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import pc1 from '../../assets/hair5.jpg'
import pc2 from '../../assets/makeup12.jpg'
import pc3 from '../../assets/nail3.jpg'
const MainService = () => {
    const service_list = [
        {
            photo: pc1, title: "HairCare", desc: "Haircut and Styling", type: "hair"
        },
        {
            photo: pc2, title: "HairCare", desc: "Haircut and Styling", type: "makeup"
        },
        {
            photo: pc3, title: "HairCare", desc: "Haircut and Styling", type: "nail"
        },

    ]
    return (
        <Box className={s.mainser}>
            <Container>
                <Flex flexDir={"column"} alignItems={"center"}>
                    <Text className={s.mainser__title}>
                        Our Services
                    </Text>
                    <Flex gap={6}>
                        {service_list.map((el, i) => (
                            <Flex gap={2} flexDir={"column"} alignItems={"center"} className={s.mainser__box} key={i}>
                                <Image src={el.photo} alt={el.title} />
                                <Flex gap={4} w={"100%"} flexDir={"column"} alignItems={"center"} className={s.mainser__map_box}>
                                    <Flex alignItems={"center"} flexDir={"column"}>
                                        <Text className={s.mainser__map_title}>
                                            {el.title}
                                        </Text>
                                        <Text className={s.mainser__desc}>
                                            {el.desc}
                                        </Text>
                                    </Flex>

                                    <Button w={"100%"}>
                                        Записаться
                                    </Button>

                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>

            </Container>
        </Box>
    )
}

export default MainService