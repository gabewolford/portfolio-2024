export default function TheHeader() {
  return (
    <header className="grid gap-2 grid-cols-2 md:grid-cols-16 border-b p-2 text-xl items-center">
      <h1 className="col-span-1 md:col-span-5 order-0">Gabe Wolford</h1>
      <h2 className="md:col-span-6 order-2">Developer</h2>
      <div className="flex flex-row gap-0.5 items-center justify-end md:justify-start md:col-span-4 order-4 md:order-3">
        <h3>Portfolio</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L18 13M12 19L6 13"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="col-span-1 order-1 md:order-3 text-right md:text-left flex items-center">
        <div className="fixed right-2">
          <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
        </div>
        <div className="fixed right-9">
          <div className="bg-offWhite-500 w-6 h-6 rounded-full"></div>
        </div>
        <div className="fixed right-16">
          <div className="bg-lavender-500 w-6 h-6 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
