import MainLayout from '../Layouts/MainLayout';
import NavUser from '../components/NavUser';
import CardProject from '../components/CardProject';
import CardJob from '../components/CardJob';
import CardSkill from '../components/CardSkill';
import { getReq } from '../config/axios';
import { url, id } from '../config/config';

const Works = ( {user, projects, jobs, skills} ) => {

  const getProjects = projects.map( (project) => <CardProject project={project} key={project.id}/> );
  const getJobs = jobs.map((job) => <CardJob job={job} key={job.id} />);
  const getSkill = skills.map((skill) => <CardSkill skill={skill} key={skill.id} />)

  return (
    
    <NavUser user={user}>
      <div classNam="main">
        <div className="card1">
          { getProjects }
        </div>

        <div className="card2">
          { getJobs }
        </div>

        <div className="card3">
          { getSkill }
        </div>
      </div>
    </NavUser>
  )
}

export async function getStaticProps() {

  const linkUser = `${url}/users/${id}`;
  const user = await getReq(linkUser);

  const linkProject = `${url}/users/${id}/projects`;
  const projects = await getReq(linkProject);

  const linkJob = `${url}/users/${id}/jobs`;
  const jobs = await getReq(linkJob);

  const linkSkill = `${url}/users/${id}/skills`;
  const skills = await getReq(linkSkill);

  return {
    props: { user, projects, jobs, skills }
  }

}

Works.Layout = MainLayout;

export default Works;