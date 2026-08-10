import Image from "next/image";

const brands = [
  {
    name: "Spotify",
    src: "/images/logo/brands/spotify-dark.svg",
    width: 110,
  },
  {
    name: "Amazon",
    src: "/images/logo/brands/amazon-dark.svg",
    width: 110,
  },
  {
    name: "Unity",
    src: "/images/logo/brands/unity-dark.svg",
    width: 90,
  },
  {
    name: "Shutterstock",
    src: "/images/logo/brands/shutterstock-dark.svg",
    width: 150,
  },
  {
    name: "Netflix",
    src: "/images/logo/brands/netflix.svg",
    width: 90,
  },
  {
    name: "NASA",
    src: "/images/logo/brands/nasa.svg",
    width: 70,
  },
];

export default function Brands() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl">
        {/* Logos */}

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-10 items-center justify-center"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={40}
                className="
                  h-auto
                  grayscale
                  invert
                  dark:invert-0
                "
              />
            </div>
          ))}
        </div>

        {/* Text */}

        <p className="text-muted mx-auto mt-10  text-center text-sm leading-7 md:text-base max-w-120">
          Trusted by product teams building exceptional experiences for millions
          of users worldwide.
        </p>
      </div>
    </section>
  );
}