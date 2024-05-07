import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Layout1Props {
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const Layout1: React.FC<Layout1Props> = ({ image, ctaText, ctaLink }) => {
  return (
    <div className="tile-layout-1 ">
      <div className="relative min-h-[240px] md:rounded-xl overflow-hidden text-white">
        <Image src={image} alt="Hero Image" layout="fill" objectFit="cover" />
        <div className="absolute bottom-5 left-5 z-10">
          {ctaText && ctaLink && (
            <Link href={ctaLink}>
              <h3 className="text-xl font-bold">{ctaText}</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout1;
