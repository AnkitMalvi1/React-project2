import React from 'react'
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading>Media Zone</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input placeholder='Enter your Name' type='text' required focusBorderColor='purple.500'/>
                <Input placeholder='Enter your Email' type='email' required focusBorderColor='purple.500'/>
                <Input placeholder='Enter your Password' type='password' required focusBorderColor='purple.500'/>
                <Button colorScheme='purple' type='submit'>Sign Up</Button>
                <Text textAlign={'center'}>
                    Already Signed Up?{" "}
                    <Button variant={'link'} colorScheme='purple'><Link to={'/login'}>Log In</Link></Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup