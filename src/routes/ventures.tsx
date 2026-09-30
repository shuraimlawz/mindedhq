import { SiteLayout } from "@/components/site/layout";
import { ventures } from "@/lib/minded-data";

export default function VenturesPage() {
    return (
        <SiteLayout>
            <section className="border-b border-border">
                <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">Ventures</p>
                    <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                        Everything Minded builds, in one register.
                    </h1>
                    <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
                        Minded Technologies is the parent. Each venture below runs its own work while
                        sharing one identity, one standard, and one history.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    {ventures.map((v) => (
                        <article key={v.name} className="bg-card border border-border/60 rounded-xl p-8 shadow-sm hover:border-border transition-all">
                            <div className="flex items-center justify-between">
                                <p className="font-mono text-xs uppercase text-muted-foreground">{v.kind}</p>
                                <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider bg-accent/30">
                                    {v.status}
                                </span>
                            </div>
                            <h2 className="mt-5 text-2xl font-bold tracking-tight">{v.name}</h2>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.description || v.summary}</p>
                            <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4">
                                <p className="font-mono text-xs text-muted-foreground">Est. {v.year || 2026}</p>
                                <span className="text-xs font-semibold text-foreground">Minded Group</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
