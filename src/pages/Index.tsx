import heroClinic from "@/assets/feminos.jpg";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Calendar,
  FileText,
  MessageCircle,
  Clock,
  User,
  ChevronDown,
  Stethoscope,
  Baby,
  ScanLine,
  Pill,
  Dna,
  ClipboardList,
} from "lucide-react";

const Index = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">

      {/* LOGO + NAVIGATION */}
      <header className="bg-[hsl(var(--blue-light))] border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="text-3xl font-bold tracking-wide text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Feminos
            </span>
            <span className="h-5 w-px bg-primary/30" />
            <span className="text-base font-medium text-primary">
              MUDr. Filip Berger
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-1 sm:gap-6 flex-wrap justify-center">
            {[
              { label: "Poskytované služby", id: "sluzby" },
              { label: "Náš tým", id: "tym" },
              { label: "Kontakt", id: "kontakt" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="nav-link text-[15px] font-normal px-2 py-1"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("online-sluzby")}
              className="btn-primary text-sm px-5 py-2"
            >
              Objednání &amp; recepty
            </button>
          </nav>
        </div>
      </header>


      {/* HERO */}
      <section className="relative h-[540px] md:h-[620px] overflow-hidden">
        <img
          src={heroClinic}
          alt="Gynekologická ambulance Feminos"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* gradient overlay – left dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_45%_8%/0.65)] via-[hsl(215_45%_8%/0.25)] to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-14">
          <div className="max-w-6xl mx-auto px-6 w-full">
            {/* Bottom-anchored modern layout */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Left: headline block */}
              <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-5">
                  <span className="h-px w-10 bg-[hsl(var(--blue-mid))]" />
                  <p className="text-[hsl(var(--blue-mid))] text-xs font-medium tracking-[0.25em] uppercase">
                    Gynekologická ordinace · Ostrov
                  </p>
                </div>
                <h1
                  className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ambulantní<br />gynekologická péče
                </h1>
                <p className="text-white/75 text-sm md:text-[15px] leading-relaxed max-w-md">
                  Komplexní léčebně-preventivní péče v oboru gynekologie
                  a porodnictví včetně ultrazvukové diagnostiky.
                </p>
              </div>

            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <button
          onClick={() => scrollTo("online-sluzby")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
          aria-label="Scrollovat dolů"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </section>


      {/* ONLINE SERVICES */}
      <section id="online-sluzby" className="py-16 md:py-20 bg-[hsl(var(--blue-light))]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
              Klientský portál
            </p>
            <h2 className="section-title mb-4">
              Využívejte naše on-line služby
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base">
              Pro rychlejší a bezpečnější komunikaci s ordinací využívejte náš
              klientský portál. Nahrazuje běžný e-mail i telefon a vše podstatné
              v něm najdete na jednom místě, a to i mimo ordinační hodiny.
            </p>
          </div>

          {/* Two boxes */}
          <div id="online" className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Registered patients */}
            <div className="bg-white rounded-2xl border border-[hsl(var(--border))] p-8 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center">
                <User className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Po přihlášení můžete využívat všechny on-line služby – objednání, recepty i dotazy. Podmínkou je mít u nás registrovaný kontaktní e-mail.
              </p>
              <button className="btn-primary flex items-center gap-2 mt-auto">
                <Calendar className="w-4 h-4" />
                Přihlásit se
              </button>
            </div>

            {/* New patients */}
            <div className="bg-white rounded-2xl border border-[hsl(var(--border))] p-8 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chcete se k nám zaregistrovat? On-line lze využít funkci objednávání bez nutnosti přihlášení.
              </p>
              <button className="btn-primary flex items-center gap-2 mt-auto">
                <FileText className="w-4 h-4" />
                Objednat se
              </button>
            </div>
          </div>

          {/* Booking notes */}
          <div className="max-w-3xl mx-auto mt-8 space-y-2 text-sm italic text-muted-foreground px-2">
            <p>• Prosíme o dodržení definovaných typů vyšetření uvedených v objednávkovém formuláři.</p>
            <p>• V poli <span className="font-medium">Důvod návštěvy</span> prosím případně upřesněte své obtíže.</p>
          </div>

          {/* Note for unregistered patients */}
          <div className="max-w-3xl mx-auto mt-8 text-center bg-white rounded-2xl border border-[hsl(var(--border))] px-6 py-5">
            <p className="text-foreground text-sm font-medium leading-relaxed">
              U nás <span className="text-base font-semibold">neregistrované pacientky</span> prosíme, aby se na objednání domlouvaly telefonicky.
            </p>
            <p className="text-primary font-semibold mt-1">
              <Phone className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
              <a href="tel:+420353821512" className="hover:underline">353 821 512</a>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="sluzby" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
              Co nabízíme
            </p>
            <h2 className="section-title">Poskytované služby</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />,
                title: "Preventivní gynekologie",
                desc: "Pravidelné preventivní prohlídky, onkologická cytologie, kolposkopie.",
              },
              {
                icon: <Baby className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />,
                title: "Porodnictví",
                desc: "Prenatální péče, sledování těhotenství, poradenství.",
              },
              {
                icon: <ScanLine className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />,
                title: "Ultrazvuková diagnostika",
                desc: "Moderní ultrazvukové vyšetření v gynekologii i porodnictví.",
              },
              {
                icon: <Pill className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />,
                title: "Antikoncepce a hormonální léčba",
                desc: "Poradenství a předpis vhodných druhů antikoncepce, terapie menopauzy a hormonálních poruch.",
              },
              {
                icon: <Heart className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />,
                title: "Laktační poradenství",
                desc: "Podpora a poradenství při kojení a laktaci.",
                link: { label: "www.silaintuice.cz", url: "https://www.silaintuice.cz" },
              },
              {
                icon: <ClipboardList className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />,
                title: "Online recepty",
                desc: "Vystavení receptů bez nutnosti návštěvy ordinace.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] hover:shadow-md transition-all duration-200 bg-white group"
              >
                <div className="mb-4">{s.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                {(s as any).link && (
                  <p className="text-sm mt-2">
                    <span className="text-muted-foreground">Webové stránky laktační poradkyně: </span>
                    <a
                      href={(s as any).link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {(s as any).link.label}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="tym" className="py-16 md:py-20 bg-[hsl(var(--muted))]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
              Kdo jsme
            </p>
            <h2 className="section-title">Náš tým</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto">
            {[
              { name: "MUDr. Filip Berger", role: "Lékař" },
              { name: "MUDr. Barbora Končická", role: "Lékař" },
              { name: "Ivana", lastName: "Sakařová", role: "Porodní asistentka, laktační poradkyně" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex-1 bg-white rounded-md p-8 shadow-sm border border-[hsl(var(--border))] text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
                  <User className="w-9 h-9 text-primary" strokeWidth={1.2} />
                </div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}{(p as any).lastName ? <><br />{(p as any).lastName}</> : null}
                </h3>
                <p className="text-primary text-sm font-medium">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
              Kde nás najdete
            </p>
            <h2 className="section-title">Kontakt</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Kontaktní údaje
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adresa</p>
                      <p className="text-muted-foreground">Hroznětínská 350, Ostrov</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <a
                        href="tel:+420353821512"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +420 353 821 512
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-mail pro pacientky</p>
                      <a
                        href="mailto:sestra.feminos@email.cz"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sestra.feminos@email.cz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-mail pro firmy</p>
                      <a
                        href="mailto:feminos@email.cz"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        feminos@email.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ordinační hodiny
                </h3>
                <div className="space-y-1.5 text-sm">
                  {[
                    { day: "Pondělí", time: "7:00 – 16:00" },
                    { day: "Úterý", time: "7:00 – 14:00" },
                    { day: "Středa", time: "7:00 – 12:00", note: "pouze objednané pacientky" },
                    { day: "Čtvrtek", time: "11:00 – 18:00", note: "pouze objednané pacientky" },
                    { day: "Pátek", time: "7:00 – 13:00" },
                  ].map((h) => (
                    <div key={h.day} className="flex items-baseline gap-3">
                      <span className="font-medium text-foreground w-20">{h.day}</span>
                      <span className="text-muted-foreground">
                        {h.time}
                        {(h as any).note && (
                          <span className="text-xs text-muted-foreground/70 ml-2">({(h as any).note})</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("online-sluzby")}
                  className="btn-primary flex items-center gap-2 mt-4 self-start"
                >
                  <Calendar className="w-4 h-4" />
                  Objednat se on-line
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--blue-light))] h-72 md:h-auto flex items-center justify-center">
              <iframe
                title="Mapa Feminos"
                src="https://maps.google.com/maps?q=Hrozn%C4%9Bt%C3%ADnsk%C3%A1+350+Ostrov&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--topbar))] text-[hsl(var(--topbar-foreground))]">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs">
          <p className="font-semibold tracking-wide text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>
            Feminos, ambulantní gynekologická péče Ostrov
          </p>
          <p className="text-white/70">
            © {new Date().getFullYear()} Feminos – Gynekologická ambulance. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
