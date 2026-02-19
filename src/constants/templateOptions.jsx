export const TEMPLATE_OPTIONS = [
  {
    id: "orangeBlack",
    thumbnail: (
      <div className="w-full h-full flex text-[6px]">
        <div className="w-2/5 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-0 h-0 border-b-[12px] border-b-orange-500 border-r-[12px] border-r-transparent" />
          <div className="absolute top-4 left-2 w-5 h-5 rounded-full bg-gray-500" />
          <div className="absolute top-8 left-1 w-2 h-2 bg-orange-500 rounded-bl-full" />
          <div className="mt-12 ml-1 space-y-0.5">
            <div className="h-0.5 w-6 bg-orange-500 rounded" />
            <div className="h-0.5 w-8 bg-white/60" />
            <div className="h-0.5 w-6 bg-white/60" />
          </div>
          <div className="absolute left-1 top-1/3 w-px h-4 bg-orange-500" />
          <div className="mt-3 ml-1 space-y-0.5">
            <div className="h-0.5 w-5 bg-orange-500 rounded" />
            <div className="h-0.5 w-6 bg-white/60" />
          </div>
          <div className="mt-3 ml-1 space-y-0.5">
            <div className="h-0.5 w-5 bg-orange-500 rounded" />
            <div className="h-0.5 w-6 bg-white/60" />
          </div>
        </div>
        <div className="w-px bg-gray-400" />
        <div className="w-3/5 bg-white relative">
          <div className="absolute top-0 right-0 w-6 h-4 bg-orange-500 rounded-bl-full" />
          <div className="p-1 mt-1">
            <div className="h-1 w-10 bg-gray-200 rounded" />
            <div className="h-0.5 w-8 bg-gray-100 rounded mt-0.5" />
          </div>
          <div className="px-1 space-y-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-0.5 items-center">
                <div className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                <div className="h-0.5 flex-1 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "blue",
    thumbnail: (
      <div className="w-full h-full flex">
        <div className="w-1/3 bg-blue-900 flex flex-col items-center pt-2">
          <div className="w-6 h-6 rounded-full bg-white/30" />
          <div className="mt-2 w-8 h-px bg-blue-300" />
          <div className="mt-1 space-y-0.5 w-10">
            <div className="h-0.5 bg-white/50 rounded" />
            <div className="h-0.5 bg-white/50 rounded" />
          </div>
        </div>
        <div className="flex-1 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-10 bg-gradient-to-br from-blue-500 to-blue-200 rounded-bl-[80%]" />
          <div className="p-1 mt-5">
            <div className="h-1 w-10 bg-gray-200 rounded" />
            <div className="h-0.5 w-8 bg-gray-100 rounded mt-0.5" />
          </div>
          <div className="px-1 space-y-0.5">
            <div className="h-0.5 w-full bg-gray-100" />
            <div className="h-0.5 w-4/5 bg-gray-100" />
            <div className="h-0.5 w-3/4 bg-gray-100" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "teal",
    thumbnail: (
      <div className="w-full h-full bg-white relative">
        <div className="absolute top-2 left-2 w-5 h-5 rounded-full border border-teal-500 bg-gray-100" />
        <div className="absolute top-2 right-2 w-6 h-0.5 bg-teal-500 rounded" />
        <div className="absolute top-8 right-2 w-0.5 h-10 bg-teal-500" />
        <div className="p-2 pt-3 pl-9">
          <div className="h-1 w-10 bg-gray-200 rounded" />
          <div className="h-0.5 w-8 bg-gray-100 rounded mt-0.5" />
        </div>
        <div className="px-2 space-y-1">
          <div className="h-0.5 w-full bg-gray-100" />
          <div className="h-0.5 w-4/5 bg-gray-100" />
          <div className="h-0.5 w-3/4 bg-gray-100" />
        </div>
        <div className="absolute bottom-2 left-2 w-8 h-0.5 bg-teal-500 rounded" />
      </div>
    )
  }
];
