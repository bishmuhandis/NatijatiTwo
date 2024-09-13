// - - - - - - - - - - - - - - Select Button Section - - - - - - - - - - - - - 

const calculatingExemptButton = document.getElementById('calculatingTheExempt');
calculatingExemptButton.addEventListener('click', function(){
  window.location.href = './calculating-the-exempt.html';
});

const calculatingRequiredGrades = document.getElementById('calculatingRequiredGrades');
calculatingRequiredGrades.addEventListener('click', function(){
  window.location.href = './calculate-required-grades.html';
});

document.getElementById('messageUsButton').addEventListener('click', function(){
  window.location.href = './message-us.html';
});