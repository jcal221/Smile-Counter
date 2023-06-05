let smiledBackCountEl = document.getElementById("smiled-back-count");
let notSmiledBackCountEl = document.getElementById("not-smiled-back-count");
let smilesBackPercentageEl = document.getElementById("smiles-back-percentage");
let totalParticipantsEl = document.getElementById("total-participants");

let smiledBackCount = 0;
let notSmiledBackCount = 0;

function incrementSmiledBack() {
  smiledBackCount += 1;
  smiledBackCountEl.textContent = smiledBackCount;
  updateSmilesBackPercentage();
}

function incrementNotSmiledBack() {
  notSmiledBackCount += 1;
  notSmiledBackCountEl.textContent = notSmiledBackCount;
  updateSmilesBackPercentage();
}

function updateSmilesBackPercentage() {
  let totalParticipants = smiledBackCount + notSmiledBackCount;
  let percentage = (smiledBackCount / totalParticipants) * 100 || 0;
  smilesBackPercentageEl.textContent = percentage.toFixed(2) + "%";
  totalParticipantsEl.textContent = "Total participants: " + totalParticipants;
}

function reset() {
  smiledBackCount = 0;
  notSmiledBackCount = 0;
  smiledBackCountEl.textContent = 0;
  notSmiledBackCountEl.textContent = 0;
  smilesBackPercentageEl.textContent = 0;
  totalParticipantsEl.textContent = "Total participants: ";
}
