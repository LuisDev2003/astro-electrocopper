import serviceImage from "@/assets/images/residential-free-img.jpg";
import { Button, Card, CardFooter, Link } from "@nextui-org/react";
import { Whatsapp } from "../icons/Whatsapp";

const cards = [
  {
    title: "Residential Services",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: serviceImage.src,
  },
  {
    title: "Commercial Services",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: serviceImage.src,
  },
  {
    title: "Industrial Services",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: serviceImage.src,
  },
];

export function ServiceCard() {
  return (
    <section className="flex flex-col gap-2 md:flex-row px-2 max-w-screen-lg mx-auto py-3">
      {cards.map(({ description, image, title }) => (
        <Card
          isFooterBlurred
          radius="sm"
          className="max-w-[500px] w-full basis-60 flex-1 mx-auto"
        >
          <img
            alt="Relaxing app background"
            className="z-0 w-full h-60 object-cover"
            src={image}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 gap-x-1 p-2">
            <div className="flex flex-col flex-1">
              <h4 className="text-sm text-white mb-1">{title}</h4>
              <p className="text-xs text-white line-clamp-2">{description}</p>
            </div>
            <Button
              as={Link}
              href="#"
              size="sm"
              isIconOnly
              className="bg-transparent "
            >
              <Whatsapp />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
