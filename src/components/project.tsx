import React from 'react';
import { Inria_Serif, Inconsolata } from 'next/font/google';
import Image from 'next/image';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => (
  <div className="group relative rounded-3xl overflow-hidden bg-CCF1F5 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150">
    <div className="aspect-[16/9] w-full overflow-hidden relative h-[60%]">
      <Image 
        src={imageUrl} 
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-CCF1F5 p-4 h-[40%] flex flex-col justify-center">
      <h3 className={`${inriaSerif.className} text-xl font-medium mb-1 text-gray-900`}>
        {title}
      </h3>
      <p className={`${inconsolata.className} text-sm text-gray-700`}>
        {description}
      </p>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "ProveML",
      description: "A natural-language theorem prover for proposition logic",
      imageUrl: "/project-thumbnails/theorem-prover-quanta.jpg"
    },
    {
      title: "Pollution and the Price of Anarchy", 
      description: "How bad can selfish-routing get vs the social optimum?",
      imageUrl: "/project-thumbnails/pollution.jpg"
    },
    {
      title: "Data Sun",
      description: "Creating a recommendation system for Cornell&apos;s newspaper",
      imageUrl: "/project-thumbnails/recommendations.webp"
    },
    {
      title: "HoopTracker",
      description: "Detailed statistics on pickup basketball games",
      imageUrl: "/project-thumbnails/hooptracker.webp"
    },
    {
      title: "Beyond Vector Search: Axiomatic RAG",
      description: "Using traditional AI for retrieval",
      imageUrl: "/project-thumbnails/axiomatic-retrieval.webp"
    },
    {
      title: "BrandSync",
      description: "Create, and post graphics and text for Social Media",
      imageUrl: "/project-thumbnails/brandsync.png"
    }
  ];

  return (
    <section 
      id="playground-section" 
      className="py-20 px-8" 
      style={{ backgroundColor: '#CCF1F5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex items-center">
          <div className="w-1/3">
            <h2 className={`${inriaSerif.className} text-4xl font-bold flex items-center gap-3 text-gray-900`}>
              <span className="font-[700]">Playground</span>
              <span role="img" aria-label="ladder">🪜</span>
            </h2>
          </div>
          <div className={`${inconsolata.className} w-2/3 space-y-4 text-lg text-gray-900`}>
            <p>
              This section contains most of the projects - mostly code and links to my
              GitHub - that I&apos;ve worked on. A lot of these projects were collaborations
              with other really smart people.
            </p>
            <p>
              Topics include: Algorithmic Game Theory, Theorem Proving, Recommendation
              Systems, Knowledge Retrieval Systems, Computer Vision, Pacman, and Kaggle
              Competitions.
            </p>
            <p className="text-sm">
              📸 Thumbnail credits: Google Images, ChatGPT
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;