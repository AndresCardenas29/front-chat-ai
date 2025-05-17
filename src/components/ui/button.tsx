"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	className,
	...props
}) => {
	const baseStyles =
		"rounded-md text-sm font-medium ring-offset-background transition-colors shadow-md border-1 border-gray-200 flex flex-row items-center justify-center px-4 py-2";

	const variants = {
		primary: "bg-gray-50 text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-50",
		secondary: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:textgray-900 dark:hover:bg-gray-100 dark:text-gray-900",
		outline:
			"border border-primary text-primary-foreground hover:border-primary/90 hover:text-primary-foreground",
	};

	const sizes = {
		sm: "px-3 py-1 text-xs",
		md: "px-4 py-2 text-base",
		lg: "px-6 py-3 text-lg",
	};

	return (
		<button
			className={cn(baseStyles, variants[variant], sizes[size], className)}
			{...props}
		>
			{children}
		</button>
	);
};

