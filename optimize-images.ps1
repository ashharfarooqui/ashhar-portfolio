# Image Optimization Script
# This script replaces large local image files with references to external URLs

# Create a list of replacements with their corresponding Unsplash URLs
$replacements = @{
    "./images/ml-bg.jpg" = "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    "./images/skills-banner.jpg" = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    "./images/projects/data-science-bg.jpg" = "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    "./images/prompt/ai-concept.jpg" = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    "./images/prompt/tech-separator.jpg" = "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
}

# Function to replace image references in HTML files
function Replace-ImageReferences {
    param (
        [string]$filePath,
        [hashtable]$replacements
    )
    
    $content = Get-Content -Path $filePath -Raw
    
    foreach ($key in $replacements.Keys) {
        $localPath = $key.Replace("./", "")
        $content = $content -replace [regex]::Escape($localPath), $replacements[$key]
    }
    
    Set-Content -Path $filePath -Value $content
    Write-Host "Updated references in $filePath"
}

# Find all HTML files
$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse

# Process each HTML file
foreach ($file in $htmlFiles) {
    Replace-ImageReferences -filePath $file.FullName -replacements $replacements
}

Write-Host "Image optimization complete. Large local images have been replaced with external URLs."

# Now we can safely remove the large image files to save space
# Uncomment the following lines when you're ready to delete the files:
# foreach ($imagePath in $replacements.Keys) {
#     if (Test-Path $imagePath) {
#         Remove-Item -Path $imagePath -Force
#         Write-Host "Removed $imagePath"
#     }
# } 