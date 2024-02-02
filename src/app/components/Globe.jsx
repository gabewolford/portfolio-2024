import Image from "next/image";
import globe from "../../../public/images/globe.svg";

export default function Globe() {
  return (
    <section className="grid gap-2 grid-cols-2 md:grid-cols-16 border-b p-2">
      <Image src={globe} alt="globe" priority={true} />
    </section>
  );
}
