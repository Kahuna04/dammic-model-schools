export function NewsCardSkeleton() {
  return (
    <div className="rounded-2xl border border-brand-green/10 bg-white overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-200" />
      <div className="p-4 sm:p-5 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-24" />
      </div>
    </div>
  );
}

export function GalleryImageSkeleton() {
  return (
    <div className="rounded-lg w-full h-48 bg-gray-200 animate-pulse" />
  );
}

export function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {[1, 2, 3].map((i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function GalleryGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <GalleryImageSkeleton key={i} />
      ))}
    </div>
  );
}
