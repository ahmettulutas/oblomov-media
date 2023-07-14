import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => <div className={twMerge('mx-auto w-[98%] px-4', className)} {...props} />;