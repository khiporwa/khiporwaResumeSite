import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  visible?: boolean;
}

const DownloadButton = ({ visible = true }: DownloadButtonProps) => {
  const handleDownload = () => {
    window.print();
  };

  if (!visible) return null;

  return (
    <Button
      onClick={handleDownload}
      className="fixed top-4 right-4 z-50 print:hidden gap-2"
      variant="default"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </Button>
  );
};

export default DownloadButton;
