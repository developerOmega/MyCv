import MainLayout from '../Layouts/MainLayout';
import { NavUser, CardProject, CardJob, CardSkill, CardJobShow, MenuResp, } from '../components';
import Menu from '../components/icons/Menu';
import Btn from '../components/tags/Btn';
import JustContent from '../components/flex/JustContent';
import { getReq } from '../config/axios';
import { url, id } from '../config/config';

import { useState } from 'react';

const Works = ( {user, projects, jobs, skills} ) => {

  const [jobInfo, setJobInfo] = useState(false);
  const [job, setJob] = useState({});
  const [resp, setResp] = useState(false);

  const viewJob = ( data ) => {
    setJobInfo(true); // https://danielmendoza.herokuapp.com/
    setJob(data);
  }

  const outJobInfo = () => {
    setJobInfo(false);
  }

  const openResp = () =>{
    setResp(true);
  }

  const closeResp = () =>{
    setResp(false);
  }

  const getProjects = projects.map( (project) => <CardProject project={project} key={project.id}/> );
  const getSkill = skills.map((skill) => <CardSkill skill={skill} key={skill.id} />); 
  const getJobs = jobs.map((job) => <CardJob job={job} key={job.id} func={ viewJob }  />);

  return (
    
    <NavUser user={user}>


      { jobInfo ? <CardJobShow view={ outJobInfo } job={job} /> : null }


      {
        !resp ? (
          <JustContent type="flex-end" className="position-sticky resp" >  
            <Btn type="button" style="menu" onClick={openResp}>
              <Menu />
            </Btn>
          </JustContent>
        ) : (
          <></>
          )
        }

      <div className="main-work">

        { resp ? <MenuResp jobs={getJobs} skills={getSkill} className="position-fixed" func={closeResp} /> : <></>}

        <div className="card-1">
          { getProjects }
        </div>

        <div className="card-2">
          <div className="title">
            Experiencia
          </div>
          { getJobs }
        </div>

        <div className="card-3">
          <div className="title">
            Habilidades
          </div>
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