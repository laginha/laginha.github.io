import { HTMLAttributes, ReactNode } from 'react'
import Link from '@/components/Link'

interface TopicProps extends HTMLAttributes<HTMLDivElement> {
  tags: string[]
}

const Topic = ({ tags, children }: TopicProps) => (
  <div className="flex  flex-col gap-4 text-left">
    {children}
    <p className="text-blue-400 flex items-center justify-end">
      {tags.map((each) => ` #${each}`)}
    </p>
  </div>
)

interface ProjectProps {
  role: string
  href: string
  children: ReactNode
}

const Project = ({ role, href, children }: ProjectProps) => (
  <ListItem>
    <p>
      {role} at <Link href={href} />
    </p>
    <p className="text-sm text-gray-600">{children}</p>
  </ListItem>
)

const ListItem = ({ children }: { children: ReactNode }) => (
  <div className="flex mt-2">
    <span className="mr-2">•</span>
    <div>{children}</div>
  </div>
)

const Topics: { title: string; children: ReactNode }[] = [
  // 0
  {
    title: 'Parenting',
    children: (
      <Topic tags={['family', 'toddler', 'proud', 'love']}>
        <p>
          I'm a doting father to a spirited 2-year-old girl who fought to
          survive a difficult childbirth and continues to battle until this day
          against changing diapers and eating soap. I strive to spend as much
          time with her as possible while balancing work and life, which is
          often challenging.
        </p>
        <p>
          I am determined not to repeat my parents' mistakes — I'll make new
          ones.
        </p>
      </Topic>
    ),
  },
  // 1
  {
    title: 'Hobbies',
    children: (
      <Topic tags={['snooker', 'reading', 'mentalhealth']}>
        <p>
          While juggling family and work, we often forget to nurture our
          well-being. To maintain my mental health in check, I try to escape
          from overwhelming responsabilities by reading a book.
        </p>
        <p>
          It was only recently that I've discovered a passion for English
          Snooker. Playing on the 12-foot table, I find myself fully immerse in
          the moment, away from daily anxieties - until I miss an easy shot.
        </p>
      </Topic>
    ),
  },
  // 2
  {
    title: 'Soft skills',
    children: (
      <Topic tags={['team', 'mentoring', 'agile']}>
        <p>
          Although I appreciate the quirks of working remotely, I thrive as a
          team player, mentoring my colleagues in new technologies and eagerly
          applying that fresh knowledge to promising and interesting projects.
        </p>
        <p>
          I enjoy leading teams using Scrum and Kanban software development
          methodologies, but those are the only things agile about me - I have a
          body of a nonagenarian
        </p>
      </Topic>
    ),
  },
  // 3
  {
    title: 'Frontend development',
    children: (
      <Topic tags={['javascript', 'react', 'nextjs', 'advanced']}>
        <p>
          Coming from a backend background, I soon felt drawn to the Javascript
          ecosystem and it became an important part of my life, one that I'm
          enthusiastic about and defines me as a developer.
        </p>
        <p>
          As I delved deeper into frontend, I grew proficient in React and
          well-versed in Next.js framework, confidently building quality
          products. With several years of experience to my name, this is where I
          vercel - pun intended
        </p>
      </Topic>
    ),
  },
  // 4
  {
    title: 'Typescript',
    children: (
      <Topic tags={['frontend', 'typescript', 'proficient']}>
        <p>
          When I first encountered TypeScript, I was skeptical about its
          benefits. Having grown accustomed to the flexibility of JavaScript,
          the idea of adding static typing seemed like an unnecessary
          complication that would slow me down.
        </p>
        <p>
          As I gradually integrated Typescript into my workflow, I began to
          appreciate its ability to bring robutness and reliability to my
          codebase - giving me more time to enjoy anything but debugging
        </p>
      </Topic>
    ),
  },
  // 5
  {
    title: 'CSS',
    children: (
      <Topic tags={['frontend', 'tailwind', 'novice']}>
        <p>
          My initial mistrust kept me away from doing CSS for quite some time.
          However, my perspective began to shift when I was introduced to
          Flexbox and later to CSS Grid. Their intuitive design and
          implementation drew me in and encouraged me to give them a try.
        </p>
        <p>
          Nowadays, I have a deeper understanding of CSS and I am confortable in
          navigating it. I look forward to finding opportunities to continue to
          flex-grow in this field.
        </p>
      </Topic>
    ),
  },
  // 7
  {
    title: 'Backend background',
    children: (
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
          experience and application logic - no more dreadful backend work.
        </p>
      </Topic>
    ),
  },
  // 7
  {
    title: 'Projects',
    children: (
      <Topic tags={['w.a.g.e.', 'mishe', 'createacademy', 'lexacon']}>
        <p>
          In 2016, I joined{' '}
          <Link href="https://www.whitesmith.co/">Whitesmith</Link> where I was
          able to contribute to exciting products with a strong focus on quality
          and innovation from its start to finish. I sharpened my ability to
          understand business goals through Discoveries and translate use cases
          into technical roadmaps.
        </p>
        <div>
          <Project role="Tech lead" href="https://wageforwork.com">
            rethink the user experience and improve the overall code quality and
            robutness
          </Project>
          <Project role="Tech lead" href="https://mishe.co/">
            develop the product from scratch on top of coding best practices
          </Project>
          <Project role="Full-stack developer" href="https://mishe.co/">
            re-build the application with special focus on scalability and
            availability
          </Project>
        </div>
      </Topic>
    ),
  },
  // 8
  {
    title: 'AI enabled',
    children: (
      <Topic tags={['chat-gpt', 'anthropic', 'cursor']}>
        <p>
          Although initially hesitant, I found that integrating AI tools like
          Cursor, powered by ChatGPT and Anthropic models, has significantly
          transformed my development workflow.
        </p>
        <div>
          <ListItem>Setup development environments.</ListItem>
          <ListItem>Improve code quality and robutness.</ListItem>
          <ListItem>Write useful documentation.</ListItem>
          <ListItem>Automate repetitive tasks.</ListItem>
          <ListItem>Outline components with a given mockup.</ListItem>
          <ListItem>
            Gain insights into different approaches to challenging problems.
          </ListItem>
        </div>
        <p>
          I'm committed to keep leveraging AI to enhance productivity and
          streamline tasks - hoping one day to be fully emancipated
        </p>
      </Topic>
    ),
  },
]

export default Topics
