import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-center h-screen rounded-md items-center">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "50vw",
          height: "50vh",
          aspectRatio: 1,
        }}
        className="flex justify-center rounded-md relative  items-center"
      >
        <Image
          src="/home.png"
          alt="banner image"
          fill
          className=" rounded-2xl opacity-40"
        />
        <Link href="/login" className=" z-50">
          <button className=" cursor-pointer z-10  bg-white text-2xl rounded-lg px-5 py-2 hover:shadow-lg hover:shadow-white text-black">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
