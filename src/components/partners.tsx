import Image from "next/image"
import CountUp from "./text-animations/CountUp/CountUp"

interface PartnersProps {
  dictionary: any
}

export default function Partners({ dictionary }: PartnersProps) {
  const partners = [
    { name: "Innovate Co", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=f59e0b&color=000000" },
    { name: "Quantum Leap", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=3b82f6&color=000000" },
    { name: "Stellar Solutions", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=10b981&color=000000" },
    { name: "Apex Dynamics", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=ef4444&color=000000" },
    { name: "FusionWorks", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=8b5cf6&color=000000" },
    { name: "NextGen Corp", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=64748b&color=ffffff" },
    { name: "Synergy Inc", logo: "https://place.davidhtml.xyz/api/image?w=280&h=80&bg=1f2937&color=ffffff" },
  ]

  const statistics = [
    {
      value: 10,
      suffix: "+",
      label: dictionary.partners.statistics.experience,
      icon: "🏆",
    },
    {
      value: 60,
      suffix: "+",
      label: dictionary.partners.statistics.partners,
      icon: "🤝",
    },
    {
      value: 130,
      suffix: "+",
      label: dictionary.partners.statistics.projects,
      icon: "🚀",
    },
  ]

  return (
    <>
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
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={280}
                  height={80}
                  className="inline-block mx-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:invert dark:opacity-40 dark:hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  <CountUp from={0} to={stat.value} separator="," duration={2} />
                  <span className="text-blue-600 dark:text-blue-400">{stat.suffix}</span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
