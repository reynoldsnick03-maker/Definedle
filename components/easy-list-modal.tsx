"use client"

import { useEffect, useRef } from "react"
import { easyWords } from "@/lib/words-easy"

interface EasyListModalProps {
  onClose: () => void
}

export function EasyListModal({ onClose }: EasyListModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Clean the URL and close on Escape
  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname)
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  const sorted = [...easyWords].sort((a, b) => a.word.localeCompare(b.word))

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
          maxWidth: "640px",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.25rem",
          borderBottom: "1px solid var(--border, #e5e7eb)",
          flexShrink: 0,
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
              Easy Word List
            </h2>
            <p style={{ margin: "0.2rem 0 0", fontSize: "0.8rem", opacity: 0.6 }}>
              {sorted.length} words · sorted alphabetically
            </p>
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
            }}
          >
            ✕
          </button>
        </div>

        {/* Word grid */}
        <div style={{
          overflowY: "auto",
          padding: "1rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          gap: "0.4rem 0.75rem",
        }}>
          {sorted.map(({ word, partOfSpeech }) => (
            <div key={word} style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>{word}</span>
              <span style={{ fontSize: "0.7rem", opacity: 0.5, fontStyle: "italic" }}>{partOfSpeech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
