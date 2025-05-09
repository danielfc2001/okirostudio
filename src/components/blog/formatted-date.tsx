
"use client";

import { useState, useEffect, type HTMLAttributes } from 'react';
import { format, isValid } from 'date-fns';
import { cn } from '@/lib/utils';

interface FormattedDateProps extends HTMLAttributes<HTMLSpanElement> {
  dateString: string;
  formatString: string;
  placeholder?: React.ReactNode;
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  dateString,
  formatString,
  className,
  placeholder = null, // Render nothing by default until formatted
  ...props
}) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        const dateObj = new Date(dateString);
        if (isValid(dateObj)) {
          setFormattedDate(format(dateObj, formatString));
        } else {
          console.warn("Invalid date string provided to FormattedDate:", dateString);
          setFormattedDate(dateString); // Fallback to original string if invalid
        }
      } catch (error) {
        console.error("Error formatting date:", error);
        setFormattedDate(dateString); // Fallback to original string on error
      }
    }
  }, [dateString, formatString, isMounted]);

  if (!isMounted || formattedDate === null) {
    // Render placeholder or nothing until client-side formatting is complete
    // This ensures server and initial client render match.
    return placeholder ? <span className={cn(className)} {...props}>{placeholder}</span> : null;
  }

  return <span className={cn(className)} {...props}>{formattedDate}</span>;
};

export default FormattedDate;
