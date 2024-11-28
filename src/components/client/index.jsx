import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import s from './styles.module.scss'
const Clients = () => {
    const testimonials = [
        { desc: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.", name: "Kian Graham" },
        { desc: "Boost your product and service's credibility by adding testimonials from your clients. ", extraDesc: "People love recommendations so feedback from others who've tried it is invaluable.", name: "Kian Graham" },
        { desc: "Boost your product and service's credibility by adding testimonials from your clients. Feedback from others who've tried it is invaluable.", name: "Harlow Martin" },
    ]
    return (
        <Box className={s.clients}>
            <Container>
                <Flex flexDir={"column"} gap={10} className={s.clients__wrapper}>
                    <Text className={s.clients__title}>
                        Client <br /> Testimonials
                    </Text>
                    <Grid gap={10} gridTemplateColumns={"repeat(3, 1fr)"}>
                        {testimonials.map((el) => (
                            <Flex borderTop={"1px solid #000"} padding={"40px 0 0"} flexDir={"column"} gap={4}>
                                <Flex gap={4} flexDir={"column"} alignItems={"center"} className={s.clients__desc}>
                                    <Text className={s.clients__text}>
                                        "{el.desc}"
                                    </Text>
                                    {el.extraDesc &&
                                        <Text className={s.clients__text}>
                                            "{el.extraDesc}"
                                        </Text>
                                    }
                                </Flex>
                                <Text className={s.clients__sub_title}>
                                    {el.name}
                                </Text>
                            </Flex>
                        ))}
                    </Grid>
                </Flex>
            </Container>
        </Box>
    )
}

export default Clients