New-Item -ItemType Directory -Force -Path public\frames
New-Item -ItemType Directory -Force -Path public\video

Write-Host "Downloading images..."
for ($i=1; $i -le 120; $i++) {
  $num = "{0:D4}" -f $i
  curl.exe -s -k "https://fakeimg.pl/1920x1080/000000/F5F5F7/?text=$num&font=inter" -o "public\frames\frame_$num.png"
}

Write-Host "Downloading video..."
curl.exe -s -k "https://www.w3schools.com/html/mov_bbb.mp4" -o "public\video\veo.mp4"

Write-Host "Done"
