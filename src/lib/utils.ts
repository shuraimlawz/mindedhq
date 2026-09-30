import { clsx, type ClassValue } from "clsx";

/**
 * cn — class name utility.
 * Merges conditional class strings using clsx.
 * Handles conflicts manually when needed; no tailwind-merge dependency.
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
