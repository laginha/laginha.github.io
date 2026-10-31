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
          I am determined not to repeat my parents' mistakes - I'll make new
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
          the moment, away from daily anxieties - until I miss an easy shot.
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
          vercel - pun intended.
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
          As I gradually integrated TypeScript into my workflow, I began to
          appreciate its ability to bring robustness and reliability to my
          codebase.
        </p>
        <p>
          It debunked any misconception I had about static typing being an
          unnecessary complication that would slow me down. On the contrary, it
          gives me more time to enjoy anything but debugging.
        </p>
      </Topic>
    )
  },
  {
    title: 'Tailwind',
    icon: tailwindIcon,
    content: (
      <Topic tags={['frontend', 'tailwind', 'novice']}>
        <p>Flexbox and CSS Grid got me into CSS, and Tailwind made me stay.</p>
        <p>
          Styling right next to the markup keeps me focused, and its theme
          config has helped me create and maintain a reusable design system that
          scales across products.
        </p>
        <p>
          I look forward to finding opportunities to continue to flex-grow in
          this field.
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
      <Topic tags={['eneida', 'w.a.g.e.', 'mishe']}>
        <p>
          Since early 2025, I've been the frontend lead at{' '}
          <Link href="https://eneida.io/">Eneida</Link>, where I mentor the
          team, define its coding standards and own the architecture.
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
          I'm committed to leveraging AI for productivity and streamlined
          repetitive tasks - secretly hoping it buys me time to build LEGO (for
          my kid, obviously. *cough*)
        </p>
      </Topic>
    )
  }
]
