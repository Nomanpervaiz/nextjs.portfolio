"use client"
import { FaArrowRight } from "react-icons/fa"
import MapCard from "./MapCard"
import { useRouter } from "next/navigation";
import { Button } from "./ui/moving-border";

function ProjectSection() {
    const router = useRouter()
    const goToProject = ()=>{
          router.push("/projects")
    }
  return (
    <section className="pt-10 relative pb-10 lg:pt-20 px-5 sm:px-10 lg:px-36">
             <div className="absolute inset-0 bg-grid-white/[0.02]  bg-[size:50px_50px] " />
      
    <div className="container mx-auto relative">
      <div className="text-white p-10 text-center">
        <h2 className="text-4xl py-2  font-semibold lg:text-6xl">
          My Projects Highlight
        </h2>
      </div>

      <div className="lg:grid  lg:grid-cols-2 ">
        
            <MapCard limit={4}/>
        </div>

      <div className="flex justify-center my-10">
        <Button
          borderRadius="1.75rem"
          className={"bg-orange-500 text-white  "}
          onClick={goToProject}
        >
          Explore Work <FaArrowRight className="mx-1" />
        </Button>
      </div>
    </div>
  </section>
    )
}

export default ProjectSection