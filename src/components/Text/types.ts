export type tagType = "p" | "span";

export interface TextProps {
  /** Sets class text */
  className?: string;
  /** Sets tag text */
  tag?: tagType;
  /** Sets type text */
  type: "body-small" | "body-medium" | "body-large" | "button";
  /** Sets as text */
  as?: tagType;
  /** Sets color text */
  variant?: "primary" | "secondary" | "tertiary" | "white" | "black" | "grey";
  /** Sets text-transform text */
  uppercase?: boolean;
}
