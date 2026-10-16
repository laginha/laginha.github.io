import type { ReactNode } from 'react'

import Link from '@/components/Link'
import Project from '@/components/Project'
import Topic from '@/components/Topic'
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
          I'm a doting father to a spirited 3-year-old girl who fought to
          survive a difficult childbirth and continues to battle to this day
          against eating soup. I strive to spend as much time with her as
          possible while balancing work and life, which is often challenging.
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
      <Topic tags={['django', 'keystone', 'supabase']}>
        <p>
          Early in my career I spent some time on the backend with Django and
          Rails. These days I lean on headless CMS solutions and BaaS platforms,
          which keep my focus where I enjoy it most: user experience and the
          frontend.
        </p>
      </Topic>
    )
  },
  {
    title: 'Projects',
    icon: rocketIcon,
    content: (
      <Topic tags={['w.a.g.e.', 'mishe', 'createacademy']}>
        <p>
          In 2016, I joined{' '}
          <Link href="https://www.whitesmith.co/">Whitesmith</Link> where I was
          able to contribute to exciting products with a strong focus on quality
          and innovation from its start to finish. I sharpened my ability to
          understand business goals through Discoveries and translate use cases
          into technical roadmaps.
        </p>
        <ul className="bullet-list">
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
      <Topic tags={['agents', 'anthropic', 'cursor']}>
        <p>
          Integrating AI tools like Cursor and Claude Code has transformed my
          workflow, and they're now a core part of how I work.
        </p>
        <ul className="bullet-list">
          <li>Orchestrate heavy tasks between multiple agents.</li>
          <li>Turn mockups and specs into functional components.</li>
          <li>Review and improve code quality / robustness.</li>
          <li>Explore alternative approaches to challenging problems.</li>
        </ul>
        <p>
          I'm committed to continuing to leverage AI to enhance productivity and
          streamline tasks — hoping it eventually emancipates me enough to spend
          more time with my kid.
        </p>
      </Topic>
    )
  }
]
