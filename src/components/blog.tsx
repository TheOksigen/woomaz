"use client"
import React from "react";
import { Carousel, Card } from "@/src/components/ui/apple-cards-carousel";
// import { getPayload } from "payload";
// import config from "@payload-config"

export default async function AppleCardsCarouselDemo() {
  // const payload = await getPayload({ config })
  // const data = await payload.find({ collection: "blog" })

  console.log(data)
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Blog
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ marketingText }: { marketingText: string }) => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">{marketingText}</span>
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "Marketing",
    title: "Boost Your Brand Awareness",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent marketingText="Learn strategies to increase your brand visibility and reach more customers effectively." />,
  },
  {
    category: "Advertising",
    title: "Effective Social Media Ads",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent marketingText="Create compelling social media campaigns that engage your audience and drive conversions." />,
  },
  {
    category: "Content",
    title: "Content Marketing Tips",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent marketingText="Produce valuable content that attracts and retains your target audience." />,
  },
  {
    category: "SEO",
    title: "Optimize for Search Engines",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent marketingText="Implement SEO best practices to rank higher and get more organic traffic." />,
  },
  {
    category: "Email",
    title: "Email Marketing Campaigns",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent marketingText="Build email campaigns that nurture leads and convert them into loyal customers." />,
  },
  {
    category: "Analytics",
    title: "Measure Your Marketing Success",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent marketingText="Track key metrics and analyze data to improve your marketing strategies." />,
  },
];


