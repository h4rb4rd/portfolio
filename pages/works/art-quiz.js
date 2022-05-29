import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Art-Quiz">
    <Container mt={2}>
      <Title>
        Art-Quiz <Badge>2021-</Badge>
      </Title>
      <P>
        Art Quiz - приложение-викторина на знание шедевров живописи и их
        авторов.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://rolling-scopes-school.github.io/h4rb4rd-JSFE2021Q3/art-quiz/index.html"
            target="_blank"
          >
            Art-Quiz <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link
            href="https://github.com/h4rb4rd/rss/tree/art-quiz"
            target="_blank"
          >
            github.com/art-quiz
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/art-quiz/artquiz_01.jpg" alt="art-quiz" />
      <WorkImage src="/images/works/art-quiz/artquiz_02.jpg" alt="art-quiz" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
