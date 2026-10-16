import type { ReactNode } from 'react'

import Link from '@/components/Link'
import { ListItem, Project, Topic } from '@/components/Topic'
import aiIcon from '@/icons/ai.svg'
import databaseIcon from '@/icons/database.svg'
import familyIcon from '@/icons/family.svg'
import reactIcon from '@/icons/react.svg'
import rocketIcon from '@/icons/rocket.svg'
import snookerIcon from '@/icons/snooker.svg'
import tailwindIcon from '@/icons/tailwind.svg'
import teamIcon from '@/icons/team.svg'
import typescriptIcon from '@/icons/typescript.svg'

export interface TopicItem {
  title: string
  icon: string
  content: ReactNode
}

export const TOPICS: TopicItem[] = [
  {
    title: 'Parenting',
    icon: familyIcon,
    content: (
      <Topic tags={['family', 'toddler', 'proud', 'love']}>
        <p>
          I'm a doting father to a spirited 2-year-old girl who fought to
          survive a difficult childbirth and continues to battle to this day
          against changing diapers and eating soap. I strive to spend as much
          time with her as possible while balancing work and life, which is
          often challenging.
        </p>
        <p>
          I am determined not to repeat my parents' mistakes — I'll make new
          ones.
        </p>
      </Topic>
    )
  },
  {
    title: 'Hobbies',
    icon: snookerIcon,
    content: (
      <Topic tags={['snooker', 'reading', 'mentalhealth']}>
        <p>
          While juggling family and work, we often forget to nurture our
          well-being. To keep my mental health in check, I try to escape from
          overwhelming responsibilities by reading a book.
        </p>
        <p>
          It was only recently that I've discovered a passion for English
          Snooker. Playing on the 12-foot table, I find myself fully immersed in
          the moment, away from daily anxieties — until I miss an easy shot.
        </p>
      </Topic>
    )
  },
  {
    title: 'Soft skills',
    icon: teamIcon,
    content: (
      <Topic tags={['team', 'mentoring', 'agile']}>
        <p>
          Although I appreciate the quirks of working remotely, I thrive as a
          team player, mentoring my colleagues in new technologies and eagerly
          applying that fresh knowledge to promising and interesting projects.
        </p>
        <p>
          I enjoy leading teams using Scrum and Kanban software development
          methodologies, but those are the only things agile about me — I have
          the body of a nonagenarian.
        </p>
      </Topic>
    )
  },
  {
    title: 'Frontend development',
    icon: reactIcon,
    content: (
      <Topic tags={['javascript', 'react', 'nextjs', 'advanced']}>
        <p>
          Coming from a backend background, I soon felt drawn to the JavaScript
          ecosystem and it became an important part of my life, one that I'm
          enthusiastic about and defines me as a developer.
        </p>
        <p>
          As I delved deeper into frontend, I grew proficient in React and
          well-versed in Next.js framework, confidently building quality
          products. With several years of experience to my name, this is where I
          vercel — pun intended.
        </p>
      </Topic>
    )
  },
  {
    title: 'TypeScript',
    icon: typescriptIcon,
    content: (
      <Topic tags={['frontend', 'typescript', 'proficient']}>
        <p>
          When I first encountered TypeScript, I was skeptical about its
          benefits. Having grown accustomed to the flexibility of JavaScript,
          the idea of adding static typing seemed like an unnecessary
          complication that would slow me down.
        </p>
        <p>
          As I gradually integrated TypeScript into my workflow, I began to
          appreciate its ability to bring robustness and reliability to my
          codebase — giving me more time to enjoy anything but debugging.
        </p>
      </Topic>
    )
  },
  {
    title: 'CSS',
    icon: tailwindIcon,
    content: (
      <Topic tags={['frontend', 'tailwind', 'novice']}>
        <p>
          My initial mistrust kept me away from doing CSS for quite some time.
          However, my perspective began to shift when I was introduced to
          Flexbox and later to CSS Grid. Their intuitive design and
          implementation drew me in and encouraged me to give them a try.
        </p>
        <p>
          Nowadays, I have a deeper understanding of CSS and I am comfortable
          navigating it. I look forward to finding opportunities to continue to
          flex-grow in this field.
        </p>
      </Topic>
    )
  },
  {
    title: 'Backend background',
    icon: databaseIcon,
    content: (
      <Topic tags={['supabase', 'keystone', 'proficient']}>
        <p>
          A younger version of myself was deeply involved in backend
          development, starting as a Python/Django enthusiast before being drawn
          into a Rails environment. I was passionate about data modeling and
          designing RESTful APIs, but developed a preference for GraphQL's
          advantages while building MVPs and multi-platform products.
        </p>
        <p>
          More recently, I've adopted JAMstack architectures and embraced
          headless CMS solutions like Keystone, as well as BaaS platforms such
          as Supabase. This shift has allowed me to focus more on user
          experience and application logic — no more dreadful backend work.
        </p>
      </Topic>
    )
  },
  {
    title: 'Projects',
    icon: rocketIcon,
    content: (
      <Topic tags={['w.a.g.e.', 'mishe', 'createacademy', 'lexacon']}>
        <p>
          In 2016, I joined{' '}
          <Link href="https://www.whitesmith.co/">Whitesmith</Link> where I was
          able to contribute to exciting products with a strong focus on quality
          and innovation from its start to finish. I sharpened my ability to
          understand business goals through Discoveries and translate use cases
          into technical roadmaps.
        </p>
        <ul>
          <Project jobTitle="Tech lead" href="https://wageforwork.com">
            rethink the user experience and improve the overall code quality and
            robustness
          </Project>
          <Project jobTitle="Tech lead" href="https://mishe.co/">
            develop the product from scratch on top of coding best practices
          </Project>
          <Project
            jobTitle="Full-stack developer"
            href="https://createacademy.com/"
          >
            re-build the application with special focus on scalability and
            availability
          </Project>
        </ul>
      </Topic>
    )
  },
  {
    title: 'AI enabled',
    icon: aiIcon,
    content: (
      <Topic tags={['chat-gpt', 'anthropic', 'cursor']}>
        <p>
          Although initially hesitant, I found that integrating AI tools like
          Cursor, powered by ChatGPT and Anthropic models, has significantly
          transformed my development workflow.
        </p>
        <ul>
          <ListItem>Set up development environments.</ListItem>
          <ListItem>Improve code quality and robustness.</ListItem>
          <ListItem>Write useful documentation.</ListItem>
          <ListItem>Automate repetitive tasks.</ListItem>
          <ListItem>Outline components with a given mockup.</ListItem>
          <ListItem>
            Gain insights into different approaches to challenging problems.
          </ListItem>
        </ul>
        <p>
          I'm committed to continuing to leverage AI to enhance productivity and
          streamline tasks — hoping one day to be fully emancipated.
        </p>
      </Topic>
    )
  }
]
