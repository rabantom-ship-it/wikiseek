param([string]$Url)
if (-not $Url) { $Url = Read-Host "Pega la URL publica (ej. https://usuario.github.io/wikiseek)" }
$Url = $Url.TrimEnd('/')
$utf8 = New-Object System.Text.UTF8Encoding($false)
$files = Get-ChildItem -Path $PSScriptRoot -Recurse -File -Include *.html,*.xml,*.txt,*.md,*.cff
foreach ($f in $files) {
  $c = [IO.File]::ReadAllText($f.FullName, [Text.Encoding]::UTF8)
  if ($c.Contains('https://rabantom-ship-it.github.io/wikiseek')) {
    $c = $c.Replace('https://rabantom-ship-it.github.io/wikiseek', $Url)
    [IO.File]::WriteAllText($f.FullName, $c, $utf8)
    Write-Host "Actualizado: $($f.FullName)"
  }
}
Write-Host "Listo. URL base: $Url"
