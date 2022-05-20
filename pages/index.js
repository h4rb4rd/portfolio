import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { SkillsSection, SkillsTitle } from '../components/skills'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { BsTelegram } from 'react-icons/bs'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={10}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Front-End Developer located in Saint-Petersburg!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alexander Danilov
          </Heading>
          <p>Front-End Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Since beginning my journey as a freelance nearly a year ago, I&apos;ve
          done remote work for agencies and collaborated with talented people to
          create digital products for both business and consumer use.
          Well-organised person, naturally curious, and perpetually working on
          improving my chops with high attention to detail.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Technical Skills
        </Heading>
        <SkillsSection>
          <SkillsTitle>Programming languages:</SkillsTitle>
          Javascript (TS)
        </SkillsSection>
        <SkillsSection>
          <SkillsTitle>Technologies and Frameworks:</SkillsTitle>
          HTML, SCSS, React.js, Redux
        </SkillsSection>
        <SkillsSection>
          <SkillsTitle>IDE:</SkillsTitle>
          Visual Studio Code, Web Storm
        </SkillsSection>
        <SkillsSection>
          <SkillsTitle>Building tools:</SkillsTitle>
          NPM, Gulp, Webpack
        </SkillsSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>Programming, Music, Video Games, Travelling</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contacts
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/h4rb4rd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/h4rb4rd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<BsTelegram />}
              >
                Telegram
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
