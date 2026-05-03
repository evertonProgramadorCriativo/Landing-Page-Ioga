"use client";

import React, { useState, useEffect } from "react";

// Imagem Locais
const IMG_COSTUME_BLACK = "/PrincipiosBasicosYoga.png";
const IMG_YOGA_TOP = "/PrincipiosBasicosYoga1.png";
const IMG_YOGA_MAT = "/PrincipiosBasicosYoga2.png";
const IMG_COSTUME_BROWN2 = "/PrincipiosBasicosYoga3.png";
const IMG_FEATURED = "/PrincipiosBasicosYoga4.png";
const IMG_HOODIE = "/PrincipiosBasicosYoga7.png";
const IMG_TANK = "/PrincipiosBasicosYoga6.png";
const IMG_RUSHDUARD = "/PrincipiosBasicosYoga8.png";
const IMG_LEGGINS = "/PrincipiosBasicosYoga9.png";

//  Design tokens
const C = {
  accent: "#C29D73",
  dark: "#4F463D",
  muted: "#88909B",
  desc: "#4B5563",
  filterBg: "#F3F4F6",
  black: "#000000",
  white: "#FFFFFF",
};

const FONT = {
  syn: "'Syncopate', sans-serif",
  inter: "'Inter', sans-serif",
  qs: "'Quicksand', sans-serif",
};

//   Breakpoints
//  mobile  : < 640px   -> 1 col, sem featured span
//  tablet  : 640–1023px -> 2 cols, featured ocupa largura toda
//  desktop : ≥ 1024px  -> 4 cols, layout assimétrico original
type Breakpoint = "mobile" | "tablet" | "desktop";

function useBreakpoint(): Breakpoint {
  const getBreakpoint = (): Breakpoint => {
    if (typeof window === "undefined") return "desktop";
    if (window.innerWidth < 640) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  };

  const [bp, setBp] = useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const handler = () => setBp(getBreakpoint());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return bp;
}

//   Types
interface Product {
  id: string;
  name: string;
  price: number;
  color: string;
  category: string;
  image: string;
  featured?: boolean;
}

//  Product data
const ALL_PRODUCTS: Product[] = [
  {
    id: "costume-black",
    name: "Yoga costume",
    price: 55,
    color: "Black/White",
    category: "Costumes",
    image: IMG_COSTUME_BLACK,
  },
  {
    id: "yoga-top",
    name: "Yoga top",
    price: 35,
    color: "Black/White",
    category: "Tops",
    image: IMG_YOGA_TOP,
  },
  {
    id: "featured",
    name: "Yoga costume",
    price: 75,
    color: "Brown / Rose pink",
    category: "Costumes",
    image: IMG_FEATURED,
    featured: true,
  },
  {
    id: "yoga-mat",
    name: "Yoga mat",
    price: 35,
    color: "Multicolor",
    category: "Accessories",
    image: IMG_YOGA_MAT,
  },
  {
    id: "costume-brown",
    name: "Yoga costume",
    price: 75,
    color: "Brown / Rose pink",
    category: "Costumes",
    image: IMG_COSTUME_BROWN2,
  },
  {
    id: "hoodie",
    name: "Hoodie",
    price: 35,
    color: "Pink/Brown",
    category: "Tops",
    image: IMG_HOODIE,
  },
  {
    id: "tank",
    name: "Tank top & sweat pants",
    price: 35,
    color: "Black/White",
    category: "Bottoms",
    image: IMG_TANK,
  },
  {
    id: "rushduard",
    name: "Rushduard",
    price: 45,
    color: "Black/White",
    category: "Accessories",
    image: IMG_RUSHDUARD,
  },
  {
    id: "leggins",
    name: "Yoga leggins",
    price: 35,
    color: "Black/White",
    category: "Bottoms",
    image: IMG_LEGGINS,
  },
];

const CATEGORIES = ["All", "Costumes", "Tops", "Bottoms", "Accessories"];

