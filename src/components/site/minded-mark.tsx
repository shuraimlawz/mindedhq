/**
 * MindedLogo — uses the actual favicon.png as the logo.
 *
 * Light mode: image shown as-is (black mark on transparent bg).
 * Dark mode:  CSS filter inverts it to white automatically.
 *
 * Usage:
 *   <MindedLogo height={32} />
 *   <MindedLogo height={24} showText />
 */

interface MindedLogoProps {
    /** Logo mark height in px (width scales automatically). Default: 32 */
    height?: number;
    /** Show "Minded Technologies" wordmark next to the mark. Default: false */
    showText?: boolean;
    /** Extra CSS class on the wrapper */
    className?: string;
}

export function MindedLogo({ height = 32, showText = false, className = "" }: MindedLogoProps) {
    return (
        <span
            className={`inline-flex items-center gap-2.5 ${className}`}
            style={{ lineHeight: 1 }}
        >
            <img
                src="/favicon.png"
                alt="Minded Technologies logo"
                height={height}
                width={height}               /* PNG is square — 1:1 aspect ratio */
                style={{
                    height: height,
                    width: "auto",
                    display: "block",
                    // Invert black→white in dark mode; no-op in light mode
                    filter: "var(--logo-filter, none)",
                    objectFit: "contain",
                    flexShrink: 0,
                }}
            />
            {showText && (
                <span
                    style={{
                        fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: height * 0.56 + "px",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "inherit",
                        whiteSpace: "nowrap",
                    }}
                >
                    Minded{" "}
                    <span
                        style={{
                            fontWeight: 400,
                            opacity: 0.5,
                        }}
                    >
                        Technologies
                    </span>
                </span>
            )}
        </span>
    );
}
