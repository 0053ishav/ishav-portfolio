import Image from "next/image";

export default function SIETLogo() {
  return (
    <div>
      <a 
        href={"https://gecnilokheri.ac.in"}
        target="_blank"
      >
      <Image
        src={"/assets/education/sietClg.png"}
        width={150}
        height={150}
        alt="SIET College Nilokheri"
        quality={100}
        objectFit="cover"
        objectPosition={"center"}
        
        />
        </a>
    </div>
  );
}