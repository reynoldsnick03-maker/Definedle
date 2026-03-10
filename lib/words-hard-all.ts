import { hardWords } from "./words-hard"
import { hardWordsPdf } from "./words-hard-pdf"

// Combined hard word list: 256 original + 219 PDF-sourced = 475 total
// The pdfSourced set is used by the word list modal to flag PDF-sourced words
export const hardWordsAll = [...hardWords, ...hardWordsPdf]

export const pdfSourcedWords = new Set(hardWordsPdf.map(w => w.word))
