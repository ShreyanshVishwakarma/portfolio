import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const interRegular = readFile(join(process.cwd(), "assets", "inter-400.woff"));
const interSemiBold = readFile(join(process.cwd(), "assets", "inter-600.woff"));
const interBold = readFile(join(process.cwd(), "assets", "inter-800.woff"));
const iconData = readFile(join(process.cwd(), "app", "icon.png"));

export const alt = "Shreyansh Vishwakarma — Full-Stack Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #131316 55%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          padding: "0 96px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            display: "flex",
            top: "-140px",
            right: "-120px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.20), rgba(236,72,153,0.10), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            display: "flex",
            bottom: "-160px",
            left: "-120px",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.16), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "72px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #ec4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 24px 80px rgba(139, 92, 246, 0.45)",
              padding: "8px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${(await iconData).toString("base64")}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                display: "flex",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "640px",
            }}
          >
            <div
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: "#22d3ee",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "20px",
                display: "flex",
              }}
            >
              Full-Stack Software Engineer
            </div>
            <div
              style={{
                fontSize: "82px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ display: "flex" }}>Shreyansh</span>
              <span style={{ display: "flex" }}>Vishwakarma</span>
            </div>
            <div
              style={{
                fontSize: "30px",
                color: "#a1a1aa",
                lineHeight: 1.5,
                marginBottom: "40px",
                display: "flex",
              }}
            >
              High-performance backend systems and scalable, real-time web
              applications.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                borderRadius: "100px",
                padding: "14px 28px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#ffffff",
                  display: "flex",
                }}
              >
                Explore my work
              </span>
              <span
                style={{
                  fontSize: "28px",
                  color: "#22d3ee",
                  marginLeft: "14px",
                  display: "flex",
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: await interSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Inter",
          data: await interBold,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}