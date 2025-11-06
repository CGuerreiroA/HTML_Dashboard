/**
 * EMBRACE Environmental Impact Dashboard - JavaScript
 * 
 * @description Interactive dashboard for tracking GHG emissions and sustainability metrics
 * @version 1.0.0
 * @author ADRA EMBRACE Project
 * @license MIT
 */

// ===== DATA =====
const emissionsData = {
    scopes: {
        labels: ['Scope 3', 'Scope 1', 'Scope 2'],
        values: [164.20, 12.50, 5.50],
        colors: ['#3498db', '#e74c3c', '#f39c12']
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
                hoverOffset: 10
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
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
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


// ===== INTERACTIVE FEATURES =====

// Animate numbers on scroll
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate KPI values
            if (entry.target.classList.contains('kpi-value')) {
                const finalValue = parseFloat(entry.target.textContent);
                animateValue(entry.target, 0, finalValue, 1500);
            }
            
            // Animate highlight values
            if (entry.target.classList.contains('highlight-card')) {
                const valueElement = entry.target.querySelector('.value');
                if (valueElement) {
                    const text = valueElement.textContent;
                    const numMatch = text.match(/\d+/);
                    if (numMatch) {
                        const finalValue = parseInt(numMatch[0]);
                        animateValue(valueElement, 0, finalValue, 1000);
                    }
                }
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.kpi-card, .highlight-card, .chart-section').forEach(el => {
    observer.observe(el);
});

// ===== INTERACTIVE TOOLTIPS =====
const activityItems = document.querySelectorAll('.activity-item');
activityItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ===== ACTION BUTTONS =====
const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const actionCard = this.closest('.action-card');
        const actionName = actionCard.querySelector('h4').textContent;
        
        // Show confirmation
        alert(`Action planned: ${actionName}\n\nThis would typically open a planning interface or send a notification to the project team.`);
        
        // Visual feedback
        this.textContent = '✓ Planned';
        this.style.background = 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
        this.disabled = true;
    });
});

// ===== ACHIEVEMENT CARDS INTERACTION =====
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach(card => {
    card.addEventListener('click', function() {
        if (this.classList.contains('unlocked')) {
            const achievementName = this.querySelector('.achievement-name').textContent;
            const achievementDesc = this.querySelector('.achievement-desc').textContent;
            
            // Show achievement details
            showModal(`🏆 ${achievementName}`, achievementDesc);
        }
    });
});

// ===== MODAL FOR DETAILS =====
function showModal(title, content) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('detailModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'detailModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        `;
        
        modalContent.innerHTML = `
            <h2 style="margin-bottom: 15px; color: #2c3e50;">${title}</h2>
            <p style="color: #7f8c8d; line-height: 1.6; margin-bottom: 20px;">${content}</p>
            <button onclick="closeModal()" style="
                width: 100%;
                padding: 12px;
                background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
            ">Close</button>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    } else {
        modal.querySelector('h2').textContent = title;
        modal.querySelector('p').textContent = content;
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('div').style.transform = 'scale(1)';
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('div').style.transform = 'scale(0.9)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// ===== PROGRESS BAR ANIMATION =====
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// ===== RESPONSIVE CHART RESIZE =====
window.addEventListener('resize', () => {
    // Charts will auto-resize due to Chart.js responsive option
});

// ===== PRINT FUNCTIONALITY =====
function printDashboard() {
    window.print();
}

// ===== EXPORT DATA =====
function exportToCSV() {
    const csvData = [
        ['Scope', 'Emissions (tCO2e)', 'Percentage'],
        ['Scope 1', '12.50', '7%'],
        ['Scope 2', '5.50', '3%'],
        ['Scope 3', '164.20', '90%'],
        ['Total', '182.20', '100%']
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvData.forEach(row => {
        csvContent += row.join(",") + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "embrace_emissions_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== CONSOLE MESSAGE =====
console.log('%c🌍 EMBRACE Environmental Dashboard', 'font-size: 20px; font-weight: bold; color: #27ae60;');
console.log('%cDashboard loaded successfully!', 'font-size: 14px; color: #3498db;');
console.log('%cKeyboard shortcuts:', 'font-size: 12px; font-weight: bold;');
console.log('  Ctrl/Cmd + P: Print dashboard');
console.log('  Ctrl/Cmd + E: Export data to CSV');
console.log('  ESC: Close modal');
