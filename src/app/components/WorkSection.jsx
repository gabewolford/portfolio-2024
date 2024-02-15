import Project from "./Project";
import { client } from "../../../sanity/lib/client";

export default async function WorkSection() {
  const data = await client.fetch(`
    *[_type == "recentWork"]{
      projects[] {
        year, 
        client,
        technologies,
        type,
        fullUrl,
        shortUrl,
        order,
      }
    }
  `);
  const recentWorkArray = data[0]?.projects;

  return (
    <section className="mb-28">
      <h3 className="text-xl p-2">Recent work</h3>
      <div className="grid gap-2 grid-cols-9 md:grid-cols-16 text-gray-400 text-sm border-b p-2 items-start md:items-center">
        <h4 className="col-span-2 md:col-span-2 py-2">Year</h4>
        <h4 className="col-span-3 md:col-span-3 py-2">Client</h4>
        <h4 className="col-span-3 md:col-span-4 py-2">Technologies</h4>
        <h4 className="hidden md:block md:col-span-2 py-2">Type</h4>
        <h4 className="col-span-1 md:col-span-5 py-2 text-right md:text-left">
          URL
        </h4>
      </div>

      <ul>
        {recentWorkArray?.map((project, index) => (
          <Project projectData={project} key={index} />
        ))}
      </ul>
    </section>
  );
}
