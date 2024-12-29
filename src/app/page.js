"use client";
import React, { useState } from 'react';
import { Coffee, Wine, Soup, Pizza, Cake, Sandwich } from 'lucide-react';

const categories = [
  {
    id: 'kahvalti',
    name: 'Kahvaltı',
    icon: Coffee,
    description: 'Güne enfes bir başlangıç yapın'
  },
  {
    id: 'baslangic',
    name: 'Başlangıçlar',
    icon: Soup,
    description: 'Lezzetli aperatifler'
  },
  {
    id: 'anayemek',
    name: 'Ana Yemekler',
    icon: Pizza,
    description: 'Özenle hazırlanan spesiyallerimiz'
  },
  {
    id: 'tatli',
    name: 'Tatlılar',
    icon: Cake,
    description: 'Tatlı dokunuşlar'
  },
  {
    id: 'icecekler',
    name: 'İçecekler',
    icon: Wine,
    description: 'Özel içeceklerimiz'
  }
];

const MenuItem = ({ name, description, price, preparation, allergens, isSignature, imageUrl }) => (
  <div className="group relative border border-neutral-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="relative">
      <img
        src={imageUrl}
        alt={name}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {isSignature && (
        <span className="absolute top-4 left-4 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
          Şef Spesiyali
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-serif text-2xl text-neutral-800">{name}</h3>
      <p className="mt-2 text-sm font-light leading-relaxed text-neutral-600">
        {description}
      </p>
      {preparation && (
        <p className="mt-2 text-xs italic text-neutral-500">
          Hazırlanma Süresi: {preparation}
        </p>
      )}
      {allergens && (
        <p className="mt-2 text-xs text-neutral-500">
          Alerjenler: {allergens}
        </p>
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="font-serif text-2xl text-neutral-800">{price}₺</span>
      </div>
    </div>
  </div>
);

const MenuSection = ({ category, items }) => (
  <div className="mb-16">
    <div className="mb-8 text-center">
      <category.icon className="mx-auto mb-4 h-10 w-10 text-amber-600" />
      <h2 className="font-serif text-3xl text-neutral-800">{category.name}</h2>
      <p className="mt-2 text-base text-neutral-600">{category.description}</p>
    </div>
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const BrutteCafeMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('kahvalti');

  const menuItems = {
    kahvalti: [
      {
        name: "Ayvalık Tost",
        description: "Özel reçetelerimizle hazırlanmış ev yapımı reçeller, organik bal ve kaymak, taze pişmiş poğaça çeşitleri, özel peynir tabağı, sınırsız çay eşliğinde (2 kişilik)",
        price: 385,
        isSignature: true,
        preparation: "20-25 dakika",
        imageUrl: "https://i.nefisyemektarifleri.com/2024/03/22/ayvalik-tostu.jpg"
      },
      {
        name: "Yumurtalı Kaşarlı Tost",
        description: "Ekşi maya ekmek üzerinde ezilmiş avokado, iki adet poşe yumurta, cherry domates, taze otlar ve granül kılınmış deniz tuzu",
        price: 145,
        allergens: "gluten, yumurta",
        imageUrl: "https://i.nefisyemektarifleri.com/2021/11/20/tavada-yumurtali-kasarli-tost-7.jpg"
      }
    ],
    baslangic: [
      {
        name: "Bruschetta Tabağı",
        description: "Ev yapımı ekşi maya ekmek üzerinde taze domates, fesleğen, sızma zeytinyağı ve aged balsamik",
        price: 85,
        imageUrl: "https://example.com/bruschetta-tabagi.jpg"
      },
      {
        name: "Burrata Salatası",
        description: "Taze burrata peyniri, renkli cherry domatesler, roka, fesleğen pesto ve aged balsamik sos ile",
        price: 165,
        allergens: "süt ürünleri",
        imageUrl: "https://example.com/burrata-salatasi.jpg"
      }
    ],
    anayemek: [
      {
        name: "Truffle Risotto",
        description: "Arborio pirinç ile hazırlanan, porçini mantarlı, trüf yağı ve parmesan ile servis edilen risotto",
        price: 225,
        isSignature: true,
        preparation: "25-30 dakika",
        allergens: "süt ürünleri"
      },
      {
        name: "Wagyu Burger",
        description: "Brioche ekmeği arasında wagyu beef burger, karamelize soğan, olgunlaştırılmış cheddar peyniri, ev yapımı özel sos. Trüf yağlı patates kızartması ile servis edilir",
        price: 285,
        allergens: "gluten, süt ürünleri"
      }
    ],
    tatli: [
      {
        name: "Brutte Soufflé",
        description: "Valrhona %70 bitter çikolata ile hazırlanan, içi akışkan sufle. Ev yapımı vanilya dondurması ile servis edilir",
        price: 125,
        isSignature: true,
        preparation: "20 dakika",
        allergens: "yumurta, süt ürünleri"
      },
      {
        name: "Crème Brûlée",
        description: "Madagaskar vanilyası ile hazırlanan, üzeri karamelize edilmiş klasik Fransız tatlısı",
        price: 95,
        allergens: "süt ürünleri, yumurta"
      }
    ],
    icecekler: [
      {
        name: "Signature Filter Coffee",
        description: "Guatemala yüksek rakım kahve çekirdeklerinden V60 metodu ile demlenen özel kahvemiz",
        price: 55,
        preparation: "5-7 dakika"
      },
      {
        name: "Affogato",
        description: "Ev yapımı vanilya dondurması üzerine sıcak espresso",
        price: 65
      }
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-neutral-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="rounded-full border-2 border-amber-400/30 bg-neutral-900/80 p-8 backdrop-blur-sm">
            <h1 className="font-serif text-5xl font-light tracking-wide text-amber-400">
              BRUTTE
            </h1>
          </div>
          <p className="mt-6 text-lg font-light tracking-widest text-white">
            EST. 2024
          </p>
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm">
            Scroll to explore
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto max-w-6xl overflow-x-auto px-4 py-4">
          <div className="flex gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center whitespace-nowrap px-2 py-2 transition-all ${
                  selectedCategory === category.id
                    ? 'text-amber-600'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <category.icon className="mb-1 h-5 w-5" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Menu Content */}
      <main className="mx-auto max-w-6xl px-4 py-16">
        <MenuSection
          category={categories.find(c => c.id === selectedCategory)}
          items={menuItems[selectedCategory]}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 flex justify-center space-x-6">
            {categories.map(category => (
              <category.icon
                key={category.id}
                className="h-6 w-6 text-neutral-400"
              />
            ))}
          </div>
          <p className="text-sm text-neutral-500">
            Özel diyet gereksinimleriniz için lütfen servis personelimize danışınız.
            Fiyatlarımıza KDV dahildir.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BrutteCafeMenu;