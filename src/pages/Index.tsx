import { useState } from "react";
import Icon from "@/components/ui/icon";

const containers = [
  {
    id: 1,
    name: "Контейнер 20 футов",
    size: "20'",
    dimensions: "6.1 × 2.4 × 2.6 м",
    volume: "33 м³",
    price: "от 65 000 ₽",
    desc: "Стандартный морской контейнер для хранения и перевозки грузов.",
    img: "https://cdn.poehali.dev/projects/612813ef-1a83-4228-928a-b7c408a798c0/files/14f422f4-ba35-4ab5-86ca-80577266e54e.jpg",
  },
  {
    id: 2,
    name: "Контейнер 40 футов",
    size: "40'",
    dimensions: "12.2 × 2.4 × 2.6 м",
    volume: "67 м³",
    price: "от 100 000 ₽",
    desc: "Увеличенный объём для крупных грузов и долгосрочного хранения.",
    img: "https://cdn.poehali.dev/projects/612813ef-1a83-4228-928a-b7c408a798c0/files/14f422f4-ba35-4ab5-86ca-80577266e54e.jpg",
  },
];

const warehouses = [
  { id: 1, name: "Терминал на Монтажников", address: "ул. Монтажников, 19", lat: 56.8876, lng: 60.5254, hours: "Пн–Вс 8:00–20:00" },
  { id: 2, name: "Терминал на Автомагистральной", address: "ул. Автомагистральная, 44", lat: 56.8792, lng: 60.5505, hours: "Пн–Вс 8:00–20:00" },
  { id: 3, name: "Терминал на Космонавтов", address: "ул. Космонавтов, 258г", lat: 56.9411, lng: 60.6282, hours: "Пн–Вс 8:00–20:00" },
];

const stats = [
  { value: "12+", label: "лет на рынке" },
  { value: "200+", label: "контейнеров в наличии" },
  { value: "3", label: "терминала в Екатеринбурге" },
  { value: "900+", label: "довольных клиентов" },
];

