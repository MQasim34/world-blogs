'use client';
import HeroCarousal from "@/components/HomePageCom/HeroCarousal";
import Image from "next/image";
import { lato, poppins } from "../wp-admin/fonts/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

// Must be a client component

// import { useAuth } from '@/app/context/auth';

export default function HomePage() {
  // const { isAuthenticated } = useAuth();

  return (
    <div className="home_wrapper -mt-20">
      <div className="relative h-screen w-full">
        <Image
          src="/heroImg.jpg"
          alt='Hero iamge'
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1))] bg-[linear-gradient(to_bottom,rgba(255,255,255,0)40%,rgba(255,255,255,1)100%)] flex py-24">
          <div className="container mx-auto mb-0 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-5">
                <div>
                  <span className="inline-block dark:bg-white/20 bg-white/80 backdrop-blur-[3px] text-sm px-4 py-1.5 rounded-full">Destination</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className={`${poppins} font-medium text-4xl`}>Exploring the Wounders of Hiking</h2>
                  <p className={`${lato} font-light text-2xl `}>An Iconic landmarks, this post unveils the secrets <br className="hidden md:block" /> that make this destination a travelers Paradise </p>
                </div>
                <div>
                  <Button variant="secondary">Explore More</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 justify-end">
                <div className="flex items-center gap-2.5 justify-end">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className={`${lato} antialiased font-normal text-sm text-left`}>Theodore Reginald</span>
                </div>
                <div className="flex justify-end">
                  <span className={`${lato} font-light text-[16px]`}>24 Jan 2025 . 10min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}