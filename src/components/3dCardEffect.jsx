"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";


export function ThreeDCardDemo({ name, thumbnail, description, link }) {
  return (
    (<CardContainer className=" inter-var h-[350px] sm:h-72 lg:h-72  lg:w-[350px] xl:w-[450px] sm:w-[100%] w-[100%]">

      <CardBody
        className="hover:bg-grid-small-white/[0.5]  shadow-xl relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 ">
        <CardItem translateZ="100" className="w-full mb-4">
          <Link href={link} >
            <Image
              src={thumbnail}
              height="1000"
              width="1000"
              className="h-60 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail" />
          </Link>
        </CardItem>
        <CardItem
          translateZ="80"
          className="text-xl  w-full text-center font-bold  text-neutral-300 dark:text-white">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="80"
          className="text-neutral-400 text-sm max-w-sm mt-2 w-full text-center dark:text-neutral-300">
          {description}
        </CardItem>

      </CardBody>


    </CardContainer>)

  );
}
