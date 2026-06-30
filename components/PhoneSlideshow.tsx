"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const screens = [
    "/images/home.png",
    "/images/result.png",
    "/images/history.png",
];

export default function PhoneSlideshow() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % screens.length);
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[500px] w-[250px]">

            {/* الشاشة */}
            <div
                className="
          absolute
          left-[12.5%]
          top-[9.6%]
          w-[75.2%]
          h-[81.3%]
          overflow-hidden
          rounded-[30px]
          bg-black
          z-0
        "
            >
                {screens.map((screen, index) => (
                    <Image
                        key={screen}
                        src={screen}
                        alt="Screenshot"
                        fill
                        priority={index === 0}
                        className={`object-cover transition-opacity duration-700 ${current === index ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>

            {/* الفريم */}
            <Image
                src="/images/frame.png"
                alt="iPhone Frame"
                fill
                priority
                className="absolute inset-0 z-10 object-contain pointer-events-none"
            />
        </div>
    );
}