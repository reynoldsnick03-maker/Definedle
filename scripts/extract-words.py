import re

# Read easy words
with open('/vercel/share/v0-project/lib/words-daily.ts', 'r') as f:
    easy_content = f.read()
    
# Read hard words  
with open('/vercel/share/v0-project/lib/words-hard.ts', 'r') as f:
    hard_content = f.read()

# Extract word values
easy_words = re.findall(r'word: "([^"]+)"', easy_content)
hard_words = re.findall(r'word: "([^"]+)"', hard_content)

print("=== EASY WORDS (" + str(len(easy_words)) + " total) ===")
print(", ".join(easy_words))
print()
print("=== HARD WORDS (" + str(len(hard_words)) + " total) ===")
print(", ".join(hard_words))
