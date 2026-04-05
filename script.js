
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileBackdrop = document.getElementById('mobileBackdrop');

    function openMobileMenu() {
      mobileMenu.classList.remove('right-[-35%]');
      mobileMenu.classList.add('right-0');
      mobileBackdrop.classList.remove('hidden');
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('right-0');
      mobileMenu.classList.add('right-[-35%]');
      mobileBackdrop.classList.add('hidden');
    }

    mobileMenuBtn.addEventListener('click', e => {
      if (mobileMenu.classList.contains('right-0')) closeMobileMenu();
      else openMobileMenu();
      e.stopPropagation();
    });

    mobileBackdrop.addEventListener('click', closeMobileMenu);
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
    mobileMenu.addEventListener('click', e => e.stopPropagation());


    function updateDate() {
    const now = new Date();
    // Format the date as "Month Day, Year - HH:MM:SS"
    const formatted = now.toLocaleString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    document.getElementById('currentDate').textContent = formatted;
  }

  // Update immediately
  updateDate();

  // Update every second for real-time clock
  setInterval(updateDate, 1000);



// DOM Elements
const chatToggle = document.getElementById('chatToggle'); 
const chatBox = document.getElementById('chatBox');

chatToggle.addEventListener('click', () => {
  if (chatBox.classList.contains('hidden')) {
    // OPEN CHAT
    chatBox.classList.remove('hidden');
    setTimeout(() => {
      chatBox.classList.remove('scale-0');
      chatBox.classList.add('scale-100');
    }, 10);
  } else {
    // CLOSE CHAT
    chatBox.classList.remove('scale-100');
    chatBox.classList.add('scale-0');
    setTimeout(() => chatBox.classList.add('hidden'), 200);
  }
});

// =====================
// CLEAR CHAT
// =====================
function clearChat() {
  chatMessages.innerHTML = `<div class="text-gray-400">Select an emergency below 👇</div>`;
}

