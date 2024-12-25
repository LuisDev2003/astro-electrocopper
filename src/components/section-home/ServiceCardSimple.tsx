import { Lightbulb, Send } from "lucide-react";

const items = [
  {
    title: "Lighting Upgrades",
    description:
      "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria",
    icon: Send,
  },
  {
    title: "LED Lighting",
    description:
      "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria",
    icon: Lightbulb,
  },
];

export const ServiceCardSimple = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-y-8 gap-x-3 py-12 px-2 max-w-screen-lg mx-auto">
      {[...items, ...items, ...items].map(
        ({ description, icon: Icon, title }) => (
          <article className="text-center space-y-3]">
            <Icon
              size={40}
              strokeWidth={1.5}
              className="mx-auto stroke-yellow-400"
            />

            <h3>{title}</h3>

            <p>{description}</p>
          </article>
        )
      )}
    </section>
  );
};
