import introduction from "../../public/introduction.json";
import skills from "../../public/skills.json";
import contact from "../../public/contact.json";
import experience from "../../public/experience.json";
import projects from "../../public/projects.json";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

export default function Home() {
  const skillItems = skills.map((skill, index) => (
    <div
      key={skill.name + index}
      className="flex items-center justify-center rounded-full border px-4 py-2 transition-all duration-500 ease-out hover:animate-gradient hover:cursor-default hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-[length:200%_200%] hover:text-white"
    >
      <FontAwesomeIcon className="mr-2 h-6 w-6" icon={skill.icon as IconProp} />
      <p>{skill.name}</p>
    </div>
  ));

  const contactItems = contact.map((item, index) => (
    <a
      key={item.label + index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group relative flex items-center justify-center rounded-full p-[1px] transition-all duration-500 hover:-translate-y-2">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 transition-opacity group-hover:animate-gradient group-hover:opacity-100"
          style={{ backgroundSize: "300% 100%" }}
        />
        <div className="relative flex items-center justify-center rounded-full border bg-background px-4 py-2">
          <FontAwesomeIcon
            className="h-6 w-6 transition-all duration-500 group-hover:text-purple-500"
            icon={item.icon as IconProp}
          />
          {item.label && (
            <p className="ml-2 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent">
              {item.label}
            </p>
          )}
        </div>
      </div>
    </a>
  ));

  const experienceItems = experience.map((item, index) => (
    <div
      key={item.title + index}
      className="flex flex-col items-center justify-center gap-2 md:max-w-[30%]"
    >
      <p>{item.date}</p>
      <div className="hidden h-3 w-3 rounded-full bg-black dark:bg-white md:block"></div>
      <div className="text-center">
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm">@ {item.company}</p>
      </div>
    </div>
  ));

  const projectItems = projects.map((project, index) => (
    <div
      key={project.title + index}
      className="flex w-[280px] flex-col items-start justify-center gap-2"
    >
      <a href={project.link}>
        <p className="font-semibold underline">{project.title}</p>
      </a>
      <div className="">
        <p className="">{project.techStack}</p>
        <p className="mt-2 text-sm opacity-50">{project.description}</p>
      </div>
    </div>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center gap-7 px-4 py-4 md:px-24">
      {/* Nav bar */}
      <div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="relative flex items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 overflow-hidden rounded-full bg-black/10 dark:bg-white lg:pointer-events-auto">
            <Image
              src="/avatar.svg"
              alt="Avatar Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
        <ModeToggle />
      </div>

      {/* Page Content */}
      <section className="flex max-w-5xl flex-col gap-7">
        <div className="flex flex-wrap gap-7 md:flex-nowrap">
          {/* Introduction */}
          <Card>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="mb-2 whitespace-pre-line text-3xl font-bold">
                    {introduction.title}
                  </h1>
                  <p className="text-2xl">@ {introduction.company}</p>
                </div>
                <p>{introduction.bio}</p>
              </div>
            </CardContent>
            <CardFooter>
              <p className="font-semibold">📍 {introduction.location}</p>
            </CardFooter>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">{skillItems}</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-wrap gap-7 md:flex-nowrap">
          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Lets connect!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">{contactItems}</div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="relative flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-0">
              <div className="absolute left-[15%] top-1/4 hidden h-2 w-[73%] border-b border-dashed border-black dark:border-white md:block"></div>
              {experienceItems}
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-wrap gap-7 md:flex-nowrap">
          {/* Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Past work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-start justify-between gap-8 md:gap-4">
                {projectItems}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
