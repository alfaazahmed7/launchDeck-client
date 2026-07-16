"use client";

import React, { useState } from 'react';

interface GalleryViewerProps {
    images: string[];
}

export default function GalleryViewer({ images }: GalleryViewerProps) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="space-y-4">
            {/* Main Stage Image Frame */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-[16/9] shadow-inner">
                <img
                    src={activeImage}
                    alt="Active view preview screenshot"
                    className="h-full w-full object-cover object-center transition-all duration-200"
                />
            </div>

            {/* Thumbnail Selection Bar */}
            <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className={`overflow-hidden rounded-lg border aspect-[16/10] bg-slate-950 transition-all duration-150 ${activeImage === img
                                ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-98'
                                : 'border-slate-800 opacity-60 hover:opacity-100'
                            }`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}