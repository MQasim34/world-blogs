import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import React from 'react'

const HeroCarousal = () => {
    return (
        <Carousel className="w-full mx-auto"
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent>
                <CarouselItem>
                    <div className="">
                        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                            {/* Image with overlay */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://source.unsplash.com/random/800x600?hiking,mountains"
                                    alt="Hiking destination"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category */}
                                <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                                    Destination
                                </span>

                                {/* Title */}
                                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                    Exploring the Wonders of Hiking
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-gray-600">
                                    An iconic landmarks, this post unveils the secrets that make this destination a travelers paradise.
                                </p>

                                {/* Author and date */}
                                <div className="mt-6 flex items-center justify-between border-t pt-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                                            <img
                                                src="https://i.pravatar.cc/150?img=45"
                                                alt="Theodore Reginald"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">Theodore Reginald</span>
                                    </div>
                                    <span className="text-xs text-gray-500">24 Jan-2024 • 10 mins read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 left-0 " />
            <CarouselNext className="h-10 w-10 right-0" />
        </Carousel>
    )
}

export default HeroCarousal
