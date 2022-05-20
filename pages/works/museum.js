import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Museum">
    <Container mt={2}>
      <Title>
        Museum <Badge>2021-</Badge>
      </Title>
      <P>
        landing page Лувра – одного из крупнейших и наиболее популярных
        художественных музеев мира.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://rolling-scopes-school.github.io/h4rb4rd-JSFEPRESCHOOL/museum">
            Museum <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/h4rb4rd/rss/tree/museum">
            github.com/museum
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/museum/museum_01.jpg" alt="museum" />
      <WorkImage src="/images/works/museum/museum_02.jpg" alt="museum" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
