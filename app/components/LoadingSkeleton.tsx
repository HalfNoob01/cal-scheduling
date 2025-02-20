export default function LoadingSkeleton() {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
        <div className="h-40 bg-gray-300 rounded"></div>
      </div>
    );
  }