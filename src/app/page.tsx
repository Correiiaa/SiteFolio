import { Navbar } from "@/components/navbar";
import Image from "next/image";
import TextType from "@/components/textType";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Navbar />
			<main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-black sm:items-start">
				<div className="w-auto text-left">
					<TextType
						strings={[
							"Full Stack Developer",
							"React, Next.js, Node.js, TypeScript",
							"Python, PHP, SQL",
							"Toni Correia",
						]}
					/>
				</div>
			</main>
		</div>
	);
}
