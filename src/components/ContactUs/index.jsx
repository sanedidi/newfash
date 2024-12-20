import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import s from './styles.module.scss'
const Contact = () => {
    return (
        <Box padding={5} className={s.main} w="100%" h="80vh" >
            <YMaps>
                <Map
                    defaultState={{
                        center: [41.2995, 69.2401],
                        zoom: 12,
                    }}
                    options={{
                        suppressMapOpenBlock: true,
                        yandexMapDisablePoiInteractivity: true, // Disables interaction with points of interest
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width="100%"
                    height="100%"
                    theme="dark"
                >
                    <Placemark geometry={[41.311899, 69.290588]} />
                </Map>
            </YMaps>
            <Flex className={s.contacts} flexDir={"column"}>
                <Flex gap={10} alignItems={"center"} flexDir={"column"} className={s.contacts__box}>
                    <Text className={s.contacts__title}>
                        Contact us
                    </Text>
                    <Flex alignItems={"center"} flexDir={"column"}>
                        <Text className={s.contacts__sub_title}>
                            Phone
                        </Text>
                        <Text>
                            (123) 456-7890
                        </Text>
                    </Flex>
                    <Flex alignItems={"center"} flexDir={"column"}>
                        <Text className={s.contacts__sub_title}>
                            Email
                        </Text>
                        <Text>
                            hello@reallygreatsite.com
                        </Text>
                    </Flex>
                    <Flex alignItems={"center"} flexDir={"column"}>
                        <Text className={s.contacts__sub_title}>
                            social
                        </Text>
                        <Text>
                            hello@reallygreatsite.com
                        </Text>
                    </Flex>
                    <Flex alignItems={"center"} flexDir={"column"}>
                        <Text className={s.contacts__sub_title}>
                            Our salons are fully accessible. <br />
                            Please reach out for further <br /> accommodations.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Contact;
