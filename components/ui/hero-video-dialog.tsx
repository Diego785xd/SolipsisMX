"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

interface VideoItem {
  videoSrc: string;
  title: string;
}

interface HeroVideoDialogProps {
  videos: VideoItem[];
  animationStyle?: AnimationStyle;
  className?: string;
}

export default function HeroVideoDialog({
  videos,
  animationStyle = "from-center",
  className,
}: HeroVideoDialogProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedAnimation = animationVariants[animationStyle];
  const selectedVideo = videos[selectedIndex];

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-300">
        <AnimatePresence mode="wait">
          <motion.video
            key={selectedVideo.videoSrc}
            src={selectedVideo.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full rounded-lg object-cover"
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            exit={selectedAnimation.exit}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          />
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "px-4 py-2 rounded-md border text-sm font-medium transition-colors",
              selectedIndex === index
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            )}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}


