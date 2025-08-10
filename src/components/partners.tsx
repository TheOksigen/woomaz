import Image from "next/image"

interface PartnersProps {
  dictionary: any
}

export default function Partners({ dictionary }: PartnersProps) {
  const partners = [
    { name: "Innovate Co", logo: "https://placehold.co/140x40" },
    { name: "Quantum Leap", logo: "https://placehold.co/140x40" },
    { name: "Stellar Solutions", logo: "https://placehold.co/140x40" },
    { name: "Apex Dynamics", logo: "https://placehold.co/140x40" },
    { name: "FusionWorks", logo: "https://placehold.co/140x40" },
    { name: "NextGen Corp", logo: "https://placehold.co/140x40" },
    { name: "Synergy Inc", logo: "https://placehold.co/140x40" },
  ]

  return (
      <section id="partners" className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            {dictionary.partners.title}
          </h3>
          <div className="mt-8 relative overflow-hidden whitespace-nowrap">
            <div className="logos-slide">
              {[...partners, ...partners].map((partner, index) => (
                <Image
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                  className="inline-block mx-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:invert dark:opacity-40 dark:hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
