import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { ventures, milestones } from "@/lib/minded-data";

export default function HomePage() {
    return (
        <SiteLayout>
            <section className="border-b border-border">
                <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">Parent group · Est. by students</p>
                    <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-bold md:text-7xl tracking-tight">
                        One name over everything
                        <br />
                        we build, fund and give.
                    </h1>
                    <p className="mt-7 max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
                        Minded Technologies is a young, student-founded group. Every application,
                        project, donation and initiative we create lives under this roof — and is
                        recorded here.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Link
                            to="/ventures"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
                        >
                            Explore the group <ArrowRight className="size-4" />
                        </Link>
                        <Link
                            to="/people"
                            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                        >
                            Meet the founders
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-b border-border bg-muted/10">
                <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4">
                    {[
                        { k: "8", v: "Members" },
                        { k: "5", v: "Fields of study" },
                        { k: "3", v: "Ventures" },
                        { k: "1", v: "Universal Sign-in" },
                    ].map((s) => (
                        <div key={s.v} className="border-r border-border px-4 py-10 last:border-r-0">
                            <p className="font-display text-4xl font-bold tracking-tight">{s.k}</p>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.v}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-b border-border">
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">Under the roof</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">The ventures</h2>
                    <div className="mt-10 divide-y divide-border border-y border-border">
                        {ventures.map((v) => (
                            <div key={v.name} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline hover:bg-accent/20 px-2 rounded-lg transition-colors">
                                <p className="font-mono text-xs text-muted-foreground uppercase md:col-span-2">{v.kind}</p>
                                <h3 className="text-xl font-semibold md:col-span-3">{v.name}</h3>
                                <p className="text-sm text-muted-foreground md:col-span-6">{v.summary}</p>
                                <p className="font-mono text-xs md:col-span-1 md:text-right text-muted-foreground">{v.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">How we got here</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">From five to eight</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-4">
                        {milestones.map((m) => (
                            <div key={m.title} className="bg-card border border-border/60 rounded-xl p-6 shadow-sm hover:border-border transition-colors">
                                <p className="font-mono text-xs text-muted-foreground">{m.year}</p>
                                <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
