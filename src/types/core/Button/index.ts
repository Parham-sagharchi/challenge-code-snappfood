export interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    title?: string;
}
