import React from 'react';
import '../styles/stepper.css';
import workProjects from '../portfolioData/workData';
import graduationDetails from '../portfolioData/educationData';
import languages from '../portfolioData/languageData';
import interests from '../portfolioData/interestData';
import {
    ExperienceWrapper,
    WorkWrapper,
    EducationWrapper,
    EducationContent,
    Stepper,
    StepperHead,
    LogoLink,
    StepperDescription
} from '../styles/workStyles';
import Layout from '../layouts/layout'

const Experience = () => (
    <Layout>
        <ExperienceWrapper>
            <WorkWrapper>
                <h1>Internships and Work Experience</h1>
                <div className="experience-stepper">
                    {
                        workProjects.map(item => (<div key={item.id} className="step">
                            <div>
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <Stepper>
                                <StepperHead>
                                    <div>
                                        <h3>{item.designation}</h3>
                                        <a href={item.companyLink}>{item.name}</a>
                                        <p>{item.dated}</p>
                                    </div>
                                    <LogoLink href={item.companyLink}>
                                        <img src={item.logo} alt="company" width="175px" />
                                    </LogoLink>
                                </StepperHead>
                                <StepperDescription dangerouslySetInnerHTML={{ __html: item.description }} />
                            </Stepper>
                        </div>
                        ))
                    }
                </div>
            </WorkWrapper>

            <EducationWrapper>
                <h1>Education</h1>
                <EducationContent>
                    {
                        graduationDetails.map(item => (<div key={item.id}>
                            <p>Graduated with a {item.degree}'s Degree majored in {item.major} from {item.name} with a CGPA of {item.cgpa} <br />
                                {item.dated}</p>
                        </div>))
                    }
                </EducationContent>
                <h1>Interests</h1>
                <EducationContent>
                    {
                        interests.map(item => (<div key={item.id}>
                            <p>{item.name}</p>
                        </div>))
                    }
                </EducationContent>
                <h1>Language</h1>
                <EducationContent>
                    {
                        languages.map(item => (<div key={item.id}>
                            <p>{item.name}</p>
                        </div>))
                    }
                </EducationContent>
            </EducationWrapper>
        </ExperienceWrapper>
    </Layout>
)
export default Experience