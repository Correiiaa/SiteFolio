"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const items = [
		{ href: "/projects", label: "Projects" },
		{ href: "/skills", label: "Skills" },
		{ href: "/contact", label: "Contact" },
		{ href: "/about", label: "About" },
	];

	return (
		<header className="w-full h-16 bg-black text-white relative">
			<div className="max-w-5xl w-full mx-auto px-6 flex items-center justify-between h-16">
				<div
					className="text-lg font-bold cursor-pointer"
					onClick={() => router.push("/")}
				>
					Toni Correia
				</div>

				{/* desktop links */}
				<nav id="primary-nav" className="hidden sm:flex">
					<ul className="flex flex-row gap-6">
						{items.map((item) => (
							<li key={item.href}>
								<a href={item.href} className="hover:text-gray-400">
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* mobile menu button (visible only below `sm`) */}
				<button
					className="p-2 sm:hidden relative z-50"
					aria-expanded={open}
					aria-controls="mobile-nav"
					onClick={() => setOpen((v) => !v)}
				>
					<FontAwesomeIcon
						icon={open ? faXmark : faGripLines}
						className="text-xl"
					/>
					<span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
				</button>
			</div>

			{/* mobile menu (only on small screens) */}
			<nav
				id="mobile-nav"
				className={`sm:hidden fixed inset-0 bg-black text-white transition-all duration-300 ease-out z-40 ${
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="w-full h-full flex flex-col items-center justify-center gap-6 px-6">
					{items.map((item, i) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="block w-full max-w-md text-center rounded-md border border-white/20 bg-neutral-900 py-4 mx-auto transform transition-all duration-300 ease-out"
							style={{
								opacity: open ? 1 : 0,
								transform: open ? "translateY(0)" : "translateY(8px)",
								transitionDelay: `${open ? i * 60 : 0}ms`,
							}}
						>
							{item.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
};
