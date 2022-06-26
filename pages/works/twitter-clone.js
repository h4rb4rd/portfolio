import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Twitter-Clone">
    <Container mt={2}>
      <Title>
        Twitter-Clone <Badge>2022-</Badge>
      </Title>
      <P>This application is a clone of twitter.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://twitter-app-h4rb4rd.vercel.app/" target="_blank">
            Twitter-clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/h4rb4rd/twitter-app" target="_blank">
            github.com/twitter-clone
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwind, Recoil, FIREBASE V9 SDK, NextAuth</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/twitter-clone/twitter_01.jpg"
        alt="trello-clone"
      />
      <WorkImage
        src="/images/works/twitter-clone/twitter_02.jpg"
        alt="trello-clone"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
