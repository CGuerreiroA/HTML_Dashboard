# EMBRACE Environmental Impact Dashboard

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌍 Overview

A fully interactive HTML dashboard for tracking and visualizing greenhouse gas (GHG) emissions and sustainability metrics for the EMBRACE Project. Features modern UI/UX, real-time animations, and comprehensive data visualizations.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/embrace-dashboard.git

# Navigate to the dashboard folder
cd embrace-dashboard/HTML_Dashboard

# Open in browser (option 1)
# Simply double-click index.html

# Or start a local server (option 2 - recommended)
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## 📸 Screenshots

> Add screenshots of your dashboard here to showcase the interface

## ✨ Features Implemented

### 1. **Visual Enhancements**
- ✅ Gradient color schemes (green for success, red for alerts)
- ✅ Animated progress bars and counters
- ✅ Conditional formatting with color-coded impact levels
- ✅ Icons throughout for quick visual scanning
- ✅ Smooth hover effects and transitions

### 2. **Storytelling Elements**
- ✅ Impact highlights section at the top
- ✅ Achievement badges (unlocked/locked gamification)
- ✅ Story card for monthly milestones
- ✅ Benchmark comparisons with visual bars
- ✅ Sustainability score with circular gauge

### 3. **Interactive Charts**
- ✅ Donut chart for emissions by scope (Chart.js)
- ✅ Line chart with trend, target, and forecast
- ✅ Gradient activity bars with impact levels
- ✅ Responsive and animated visualizations

### 4. **Engagement Features**
- ✅ Data-driven insights panel
- ✅ Recommended actions with ROI metrics
- ✅ Click-to-plan action buttons
- ✅ Achievement detail modals
- ✅ Animated number counters on scroll

### 5. **Responsive Design**
- ✅ Mobile-friendly layout
- ✅ Tablet optimization
- ✅ Desktop full-width experience
- ✅ Adaptive grid systems

## 📁 File Structure

```
HTML_Dashboard/
├── index.html          # Main dashboard HTML structure
├── styles.css          # Comprehensive styling and animations
├── script.js           # Interactive features and Chart.js configuration
├── README.md           # Project documentation (this file)
├── LICENSE             # MIT License
├── CHANGELOG.md        # Version history and release notes
├── CONTRIBUTING.md     # Contribution guidelines
└── .gitignore          # Git ignore rules
```

## 🚀 How to Use

### Option 1: Direct Open
1. Navigate to the `HTML_Dashboard` folder
2. Double-click `index.html`
3. Dashboard opens in your default browser

### Option 2: Local Server (Recommended)
1. Open terminal in the `HTML_Dashboard` folder
2. Run a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```
3. Open browser to `http://localhost:8000`

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🎨 Design Highlights

