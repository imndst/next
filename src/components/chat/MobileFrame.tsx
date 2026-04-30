export default function MobileFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white p-6">

      {/* PHONE FRAME */}
      <div className="w-[380px] h-[780px] bg-black rounded-[3rem] p-3 shadow-2xl">

        {/* SCREEN */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">

          {/* TOP BAR (Dynamic Island style) */}
          <div className="h-6 bg-black flex justify-center items-center">
            <div className="w-20 h-2 bg-gray-700 rounded-full" />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}