import { SiteLayout } from "@/components/site/layout";
import { impact, milestones } from "@/lib/minded-data";

export default function ImpactPage() {
    return (
        <SiteLayout>
            <section className="border-b border-border">
                <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">Impact &amp; history</p>
                    <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                        What we give is part of the record.
                    </h1>
                    <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
                        Donations, charity drives and community work are curated here alongside the
                        products, so the full story of the group stays in one place.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-16">
                <div className="divide-y divide-border/60 border-y border-border/60">
                    {impact.map((item) => (
                        <div key={item.title} className="grid gap-3 py-8 md:grid-cols-12 items-baseline hover:bg-accent/20 px-2 rounded-lg transition-colors">
                            <p className="font-mono text-xs uppercase text-muted-foreground md:col-span-3">{item.kind}</p>
                            <h2 className="text-xl font-semibold md:col-span-4 tracking-tight">{item.title}</h2>
                            <p className="text-sm text-muted-foreground md:col-span-5 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="mt-20 text-3xl font-bold tracking-tight">Timeline</h2>
                <ol className="mt-8 border-l border-border/60 ml-2">
                    {milestones.map((m) => (
                        <li key={m.title} className="relative pb-10 pl-6 last:pb-0">
                            <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background" />
                            <p className="font-mono text-xs text-muted-foreground">{m.year}</p>
                            <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </SiteLayout>
    );
}
