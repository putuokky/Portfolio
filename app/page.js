import Image from "next/image";
import Link from "next/link";
import secret from '@images/secret.webp';
import Button from "@/components/Button";
import Dominos from "./models";

export const metadata = {
  title: "Okky Maheswara",
  description: "The React Framework for the Web",
};

export default function Home() {
  return (
    <section>
      <article className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:pt-16 lg:px-[70px] lg:pt-12">
        <p className="hidden pb-3 ml-1 text-sm text-accent md:block md:pb-7 md:text-base" data-aos="fade-up">
          Hi, My Name is
        </p>
        <h1 className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl" data-aos="fade-up">Okky Maheswara</h1>
        <h2 className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl" data-aos="fade-up">Lorem ipsum dolor sit amet.</h2>
        <p className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base" data-aos="zoom-in-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est doloremque velit animi corrupti non fuga pariatur sequi! Autem, facere modi?</p>
        <div className="mt-10 text-sm md:mt-14" data-aos="flip-up">
          <Link href="#" className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10">
            <Button>View My CV here!</Button>
          </Link>
        </div>
      </article>
      <article className="flex h-[650px] w-full flex-col items-center justify-center py-24 text-center">
        <div className="absolute mb-[-430px] mr-[10px] md:mb-[400px] md:mr-[200px] lg:mr-[300px] xl:mr-[480px]">
          <Image src={secret} alt="secret game" className="h-[150px] w-auto opacity-20 md:h-[200px] lg:h-[250px]" />
        </div>
        <div className="z-40 mb-0 md:mb-10">
          <h2 className="pb-2 text-3xl font-bold leading-tight text-secondary md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed" data-aos="zoom-in-up" data-aos-duration="300">
            Delivering modern,
            <br />
            cohensive & instuitive web solution.
          </h2>
          <p className="text-sm text-primary md:text-base" data-aos="fade-up" data-aos-duration="300">
            I enjoy designing meaningful experiences for brands & businesses to
            help them serve their target users.
          </p>
        </div>
        <div className="bg-base_col absolute z-0 m-auto h-[600px] w-[350px] opacity-25 md:w-[672px] lg:w-[825px] xl:w-[1080px]">
          <Dominos />
        </div>
      </article>
    </section>
  );
}
