import Resume from "@/components/resume/Resume";
import DownloadButton from "@/components/resume/DownloadButton";
import { resumeData } from "@/data/resumeData";

const Index = () => {
  // Set to false to hide the download button
  const showDownloadButton = true;

  return (
    <div className="min-h-screen bg-muted py-8 px-4 print:bg-white print:p-0">
      <DownloadButton visible={showDownloadButton} />
      <Resume data={resumeData} />
    </div>
  );
};

export default Index;
