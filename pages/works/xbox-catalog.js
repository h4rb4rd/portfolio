import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Xbox catalog">
    <Container mt={2}>
      <Title>
        Xbox catalog <Badge>2022-</Badge>
      </Title>
      <P>This application is a clone of xbox game catalog.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://xbox-catalog.vercel.app">
            Xbox catalog <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/h4rb4rd/xbox-catalog">
            github.com/xbox-catalog
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js Next.js Tailwind Clsx SWR</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/xbox-catalog/xboxcatalog_01.jpg"
        alt="xbox-catalog"
      />
      <WorkImage
        src="/images/works/xbox-catalog/xboxcatalog_02.jpg"
        alt="xbox-catalog"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
