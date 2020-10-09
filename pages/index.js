import Head from 'next/head';
import { Button, Flex, Text, Code, Icon, Box, Stack } from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <Box bg="gray.100">
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        maxW="400px"
        margin="0 auto"
      >
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
            }}
          />
          <title>Feedback</title>
        </Head>

        <Icon name="logo" size="64px" />
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button as="a" href="/dashboard">
            View dashboard
        </Button>
        ) : (
            <Stack>
              <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                leftIcon="github"
                mt={4}
                size="lg"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}>
                Sign In
              </Button>
              <Button
                onClick={(e) => auth.signinWithGoogle()}
                backgroundColor="white"
                color="gray.900"
                variant="outline"
                fontWeight="medium"
                leftIcon="google"
                mt={4}
                size="lg"
                _hover={{ bg: 'gray.100' }}
                _active={{
                  bg: 'gray.100',
                  transform: 'scale(0.95)'
                }}
              >
                Sign In with Google
              </Button>
            </Stack>
          )}
      </Flex>
    </Box>
  );
};
