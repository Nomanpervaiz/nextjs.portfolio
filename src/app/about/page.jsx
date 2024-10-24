import Image from "next/image";
import mySelf from "@/assets/duplicateme.jpg";
import vectorImg from "@/assets/Vector 8.png";

function About() {
    return (
        <section className="bg-black/[0.89] pt-10 lg:pt-20 px-10 lg:px-36">
            <div className="text-white xl:px-10 relative">
            <Image
        src={vectorImg}
        alt="Decorative Vector Background"
        className="absolute  lg:w-2/5 w-full "
        layout="intrinsic"
        priority={true}
      />
                <h1 className="text-4xl py-2 font-semibold lg:text-6xl">About Me</h1>
                <p className=" text-gray-300">Litle Brief About Myself</p>
            </div>
            <div className="p-6 xl:mx-10 lg:p-10 border-b border-gray-400"></div>

            <div className="grid lg:grid-cols-2 h-fit relative">
                <div className="text-center  flex flex-col justify-center lg:text-left xl:px-10 ">
                    <h2 className="font-bold text-4xl py-4 lg:py-4 lg:text-5xl text-white">
                        Let&apos;s get know <br /> about me closer
                    </h2>
                    <p className="text-gray-100 font-bold text-md md:px-10 lg:px-0 lg:text-base">
                        Noman is a full-stack software developer specializing in modern,
                        responsive web applications. His portfolio showcases a variety of
                        projects, including eCommerce platforms and interactive websites.
                        Proficient in React.js, Next.js, and Firebase, Noman effectively
                        integrates front-end and back-end solutions to create seamless user
                        experiences.
                    </p>
                </div>
                <div className="flex  items-center justify-center py-10 sm:p-20 xl:p-10 lg:items-end lg:justify-end">
                    <Image
                        src={mySelf}
                        alt="Personal picture"
                        className="rounded-xl w-full md:w-1/2 lg:w-full xl:w-3/4"
                        layout="intrinsic"
                        priority={true}
                    />
                </div>
            </div>
            <div className="text-center lg:text-left lg:grid text-white lg:grid-cols-2 xl:px-10">
                <div >
                    <h2 className="text-3xl lg:text-5xl py-10  font-bold">My mission is to simplify web development with efficient solutions.</h2>
                </div>
                <div>
                    <p className="text-xl px-0 lg:px-6 lg:py-10 py-2 ">Create custom websites with Noman that convert more visitors than any other site. With a variety of unique designs, you can easily choose a layout without hassle. Build custom landing pages with Noman that drive higher conversions. With numerous revisions, you can effortlessly create a website without any issues.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
