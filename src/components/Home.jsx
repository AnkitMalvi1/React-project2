import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos:'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: "4xl"
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
            <Stack h="full" p={'4'} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque tempora veritatis esse ratione ipsa id placeat ipsam maxime aperiam ad corrupti vel consequatur sed, dolores incidunt rem suscipit voluptas? Odio laudantium aliquid quos voluptatem sit praesentium consequuntur quasi mollitia corrupti tenetur odit explicabo, molestiae natus harum. Optio rerum omnis quam placeat ex dolor nostrum natus, eius est quo molestias accusamus, laborum quasi enim dicta, perspiciatis laudantium veniam laboriosam vel cum repudiandae eum aliquam adipisci? Deleniti error eos exercitationem amet quia voluptatum assumenda recusandae, suscipit, perspiciatis accusamus rerum aliquam! Aliquam dicta beatae odit molestiae culpa accusantium doloribus cum, distinctio molestias explicabo corrupti nam, quasi blanditiis, vero deleniti!</Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Virtual Gaming</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Video Gaming</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Online Multiplayer</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Shooting Games</Heading>
        </Box>
    </Carousel>
)



export default Home