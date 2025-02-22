"use client"
import { FaArrowRight } from "react-icons/fa"
import { Button } from "./ui/moving-border"

function CvButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/file/d/1LTSDg1lwbNVN1vnQ18mis8ezMvW7gjTB/view?usp=drive_link";
        link.download = "Noman_CV.pdf"; 
        link.click();
      };
  return (
    <Button
              borderRadius="1.75rem"
              className={"bg-orange-500 text-white  "}
              onClick={handleDownload}
            >
              Download CV <FaArrowRight className="mx-1" />
            </Button>
  )
}

export default CvButton