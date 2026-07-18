import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { images, site } from "../data/site";

const stats = [
  { value: "4.9/5", label: `${site.reviews} avis vérifiés` },
  { value: "6 j/7", label: "dès 7h du matin" },
  { value: "100%", label: "sur-mesure" },
];

const skills = [
  {
    title: "La tondeuse",
    text: "Dégradés au millimètre, contours nets, transitions invisibles. La précision d'un geste répété des milliers de fois.",
  },
  {
    title: "Les ciseaux",
    text: "Texture, structure, mouvement. Le travail aux ciseaux qui fait la différence entre une coupe correcte et la bonne coupe.",
  },
];

export function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="barbier" className="px-5 py-24 md:px-10 md:py-36">
      <SectionHeading index="01" kicker="Le barbier" title="Rudy" accent="Burtin" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div ref={imgRef} className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={images.portraitWork}
            alt="Rudy en plein travail au salon"
            className="absolute inset-0 h-[116%] w-full object-cover"
            style={{ y }}
            loading="lazy"
          />
          <span className="absolute bottom-4 left-4 bg-ink/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone">
            Lausanne · Tivoli 6
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-bone/80 md:text-xl">
              Pas de coupe catalogue. Rudy lit d'abord le visage : implantation,
              densité, forme du crâne, style de vie. Puis il taille. Ce que les
              écoles appellent un <span className="font-serif italic text-blade">visagiste</span>,
              lui l'a appris fauteuil après fauteuil.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-bone/80 md:text-xl">
              Chaque passage comprend un diagnostic personnalisé, le shampoing,
              le coiffage. Et une coupe que tu sais recoiffer une fois rentré.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-bone/10 pt-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <p className="font-display text-3xl text-bone md:text-4xl">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <Reveal key={skill.title} delay={i * 0.1}>
                <div className="group border border-bone/10 p-6 transition-colors hover:border-blade">
                  <h3 className="font-serif text-2xl italic text-bone group-hover:text-blade">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{skill.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
