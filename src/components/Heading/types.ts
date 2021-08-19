export type tagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  /** Sets class heading */
  className?: string;
  /** Sets tag heading */
  tag?: tagType;
  /** Sets as heading */
  as?: tagType;
  /** Sets color heading */
  variant?: "primary" | "secondary" | "tertiary" | "white";
  /** Sets text-transform heading */
  uppercase?: boolean;
}
