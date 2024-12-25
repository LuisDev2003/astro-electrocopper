import serviceImage from "@/assets/images/residential-free-img.jpg";
import { Lightbulb, Send } from "lucide-react";

const items = [
  {
    title: "Lighting Upgrades",
    description:
      "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria",
    icon: Send,
    image: serviceImage.src,
  },
  {
    title: "LED Lighting",
    description:
      "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria",
    icon: Lightbulb,
    image: serviceImage.src,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="px-3 text-center space-y-6 py-12">
      <h2 className="text-4xl font-bold">Why Choose Us</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nulla
        quidem voluptatem suscipit sit asperiores voluptate porro consequuntur
        rem officia?
      </p>

      <div>
        {items.map(({ description, icon: Icon, image, title }) => (
          <article
            key={title}
            className="relative min-h-72 p-7 flex items-center before:absolute before:bg-neutral-800/70 before:inset-0 before:z-10"
          >
            <div className="absolute inset-0">
              <img
                src={image}
                alt={title}
                className="size-full object-cover object-center"
              />
            </div>

            <div className="relative text-center space-y-5 z-20">
              <Icon size={40} strokeWidth={1.5} className="mx-auto" />

              <h4 className="font-bold text-lg">{title}</h4>

              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