const navLinks = [
  { href: "#home", label: "Главная" },
  { href: "#catalog", label: "Каталог" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

export default function Index() {
  const [activeWarehouse, setActiveWarehouse] = useState(warehouses[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${activeWarehouse.lng}%2C${activeWarehouse.lat}&z=15&pt=${activeWarehouse.lng}%2C${activeWarehouse.lat},pm2rdl`;

  return (
    <div className="min-h-screen bg-[#f7f7f5] font-sans text-[#4f6a96]">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f7f5]/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/612813ef-1a83-4228-928a-b7c408a798c0/bucket/8772a100-527e-4e61-8055-c13a29f3f6a5.jpeg" alt="Контейнер 96" className="h-10 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#555] hover:text-[#4f6a96] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contacts" className="hidden md:inline-flex items-center gap-2 bg-[#4f6a96] text-white text-sm px-5 py-2.5 hover:bg-[#3d5478] transition-colors">
            Получить предложение
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#f7f7f5] border-t border-[#e5e5e5] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto px-6 flex flex-col justify-center py-24">
          <div className="fade-in">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#888] mb-6 border border-[#ddd] px-3 py-1">
              Екатеринбург · 3 терминала
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8 max-w-3xl">
              Морские<br />
              <span className="text-[#888]">контейнеры</span><br />
              в наличии
            </h1>
            <p className="text-lg text-[#555] max-w-xl mb-10 leading-relaxed">
              Продажа контейнеров 20 и 40 футов. Самовывоз с терминала или доставка по городу.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="inline-flex items-center gap-2 bg-[#4f6a96] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#3d5478] transition-colors">
                Смотреть каталог
                <Icon name="ArrowRight" size={16} />
              </a>
              <a href="#contacts" className="inline-flex items-center gap-2 border border-[#4f6a96] text-[#4f6a96] px-7 py-3.5 text-sm font-medium hover:bg-[#4f6a96] hover:text-white transition-colors">
                Получить расчёт
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#e5e5e5]">
            {stats.map((s, i) => (
              <div key={i} className="fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl font-black mb-1">{s.value}</div>
                <div className="text-sm text-[#888]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#e5e5e5]" />
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#888] mb-3 block">Каталог</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Выберите контейнер</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {containers.map((c) => (
              <div key={c.id} className="group border border-[#e5e5e5] bg-[#f7f7f5] hover:border-[#4f6a96] transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-[#eee]">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{c.name}</h3>
                    <span className="text-xs font-black border border-[#4f6a96] text-[#4f6a96] px-2 py-1 ml-2 shrink-0">{c.size}</span>
                  </div>
                  <p className="text-sm text-[#666] mb-4 leading-relaxed">{c.desc}</p>
                  <div className="text-xs text-[#888] space-y-1 mb-4">
                    <div>Габариты: {c.dimensions}</div>
                    <div>Объём: {c.volume}</div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                    <span className="font-bold text-xl">{c.price}</span>
                    <a href="#contacts" className="text-sm border border-[#4f6a96] text-[#4f6a96] px-4 py-2 hover:bg-[#4f6a96] hover:text-white transition-colors">
                      Заказать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#f7f7f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#888] mb-3 block">О компании</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                12 лет на рынке<br />
                <span className="text-[#888]">металлических</span><br />
                решений
              </h2>
              <p className="text-[#555] leading-relaxed mb-6">
                Контейнер 96 — ведущий поставщик морских контейнеров в Екатеринбурге. Мы работаем с промышленными предприятиями, строительными компаниями и частными покупателями.
              </p>
              <p className="text-[#555] leading-relaxed mb-8">
                Все контейнеры проходят проверку качества и имеют паспорт. Гарантируем юридически чистую сделку и полный пакет документов.
              </p>
              <div className="space-y-3">
                {[
                  "Собственные терминалы в 3 районах Екатеринбурга",
                  "Доставка собственным транспортом",
                  "Полный пакет документов",

                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#555]">
                    <span className="w-1.5 h-1.5 bg-[#4f6a96] rounded-full shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#4f6a96] text-white p-6">
                  <div className="text-4xl font-black mb-2">2012</div>
                  <div className="text-sm text-[#aaa]">Год основания компании</div>
                </div>
                <div className="bg-white border border-[#e5e5e5] p-6">
                  <div className="text-4xl font-black mb-2">200+</div>
                  <div className="text-sm text-[#888]">Контейнеров в наличии</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#e5e5e5] p-6">
                  <div className="text-4xl font-black mb-2">900+</div>
                  <div className="text-sm text-[#888]">Довольных клиентов</div>
                </div>
                <div className="bg-[#f0f0ee] border border-[#e5e5e5] p-6">
                  <div className="text-4xl font-black text-[#4f6a96] mb-2">3</div>
                  <div className="text-sm text-[#888]">Терминала в городе</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP & CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-[#888] mb-3 block">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Терминалы и контакты</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-3">
              {warehouses.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setActiveWarehouse(w)}
                  className={`w-full text-left p-5 border transition-all duration-200 ${
                    activeWarehouse.id === w.id
                      ? "border-[#4f6a96] bg-[#4f6a96] text-white"
                      : "border-[#e5e5e5] bg-[#f7f7f5] hover:border-[#4f6a96]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-sm mb-1">{w.name}</div>
                      <div className={`text-sm ${activeWarehouse.id === w.id ? "text-[#bbb]" : "text-[#888]"}`}>
                        {w.address}
                      </div>
                      <div className={`text-xs mt-1 flex items-center gap-1 ${activeWarehouse.id === w.id ? "text-[#999]" : "text-[#aaa]"}`}>
                        <Icon name="Clock" size={11} />
                        {w.hours}
                      </div>
                    </div>
                    <Icon name="MapPin" size={16} />
                  </div>
                </button>
              ))}
            </div>

            <div className="h-[400px] md:h-auto border border-[#e5e5e5] overflow-hidden">
              <iframe
                key={activeWarehouse.id}
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                title="Карта складов"
              />
            </div>
          </div>

          <div className="pt-12 border-t border-[#e5e5e5]">
            <h3 className="text-2xl font-black mb-6">Свяжитесь с нами</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+79221987474" className="flex items-center gap-3 bg-[#4f6a96] text-white px-6 py-4 hover:bg-[#3d5478] transition-colors">
                <Icon name="Phone" size={18} />
                <span className="font-medium">+7 (922) 198 74-74</span>
              </a>
              <a href="mailto:alanreport@yandex.ru" className="flex items-center gap-3 border border-[#4f6a96] text-[#4f6a96] px-6 py-4 hover:bg-[#4f6a96] hover:text-white transition-colors">
                <Icon name="Mail" size={18} />
                <span className="font-medium">alanreport@yandex.ru</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e5e5] bg-[#f7f7f5]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#888]">
          <div className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/612813ef-1a83-4228-928a-b7c408a798c0/bucket/8772a100-527e-4e61-8055-c13a29f3f6a5.jpeg" alt="Контейнер 96" className="h-8 w-auto object-contain" />
          </div>
          <span className="text-[#888]">© 2024 Контейнер 96. Екатеринбург</span>
          <nav className="flex gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#4f6a96] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}