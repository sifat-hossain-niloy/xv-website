"use client";

import Image from "next/image";

// Single-colour logos (white on transparent), generated from the originals in /public/partners
const logos = [
  { name: "University of Arizona", src: "/partners/mono/university-of-arizona.png", width: 461, height: 422 },
  { name: "Rutgers University", src: "/partners/mono/rutgers.png", width: 260, height: 302 },
  { name: "UC San Diego Cricket", src: "/partners/mono/ucsd-cricket.png", width: 317, height: 329 },
  { name: "MSTT", src: "/partners/mono/mstt.png", width: 364, height: 92, displayHeight: 36 },
  { name: "UC San Diego Men's Rowing", src: "/partners/mono/ucsd-rowing.png", width: 249, height: 298 },
  { name: "UCSD Sitaare", src: "/partners/mono/ucsd-sitaare.png", width: 336, height: 205 },
  { name: "Friends of Dialysis UCSD", src: "/partners/mono/friends-of-dialysis-ucsd.png", width: 385, height: 349 },
  { name: "UMich PSA", src: "/partners/mono/umich-psa.png", width: 317, height: 305 },
  { name: "UCR SAF", src: "/partners/mono/ucr-saf.png", width: 322, height: 322 },
  { name: "CURIS Public Health Advocacy", src: "/partners/mono/curis.png", width: 437, height: 437 },
  { name: "Rahma Center", src: "/partners/mono/rahma-center.png", width: 454, height: 394 },
];

const LOGO_HEIGHT = 64;

export default function ClientMarquee() {
  return (
    <section style={{ padding: "5rem 0", position: "relative" }}>
      <p style={{
        textAlign: "center",
        color: "rgba(255,255,255,0.4)",
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "3rem",
        padding: "0 2rem"
      }}>
        Trusted by our clients
      </p>

      <div className="marquee">
        {/* The list is rendered twice so the loop is seamless */}
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => {
            const h = logo.displayHeight ?? LOGO_HEIGHT;
            return (
              <Image
                key={index}
                src={logo.src}
                alt={index < logos.length ? logo.name : ""}
                aria-hidden={index >= logos.length}
                width={Math.round((logo.width * h) / logo.height)}
                height={h}
                className="marquee-logo"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
