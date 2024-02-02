import Project from "./Project";

export default function WorkSection() {
  return (
    <section className="mb-28">
      <h3 className="text-xl p-2">Recent work</h3>
      <div className="grid gap-2 grid-cols-9 md:grid-cols-16 text-gray-400 text-sm border-b p-2 items-start md:items-center">
        <h4 className="col-span-1 md:col-span-2 py-2">Year</h4>
        <h4 className="col-span-2 md:col-span-3 py-2">Client</h4>
        <h4 className="col-span-3 md:col-span-4 py-2">Technologies</h4>
        <h4 className="col-span-2 md:col-span-2 py-2">Type</h4>
        <h4 className="col-span-1 md:col-span-5 py-2 text-right md:text-left">
          URL
        </h4>
      </div>

      <ul>
        <Project
          year="2024"
          client="Meat Cheese Bread"
          technologies="React, NextJS, Sanity, Tailwind, Vercel, Figma"
          type="Marketing Site"
          url="https://meat-cheese-bread.vercel.app"
        />
        <Project
          year="2023"
          client="Team Oregon"
          technologies="React, NextJS, Sanity, Tailwind, PayPal, NextAuth, Vercel, Figma"
          type="Membership Site"
          url="https://teamoregon.cc"
        />
        <Project
          year="2023"
          client="Product Designer"
          technologies="Nuxt, Sanity, Tailwind, Vercel, Figma"
          type="Portfolio Site"
          url="https://alexbarron.site"
        />
        <Project
          year="2023"
          client="Islamorada Fishing Guides"
          technologies="React, NextJS, Sanity, Tailwind, Vercel, Figma"
          type="Marketing Site"
          url="https://islamoradafishingguidesandcharters.com"
        />
        <Project
          year="2023"
          client="VERT Outdoors"
          technologies="React, NextJS, Sanity, Tailwind, Vercel, Figma"
          type="Marketing Site"
          url="https://vert-outdoors.vercel.app"
        />
        <Project
          year="2023"
          client="Small Hound"
          technologies="React, NextJS, Sanity, Tailwind, Vercel, Figma"
          type="Portfolio Site"
          url="https://smallhound.co"
        />
        <Project
          year="2023"
          client="Biiig Stretch Studio"
          technologies="React, NextJS, Sanity, Tailwind, Vercel, Figma"
          type="Marketing Site"
          url="https://biiigstretch.studio"
        />
        <Project
          year="2023"
          client="Ourkade"
          technologies="Vue, Supabase, Tailwind, Vercel, Figma"
          type="Gaming Site"
          url="https://ourkade.io"
        />
      </ul>
    </section>
  );
}
