"use client"
import TiltedCard from "./c/TiltedCard/TiltedCard"

const teamMembers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

export default function TeamSection() {
  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Kontent */}
      <div className="relative z-10 flex flex-col items-center w-full  bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        
        {/* Başlıq və təsvir */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizim Komanda</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Təcrübəli və peşəkar komandamızla tanış olun
          </p>
        </div>

        {/* TiltedCard komponentləri */}
        <div className="flex flex-wrap justify-center gap-24">
          {teamMembers.map((member) => (
            <TiltedCard
              key={member.id}
              imageSrc="/konul1.jpg" // bütün kartlarda Konul-un şəkli
              altText="Konul Rehimova"
              captionText="Konul Rehimova - Founder & CEO"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-white p-6 border-1 relative bg-white/60 backdrop-blur-md rounded-lg">
                  <h3 className="font-bold text-xl text-black">Konul Rehimova</h3>
                  <p className="text-base opacity-95 font-medium text-black">Founder & CEO</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
