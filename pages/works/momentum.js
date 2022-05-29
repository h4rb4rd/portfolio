import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Momentum">
    <Container mt={2}>
      <Title>
        Momentum <Badge>2021-</Badge>
      </Title>
      <P>
        Momentum - аналог одноимённого приложения интернет-магазина Chrome.
        Приложение показывает время и имя пользователя. Фоновое изображение и
        приветствие меняются в зависимости от времени суток. В приложении есть
        часы, слайдер изображений, виджеты погоды, аудиоплеер, цитата дня.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link
            href="https://rolling-scopes-school.github.io/h4rb4rd-JSFEPRESCHOOL/momentum"
            target="_blank"
          >
            Momentum <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link
            href="https://github.com/h4rb4rd/rss/tree/momentum"
            target="_blank"
          >
            github.com/momentum
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/momentum/momentum_01.jpg" alt="momentum" />
      <WorkImage src="/images/works/momentum/momentum_02.jpg" alt="momentum" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
