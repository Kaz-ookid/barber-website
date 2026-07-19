import { images, site } from "../../data/site";

export function StoryBubble() {
  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3"
      title={`Instagram ${site.handle}`}
    >
      <span className="block h-11 w-11 shrink-0 border border-gold/60 p-[3px] transition-colors group-hover:border-gold">
        <img src={images.storyThumb} alt="" loading="lazy" className="h-full w-full object-cover" />
      </span>
      <span className="text-[11px] font-medium uppercase tracking-[0.25em] transition-colors group-hover:text-gold">
        {site.handle}
      </span>
    </a>
  );
}
