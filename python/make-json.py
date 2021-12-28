file = 'carols-source.txt'

output = []

with open(file, 'r', encoding="utf8") as file:
    data = file.readlines()
    
songCount = 0

class Song():
    def __init__(self, title):
        self.title = title
        self.lyrics = []

    def add_song(self):
        songData = {
            "name": self.title,
            "lyrics": self.lyrics
        }

        output.append(songData)

currentSong = None

for i, line in enumerate(data):
    if f'{songCount + 1}.' in line:
        
        if currentSong:
            currentSong.add_song()

        title = line.split('. ')[1].strip()
        songCount += 1

        currentSong = Song(title)
        continue
    
    if currentSong:
        currentSong.lyrics.append(line.strip())

    if i == len(data):
        currentSong.add_song()


# Add page numbers
for i, song in enumerate(output):
    page = i + 2
    print(i, page)
    song["page"] = page

print(len(output))
print(output[-1])

import json
with open('songs.json','w') as file:
    data = json.dump(output,file,indent=2)