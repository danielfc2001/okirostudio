import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks?: {
    type: "twitter" | "linkedin" | "github";
    url: string;
  }[];
}

export function TeamMemberCard({
  name,
  role,
  imageUrl,
  socialLinks,
}: TeamMemberProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg text-center p-6">
      <div className="flex justify-center mb-4">
        <Avatar className="h-32 w-32 border-4 border-slate-100">
          <AvatarImage
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            className="object-cover"
          />
          <AvatarFallback className="text-4xl font-medium">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="p-0">
        <h3 className="text-xl font-semibold tracking-tight mb-2">{name}</h3>
        <Badge variant="secondary" className="mb-4 font-normal">
          {role}
        </Badge>

        {socialLinks && (
          <div className="flex justify-center gap-3 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.type === "twitter" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                )}
                {link.type === "linkedin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {link.type === "github" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
