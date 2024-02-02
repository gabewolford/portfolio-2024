export default function Project({ year, client, technologies, type, url }) {
  return (
    <li className="grid gap-2 grid-cols-9 md:grid-cols-16 text-sm border-b p-2 items-start md:items-center">
      <p className="col-span-1 md:col-span-2 py-2">{year}</p>
      <a
        href={url}
        target="_blank"
        className="col-span-2 md:col-span-3 py-2 md:flex flex-row gap-1 items-center hover:text-lavender-500"
      >
        {client}
      </a>
      <p className="col-span-3 md:col-span-4 py-2">{technologies}</p>
      <p className="col-span-2 md:col-span-2 py-2">{type}</p>
      <a
        href={url}
        target="_blank"
        className="col-span-1 md:col-span-5 py-2 hidden md:flex flex-row gap-1 items-center hover:text-blue-500"
      >
        {url}{" "}
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <p className="col-span-1 md:col-span-5 py-2 md:hidden flex justify-end">
        <a href={url} target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </p>
    </li>
  );
}
