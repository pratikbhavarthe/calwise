"use client"; 

import { Camera } from "lucide-react";
import Link from "next/link";

const CameraButton: React.FC = () => {
  return (
    <Link
      href="/camera"
      className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse-subtle z-50"
      aria-label="Take photo"
    >
      <Camera size={24} />
    </Link>
  );
};

export default CameraButton;
