import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Trello-Clone">
    <Container mt={2}>
      <Title>
        Trello-Clone <Badge>2022-</Badge>
      </Title>
      <P>
        Система управления проектами – приложение помогающее достичь
        поставленные задачи отдельному человеку в команде или группе
        разработчиков.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://trello-clone-2022.netlify.app/" target="_blank">
            Trello-clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link
            href="https://github.com/h4rb4rd/project-management-app/tree/develop"
            target="_blank"
          >
            github.com/trello-clone
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, React.js, Redux Toolkit</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/trello-clone/trello_01.jpg"
        alt="trello-clone"
      />
      <WorkImage
        src="/images/works/trello-clone/trello_02.jpg"
        alt="trello-clone"
      />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/jMjCtp7CBPA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
