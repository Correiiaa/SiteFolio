import { Navbar } from "@/components/navbar";
import Image from "next/image";
import TextType from "@/components/textType";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Navbar />
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<TextType
					strings={[
						"Full Stack Developer",
						"React",
						"PHP Developer",
						"Toni Correia",
					]}
				/>
			</main>
		</div>
	);
}
