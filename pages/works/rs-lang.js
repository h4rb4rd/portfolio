import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rs Lang">
    <Container mt={2}>
      <Title>
        Rs Lang <Badge>2022-</Badge>
      </Title>
      <P>
        RS Lang – приложение для изучения иностранных слов с методикой
        интервального повторения, отслеживанием индивидуального прогресса и
        мини-играми.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://rs-lang2022.netlify.app/">
            Rs Lang <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/h4rb4rd/rslang/">
            github.com/rs-lang
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, React.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rs-lang/rslang_01.jpg" alt="rs-lang" />
      <WorkImage src="/images/works/rs-lang/rslang_02.jpg" alt="rs-lang" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
