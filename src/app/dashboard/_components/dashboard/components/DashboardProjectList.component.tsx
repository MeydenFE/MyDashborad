"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/src/components/ui/carousel";
import { Section } from "@/src/components/common/Section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectItems = [
  { id: 1, name: "Alpha", image: null },
  { id: 2, name: "Beta", image: null },
  { id: 3, name: "Gamma", image: null },
  { id: 4, name: "Delta", image: null },
];

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const DashboardProjectList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowWidth();

  const step = width >= 1280 ? 3 : width >= 768 ? 2 : 1;
  const total = projectItems.length;

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const next = prev - step;
      // wrap around to last valid start index
      if (next < 0) {
        const remainder = total % step;
        return remainder === 0 ? total - step : total - remainder;
      }
      return next;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = prev + step;
      return next >= total ? 0 : next; // 先頭へループ
    });
  };

  return (
    <Section title="プロジェクト一覧">
      <div className="flex w-full items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <div className="w-full max-w-screen-xl overflow-hidden">
          <Carousel>
            <CarouselController activeIndex={activeIndex} />
            <CarouselContent>
              {projectItems.map((project) => {
                const fallbackImageUrl = `https://picsum.photos/300/300?sig=${project.id}`;
                return (
                  <CarouselItem
                    key={project.id}
                    className="flex basis-full justify-center md:basis-1/2 xl:basis-1/3"
                  >
                    <div className="flex aspect-square w-full max-w-xs flex-col items-center justify-center rounded-lg bg-white p-4 shadow">
                      <Image
                        src={project.image ?? fallbackImageUrl}
                        alt={project.name}
                        width={400}
                        height={400}
                        className="mb-2 rounded object-contain"
                      />
                      <span className="text-center text-sm font-medium text-gray-800">
                        {project.name}
                      </span>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <button
          onClick={handleNext}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </Section>
  );
};

const CarouselController = ({ activeIndex }: { activeIndex: number }) => {
  const { api: emblaApi } = useCarousel();

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(activeIndex);
    }
  }, [activeIndex, emblaApi]);

  return null;
};

export default DashboardProjectList;
