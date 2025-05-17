"use client";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/ui/topbar";
import { ArrowRight, Menu, X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function AuthButton() {
	const { data: session } = useSession();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	/* if (session) {
		return <div className="flex h-screen bg-gray-50 dark:bg-gray-900"></div>;
	} */

	return (
		<div className="w-screen min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col ">
			<Topbar session={session} />
			<div className="header px-5 py-10 flex flex-col xl:flex-row justify-center align-center items-center gap-10 mx-auto xl:w-[1080px] xl:h-[100vh]">
				<section>
					<div className="space-y-2 mb-5 xl:space-y-10">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-gray-200">
							La IA conversacional más avanzada
						</h1>
						<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
							Interactúa con nuestra IA para generar texto, imágenes, audio y
							analizar archivos. Todo en una sola plataforma.
						</p>
					</div>
					<div className="buttons space-y-2 flex flex-col md:flex-row space-x-2 justify-start items-start xl:space-x-5">
						<Button variant="secondary" className="gap-1">
							Comenzar Gratis <ArrowRight className="h-4 w-4" />
						</Button>
						<Button>Ver Demo</Button>
					</div>
				</section>

				<div className="imageMarketing flex flex-col items-center justify-center mt-10 xl:mt-0">
					<div className="img bg-gray-300 w-[300px] h-[200px] mt-10 xl:mt-0 md:h-[320px] md:w-[520px] rounded-lg shadow-2xl">
						{" "}
					</div>
				</div>
			</div>
		</div>
	);
}
