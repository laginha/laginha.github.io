import type { ReactNode } from 'react'

import Link from '@/components/Link'
import Project from '@/components/Project'
import Topic from '@/components/Topic'
import aiIcon from '@/icons/ai.svg'
import chartIcon from '@/icons/chart.svg'
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
    title: 'Projects',
    icon: rocketIcon,
    content: (
      <Topic tags={['eneida', 'deepgrid', 'w.a.g.e.', 'mishe']}>
        <p>
          Since early 2025, I've been the frontend lead at{' '}
          <Link href="https://eneida.io/">Eneida</Link>, building DeepGrid, a
          platform energy distributors use to monitor their low-voltage grids. I
          moved it from a legacy React app to Next.js one screen at a time,
          rebuilt its design system, and built the charts that make months of
          grid measurements readable.
        </p>
        <p>Before that, I led products such as:</p>
        <ul className="bullet-list">
          <Project jobTitle="Tech lead" href="https://wageforwork.com">
            rethink the user experience and improve the overall code quality and
            robustness
          </Project>
          <Project jobTitle="Tech lead" href="https://mishe.co/">
            develop the product from scratch on top of coding best practices
          </Project>
        </ul>
      </Topic>
    )
  },
  {
    title: 'Frontend development',
    icon: reactIcon,
    content: (
      <Topic tags={['javascript', 'react', 'nextjs', 'fullstack', 'advanced']}>
        <p>
          Coming from a backend background in Django and Rails, I soon felt
          drawn to the JavaScript ecosystem and it became an important part of
          my life, one that I'm enthusiastic about and defines me as a
          developer.
        </p>
        <p>
          As I delved deeper into frontend, I grew proficient in React and
          well-versed in Next.js framework, confidently building quality
          products. With several years of experience to my name, this is where I
          vercel - pun intended.
        </p>
      </Topic>
    )
  },
  {
    title: 'AI enabled',
    icon: aiIcon,
    content: (
      <Topic tags={['agents', 'anthropic', 'cursor']}>
        <p>
          Claude Code and Cursor have changed how I work, and how the teams I
          lead work too.
        </p>
        <ul className="bullet-list">
          <li>
            Set up Claude Code for a whole team: project instructions,
            specialist subagents and skills that teach the agent the team's own
            procedures and patterns.
          </li>
          <li>Orchestrate heavy tasks between multiple agents.</li>
          <li>Turn mockups and specs into functional components.</li>
        </ul>
        <p>
          I'm committed to leveraging AI for productivity and streamlined
          repetitive tasks - secretly hoping it buys me time to build LEGO (for
          my kid, obviously. *cough*)
        </p>
      </Topic>
    )
  },
  {
    title: 'Design systems',
    icon: tailwindIcon,
    content: (
      <Topic tags={['frontend', 'tailwind', 'design-tokens', 'proficient']}>
        <p>Flexbox and CSS Grid got me into CSS, and Tailwind made me stay.</p>
        <p>
          I've rebuilt a component library on shadcn/ui, Radix and Tailwind,
          documented in Storybook so designers and developers look at the same
          thing.
        </p>
        <p>My CSS is now tidier than my desk.</p>
      </Topic>
    )
  },
  {
    title: 'Data visualisation',
    icon: chartIcon,
    content: (
      <Topic tags={['echarts', 'timeseries', 'maps']}>
        <p>
          Time series are my favourite kind of data, especially when there are
          months of it to make readable.
        </p>
        <p>
          I've built a charting suite on ECharts, with forecasts, synced zoom
          and exports, then distilled the patterns into a small declarative
          React library.
        </p>
      </Topic>
    )
  },
  {
    title: 'TypeScript',
    icon: typescriptIcon,
    content: (
      <Topic tags={['typescript', 'zod', 'team', 'advanced']}>
        <p>
          Four years in, I write TypeScript for whoever reads the code next.
        </p>
        <p>
          Generics, mapped types and Zod schema inference do the heavy lifting,
          making the wrong thing hard to write so code reviews get to be about
          design patterns, not typos.
        </p>
        <p>
          I'm strict with types and lenient with bedtimes, according to my
          daughter.
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
          methodologies, but those are the only things agile about me - I have
          the body of a nonagenarian.
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
          the moment, away from daily anxieties - until I miss an easy shot.
        </p>
      </Topic>
    )
  },
  {
    title: 'Parenting',
    icon: familyIcon,
    content: (
      <Topic tags={['family', 'toddler', 'proud', 'love']}>
        <p>
          I'm a doting father to a spirited 3-year-old girl who has given me
          more than enough experience to babysit AI coding agents. I strive to
          spend as much time with her as possible while balancing work and life,
          which is often challenging.
        </p>
        <p>
          I am determined not to repeat my parents' mistakes - I'll make new
          ones.
        </p>
      </Topic>
    )
  }
]
