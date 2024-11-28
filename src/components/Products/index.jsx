import { Box, Container, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import s from './styles.module.scss'
import { FaLeaf } from "react-icons/fa";
import { ToxicIcon } from '../../assets/svg';
import { GiEcology } from "react-icons/gi";
import prodImage from '../../assets/product.jpg'
const Prods = () => {
    const prods = [
        { svg: <FaLeaf />, desc: "Organic" },
        { svg: <ToxicIcon />, desc: "Non-toxic" },
        { svg: <GiEcology fontSize={"40px !important"} />, desc: "Eco-friendly" },
    ]
    return (
        <Box className={s.prods}>
            <Container>
                <Flex p={100} justifyContent={"center"} alignItems={"center"}>
                    <Grid w={"100%"} gridTemplateColumns={"1fr 1fr"}>
                        <Flex className={s.prods__ma}>
                            <Flex w={"100%"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} className={s.prods__box}>
                                <Text className={s.prods__title}>
                                    The<br />
                                    Products<br />
                                    We Use
                                </Text>
                                <Flex flexDir={"column"}>
                                    {prods.map((el, i) => (
                                        <Flex gap={4} key={i} flexDir={"column"} alignItems={"center"}>
                                            {el.svg}
                                            <Text className={s.prods__text}>{el.desc}</Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                        <Image w={"100%"} src={prodImage} />
                    </Grid>
                </Flex>
            </Container>
        </Box>
    )
}

export default Prods