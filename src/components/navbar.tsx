"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const items = [
		{ href: "/projects", label: "Projects" },
		{ href: "/skills", label: "Skills" },
		{ href: "/contact", label: "Contact" },
		{ href: "/about", label: "About" },
	];

	return (
		<header className="w-full h-16 bg-black text-white flex items-center justify-between px-4">
			<div className="text-lg font-bold">Toni Correia</div>

			<button
				className="sm:hidden p-2"
				aria-expanded={open}
				aria-controls="mobile-nav"
				onClick={() => setOpen((v) => !v)}
			>
				<FontAwesomeIcon
					icon={open ? faXmark : faGripLines}
					className="w-6 h-6"
				/>
				<span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
			</button>

			{/* mobile menu container: animar transform + opacity */}
			<nav
				id="mobile-nav"
				className={`sm:hidden absolute top-16 left-0 w-full bg-black text-white origin-top transition-all duration-300 ease-out ${
					open
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<div className="w-full flex flex-col items-center gap-4 py-4">
					{items.map((item, i) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className={`block w-11/12 text-center rounded-md border border-white/20 bg-neutral-900 py-3 transform transition-all duration-300 ease-out`}
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

			{/* desktop links */}
			<nav id="primary-nav" className="hidden sm:flex">
				<ul className="flex flex-row gap-4">
					{items.map((item) => (
						<li key={item.href}>
							<a href={item.href} className="hover:text-gray-400">
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
