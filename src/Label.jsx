export function Label({title,content}) {

  return (
    <>
      <div className="relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-40 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
          <p className="text-center">{title}</p>
          <p className="text-xs text-center">{content}</p>
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </>
  );
}
