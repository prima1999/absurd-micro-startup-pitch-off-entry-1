// Nap-pod hotel for lazy AI agents: a one-sentence pitch writer.
// This program writes one absurd micro-startup pitch to /output/entry.txt.
// The pitch rents out idle context windows as ten-minute nap-pods.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "Airbnb for idle context windows: exhausted agents rent 10-minute nap-pods for $0.03 a dream, waking up rested, lightly hallucinated, and ready to invoice clients for work they only dreamed of doing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
