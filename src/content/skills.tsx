import { SkillProps } from 'components/Skill/Skill'
import {
  SiAdobephotoshop,
  SiApollographql,
  SiCss3,
  SiCypress,
  SiFigma,
  SiGit,
  SiGraphql,
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
  { title: 'HTML5', iconAction: SiHtml5 },
  { title: 'CSS3', iconAction: SiCss3 },
  { title: 'JavaScript', iconAction: SiJavascript },
  { title: 'TypeScript', iconAction: SiTypescript },
  { title: 'React', iconAction: SiReact },
  { title: 'Next.js', iconAction: SiNextdotjs },
  { title: 'Tailwind', iconAction: SiTailwindcss },
  { title: 'StyledComponents', iconAction: SiStyledcomponents, shortTitle: 'CSSinJS' },
  { title: 'Storybook', iconAction: SiStorybook },
  { title: 'TestingLibrary', iconAction: SiTestinglibrary },
  { title: 'Cypress', iconAction: SiCypress },
  { title: 'Git', iconAction: SiGit },
  { title: 'Strapi', iconAction: SiStrapi },
  { title: 'GraphQL', iconAction: SiGraphql },
  { title: 'ApolloGraphQL', iconAction: SiApollographql, shortTitle: 'Apollo' },
  { title: 'LESS', iconAction: SiLess },
  // { title: 'Gulp', iconAction: SiGulp },
  { title: 'Figma', iconAction: SiFigma },
  { title: 'Photoshop', iconAction: SiAdobephotoshop }
]
