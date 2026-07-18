import { Coverflow } from "../components/ui/Coverflow";
import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import type { Product } from "../data/site";
import { products } from "../data/site";

const tints = [
  "from-gold/25 to-gold/5",
  "from-[#8a5a2b]/30 to-[#8a5a2b]/5",
  "from-cream/15 to-cream/3",
  "from-gold/18 to-[#8a5a2b]/8",
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-gold/35">
      <div
        className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br sm:aspect-square ${tints[index % tints.length]}`}
      >
        <span className="font-display text-5xl italic text-cream/85 transition-transform duration-500 group-hover:scale-110 sm:text-6xl">
          {product.name.charAt(0)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 py-4 sm:py-5">
        <p className="text-[11px] font-bold uppercase tracking-wide text-gold">{product.kind}</p>
        <h3 className="font-display mt-1 text-base font-medium sm:text-lg">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-mist">{product.desc}</p>
        <div className="mt-3">
          <span className="rounded-full border border-cream/15 px-2.5 py-1 text-[11px] font-semibold text-mist">
            En vente au salon
          </span>
        </div>
      </div>
    </article>
  );
}

export function Shop() {
  return (
    <RevealSection id="boutique" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Boutique"
          title="Les produits"
          accent="du salon."
          lead="Une sélection courte et exigeante : des produits de qualité, choisis et utilisés par l'équipe, disponibles à l'achat directement au salon."
        />

        {/* Desktop grid */}
        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={Math.min(i * 0.07, 0.3)}>
              <ProductCard product={product} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <Coverflow
            items={products}
            keyOf={(product) => product.name}
            render={(product) => (
              <ProductCard product={product} index={products.indexOf(product)} />
            )}
            stageClassName="h-[calc(42vw+13rem)]"
            cardClassName="w-[56vw]"
            shiftVw={54}
          />
        </div>
      </div>
    </RevealSection>
  );
}
