# Setup Guide for Jekyll Site

## Prerequisites Installation (Windows)

### Step 1: Install Ruby

1. Download RubyInstaller for Windows:
   - Go to: https://rubyinstaller.org/downloads/
   - Download **Ruby+Devkit 3.1.x** (recommended) or latest version
   - Choose the x64 version

2. Run the installer:
   - Check "Add Ruby executables to your PATH"
   - Check "Associate .rb and .rbw files with this Ruby installation"
   - Complete the installation

3. After installation, a new terminal window will open:
   - Press Enter when prompted to run `ridk install`
   - This installs the MSYS2 development toolchain

4. Verify installation:
   ```powershell
   ruby --version
   ```

### Step 2: Install Bundler

```powershell
gem install bundler
```

Verify:
```powershell
bundle --version
```

### Step 3: Install Jekyll Dependencies

Navigate to your project directory and run:

```powershell
bundle install
```

This will install all dependencies from `Gemfile` including:
- github-pages
- jekyll
- jekyll-paginate
- jekyll-feed
- and all other required gems

### Step 4: Build and Run the Site

```powershell
bundle exec jekyll serve
```

Or with live reload:

```powershell
bundle exec jekyll serve --livereload
```

The site will be available at: **http://localhost:4000**

## Alternative: Using Docker (if Ruby installation fails)

If you have Docker installed:

```powershell
docker run --rm -it -v ${PWD}:/srv/jekyll -p 4000:4000 jekyll/jekyll:latest jekyll serve
```

## Troubleshooting

### If `bundle install` fails:
- Make sure you have internet connection
- Try: `gem install bundler` again
- Check Ruby version: `ruby --version` (should be 2.7+)

### If Jekyll serve fails:
- Check if port 4000 is available
- Try: `bundle exec jekyll serve --port 4001`
- Clear Jekyll cache: `bundle exec jekyll clean`

### Common Issues:
- **SSL Certificate errors**: Update certificates: `gem update --system`
- **Permission errors**: Run PowerShell as Administrator
- **Path issues**: Restart terminal after Ruby installation

## Quick Commands Reference

```powershell
# Install dependencies
bundle install

# Build site
bundle exec jekyll build

# Serve site locally
bundle exec jekyll serve

# Serve with live reload
bundle exec jekyll serve --livereload

# Clean build files
bundle exec jekyll clean
```

