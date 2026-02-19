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
} from "lucide-react";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* TOP BAR */}
      <div className="bg-[hsl(var(--topbar))] text-[hsl(var(--topbar-foreground))]">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span className="font-semibold tracking-wide">MUDr. Jana Nováková</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+420123456789"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-3 h-3" />
              +420 123 456 789
            </a>
            <a
              href="mailto:ordinace@feminos.cz"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3 h-3" />
              ordinace@feminos.cz
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Náměstí Míru 12, Praha 2
            </span>
          </div>
        </div>
      </div>

      {/* LOGO + NAVIGATION */}
      <header className="bg-white border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center shadow-sm">
              <Heart className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <span
              className="text-3xl font-bold tracking-wide text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Feminos
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-1 sm:gap-6 flex-wrap justify-center">
            {[
              { label: "Naše služby", id: "sluzby" },
              { label: "Náš tým", id: "tym" },
              { label: "Objednat se", id: "online" },
              { label: "Chci recept", id: "online" },
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
                    Gynekologická ordinace · Praha
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

              {/* Right: CTA card */}
              <div className="flex flex-col gap-3 shrink-0 md:mb-1">
                <button
                  onClick={() => scrollTo("online")}
                  className="btn-primary text-sm px-8"
                >
                  Objednat se
                </button>
                <button
                  onClick={() => scrollTo("sluzby")}
                  className="btn-outline border-white/50 text-white hover:bg-white/10 text-sm px-8"
                >
                  Naše služby
                </button>
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
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Pro rychlejší a bezpečnější komunikaci s ordinací využívejte náš
              klientský portál. Nahrazuje běžný e-mail i telefon a vše podstatné
              v něm najdete na jednom místě, a to i mimo ordinační hodiny.
            </p>
          </div>

          {/* Access cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-[hsl(var(--border))]">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center mb-4">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3
                className="text-xl font-semibold mb-2 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Plný přístup
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Po přihlášení můžete využívat{" "}
                <strong className="text-foreground">všechny on-line služby</strong>.
                Podmínkou je mít u nás registrovaný kontaktní e-mail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-[hsl(var(--border))]">
              <div className="w-11 h-11 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3
                className="text-xl font-semibold mb-2 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bez přihlášení
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                On-line lze využít pouze funkci{" "}
                <strong className="text-foreground">objednávání</strong>.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div id="online" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              <Calendar className="w-4 h-4" />
              Objednat na vyšetření
            </button>
            <button className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center">
              <FileText className="w-4 h-4" />
              Vystavit recept
            </button>
            <button className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4" />
              Jiné
            </button>
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
            <h2 className="section-title">Naše služby</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🩺",
                title: "Preventivní gynekologie",
                desc: "Pravidelné preventivní prohlídky, onkologická cytologie, kolposkopie.",
              },
              {
                icon: "🤰",
                title: "Porodnictví",
                desc: "Prenatální péče, sledování těhotenství, poradenství.",
              },
              {
                icon: "🔬",
                title: "Ultrazvuková diagnostika",
                desc: "Moderní ultrazvukové vyšetření v gynekologii i porodnictví.",
              },
              {
                icon: "💊",
                title: "Antikoncepce",
                desc: "Poradenství a předpis všech druhů antikoncepce.",
              },
              {
                icon: "🧬",
                title: "Hormonální léčba",
                desc: "Terapie menopauzy a hormonálních poruch.",
              },
              {
                icon: "📋",
                title: "Online recepty",
                desc: "Vystavení receptů bez nutnosti návštěvy ordinace.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] hover:shadow-md transition-all duration-200 bg-white group"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-2xl mx-auto">
            {[
              {
                name: "MUDr. Jana Nováková",
                role: "Gynekolog a porodník",
                detail: "Specializace v ultrazvukové diagnostice, 15 let praxe.",
              },
              {
                name: "Petra Horáčková",
                role: "Zdravotní sestra",
                detail: "Koordinace pacientů, odběry, administrativní podpora.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-[hsl(var(--border))] text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
                  <User className="w-9 h-9 text-primary" strokeWidth={1.2} />
                </div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">{p.role}</p>
                <p className="text-muted-foreground text-sm">{p.detail}</p>
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
                      <p className="text-muted-foreground">Náměstí Míru 12, 120 00 Praha 2</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <a
                        href="tel:+420123456789"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +420 123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <a
                        href="mailto:ordinace@feminos.cz"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ordinace@feminos.cz
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
                    { day: "Pondělí", time: "8:00 – 12:00 | 13:00 – 17:00" },
                    { day: "Úterý", time: "8:00 – 12:00" },
                    { day: "Středa", time: "8:00 – 12:00 | 13:00 – 16:00" },
                    { day: "Čtvrtek", time: "8:00 – 12:00" },
                    { day: "Pátek", time: "8:00 – 12:00" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="font-medium text-foreground">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--blue-light))] h-72 md:h-auto flex items-center justify-center">
              <iframe
                title="Mapa Feminos"
                src="https://maps.google.com/maps?q=N%C3%A1m%C4%9Bst%C3%AD+M%C3%ADru+12+Praha+2&output=embed"
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
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span className="font-semibold tracking-wide text-sm" style={{ fontFamily: "var(--font-display)" }}>
              Feminos
            </span>
          </div>
          <p className="text-white/70">
            © {new Date().getFullYear()} Feminos – Gynekologická ambulance. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
