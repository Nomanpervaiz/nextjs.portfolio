import { Spotlight } from "@/components/ui/Spotlight";
import MapCard from "@/components/MapCard";

function Projects() {
  return (
    <section className="pt-10 pb-10 lg:pt-20 px-5 sm:px-10 lg:px-36">
      <div className="container mx-auto relative">
      <Spotlight
          className=" lg:-top-80 -top-40 left-16 lg:left-32 "
          fill="white"
        />

        <div className="text-white xl:px-10 ">
          <h1 className="text-4xl py-2 font-semibold lg:text-6xl">My Works</h1>
          <p className=" text-gray-300">Showcase About Work</p>
        </div>
        <div className="p-6  xl:mx-10 mb-20 lg:p-10 border-b border-gray-400"></div>

        <div className="lg:grid lg:grid-cols-2  ">
          
      <MapCard/>
          

        </div>
      </div>
    </section>
  );
}

export default Projects;
