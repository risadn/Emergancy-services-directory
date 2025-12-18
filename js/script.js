// Initial state
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

// DOM Elements
const heartCountEl = document.querySelector('nav .flex.items-center.gap-2:nth-child(1) span');
const coinCountEl = document.querySelector('nav .flex.items-center.gap-2:nth-child(2) span');
const copyCountBtn = document.querySelector('nav button');
const callHistoryContainer = document.querySelector('.w-80 .space-y-4');
const clearHistoryBtn = document.querySelector('.w-80 button');

// Initialize
updateNavbar();

// Get all service cards
const serviceCards = document.querySelectorAll('.grid > div');

serviceCards.forEach(card => {
  const heartIcon = card.querySelector('.fa-heart');
  const copyBtn = card.querySelectorAll('button')[0];
  const callBtn = card.querySelectorAll('button')[1];
  const serviceName = card.querySelector('h3').textContent;
  const serviceNumber = card.querySelector('h2').textContent;
  
  // Heart icon functionality
  heartIcon.addEventListener('click', () => {
    if (heartIcon.classList.contains('far')) {
      heartIcon.classList.remove('far', 'text-gray-300');
      heartIcon.classList.add('fas', 'text-red-500');
      heartCount++;
    } else {
      heartIcon.classList.remove('fas', 'text-red-500');
      heartIcon.classList.add('far', 'text-gray-300');
      heartCount--;
    }
    updateNavbar();
  });
  
  // Copy button functionality
  copyBtn.addEventListener('click', () => {
    // Copy to clipboard
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`${serviceName} number (${serviceNumber}) copied to clipboard!`);
      copyCount++;
      updateNavbar();
    }).catch(err => {
      alert('Failed to copy number. Please try again.');
    });
  });
  
  // Call button functionality
  callBtn.addEventListener('click', () => {
    if (coinCount < 20) {
      alert('❌ Insufficient coins! You need at least 20 coins to make a call.');
      return;
    }
    
    // Show call alert
    alert(`📞 Calling ${serviceName} at ${serviceNumber}`);
    
    // Deduct coins
    coinCount -= 20;
    updateNavbar();
    
    // Add to call history with current time
    const currentTime = getCurrentTime();
    addToCallHistory(serviceName, serviceNumber, currentTime);
  });
});

// Update navbar counts
function updateNavbar() {
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountBtn.textContent = `${copyCount} Copy`;
}

// Get current time in 12-hour format
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Add to call history
function addToCallHistory(name, number, time) {
  const historyItem = {
    name,
    number,
    time
  };
  
  callHistory.unshift(historyItem); // Add to beginning
  renderCallHistory();
}

// Render call history
function renderCallHistory() {
  if (callHistory.length === 0) {
    callHistoryContainer.innerHTML = '<p class="text-gray-400 text-center py-8">No call history yet</p>';
    return;
  }
  
  callHistoryContainer.innerHTML = callHistory.map(item => `
    <div class="flex justify-between items-start py-2 border-b border-gray-100">
      <div>
        <h4 class="font-semibold text-sm">${item.name}</h4>
        <p class="text-gray-500 text-xs">${item.number}</p>
      </div>
      <span class="text-xs text-gray-500">${item.time}</span>
    </div>
  `).join('');
}

// Clear history functionality
clearHistoryBtn.addEventListener('click', () => {
  if (callHistory.length === 0) {
    alert('Call history is already empty!');
    return;
  }
  
  const confirmed = confirm('Are you sure you want to clear all call history?');
  if (confirmed) {
    callHistory = [];
    renderCallHistory();
    alert('✅ Call history cleared successfully!');
  }
});

// Initialize empty history message
renderCallHistory();
