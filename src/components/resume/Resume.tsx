import { ResumeData } from "@/data/resumeData";
import ResumeHeader from "./ResumeHeader";
import SummarySection from "./SummarySection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import LanguagesSection from "./LanguagesSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";

interface ResumeProps {
  data: ResumeData;
}

const Resume = ({ data }: ResumeProps) => {
  return (
    <div className="resume-container p-8 md:p-12">
      <ResumeHeader 
        name={data.name} 
        title={data.title} 
        contact={data.contact} 
      />
      
      <SummarySection summary={data.summary} />
      
      <ExperienceSection experiences={data.experience} />
      
      <EducationSection education={data.education} />
      
      <LanguagesSection languages={data.languages} />
      
      <SkillsSection skillCategories={data.skills} />
      
      <InterestsSection interests={data.interests} />
    </div>
  );
};

export default Resume;
