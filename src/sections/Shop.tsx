import { Coverflow } from "../components/ui/Coverflow";
import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import type { Product } from "../data/site";
import { products } from "../data/site";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col border border-ink/12 bg-card transition-colors hover:border-gold/60">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-ink/8 sm:aspect-square">
        <span className="font-display text-5xl font-medium text-gold/70 transition-transform duration-500 group-hover:scale-110 sm:text-6xl">
          {product.name.charAt(0)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 py-5 text-center">
        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-gold">
          {product.kind}
        </p>
        <h3 className="font-display mt-2 text-lg font-medium uppercase tracking-[0.04em]">
          {product.name}
        </h3>
        <span className="mx-auto mt-3 h-px w-8 bg-ink/20" />
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{product.desc}</p>
        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-stone">
          En vente au salon
        </p>
      </div>
    </article>
  );
}

export function Shop() {
  return (
    <RevealSection id="boutique" className="bg-paper pb-24 text-ink md:pb-32">
      <div className="container-x border-t border-ink/15 pt-20 md:pt-24">
        <SectionHeading
          kicker="Boutique"
          title="Les produits"
          accent="du salon."
          lead="Une sélection courte et exigeante : des produits de qualité, choisis et utilisés par l'équipe, disponibles à l'achat directement au salon."
        />

        {/* Desktop grid */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={Math.min(i * 0.07, 0.3)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <Coverflow
            items={products}
            keyOf={(product) => product.name}
            render={(product) => <ProductCard product={product} />}
            stageClassName="h-[calc(42vw+15rem)]"
            cardClassName="w-[58vw]"
            shiftVw={56}
          />
        </div>
      </div>
    </RevealSection>
  );
}
