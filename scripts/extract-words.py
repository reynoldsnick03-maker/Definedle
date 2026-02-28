import re

# Relative paths from scripts folder
easy_path = '../lib/words-daily.ts'
hard_path = '../lib/words-hard.ts'

# Read easy words
with open(easy_path, 'r') as f:
    easy_content = f.read()
    
# Read hard words  
with open(hard_path, 'r') as f:
    hard_content = f.read()

# Extract unique word values (only from word: "xxx" lines, not matchTerms)
easy_matches = re.findall(r'^\s*word: "([^"]+)"', easy_content, re.MULTILINE)
hard_matches = re.findall(r'^\s*word: "([^"]+)"', hard_content, re.MULTILINE)

easy_words = list(dict.fromkeys(easy_matches))  # Dedupe preserving order
hard_words = list(dict.fromkeys(hard_matches))

print("=== EASY WORDS (" + str(len(easy_words)) + " unique) ===")
print(", ".join(easy_words))
print()
print("=== HARD WORDS (" + str(len(hard_words)) + " unique) ===")
print(", ".join(hard_words))
