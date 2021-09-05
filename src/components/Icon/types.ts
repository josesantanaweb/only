export interface IconProps {
  /** Sets name icon */
  name:
    | "home"
    | "add"
    | "arrow-right"
    | "arrow-left"
    | "arrow-up"
    | "arrow-down"
    | "bell"
    | "cash"
    | "bookmark"
    | "chat"
    | "check"
    | "copy"
    | "dots"
    | "filter"
    | "lock"
    | "lists"
    | "messages"
    | "more"
    | "notifications"
    | "profile"
    | "search"
    | "send"
    | "star"
    | "suscriptions"
    | "tag";
  /** Sets color icon */
  colorIcon?: string;
  /** Sets size icon */
  size?: string;
}
