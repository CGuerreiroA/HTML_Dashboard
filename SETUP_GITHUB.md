# GitHub Setup Guide for EMBRACE Dashboard

## Step 1: Configure Git (After Installation)

Open a new terminal in VS Code and run:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

## Step 2: Initialize Git Repository

```bash
# Navigate to your project folder
cd "c:\Users\ClovisGuerreiro\OneDrive - ADRA Deutschland e.V\Dokumente\OSCN Project\02_Project Development\Project folders ( first year)\APAC Unit\Embrace\PowerBI_Environmental_Dashboard\HTML_Dashboard"

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: EMBRACE Environmental Dashboard v1.0.0"
```

## Step 3: Create GitHub Repository

### Option A: Using VS Code (Recommended)

1. **Install GitHub Extension** (if not already installed):
   - Press `Ctrl+Shift+X` to open Extensions
   - Search for "GitHub Pull Requests and Issues"
   - Click Install

2. **Sign in to GitHub**:
   - Press `Ctrl+Shift+P`
   - Type "GitHub: Sign In"
   - Follow the authentication prompts

3. **Publish to GitHub**:
   - Click the Source Control icon (left sidebar)
   - Click "Publish to GitHub"
   - Choose "Public" or "Private" repository
   - Name it: `embrace-environmental-dashboard`
   - Select all files to publish

### Option B: Using GitHub Website

1. Go to https://github.com/new
2. Repository name: `embrace-environmental-dashboard`
3. Description: "Interactive HTML dashboard for tracking GHG emissions and sustainability metrics"
4. Choose Public or Private
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

7. Then in VS Code terminal:
```bash
# Add remote repository (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/embrace-environmental-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Verify Upload

1. Go to your GitHub repository URL
2. Verify all files are present
3. Check that README.md displays properly

## Step 5: Future Updates (Using VS Code)

### Making Changes:

1. Edit your files in VS Code
2. Click Source Control icon (Ctrl+Shift+G)
3. Review changes
4. Type a commit message
5. Click the ✓ checkmark to commit
6. Click "..." → "Push" to upload to GitHub

### Quick Commands:

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Troubleshooting

### Git not recognized after installation
- **Solution**: Restart VS Code completely
- Or restart your computer

### Authentication issues
- **Solution**: Use GitHub Personal Access Token
  1. Go to GitHub → Settings → Developer settings → Personal access tokens
  2. Generate new token (classic)
  3. Select scopes: `repo`, `workflow`
  4. Copy token and use as password when pushing

### Push rejected
- **Solution**: Pull first, then push
```bash
git pull origin main --rebase
git push origin main
```

## VS Code Git Features

### Source Control Panel (Ctrl+Shift+G):
- **Changes**: Files you've modified
- **Staged Changes**: Files ready to commit
- **Commits**: History of changes

### Useful VS Code Commands (Ctrl+Shift+P):
- `Git: Clone` - Clone a repository
- `Git: Commit` - Commit changes
- `Git: Push` - Push to remote
- `Git: Pull` - Pull from remote
- `Git: Create Branch` - Create new branch
- `GitHub: Publish to GitHub` - Quick publish

## Best Practices

1. **Commit often** with clear messages
2. **Pull before push** to avoid conflicts
3. **Use branches** for new features
4. **Write descriptive commit messages**:
   - ✅ "Add export to PDF feature"
   - ❌ "Update files"

## Next Steps

After setup:
1. Add repository description on GitHub
2. Add topics/tags for discoverability
3. Enable GitHub Pages (if you want to host the dashboard)
4. Set up branch protection rules
5. Invite collaborators if needed

---

**Need Help?** Check the [GitHub Docs](https://docs.github.com/en/get-started)