// =====================
// ADD MESSAGE
// =====================
function addMessage(sender, text) {
  const msg = document.createElement('div');

  if (sender === "You") {
    msg.className = "self-end bg-green-700 text-white font-bold p-2 rounded-lg max-w-[80%]";
  } else {
    msg.className = "self-start bg-white text-black font-bold p-2 rounded-lg max-w-[80%]";
  }

  msg.innerHTML = `
    <div class="text-xs text-white mb-1">${sender}</div>
    <div>${text}</div>
  `;

  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessage(sender, text) {
  const msg = document.createElement('div');

  // Different color for AI vs User
  if (sender === "AI") {
    msg.className = "bg-white/10 p-2 rounded-lg text-white"; // Red text for AI
  } else {
    msg.className = "bg-white/10 p-2 rounded-lg text-white"; // Default white for user
  }

  msg.innerHTML = `
    <div class="text-xs text-gray-400">${sender}</div>
    <div>${text}</div>
  `;

  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
// =====================
// SELECT EMERGENCY
// =====================
function selectOption(type) {
  const titles = {
    drsabc: "DRSABC",
    faint: "Fainting",
    bleeding: "Bleeding",
    burn: "Burn",
    choking: "Choking",
    fracture: "Fracture",
    electrocution: "Electrocution",
    "food-poisoning": "Food Poisoning",
    "heat-exhaustion": "Heat Exhaustion",
    stroke: "Stroke",
    seizure: "Seizure",
  };

  addMessage("You", titles[type] || "Unknown Emergency");

  let response = "";

  switch(type.toLowerCase()) {
    case "drsabc":
      response = `🟢 <b>DRSABC</b><br>
D - Danger / Kaligtasan ng paligid<br>
R - Response / Pagtugon (Check consciousness / Suriin kamalayan)<br>
S - Send Help / Tumawag ng Tulong (911)<br>
A - Airway / Daan ng Hangin<br>
B - Breathing / Paghinga (10s)<br>
C - Circulation / Sirkulasyon (CPR kung kinakailangan)`;
      break;

    case "faint":
      response = `🟡 <b>Fainting/Panghihina</b><br>
• Lay patient flat / Ihiga ang pasyente<br>
• Loosen clothing / Alisin ang sinturon at luwagan ang damit sa dibdib at leeg<br>
• Elevate legs / Iangat ang mga paa<br>
• Check breathing / Suriin ang paghinga<br>
• Monitor blood pressure and heart rate / Presyon ng Dugo at Tibok ng Puso<br>
• Normal: ~120/80 mmHg at 60-100 bpm<br>
• If abnormal, seek medical help / Kung abnormal, magpatingin sa doktor`;
      break;

    case "bleeding":
      response = `🔴 <b>Bleeding</b><br>
• Apply direct pressure / Direktang diinan agad ang sugat<br>
• Use clean cloth or gauze / Gumamit ng malinis na tela o gasa<br>
• Do not remove soaked cloth / Huwag alisin ang basang tela<br>
• Add more layers if needed / Dagdagan pa ng patong kung kinakailangan<br>
• Use tourniquet if uncontrolled / Gumamit ng tourniquet kung hindi mapigilan (kung marunong)<br>
• Seek medical help immediately / Agad magpatingin sa doktor`;
      break;

    case "burn":
      response = `🔥 <b>Burn</b><br>
• Remove from heat source / Ilayo sa pinanggalingan ng init<br>
• Cool with water (10–20 mins) / Palamigin gamit ang tubig (10–20 minuto)<br>
• Remove tight items / Alisin ang masisikip na gamit<br>
• Do not apply ice or ointment / Huwag lagyan ng yelo o ointment<br>
• Apply clean anti-adhesive dressing / Ilagay ang malinis na hindi dumidikit na benda`;
      break;

    case "choking":
      response = `🟠 <b>Choking</b><br>
• Ask if choking / Tanungin kung nasasakal<br>
• Perform abdominal thrusts / Gawin ang abdominal thrusts (Heimlich maneuver)<br>
• 5 abdominal thrusts<br>
• Check if object dislodged / Suriin kung naalis na ang nakabara<br>
• If still choking, repeat / Kung hindi pa rin, ulitin<br>
• If unconscious → CPR / Kapag nawalan ng malay, CPR agad`;
      break;

    case "fracture":
      response = `🦴 <b>Fracture</b><br>
• Do not move injured part / Huwag galawin ang nabaling bahagi<br>
• Immobilize using splint / I-immobilize gamit ang splint<br>
• Apply cold compress / Lagyan ng malamig na pomento<br>
• Elevate if possible / Iangat kung kaya<br>
• Seek medical help immediately / Agad magpatingin sa doktor`;
      break;

    case "electrocution":
      response = `⚡ <b>Electrocution</b><br>
• Ensure scene is safe / Siguraduhing ligtas ang paligid<br>
• Do not touch victim if still in contact with source / Huwag hawakan kung nakadikit pa sa kuryente<br>
• Switch off power / Patayin ang kuryente<br>
• Check breathing and pulse / Suriin ang paghinga at pulso<br>
• Start CPR if needed / Simulan ang CPR kung kinakailangan<br>
• Call 911 / Tumawag ng tulong`;
      break;

    case "food-poisoning":
      response = `⚠️ <b>Food Poisoning</b><br>
• Call poison control / 911 / Tumawag sa poison control o 911<br>
• Do not induce vomiting unless instructed / Huwag pilitin na pagsusuka kung hindi sinabihan<br>
• Identify substance / Tukuyin ang substance na nakain<br>
• Check breathing and pulse / Suriin ang paghinga at pulso<br>
• Monitor breathing and consciousness / Bantayan ang paghinga at malay<br>
• Provide information to medical personnel / Ibigay ang impormasyon sa mga medikal na tauhan`;
      break;

    case "heat-exhaustion":
      response = `☀️ <b>Heat Exhaustion</b><br>
• Move to cooler environment / Ilipat sa mas malamig na lugar<br>
• Loosen clothing / Luwagan ang damit<br>
• Apply cool, wet cloths / Ilagay ang malamig na basang tela<br>
• Cool with water or fan / Palamigin gamit ang tubig o bentilador<br>
• Give water if conscious / Bigyan ng tubig kung gising<br>
• Call 911 / Tumawag ng tulong`;
      break;

    case "stroke":
      response = `🧠 <b>Stroke</b><br>
• Call 911 immediately / Tumawag agad ng tulong<br>
• Note time of symptom onset / Itala ang oras ng simula ng sintomas<br>
• Keep patient calm and lying down / Pahupain at ihiga ang pasyente<br>
• Do not give food or water / Huwag bigyan ng pagkain o tubig<br>
• Monitor breathing and consciousness / Bantayan ang paghinga at malay`;
      break;

    case "seizure":
      response = `⚡ <b>Seizure</b><br>
• Protect patient from injury / Iwasan ang pinsala<br>
• Do not restrain / Huwag pigilan ang katawan<br>
• Place on side if possible / Ilatag sa gilid kung kaya<br>
• Clear surroundings / Alisin ang mga bagay na pwedeng masaktan<br>
• Call 911 if prolonged or first seizure / Tumawag ng tulong kung matagal o unang seizure`;
      break;

    default:
      response = "Select a valid emergency.";
  }

  addMessage("AI", response);
}

// =====================
// CLOSE ON OUTSIDE CLICK
// =====================
document.addEventListener('click', (e) => {
  const target = e.target;
  // If click is outside chatBox and chatToggle, close the chat
  if (!chatBox.contains(target) && target !== chatToggle) {
    if (!chatBox.classList.contains('hidden')) {
      chatBox.classList.remove('scale-100');
      setTimeout(() => chatBox.classList.add('hidden'), 200);
    }
  }
});

 AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Smooth easing
    once: true, // Animate only once
    mirror: false, // Do not animate out when scrolling up
  });

