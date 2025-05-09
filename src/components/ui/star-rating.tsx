"use client";

import type { HTMLAttributes } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface StarRatingProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  value: number;
  onValueChange?: (rating: number) => void;
  size?: number;
  readonly?: boolean;
  iconClassName?: string;
}

export function StarRating({
  count = 5,
  value = 0,
  onValueChange,
  size = 24,
  readonly = false,
  className,
  iconClassName,
  ...props
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState(value);

  useEffect(() => {
    setCurrentRating(value);
  }, [value]);

  const handleMouseMove = (index: number) => {
    if (!readonly && onValueChange) {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly && onValueChange) {
      setHoverRating(null);
    }
  };

  const handleClick = (index: number) => {
    if (!readonly && onValueChange) {
      const newRating = index + 1;
      setCurrentRating(newRating);
      onValueChange(newRating);
    }
  };

  return (
    <div className={cn("flex items-center gap-0.5", className)} {...props}>
      {[...Array(count)].map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= (hoverRating ?? currentRating);
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              "transition-colors",
              isFilled ? "fill-primary text-primary" : "text-muted-foreground/50 fill-muted-foreground/20",
              !readonly && onValueChange && "cursor-pointer",
              readonly && "cursor-default",
              iconClassName
            )}
            onMouseMove={!readonly && onValueChange ? () => handleMouseMove(index) : undefined}
            onMouseLeave={!readonly && onValueChange ? handleMouseLeave : undefined}
            onClick={!readonly && onValueChange ? () => handleClick(index) : undefined}
            aria-hidden="true" // Decorative if readonly or interaction is handled by parent
          />
        );
      })}
    </div>
  );
}
