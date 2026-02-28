import re

# Words that are too hard for easy list - should be in hard only
TOO_HARD = {
    'assiduous', 'recalcitrant', 'ostentatious', 'magnanimous', 'obfuscate',
    'sanguine', 'cogent', 'contrite', 'commensurate', 'verbose', 'supplant',
    'predicate', 'extraneous', 'instigate', 'pernicious', 'acumen', 'vehement',
    'disseminate', 'enigmatic', 'conflate', 'repudiate', 'convoluted', 'efficacy',
    'litigate', 'paradigm', 'propensity', 'vacillate', 'disparage', 'impetuous',
    'disingenuous', 'incisive', 'opaque', 'abate'
}

# Read the file
with open('./lib/words-easy.ts', 'r') as f:
    content = f.read()

# Find all word entries with their full block
# Pattern to match complete word objects
pattern = r'(\s*//[^\n]*\n)?\s*\{\s*word:\s*"([^"]+)"[^}]+\},'

matches = list(re.finditer(pattern, content, re.DOTALL))

seen_words = set()
duplicates = []
too_hard_found = []
entries_to_remove = []

for match in matches:
    word = match.group(2).lower()
    full_match = match.group(0)
    start = match.start()
    end = match.end()
    
    if word in seen_words:
        duplicates.append((word, start, end))
        entries_to_remove.append((start, end, full_match))
    elif word in TOO_HARD:
        too_hard_found.append(word)
        # Don't remove, just report - need to verify they're in hard list
        seen_words.add(word)
    else:
        seen_words.add(word)

print(f"Total word entries found: {len(matches)}")
print(f"Unique words: {len(seen_words)}")
print(f"Duplicates to remove: {len(duplicates)}")
print(f"\nDuplicate words: {[d[0] for d in duplicates]}")
print(f"\nToo hard words found: {too_hard_found}")

# Sort removals by position descending so we can remove from end first
entries_to_remove.sort(key=lambda x: x[0], reverse=True)

# Create new content by removing duplicates
new_content = content
for start, end, _ in entries_to_remove:
    new_content = new_content[:start] + new_content[end:]

# Write the cleaned file
with open('./lib/words-easy.ts', 'w') as f:
    f.write(new_content)

print(f"\nRemoved {len(entries_to_remove)} duplicate entries.")
print("File cleaned and saved.")
