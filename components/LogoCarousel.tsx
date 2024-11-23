import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { src: "/assets/logos/AD.svg", alt: "AD", width: 100, height: 100 },
    { src: "/assets/logos/NOS.svg", alt: "NOS", width: 100, height: 100 },
    {
      src: "/assets/logos/Telegraaf.svg",
      alt: "Telegraaf",
      width: 150,
      height: 200,
    },
  ];

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-center text-xl">Bekend van</h1>
      <div className="flex space-x-16 w-screen items-center justify-center overflow-hidden">
        {logos.map((logo, index) => (
          <Image
            className="flex items-center justify-center"
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </div>
  );
}
