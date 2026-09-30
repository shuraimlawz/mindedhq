import { KeyRound, ShieldCheck, Layers } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";

const points = [
    {
        icon: KeyRound,
        title: "One account",
        text: "Create a Minded Account once and use it to sign in to any Minded product.",
    },
    {
        icon: Layers,
        title: "Every product",
        text: "New applications join the same sign-in on day one — no separate registration.",
    },
    {
        icon: ShieldCheck,
        title: "One standard",
        text: "Security, recovery and privacy handled in one place for the whole group.",
    },
];

export default function AccountPage() {
    return (
        <SiteLayout>
            <section className="border-b border-border">
                <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">Minded Account · Coming Soon</p>
                    <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                        One sign-in for everything Minded makes.
                    </h1>
                    <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
                        This site is an information page — there is nothing to sign in to yet. When the
                        first Minded products launch, a single Minded Account will open all of them.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-16">
                <div className="grid gap-6 md:grid-cols-3">
                    {points.map((p) => (
                        <div key={p.title} className="bg-card border border-border/60 rounded-xl p-8 shadow-sm hover:border-border transition-colors">
                            <p.icon className="size-6 text-foreground" />
                            <h2 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h2>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
