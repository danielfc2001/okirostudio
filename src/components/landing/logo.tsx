import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="150"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="50"
        y="29"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="24"
        fontWeight="bold"
        className="fill-foreground"
      >
        OKIRO
      </text>
    </svg>
  );
}
