/**
 * EMBRACE Environmental Dashboard v2 - JavaScript
 * Clean, professional interactions
 */

// ===== DATA =====
const emissionsData = {
    scopes: {
        labels: ['Scope 3', 'Scope 1', 'Scope 2'],
        values: [200.45, 15.71, 20.85],
        colors: ['#3498DB', '#E74C3C', '#F39C12']
    }
};

// ===== CHART.JS CONFIGURATION =====

// Scope Donut Chart
const scopeCtx = document.getElementById('scopeChart');
if (scopeCtx) {
    new Chart(scopeCtx, {
        type: 'doughnut',
        data: {
            labels: emissionsData.scopes.labels,
            datasets: [{
                data: emissionsData.scopes.values,
                backgroundColor: emissionsData.scopes.colors,
                borderWidth: 0,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${label}: ${value} tCO2e (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '70%',
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// ===== ANIMATIONS =====

// Animate numbers on scroll
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = (progress * (end - start) + start).toFixed(2);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate KPI values
            if (entry.target.classList.contains('kpi-value')) {
                const finalValue = parseFloat(entry.target.textContent);
                if (!isNaN(finalValue)) {
                    animateValue(entry.target, 0, finalValue, 1500);
                }
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.kpi-card, .chart-card, .insight-card, .achievement').forEach(el => {
    observer.observe(el);
});

// Animate progress bars on load
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.bar-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// ===== INTERACTIVE FEATURES =====

// Activity items hover effect
const activityItems = document.querySelectorAll('.activity-item');
activityItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#F9F9F9';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
});

// Achievement cards click interaction
const achievements = document.querySelectorAll('.achievement');
achievements.forEach(achievement => {
    achievement.addEventListener('click', function() {
        if (this.classList.contains('unlocked')) {
            const name = this.querySelector('.achievement-name').textContent;
            const desc = this.querySelector('.achievement-desc').textContent;
            showNotification(`🏆 ${name}`, desc, 'success');
        } else {
            const name = this.querySelector('.achievement-name').textContent;
            showNotification(`🔒 ${name}`, 'Keep working towards this achievement!', 'info');
        }
    });
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(title, message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        max-width: 350px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        border-left: 4px solid ${type === 'success' ? '#27AE60' : '#3498DB'};
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content h4 {
        margin-bottom: 8px;
        color: #2C3E50;
        font-size: 1rem;
    }
    
    .notification-content p {
        color: #7F8C8D;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .notification-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #7F8C8D;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }
    
    .notification-close:hover {
        background: #F5F5F5;
        color: #2C3E50;
    }
`;
document.head.appendChild(style);

// ===== PRINT FUNCTIONALITY =====
function printDashboard() {
    window.print();
}

// ===== EXPORT DATA =====
function exportToCSV() {
    const csvData = [
        ['Metric', 'Value', 'Unit'],
        ['Total Emissions', '237.01', 'tCO2e'],
        ['Scope 1', '15.71', 'tCO2e'],
        ['Scope 2', '20.85', 'tCO2e'],
        ['Scope 3', '200.45', 'tCO2e'],
        ['Sustainability Score', '78', '/100'],
        ['', '', ''],
        ['Activity', 'Emissions', 'tCO2e'],
        ['Solar Panel Installation', '138', 'tCO2e'],
        ['Medical Equipment', '44', 'tCO2e'],
        ['Office Energy', '30', 'tCO2e'],
        ['Humanitarian Aid', '17', 'tCO2e'],
        ['Transportation', '7', 'tCO2e']
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvData.forEach(row => {
        csvContent += row.join(",") + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "embrace_emissions_v2.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Export Complete', 'Data exported successfully to CSV', 'success');
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printDashboard();
    }
    
    // Ctrl/Cmd + E for export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportToCSV();
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🌍 EMBRACE Environmental Dashboard v2', 'font-size: 20px; font-weight: bold; color: #16A085;');
console.log('%cClean, professional design inspired by ADRA infographic', 'font-size: 14px; color: #3498DB;');
console.log('%cKeyboard shortcuts:', 'font-size: 12px; font-weight: bold;');
console.log('  Ctrl/Cmd + P: Print dashboard');
console.log('  Ctrl/Cmd + E: Export data to CSV');

// ===== WELCOME MESSAGE =====
window.addEventListener('load', () => {
    setTimeout(() => {
        showNotification(
            'Welcome to EMBRACE Dashboard v2',
            'Clean, professional environmental impact tracking',
            'info'
        );
    }, 1000);
});