### Color Palette
- **Success/Positive**: Green (#27ae60, #2ecc71)
- **Alert/High Impact**: Red (#e74c3c, #c0392b)
- **Warning/Medium**: Orange/Yellow (#f39c12, #f1c40f)
- **Neutral/Info**: Blue (#3498db, #2980b9)
- **Scope 1**: Red (#e74c3c)
- **Scope 2**: Orange (#f39c12)
- **Scope 3**: Blue (#3498db)

### Typography
- **Font Family**: Segoe UI (fallback: system fonts)
- **Page Title**: 2.5rem, Bold
- **Section Headers**: 1.5rem, Semibold
- **KPI Numbers**: 2.5rem, Bold
- **Body Text**: 0.9-1rem, Regular

### Layout
- **Two-column grid** for main content
- **Full-width sections** for highlights and insights
- **Card-based design** for modularity
- **20px spacing** between major sections

## 🎯 Interactive Features

### Animations
- **Number counters**: Animate from 0 to final value on scroll
- **Progress bars**: Smooth fill animation on load
- **Fade-in effects**: Staggered animations for cards
- **Hover effects**: Scale, translate, and shadow changes

### User Interactions
- **Click achievements**: View details in modal
- **Click action buttons**: Plan actions (demo alert)
- **Hover activities**: Highlight and translate
- **Scroll animations**: Trigger on viewport entry

### Keyboard Shortcuts
- **Ctrl/Cmd + P**: Print dashboard
- **Ctrl/Cmd + E**: Export data to CSV
- **ESC**: Close modal

## 📊 Data Visualization

### Charts Used
1. **Donut Chart** (Scope breakdown)
   - Interactive tooltips
   - Hover offset effect
   - 70% cutout for modern look

2. **Line Chart** (Trend & Forecast)
   - Multiple datasets (actual, target, forecast)
   - Dashed lines for projections
   - Filled areas for visual impact
   - Interactive legend

### Chart.js Configuration
- Responsive: Auto-adjusts to container
- Animated: Smooth transitions (1.5-2s)
- Interactive: Hover tooltips with details
- Accessible: Color-blind friendly palette

## 🔧 Customization Guide

### Update Data
Edit `script.js` to change the data:

```javascript
const emissionsData = {
    scopes: {
        labels: ['Scope 3', 'Scope 1', 'Scope 2'],
        values: [164.20, 12.50, 5.50],  // Update these
        colors: ['#3498db', '#e74c3c', '#f39c12']
    },
    trend: {
        labels: ['2025-1', '2024-9', ...],  // Update dates
        values: [162, 32, 13, ...],         // Update values
        target: 250,                         // Update target
        forecast: [162, 155, 148, ...]      // Update forecast
    }
};
```

### Change Colors
Edit `styles.css` color variables:

```css
/* Find and replace colors */
#27ae60  /* Success green */
#e74c3c  /* Alert red */
#3498db  /* Info blue */
#f39c12  /* Warning orange */
```

### Add New Sections
1. Add HTML in `index.html`
2. Style in `styles.css`
3. Add interactivity in `script.js` if needed

### Modify Layout
Edit grid configurations in `styles.css`:

```css
.dashboard-main {
    grid-template-columns: 1fr 1fr;  /* Two columns */
    gap: 20px;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px (two-column layout)
- **Tablet**: 768px - 1200px (single column)
- **Mobile**: < 768px (stacked, simplified)

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

### External Libraries (CDN)
- **Chart.js** (v3+): Data visualization
  - `https://cdn.jsdelivr.net/npm/chart.js`
- **Font Awesome** (v6.4): Icons
  - `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

### No Build Process Required
- Pure HTML, CSS, JavaScript
- No npm, webpack, or build tools needed
- Works offline after first load (CDN cached)

## 🎓 Key Improvements Over Basic Dashboard

### Before (Basic Dashboard)
- ❌ Monotone colors
- ❌ Static numbers
- ❌ No context or comparisons
- ❌ Limited interactivity
- ❌ No storytelling

### After (This Dashboard)
- ✅ Strategic color psychology
- ✅ Animated, contextual metrics
- ✅ Benchmarks and targets
- ✅ Rich interactions and animations
- ✅ Story-driven insights

## 🔍 Performance Optimization

- **Lazy loading**: Charts render on viewport entry
- **CSS animations**: Hardware-accelerated transforms
- **Debounced events**: Optimized scroll/resize handlers
- **Minimal dependencies**: Only 2 external libraries
- **Compressed assets**: Minified CSS/JS in production

## 🚀 Deployment Options

### 1. Static Hosting
- **GitHub Pages**: Free, easy deployment
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Zero-config deployment
- **AWS S3**: Enterprise hosting

### 2. Integration
- **Embed in website**: Use `<iframe>`
- **Power BI alternative**: Standalone dashboard
- **Email reports**: Export to PDF
- **Presentations**: Full-screen mode

## 📝 Future Enhancements

### Potential Additions
- [ ] Real-time data connection (API integration)
- [ ] User authentication and personalization
- [ ] Data filtering and drill-down
- [ ] Export to PDF/Excel
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Accessibility improvements (ARIA labels)
- [ ] Print-optimized stylesheet

### Advanced Features
- [ ] WebSocket for live updates
- [ ] Progressive Web App (PWA)
- [ ] Offline data caching
- [ ] Advanced analytics (Google Analytics)
- [ ] A/B testing different layouts

## 🐛 Troubleshooting

### Charts Not Showing
- **Issue**: Chart.js CDN not loading
- **Solution**: Check internet connection or download Chart.js locally

### Animations Not Working
- **Issue**: Browser doesn't support CSS animations
- **Solution**: Update browser to latest version

### Layout Broken on Mobile
- **Issue**: Viewport meta tag missing
- **Solution**: Ensure `<meta name="viewport">` is in HTML

### Data Not Updating
- **Issue**: Browser cache
- **Solution**: Hard refresh (Ctrl+Shift+R) or clear cache

## 📞 Support

For questions or issues:
1. Check this README
2. Review code comments in files
3. Consult Chart.js documentation
4. Check browser console for errors
5. Open an issue on GitHub

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ways to Contribute
- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests
- ⭐ Star the repository

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

This dashboard is created for the EMBRACE Project by ADRA.
Free to use and modify for project purposes.

## 🙏 Acknowledgments

- **ADRA EMBRACE Project Team** - Project development and requirements
- **Chart.js** - Data visualization library
- **Font Awesome** - Icon library
- **Contributors** - All who have contributed to this project

---

**Created**: November 2024  
**Version**: 1.0.0  
**Technology**: HTML5, CSS3, JavaScript (ES6+), Chart.js  
**Target Audience**: Leadership, Stakeholders, Technical Teams  
**Maintained by**: ADRA EMBRACE Project Team

---

## 🎉 Quick Start Checklist

- [ ] Extract all files to a folder
- [ ] Open `index.html` in browser
- [ ] Verify charts are loading
- [ ] Test interactive features
- [ ] Customize data in `script.js`
- [ ] Adjust colors in `styles.css`
- [ ] Deploy to hosting platform

**Enjoy your engaging, story-driven environmental dashboard! 🌍**