//  Layout constants per breakpoint
const LAYOUT = {
  mobile: { ROW_H: 320, GAP: 16, COLS: 1, padding: "60px 20px" },
  tablet: { ROW_H: 360, GAP: 20, COLS: 2, padding: "80px 40px" },
  desktop: { ROW_H: 400, GAP: 24, COLS: 4, padding: "100px 80px" },
};

//  Small card
function SmallCard({
  product,
  imageHeight,
  fontSize,
}: {
  product: Product;
  imageHeight: number;
  fontSize: number;
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
    >
      <div
        style={{
          width: "100%",
          height: imageHeight,
          overflow: "hidden",
          backgroundColor: C.filterBg,
          borderRadius: 4,
          flexShrink: 0,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div style={{ paddingTop: 10 }}>
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <span
            style={{
              fontFamily: FONT.inter,
              fontSize,
              color: C.black,
              fontWeight: 400,
            }}
          >
            {product.name}
          </span>
          <span
            style={{
              fontFamily: FONT.inter,
              fontSize,
              color: C.muted,
              fontWeight: 400,
              flexShrink: 0,
            }}
          >
            {product.price}$
          </span>
        </div>
        <p
          style={{
            fontFamily: FONT.inter,
            fontSize,
            color: C.muted,
            fontWeight: 400,
            margin: "4px 0 0",
          }}
        >
          {product.color}
        </p>
      </div>
    </div>
  );
}

//  Featured card
function FeaturedCard({
  product,
  height,
  fontSize,
}: {
  product: Product;
  height: number;
  fontSize: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        borderRadius: 4,
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* NEW badge */}
      <span
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontFamily: FONT.inter,
          fontSize,
          fontWeight: 400,
          color: C.dark,
        }}
      >
        NEW
      </span>
      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "48px 16px 16px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <span
            style={{
              fontFamily: FONT.inter,
              fontSize,
              color: C.white,
              fontWeight: 400,
            }}
          >
            {product.name}
          </span>
          <span
            style={{
              fontFamily: FONT.inter,
              fontSize,
              color: C.white,
              fontWeight: 400,
              flexShrink: 0,
            }}
          >
            {product.price}$
          </span>
        </div>
        <p
          style={{
            fontFamily: FONT.inter,
            fontSize,
            color: "rgba(255,255,255,0.8)",
            fontWeight: 400,
            margin: "4px 0 0",
          }}
        >
          {product.color}
        </p>
      </div>
    </div>
  );
}

