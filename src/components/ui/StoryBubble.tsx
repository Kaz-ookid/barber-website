import { images, site } from "../../data/site";

/**
 * Instagram-style bubble: gold gradient ring around a thumbnail, linking
 * to the account. Instagram does not expose stories to third-party sites,
 * so the ring is always shown and simply opens the profile.
 */
export function StoryBubble() {
  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3"
      title={`Instagram ${site.handle}`}
    >
      <span className="flex h-12 w-12 shrink-0 rounded-full bg-[conic-gradient(from_210deg,#e8cba0,#cfa15f,#8a5a2b,#e8cba0)] p-[2.5px] transition-transform duration-300 group-hover:scale-110">
        <img
          src={images.storyThumb}
          alt=""
          loading="lazy"
          className="h-full w-full rounded-full border-2 border-night object-cover"
        />
      </span>
      <span className="text-sm font-semibold text-cream transition-colors group-hover:text-gold">
        {site.handle}
      </span>
    </a>
  );
}
