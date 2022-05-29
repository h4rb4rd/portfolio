import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbArtQuiz from '../public/images/works/art-quiz/artquiz_eyecatch.jpg'
import thumbChristmas from '../public/images/works/christmas/christmas_eyecatch.jpg'
import thumbMuseum from '../public/images/works/museum/museum_eyecatch.jpg'
import thumbMomentum from '../public/images/works/momentum/momentum_eyecatch.jpg'
import thumbAsyncRace from '../public/images/works/async-race/asyncrace_eyecatch.jpg'
import thumbRsLang from '../public/images/works/rs-lang/rslang_eyecatch.jpg'
import thumbXboxCatalog from '../public/images/works/xbox-catalog/xboxcatalog_eyecatch.jpg'
import thumbTrelloClone from '../public/images/works/trello-clone/trelloclone_eyecatch.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={10}>
        Recent works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="trello-clone"
            title="Trello Clone"
            thumbnail={thumbTrelloClone}
          >
            Система управления проектами – приложение помогающее достичь
            поставленные задачи отдельному человеку в команде или группе
            разработчиков.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="rs-lang" title="Rs Lang" thumbnail={thumbRsLang}>
            RS Lang – приложение для изучения иностранных слов с методикой
            интервального повторения, отслеживанием индивидуального прогресса и
            мини-играми.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="xbox-catalog"
            title="Xbox Catalog"
            thumbnail={thumbXboxCatalog}
          >
            This application is a clone of xbox game catalog.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="async-race"
            title="Async-Race"
            thumbnail={thumbAsyncRace}
          >
            Your customer has an idea to spend his money. He has hired some
            engineers who installed some radio-controlled equipment 📻 to real
            cars 🚗...
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="christmas"
            title="Christmas"
            thumbnail={thumbChristmas}
          >
            У вашей бабушки скопилось большое количество ёлочных игрушек. Она
            попросила вас помочь их разобрать, чтобы...
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="art-quiz" thumbnail={thumbArtQuiz} title="Art-Quiz">
            ArtQuiz - приложение-викторина на знание шедевров живописи и их
            авторов.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="museum" title="Museum" thumbnail={thumbMuseum}>
            landing page Лувра – одного из крупнейших и наиболее популярных
            художественных музеев мира.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="momentum"
            title="Momentum"
            thumbnail={thumbMomentum}
          >
            Momentum - аналог одноимённого приложения интернет-магазина Chrome.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