AOS.init({
  once: true, // animate only once (recommended for clean UI)
});



const adminLinks = document.querySelectorAll('#adminLink, #adminLinkMobile');

adminLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const password = prompt("Enter Admin Password:");
    
    if (password === "MDRRMO123") { // change this!
      window.location.href = "admin.html";
    } else {
      alert("Wrong password!");
    }
  });
});
// ======================
// PDF EXPORT
// ======================
const { jsPDF } = window.jspdf;

async function downloadPDF(elementId, filename) {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'pt', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(filename);
}

document.getElementById('downloadIncidentPDF').addEventListener('click', () => downloadPDF('incidentTable','Incident_Report.pdf'));
document.getElementById('downloadRosterPDF').addEventListener('click', () => downloadPDF('dutyRosterTable','Duty_Roster.pdf'));
document.getElementById('downloadVolunteerPDF').addEventListener('click', () => downloadPDF('volunteerTable','Volunteer_List.pdf'));

document.addEventListener("DOMContentLoaded", () => {
  // Fade in the page on load
  document.body.classList.add("loaded");

  // Select all nav links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default navigation

      const href = this.getAttribute("href");

      // Add fade-out class
      document.body.classList.add("fade-out");

      // Wait for transition before navigating
      setTimeout(() => {
        window.location.href = href;
      }, 500); // matches CSS transition duration
    });
  });
});











document.getElementById('incidentForm').addEventListener('submit', async (e)=>{
    e.preventDefault();

    const data = {
        type: document.getElementById('type').value,
        location: document.getElementById('location').value,
        dateTime: document.getElementById('dateTime').value,
        action: document.getElementById('action').value,
        details: document.getElementById('details').value,
        status: document.getElementById('status').value,
        responders: document.getElementById('responders').value
    };

    const res = await fetch('add_incident.php',{
        method:'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: new URLSearchParams(data)
    });
    const result = await res.json();
    alert(result.message);
    if(result.success){
        loadIncidents(); // refresh table
        document.getElementById('incidentForm').reset();
    }
});

// Load table dynamically
async function loadIncidents(){
    const res = await fetch('get_incidents.php');
    const data = await res.json();
    const tbody = document.getElementById('incidentTable');
    tbody.innerHTML = '';
    data.forEach(row=>{
        tbody.innerHTML += `<tr>
            <td class="px-6 py-4">${row.type}</td>
            <td class="px-6 py-4">${row.location}</td>
            <td class="px-6 py-4">${row.dateTime}</td>
            <td class="px-6 py-4">${row.details}</td>
            <td class="px-6 py-4">${row.actionTaken}</td>
            <td class="px-6 py-4">${row.status}</td>
            <td class="px-6 py-4">${row.responders}</td>
        </tr>`;
    });
}
loadIncidents();
