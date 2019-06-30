import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "../styles/tabs.css"
import hobbyProjects from "../portfolioData/hobbyProjectData"
import professionalProjects from "../portfolioData/professionProjectData"
import graduationProjects from "../portfolioData/gradProjectData" //optional
import ProjectBox from "../components/Projects/ProjectBox"
import { ProjectsWrapper, ProjectsSection } from "../styles/projectStyles"
import Layout from "../layouts/layout"

const Projects = () => (
  <Layout>
    <ProjectsWrapper>
      <Tabs>
        <TabList>
          <Tab>Professional</Tab>
          <Tab>Personal</Tab>
          <Tab>Undergrad</Tab>
        </TabList>

        <TabPanel>
          <ProjectsSection>
            {professionalProjects.map(item => (
              <ProjectBox key={item.id} info={item} />
            ))}
          </ProjectsSection>
        </TabPanel>
        <TabPanel>
          <ProjectsSection>
            {hobbyProjects.map(item => (
              <ProjectBox key={item.id} info={item} />
            ))}
          </ProjectsSection>
        </TabPanel>
        <TabPanel>
          <ProjectsSection>
            {graduationProjects.map(item => (
              <ProjectBox key={item.id} info={item} />
            ))}
          </ProjectsSection>
        </TabPanel>
      </Tabs>
    </ProjectsWrapper>
  </Layout>
)

export default Projects
