import { useState, useEffect } from 'react'
import { Layout } from '@/components/site/layout'
import { members, type Member } from '@/lib/minded-data'
import { cn } from '@/lib/utils'
import { X, MapPin, GraduationCap, Mail, Linkedin, Github, ExternalLink, Sparkles } from 'lucide-react'

function PersonModal({ member, onClose }: { member: Member; onClose: () => void }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Glassmorphic Modal Card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-background/80 dark:bg-zinc-900/85 backdrop-blur-2xl text-foreground animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background ambient glow effect */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header / Banner with Close Button */}
        <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gradient-to-r from-zinc-800 via-zinc-900 to-black">
          {member.image && (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover opacity-40 blur-sm scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent dark:from-zinc-900/90 dark:via-zinc-900/40" />

          {/* Floating Glass Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/60 dark:bg-zinc-800/60 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center text-foreground hover:bg-background hover:scale-105 transition-all shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Details Container (Scrollable) */}
        <div className="relative px-6 sm:px-8 pb-8 pt-0 -mt-20 overflow-y-auto flex-1 space-y-6">
          {/* Avatar & Main Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-background dark:border-zinc-900 shadow-xl bg-muted">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-3xl">
                    {member.initials}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{member.name}</h2>
                {member.isCEO && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground shadow-sm">
                    <Sparkles className="w-3 h-3" /> CEO
                  </span>
                )}
                {member.isFounder && !member.isCEO && (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-border bg-card text-foreground">
                    Co-Founder
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <div className="pt-1">
                <span className="inline-flex text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium border border-border/50">
                  {member.field}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Meta Badges (Location & Education) */}
          {(member.location || member.education) && (
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {member.location && (
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground p-3 rounded-xl bg-card/60 dark:bg-zinc-800/40 border border-border/50 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{member.location}</span>
                </div>
              )}
              {member.education && (
                <div className="flex items-center gap-2.5 text-xs text-muted-foreground p-3 rounded-xl bg-card/60 dark:bg-zinc-800/40 border border-border/50 backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate">{member.education}</span>
                </div>
              )}
            </div>
          )}

          {/* About / Extended Bio */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              About & Vision
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
              {member.extendedBio || member.bio}
            </p>
          </div>

          {/* Skills & Expertise */}
          {member.skills && member.skills.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-lg bg-card dark:bg-zinc-800/80 border border-border text-foreground font-medium shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact & Social Links */}
          <div className="pt-4 border-t border-border/60 flex flex-wrap gap-3">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl bg-card hover:bg-secondary border border-border transition-colors text-foreground"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
                Contact Email
              </a>
            )}
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl bg-card hover:bg-secondary border border-border transition-colors text-foreground"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                LinkedIn
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl bg-card hover:bg-secondary border border-border transition-colors text-foreground"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MemberCard({
  member,
  index,
  onClick,
}: {
  member: Member
  index: number
  onClick: () => void
}) {
  return (
    <article
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={cn(
        'group relative rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/[0.05] bg-card overflow-hidden cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-primary',
        `animate-fade-up animate-delay-${Math.min((index + 1) * 100, 800)}`,
      )}
    >
      {/* Top Image / Portrait Section */}
      <div className="relative h-60 w-full overflow-hidden bg-muted/50 shrink-0">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary text-foreground text-3xl font-bold">
            {member.initials}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex gap-1.5 z-10">
          {member.isCEO && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-md backdrop-blur-md">
              CEO
            </span>
          )}
          {member.isFounder && !member.isCEO && (
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-background/80 dark:bg-zinc-900/80 text-foreground border border-white/20 backdrop-blur-md shadow-md">
              Founder
            </span>
          )}
        </div>

        {/* Bottom Overlay Title on Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
          <h2 className="font-bold text-lg leading-tight drop-shadow-sm">{member.name}</h2>
          <p className="text-xs text-zinc-200 font-medium mt-0.5 opacity-90">{member.role}</p>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Field badge */}
          <div className="mb-2.5">
            <span className="inline-flex text-[11px] px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium border border-border/50">
              {member.field}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Interactive hover prompt */}
        <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs text-primary font-medium group-hover:translate-x-0.5 transition-transform">
          <span>View profile details</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
        </div>
      </div>
    </article>
  )
}

export default function PeoplePage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const founders = members.filter((m) => m.isFounder)
  const team = members.filter((m) => !m.isFounder)

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
            The Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight">
            People
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Eight individuals. Five disciplines. One shared ambition. Meet the people behind Minded
            Technologies.
          </p>
        </div>

        {/* Founders */}
        <section className="mb-16">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
            Founders
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((member, i) => (
              <MemberCard
                key={member.id}
                member={member}
                index={i}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </section>

        {/* Team */}
        {team.length > 0 && (
          <section>
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
              Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  index={i + founders.length}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Disciplines overview */}
        <div className="mt-20 border-t border-border/60 pt-16">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Our Disciplines
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Computer Science',
              'Information Technology',
              'Economics',
              'Finance & Accounting',
              'Biomedical Science',
            ].map((field) => (
              <span
                key={field}
                className="px-4 py-2 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors cursor-default"
              >
                {field}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glassmorphic Modal */}
      {selectedMember && (
        <PersonModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </Layout>
  )
}
