import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="150" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 10 L10 30 L22 30 L22 23 L30 23 L30 30 L42 30 L42 10 L30 10 L30 17 L22 17 L22 10 Z" className="fill-primary" />
      <text x="50" y="29" fontFamily="var(--font-geist-sans), system-ui, sans-serif" fontSize="24" fontWeight="bold" className="fill-foreground">
        MarkDev
      </text>
    </svg>
  );
}
