export default function CircularLoading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="relative w-40 h-40">
          {/* Static Outer Circle */}
          <div className="w-full h-full border-8 border-gray-700 rounded-full"></div>
  
          {/* Spinning Inner Circle */}
          <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
  
          {/* Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 border-opacity-30 border-t-transparent border-b-transparent rounded-full animate-ping"></div>
        </div>
      </div>
    );
  }
  