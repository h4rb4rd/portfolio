import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Netflix-Clone">
    <Container mt={2}>
      <Title>
        Netflix-Clone <Badge>2022-</Badge>
      </Title>
      <P>This application is a clone of netflix.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://netflix-app-psi.vercel.app/" target="_blank">
            Netflix-clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/h4rb4rd/netflix-app" target="_blank">
            github.com/netflix-clone
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwind, Recoil, Material UI</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/netflix-clone/netflix_01.jpg"
        alt="trello-clone"
      />
      <WorkImage
        src="/images/works/netflix-clone/netflix_02.jpg"
        alt="trello-clone"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
