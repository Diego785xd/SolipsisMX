import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const videos = [
  {
    videoSrc: "/videos/prueba.mp4",
    title: "Video 1",
  },
  {
    videoSrc: "/videos/prueba2.mp4",
    title: "Video 2",
  },
  {
    videoSrc: "/videos/prueba.mp4",
    title: "Video 3",
  },
  {
    videoSrc: "/videos/prueba2.mp4",
    title: "Video 4",
  },
];

export function HeroDemo() {
  return <HeroVideoDialog videos={videos} />;
}

