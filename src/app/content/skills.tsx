import { SkillProps } from 'components/Skill/Skill'
import {
  SiAdobephotoshop,
  SiApollographql,
  SiCss3,
  SiFigma,
  SiGit,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiLess,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript
} from 'react-icons/si'

export const skills: Omit<SkillProps, 'index'>[] = [
  { title: 'HTML5', icon: <SiHtml5 /> },
  { title: 'CSS3', icon: <SiCss3 /> },
  { title: 'JavaScript', icon: <SiJavascript /> },
  { title: 'TypeScript', icon: <SiTypescript /> },
  { title: 'React', icon: <SiReact /> },
  { title: 'Next.js', icon: <SiNextdotjs /> },
  { title: 'Tailwind', icon: <SiTailwindcss /> },
  { title: 'StyledComponents', icon: <SiStyledcomponents />, shortTitle: 'CSSinJS' },
  { title: 'Storybook', icon: <SiStorybook /> },
  { title: 'TestingLibrary', icon: <SiTestinglibrary /> },
  { title: 'Git', icon: <SiGit /> },
  { title: 'Strapi', icon: <SiStrapi /> },
  { title: 'GraphQL', icon: <SiGraphql /> },
  { title: 'ApolloGraphQL', icon: <SiApollographql />, shortTitle: 'Apollo' },
  { title: 'LESS', icon: <SiLess /> },
  { title: 'Gulp', icon: <SiGulp /> },
  { title: 'Figma', icon: <SiFigma /> },
  { title: 'Photoshop', icon: <SiAdobephotoshop /> }
]
