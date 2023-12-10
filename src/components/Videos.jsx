import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
  const videosArr = ['https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761',
'https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761',
'https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761',
'https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761',
'https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761'];
  const [videosSrc,SetVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
            <video controls controlsList='nodownload' src={videosSrc} style={{width:'100%'}}></video>
            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                <Heading>Gaming Video 1</Heading>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet aperiam.</Text>
            </VStack>
        </VStack>
        <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
          {videosArr.map((item,index)=>(
          <Button variant={'ghost'} colorScheme='purple' onClick={()=>SetVideoSrc(item)}>Video {index+1}</Button>
          ))}
        </VStack>
    </Stack>
  )
}

export default Videos