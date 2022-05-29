import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Christmas">
    <Container mt={2}>
      <Title>
        Christmas <Badge>2021-</Badge>
      </Title>
      <P>
        У вашей бабушки скопилось большое количество ёлочных игрушек. Она
        попросила вас помочь их разобрать, чтобы выбрать те, которыми будет
        наряжать ёлку в этом году. Зная, как бережно бабушка относится к этим
        игрушкам, вы отнеслись к её просьбе очень внимательно. Вы составили
        опись всех имеющихся игрушек, указав для каждой её название, количество
        экземпляров, год покупки, форму (шар, фигурка, снежинка и т.д.), цвет,
        размер, отдельно отметили любимые бабушкины игрушки. Теперь вам
        предстоит создать приложение, которое позволит отсортировать игрушки по
        названию и количеству экземпляров, найти игрушку по названию,
        сгруппировать игрушки по видам, добавлять игрушки в избранное и удалять
        из него, а также с интерактивной страницей, на которой выбранными
        игрушками можно украсить новогоднюю ёлку.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://rolling-scopes-school.github.io/h4rb4rd-JSFE2021Q3/christmas-task"
            target="_blank"
          >
            Christmas <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link
            href="https://github.com/h4rb4rd/rss/tree/christmas"
            target="_blank"
          >
            github.com/christmas
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, TS</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/christmas/christmas_01.jpg"
        alt="christmas"
      />
      <WorkImage
        src="/images/works/christmas/christmas_02.jpg"
        alt="christmas"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
