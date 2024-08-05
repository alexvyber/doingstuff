import { BgGrid } from "@/components/bg-grid/bg-grid"
import { Deck } from "@/components/deck"
import { Stripes, type StripesProps } from "@/components/stripes"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen">
      {/* <Stripes
        className=" opacity-100"
        stripesClasses={getStripesClasses()}
        backgroundColor="bg-neutral-50 dark:bg-neutral-900/70 "
      /> */}

      <BgGrid />  

      <div className="text-sm font-extralight">Alex Vyber Portfolio v2.0</div>
      {/* <Image
        src={"/me.jpeg"}
        alt=""
        width={240}
        height={360}
        className="object-cover rounded-2xl transition duration-300 ease-out rotate-3 hover:shadow-2xl hover:scale-105 hover:rotate-0 aspect-[5/6] bg-slate-100 dark:bg-slate-800 dark:shadow-neutral-900/30 grayscale hover:grayscale-0"
      /> */}
      {/* <Deck /> */}
    </div>
  )
}

function getStripesClasses() {
  return {
    "ring ring-neutral-300 dark:ring-neutral-700": {
      gridRow: "-9",
      gridColumn: "span 10/0",
    },
    "bg-neutral-200": {
      gridRow: "-7",
      gridColumn: "span 5/8",
    },
    "ring ring-neutral-300 dark:ring-neutral-900": {
      gridRow: "-6",
      gridColumn: "viewport-start/span 10",
    },
    "bg-neutral-200 dark:bg-neutral-500": {
      gridRow: "-5",
      gridColumn: "span 7/9",
    },
    "bg-neutral-300 dark:bg-neutral-400": {
      gridRow: "-5",
      gridColumn: "span 5/7",
    },
    "bg-neutral-200 dark:bg-neutral-900": {
      gridRow: "-10",
      gridColumn: "span 4 / viewport-end",
    },
    "bg-neutral-300 dark:bg-neutral-800": {
      gridRow: "-9",
      gridColumn: "span 5 / viewport-end",
    },
    "bg-neutral-200 dark:bg-neutral-600": {
      gridRow: "-4",
      gridColumn: "span 7 / viewport-end",
    },
    "bg-neutral-100 dark:bg-neutral-700": {
      gridRow: "-3",
      gridColumn: "span 5/-4",
    },
    "ring ring-neutral-300": {
      gridRow: "-2",
      gridColumn: "span 5 / viewport-end",
    },
    "bg-neutral-300 dark:bg-neutral-500": {
      gridRow: "7",
      gridColumn: "span 3/5",
    },
  } satisfies StripesProps["stripesClasses"]
}
