import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
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
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
            Sign In
        </Button>
        )}
    </Flex>
  );
}
