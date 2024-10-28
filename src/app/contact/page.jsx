import { Spotlight } from "@/components/ui/Spotlight"

function Contact() {
  return (
    <section className="pt-10 pb-10 lg:pt-20 px-10 lg:px-36">
    <div className="container mx-auto relative">
    <Spotlight
        className=" lg:-top-40 lg:left-0 "
        fill="white"
      />


    <div className="text-white xl:px-10 ">
      <h1 className="text-4xl py-2 font-semibold lg:text-6xl">Contact Me</h1>
      <p className=" text-gray-300">For Any Project Knock Us</p>
    </div>
      <div className="p-6 xl:mx-10 lg:p-10 border-b border-gray-400"></div>

      <div className="grid grid-cols-3 gap-10  xl:mx-10 pt-20 py-6  ">
        <div className="h-20 shadow shadow-white rounded-2xl">d</div>
        <div className="h-20 shadow shadow-white rounded-2xl">d</div>
        <div className="h-20 shadow shadow-white rounded-2xl">d</div>
      </div>
      <div className="grid grid-cols-3 gap-10  xl:mx-10    ">
      <div className="h-20 shadow shadow-white rounded-2xl">d</div>
        <div className="h-20 shadow shadow-white rounded-2xl">d</div>
        <div className="h-20 shadow shadow-white rounded-2xl">d</div>
      </div>

    </div>
  </section>
  )
}
export default Contact