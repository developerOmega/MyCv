import { useRouter } from 'next/router';
import MainLayout from '../../Layouts/MainLayout';

import JustContent from '../../components/flex/JustContent';
import Left from '../../components/icons/Left';

import {CardSkillProject, CardSection} from '../../components';
import { Title, Link } from '../../components/tags';

import { getReq } from '../../config/axios';
import { url } from '../../config/config';

const Project = ({project, skills, sections}) => {
  const router = useRouter();

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }
  
  const getSection = sections.map( section => <CardSection key={section.id} section={section} /> );

  return (
    <div className="main-article">
      <JustContent type="center">
        <Title> { project.title } </Title>
      </JustContent>

      <JustContent type="center">
        <p> { project.description } </p>
        <Link href={project.link} > {project.link} </Link>
      </JustContent>

      <CardSkillProject skills={skills} />

      { getSection }

      <JustContent>
        <div style={{ marginLeft: "2rem" }}>
          <Link href="/works" auto={true} target="_self">
            <Left width="15px" /> 
            <p style={{ marginLeft: ".5rem" }}> Salir </p>
          </Link>
        </div>
      </JustContent>

    </div>

  );
}

export const getStaticPaths = async () => {
  const link = `${url}/projects`;
  const projects = await getReq(link);

  const paths = projects.map(project => `/projects/${project.id}`);
  return {paths, fallback: true};

}

export const getStaticProps =  async ({params}) => {
  
  const linkProject = `${url}/projects/${params.id}`;
  const project = await getReq(linkProject);

  const linkSection = `${url}/projects/${params.id}/sections`;
  const sections = await getReq(linkSection);
  
  const linkSkills = `${url}/projects/${params.id}/skills`;
  const skills = await getReq(linkSkills);

  if(!project || !sections || !skills) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      project, sections, skills
    }
  }

}

Project.Layout = MainLayout;

export default Project;