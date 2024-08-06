import { BgGrid } from "@/components/bg-grid/bg-grid"
import { Stripes, type StripesProps } from "@/components/stripes"
import { Heading, Text } from "@/components/typography"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="relative h-full min-h-screen w-full p-3 sm:p-4 md:p-6 lg:px-16 lg:py-12">
        <BgGrid />

        <div className="absolute left-28 top-28 h-48 w-48 rotate-[-10deg] transform rounded-lg bg-neutral-100 shadow-2xl dark:bg-neutral-800" />
        <div className="absolute left-56 top-36 h-48 w-48 rotate-[8deg] transform rounded-lg bg-neutral-50 shadow-2xl dark:bg-neutral-900" />

        <div className="absolute right-48 top-36 h-64 w-48 rotate-[8deg] transform rounded-lg bg-neutral-100 shadow-2xl dark:bg-neutral-700" />
        <div className="absolute right-28 top-28 h-24 w-24 rotate-[10deg] transform rounded-full bg-white shadow-2xl dark:bg-neutral-800" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-4xl items-center justify-center px-10">
          <div className="flex flex-col items-center justify-center gap-12">
            <Heading className="text-center">Welcome to DoingStuff</Heading>

            <div className="flex flex-col items-center gap-6 text-xl text-neutral-500">
              <Text className="text-center font-semibold">
                Hi! I’m Alex Vyber and this is my personal space on the Tirnets. Here you can find a bunch of my stuff:
              </Text>

              <div className={cn("flex flex-col gap-3 font-semibold", "font-mono")}>
                <Text className="">Current projects</Text>
                <Text className="">Written content</Text>
                <Text className="">Experiments</Text>
                <Text className="">Just some fun stuff</Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Stripes
          className="opacity-100"
          stripesClasses={getStripesClasses()}
          backgroundColor="bg-neutral-100 dark:bg-neutral-950 "
        />
      </div>
    </div>
  )
}

function getStripesClasses() {
  return {
    "ring ring-neutral-300 dark:ring-neutral-700": {
      gridRow: "-9",
      gridColumn: "span 10/0",
    },
    "bg-neutral-200  dark:bg-neutral-500": {
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
    "bg-neutral-200 dark:bg-neutral-700": {
      gridRow: "-3",
      gridColumn: "span 5/-4",
    },
    "ring dark:ring-neutral-600 ring-neutral-200": {
      gridRow: "-2",
      gridColumn: "span 5 / viewport-end",
    },
    "bg-neutral-300 dark:bg-neutral-500": {
      gridRow: "7",
      gridColumn: "span 3/5",
    },
  } satisfies StripesProps["stripesClasses"]
}
