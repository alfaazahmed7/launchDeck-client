import React from "react";

export default function Loading() {
  // Generate 8 skeleton slots to fill the screen beautifully
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-pulse">
      {/* Skeleton for Header Info */}
      <div className="mb-10 text-center md:text-left space-y-3">
        <div className="h-9 w-48 rounded-xl bg-slate-800" />
        <div className="h-5 w-96 rounded-lg bg-slate-800/60" />
      </div>

      {/* Skeleton for Search/Filter Bar */}
      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="h-12 rounded-xl bg-slate-800 lg:col-span-5" />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-5">
          <div className="h-12 rounded-xl bg-slate-800" />
          <div className="h-12 rounded-xl bg-slate-800" />
          <div className="h-12 rounded-xl bg-slate-800" />
          <div className="h-12 rounded-xl bg-slate-800" />
        </div>
        <div className="h-12 rounded-xl bg-slate-800 lg:col-span-2" />
      </div>

      {/* Grid Viewport Skeletons */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skeletons.map((_, idx) => (
          <div
            key={idx}
            className="flex h-[430px] flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-4"
          >
            <div className="h-44 w-full rounded-xl bg-slate-800" />
            <div className="h-6 w-3/4 rounded bg-slate-800" />
            <div className="h-4 w-full rounded bg-slate-800" />
            <div className="flex gap-2">
              <div className="h-5 w-16 rounded bg-slate-800" />
              <div className="h-5 w-16 rounded bg-slate-800" />
            </div>
            <div className="mt-auto h-10 w-full rounded-xl bg-slate-800" />
          </div>
        ))}
      </div>
    </div>
  );
}