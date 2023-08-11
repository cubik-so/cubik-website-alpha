import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();
  return (
    <Container
      h="100vh"
      maxW="5xl"
      bg={'black'}
      py={{ base: '7rem', md: '10rem' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={3}
    >
      <Heading>Cooking Something 👨‍🍳 </Heading>
      <Text color={'white'} fontSize={'lg'} textAlign={'center'}>
        We are working on something really cool, stay tuned! 🚀
      </Text>
    </Container>
  );
};

export default LandingPage;
