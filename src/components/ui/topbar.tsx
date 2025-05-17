"use client";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface TopbarProps {
	children?: React.ReactNode;
	session: any;
}

function Topbar(props: TopbarProps) {
	const { session } = props;

	if (session) {
		return (
			<div className="flex items-center justify-between p-4 border-b-1 bg-[#ffffff] border-b-gray-200 dark:bg-gray-900 dark:border-b-gray-700">
				<h1 className="flex items-center gap-2 font-bold text-xl dark:text-gray-200">
					<MessageSquare className="h-6 w-6" /> <span>NekAI</span>
				</h1>
				<div>
					<Button>Cerrar Sesión</Button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex items-center justify-between p-4 border-b-1 bg-[#ffffff] border-b-gray-200 dark:bg-gray-900 dark:border-b-gray-700">
				<h1 className="flex items-center gap-2 font-bold text-xl dark:text-gray-200">
					<MessageSquare className="h-6 w-6" /> <span>NekAI</span>
				</h1>
				<div className="links gap-7 hidden md:flex">
					<Link href="/prices" className="dark:text-gray-50">
						Precios
					</Link>
					<Link href="/faq" className="dark:text-gray-50">
						FAQ
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<Button>Iniciar Sesión</Button>
					<Button variant="secondary">Registrarse</Button>
				</div>
			</div>
		);
	}
}
export default Topbar;
