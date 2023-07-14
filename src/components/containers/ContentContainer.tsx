import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const ContentContainer = ({ className, ...props }: HTMLProps<HTMLDivElement>) => <div className={twMerge(' border-white mx-auto w-[98%] px-4 max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl', className)} {...props} />;