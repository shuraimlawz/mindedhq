import { Link, NavLink } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { MindedLogo } from "./minded-mark";

const nav = [
    { to: "/", label: "Home" },
    { to: "/ventures", label: "Ventures" },
    { to: "/impact", label: "Impact" },
    { to: "/people", label: "People" },
    { to: "/account", label: "Account" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">

            {/* ── Header ── */}
            <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

                    {/* Logo — wordmark on md+, mark-only on mobile */}
                    <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        aria-label="Minded Technologies Home"
                        className="transition-opacity hover:opacity-75"
                    >
                        {/* Desktop: logo + text */}
                        <span className="hidden md:inline-flex">
                            <MindedLogo height={28} showText={true} />
                        </span>
                        {/* Mobile: logo mark only */}
                        <span className="inline-flex md:hidden">
                            <MindedLogo height={28} showText={false} />
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
                        {nav.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-foreground ${
                                        isActive
                                            ? "text-foreground font-semibold"
                                            : "text-muted-foreground"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Theme toggle + mobile hamburger */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            type="button"
                            aria-label="Toggle navigation menu"
                            className="md:hidden p-1.5 rounded-md hover:bg-accent transition-colors text-foreground"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile nav drawer */}
                {open && (
                    <nav className="border-t border-border md:hidden bg-background" aria-label="Mobile navigation">
                        {nav.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `block border-b border-border/50 px-5 py-3.5 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "text-foreground font-semibold bg-accent/40"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/20"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                )}
            </header>

            {/* ── Page content ── */}
            <main className="flex-1">{children}</main>

            {/* ── Footer ── */}
            <footer className="border-t border-border bg-muted/20">
                <div className="mx-auto max-w-6xl px-5 py-14">
                    <div className="flex flex-col gap-10 md:flex-row md:justify-between">

                        {/* Brand */}
                        <div className="max-w-xs">
                            <Link
                                to="/"
                                aria-label="Minded Technologies Home"
                                className="inline-block transition-opacity hover:opacity-75"
                            >
                                <MindedLogo height={26} showText={true} />
                            </Link>
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                A student-founded holding group building products, research,
                                records, and community work under one name.
                            </p>
                        </div>

                        {/* Footer columns */}
                        <div className="grid grid-cols-2 gap-8 text-sm min-w-0">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                                    Group
                                </p>
                                <ul className="mt-3 space-y-2.5">
                                    {nav.slice(1).map((item) => (
                                        <li key={item.to}>
                                            <Link
                                                to={item.to}
                                                className="text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                                    Contact
                                </p>
                                <ul className="mt-3 space-y-2.5 text-muted-foreground break-all">
                                    <li>hello@mindedtechnologies.com</li>
                                    <li>Press &amp; partnerships</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Minded Technologies. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export { SiteLayout as Layout };
