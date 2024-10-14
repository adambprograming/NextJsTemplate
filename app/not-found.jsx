// Styles

// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets
import Btn from "@/components/btn/btn.component";

export default function NotFound() {
  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "var(--color-background)",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: 0 }}>404: Stránka nenalezena</h1>
      <p style={{ margin: 0 }}>
        Vámi požadovaná stránka nebyla nalezena. Možná není dostupná nebo byla odstraněna.
      </p>
      <Btn
        href="/"
        fontFamily="var(--font-secondary)"
        fontSize="var(--fontsize-h6)"
        borderRadius="25px"
        bgColor="var(--color-secondary)"
        opacity={0.2}
        paddingOfBtn="8px 16px"
      >
        Zpět na domovskou stránku
      </Btn>
    </div>
  );
}
