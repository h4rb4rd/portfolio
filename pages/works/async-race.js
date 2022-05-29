import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Async-Race">
    <Container mt={2}>
      <Title>
        Async-Race <Badge>2021-</Badge>
      </Title>
      <P>
        Your customer has an idea to spend his money. He has hired some
        engineers who installed some radio-controlled equipment 📻 to real cars
        🚗. To the all his collection of cars to be precise. He is eager to
        create kind of drag-racing competition in order to discover which car
        fastest.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://rolling-scopes-school.github.io/h4rb4rd-JSFE2021Q3/async-race"
            target="_blank"
          >
            Async-Race <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>API</Meta>
          <Link
            href="https://github.com/mikhama/async-race-api"
            target="_blank"
          >
            github.com/async-race-api
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/h4rb4rd/rss/tree/async-race">
            github.com/async-race
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, TS</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/async-race/asyncrace_01.jpg"
        alt="async-race"
      />
      <WorkImage
        src="/images/works/async-race/asyncrace_02.jpg"
        alt="async-race"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
