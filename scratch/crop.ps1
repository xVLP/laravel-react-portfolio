Add-Type -Assembly System.Drawing
$srcPath = "c:\Users\vlp\.gemini\antigravity-ide\scratch\laravel-react-portfolio\public\images\profile.jpg"
$destPath = "c:\Users\vlp\.gemini\antigravity-ide\scratch\laravel-react-portfolio\public\images\profile-avatar.jpg"

$src = [System.Drawing.Image]::FromFile($srcPath)
$cropSize = [Math]::Min($src.Width, [int]($src.Height * 0.40))
$cropX = [int](($src.Width - $cropSize) / 2)
$cropY = [int]($src.Height * 0.04)

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)
$bmp = New-Object System.Drawing.Bitmap($cropSize, $cropSize)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropSize, $cropSize)
$g.DrawImage($src, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Output "Successfully created profile-avatar.jpg"
