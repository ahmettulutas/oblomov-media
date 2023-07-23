import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export const ContentContainer = ({ className, ...props }: HTMLProps<HTMLDivElement>) => <div className={twMerge("mx-auto w-[96%] px-4 max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl", className)} {...props} />;