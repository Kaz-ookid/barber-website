import { images, site } from "../../data/site";

interface StoryBubbleProps {
  label?: string;
}

/**
 * Instagram-story style bubble: gold gradient ring around a thumbnail,
 * opens the account's current story (falls back to the profile when none).
 */
export function StoryBubble({ label = "Voir la story" }: StoryBubbleProps) {
  return (
    <a
      href={site.instagramStories}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3"
      title={`Story Instagram ${site.handle}`}
    >
      <span className="flex h-12 w-12 shrink-0 rounded-full bg-[conic-gradient(from_210deg,#e8cba0,#cfa15f,#8a5a2b,#e8cba0)] p-[2.5px] transition-transform duration-300 group-hover:scale-110">
        <img
          src={images.storyThumb}
          alt=""
          loading="lazy"
          className="h-full w-full rounded-full border-2 border-night object-cover"
        />
      </span>
      <span className="text-left">
        <span className="block text-sm font-semibold text-cream transition-colors group-hover:text-gold">
          {label}
        </span>
        <span className="block text-xs text-mist">{site.handle}</span>
      </span>
    </a>
  );
}
