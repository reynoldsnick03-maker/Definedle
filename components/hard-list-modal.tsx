"use client"

import { useEffect, useRef, useState } from "react"
import { hardWordsAll, pdfSourcedWords } from "@/lib/words-hard-all"

interface HardListModalProps {
  onClose: () => void
}

export function HardListModal({ onClose }: HardListModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState<"all" | "original" | "pdf">("all")

  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname)
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  const sorted = [...hardWordsAll].sort((a, b) => a.word.localeCompare(b.word))

  const filtered = sorted.filter(({ word }) => {
    if (filter === "pdf") return pdfSourcedWords.has(word)
    if (filter === "original") return !pdfSourcedWords.has(word)
    return true
  })

  const totalOriginal = sorted.filter(({ word }) => !pdfSourcedWords.has(word)).length
  const totalPdf = sorted.filter(({ word }) => pdfSourcedWords.has(word)).length

  const tabStyle = (active: boolean) => ({
    padding: "0.3rem 0.75rem",
    borderRadius: "0.4rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.78rem",
    fontWeight: active ? 700 : 400,
    background: active ? "var(--foreground, #000)" : "transparent",
    color: active ? "var(--background, #fff)" : "inherit",
    opacity: active ? 1 : 0.55,
    transition: "all 0.15s",
  })

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "var(--background, #fff)",
          color: "var(--foreground, #000)",
          borderRadius: "0.75rem",
          width: "100%",
          maxWidth: "680px",
          maxHeight: "82vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "1rem 1.25rem 0.75rem",
          borderBottom: "1px solid var(--border, #e5e7eb)",
          flexShrink: 0,
          gap: "1rem",
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
              Hard Word List
            </h2>
            <p style={{ margin: "0.2rem 0 0.6rem", fontSize: "0.8rem", opacity: 0.6 }}>
              {sorted.length} words total · {totalOriginal} original · {totalPdf} from GRE list
            </p>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: "0.3rem" }}>
              <button style={tabStyle(filter === "all")} onClick={() => setFilter("all")}>
                All ({sorted.length})
              </button>
              <button style={tabStyle(filter === "original")} onClick={() => setFilter("original")}>
                Original ({totalOriginal})
              </button>
              <button style={tabStyle(filter === "pdf")} onClick={() => setFilter("pdf")}>
                GRE list ({totalPdf})
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.4rem",
              lineHeight: 1,
              padding: "0.25rem 0.4rem",
              borderRadius: "0.4rem",
              opacity: 0.6,
              color: "inherit",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Legend */}
        {filter === "all" && (
          <div style={{
            padding: "0.5rem 1.25rem",
            borderBottom: "1px solid var(--border, #e5e7eb)",
            display: "flex",
            gap: "1.25rem",
            fontSize: "0.72rem",
            opacity: 0.65,
            flexShrink: 0,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "var(--foreground, #000)", opacity: 0.85,
                display: "inline-block",
              }} />
              Original
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#6366f1",
                display: "inline-block",
              }} />
              GRE list (Manhattan Prep)
            </span>
          </div>
        )}

        {/* Word grid */}
        <div style={{
          overflowY: "auto",
          padding: "1rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "0.4rem 0.75rem",
        }}>
          {filtered.map(({ word, partOfSpeech }) => {
            const isPdf = pdfSourcedWords.has(word)
            return (
              <div key={word} style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                <span style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: isPdf && filter !== "original" ? "#6366f1" : "inherit",
                }}>
                  {word}
                </span>
                <span style={{ fontSize: "0.7rem", opacity: 0.5, fontStyle: "italic" }}>
                  {partOfSpeech}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