//  Main component
export default function YogaEssentialsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const bp = useBreakpoint();

  const { ROW_H, GAP, padding } = LAYOUT[bp];

  // Tamanho de fonte adaptado ao breakpoint
  const fontSize = bp === "mobile" ? 14 : bp === "tablet" ? 16 : 20;

  // Altura da imagem nos SmallCards
  const imageHeight = ROW_H - (bp === "mobile" ? 60 : 70);

  const filtered =
    activeCategory === "All"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.featured) ?? null;
  const regular = filtered.filter((p) => !p.featured);

  //Desktop: layout assimétrico
  const topLeft = regular.slice(0, 2);
  const midLeft = regular.slice(2, 4);
  const bottom = regular.slice(4);

  //   Tablet: 2 colunas, featured ocupa as 2 colunas
  // Ordena: pequenos antes do featured, depois o restante
  const tabletItems = regular; // featured renderizado separado no topo

  return (
    <section style={{ width: "100%", backgroundColor: C.white, padding }}>
      <div style={{ maxWidth: 1352, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: bp === "mobile" ? "100%" : 814,
            margin: "0 auto 32px",
          }}
        >
          <h2
            style={{
              fontFamily: FONT.syn,
              fontWeight: 700,
              fontSize: bp === "mobile" ? 22 : bp === "tablet" ? 28 : 36,
              color: C.black,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Yoga essentials
          </h2>
          <p
            style={{
              fontFamily: FONT.inter,
              fontWeight: 400,
              fontSize: bp === "mobile" ? 14 : 18,
              lineHeight: "28px",
              color: C.muted,
              marginTop: 16,
            }}
          >
            santosha is a modern yoga studio where everyone can find their
            perfect practice. We&apos;ve created a welcoming space with
            professional instructors to help you achieve harmony, strength, and
            flexibility. Our classes suit all levels, from beginners to advanced
            practitioners.
          </p>
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", // quebra linha no mobile se necessário
            gap: bp === "mobile" ? 8 : 12,
            marginBottom: bp === "mobile" ? 32 : 48,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: bp === "mobile" ? "8px 16px" : "10px 24px",
                borderRadius: 9999,
                fontSize: bp === "mobile" ? 13 : 16,
                fontFamily: FONT.qs,
                fontWeight: 400,
                border: "none",
                cursor: "pointer",
                backgroundColor: activeCategory === cat ? C.accent : C.filterBg,
                color: activeCategory === cat ? C.white : C.desc,
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MOBILE: 1 coluna, todos em sequência  */}
        {bp === "mobile" && (
          <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
            {/* Featured primeiro no mobile (destaque) */}
            {featured && (
              <FeaturedCard
                product={featured}
                height={ROW_H * 1.4} // um pouco mais alto no mobile para dar impacto
                fontSize={fontSize}
              />
            )}
            {regular.map((p) => (
              <SmallCard
                key={p.id}
                product={p}
                imageHeight={imageHeight}
                fontSize={fontSize}
              />
            ))}
          </div>
        )}

        {/*   TABLET: 2 colunas, featured ocupa as 2   */}
        {bp === "tablet" && (
          <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
            {/* Featured full-width */}
            {featured && (
              <FeaturedCard
                product={featured}
                height={ROW_H * 1.2}
                fontSize={fontSize}
              />
            )}
            {/* Restante em 2 colunas */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: GAP,
              }}
            >
              {tabletItems.map((p) => (
                <SmallCard
                  key={p.id}
                  product={p}
                  imageHeight={imageHeight}
                  fontSize={fontSize}
                />
              ))}
            </div>
          </div>
        )}

        {/* DESKTOP: layout assimétrico original do Figma   */}
        {bp === "desktop" && (
          <>
            {featured ? (
              <>
                {/* Top section: 4 cols, 2 rows + featured span */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: `${ROW_H}px ${ROW_H}px`,
                    columnGap: GAP,
                    rowGap: GAP,
                    marginBottom: GAP,
                  }}
                >
                  {topLeft[0] && (
                    <div style={{ gridColumn: 1, gridRow: 1 }}>
                      <SmallCard
                        product={topLeft[0]}
                        imageHeight={imageHeight}
                        fontSize={fontSize}
                      />
                    </div>
                  )}
                  {topLeft[1] && (
                    <div style={{ gridColumn: 2, gridRow: 1 }}>
                      <SmallCard
                        product={topLeft[1]}
                        imageHeight={imageHeight}
                        fontSize={fontSize}
                      />
                    </div>
                  )}

                  {/* Featured: cols 3–4, rows 1–2 */}
                  <div style={{ gridColumn: "3 / 5", gridRow: "1 / 3" }}>
                    <FeaturedCard
                      product={featured}
                      height={ROW_H * 2 + GAP}
                      fontSize={fontSize}
                    />
                  </div>

                  {midLeft[0] && (
                    <div style={{ gridColumn: 1, gridRow: 2 }}>
                      <SmallCard
                        product={midLeft[0]}
                        imageHeight={imageHeight}
                        fontSize={fontSize}
                      />
                    </div>
                  )}
                  {midLeft[1] && (
                    <div style={{ gridColumn: 2, gridRow: 2 }}>
                      <SmallCard
                        product={midLeft[1]}
                        imageHeight={imageHeight}
                        fontSize={fontSize}
                      />
                    </div>
                  )}
                </div>

                {/* Bottom row: 4 cols */}
                {bottom.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: GAP,
                    }}
                  >
                    {bottom.map((p) => (
                      <SmallCard
                        key={p.id}
                        product={p}
                        imageHeight={imageHeight}
                        fontSize={fontSize}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Sem featured -> grid simples 4 colunas
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: GAP,
                }}
              >
                {regular.map((p) => (
                  <SmallCard
                    key={p.id}
                    product={p}
                    imageHeight={imageHeight}
                    fontSize={fontSize}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
