type RightRailItem = {
  title: string;
  description: string;
  items: string[];
};

type RightRailProps = {
  title?: string;
  items: RightRailItem[];
};

export default function RightRail({
  title = "Credibility Highlights",
  items,
}: RightRailProps) {
  return (
    <aside
      className="rounded-2xl border border-mirika-earth/60 bg-white p-6 md:p-8"
      aria-label="Credibility highlights"
    >
      <h2 className="text-xl font-semibold text-mirika-charcoal">{title}</h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
          >
            <h3 className="text-base font-semibold text-mirika-charcoal">{item.title}</h3>
            <p className="mt-2 text-sm text-mirika-graphite">{item.description}</p>
            <ul className="mt-3 space-y-2 text-sm text-mirika-graphite">
              {item.items.map((listItem) => (
                <li key={listItem} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mirika-forest" />
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
