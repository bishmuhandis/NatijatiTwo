const subjectsList = [];

const sequenceArray = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six' , 'twenty-seven', 'twenty-eight', ' twenty-nine', 'thirty'
];

  renderSubjectsList();

  let removedSubjects = 0;

function renderSubjectsList() {
  
  let subjectHTML = '';

  if (subjectsList.length === 0) {
    subjectHTML = `
      <div class="no-subjects">
       <p class="no-subjects-text">لا توجد مواد دراسية متاحة. الرجاء إضافة مادة.</p>
      </div>
      <div class="choose-subjects">
        <a class="choose-subject-paragraph" onclick="chooseSubjects()">اختيار مادة</a>
      </div>
    `;
    document.querySelector('.js-div').innerHTML = subjectHTML;
  } else {
    for (let i = 0; i < subjectsList.length; i++) {

      const subjectObject = subjectsList[i];
      const name = subjectObject.subjectName;
      const firstInput = subjectObject.classes.firstInput;
      const secondInput = subjectObject.classes.secondInput;
     // const thirdInput = subjectObject.classes.thirdInput;
      const html = `
        <div class="grades-information">
          <div class="grades-information-container">
          <div class="delete-button-div">
              <button class="delete-button" onclick="
              removedSubjects = removedSubjects + 1;
              addGrades();
              subjectsList.splice(${i},1);
              renderSubjectsList();
              updateInputsValue(); 
              refreshTheme();
              ">
              <img src="../../assets/images/icons/delete-icon.svg" class="delete-icon">
              </button>
            </div>
            <div class="subject-container">
             <div><div class="text-output-4 ${subjectObject.classes.resultDiv}">0</div></div>
             <div><div class="js-grades-after-half-year required-grade ${subjectObject.classes.requiredGrade}">0</div></div>
             <div><input type="text" placeholder="0"  min="0" max="100" class="text-enter-grade ${secondInput} js-half-year-exams-grades "></div>
             <div><input type="text" placeholder="0"  min="0" max="100" class="text-enter-grade ${firstInput} js-grade-before-half-year " ></div>
             <div>
              <p class="subject-name-paragraph">${name} </p>
             </div>
            </div>
          </div>
        </div>
      `;

      subjectHTML += html ;
      document.querySelector('.js-div').innerHTML = subjectHTML;

      document.querySelector(`.${subjectObject.classes.secondInput}`).value = subjectObject.halfYearExamsGrades;
      document.querySelector(`.${subjectObject.classes.firstInput}`).value = subjectObject.gradesBeforeHalfYear;
    }
  }

  // Select all inputs with the class 'text-enter-grade'
  const inputs = document.querySelectorAll('.text-enter-grade');
  // Attach the validation function to the 'input' event for each input element
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      validateInput(input);
    });
  });
}

function chooseSubjects(){
  subjectsList.splice(0,subjectsList.length);

  document.querySelector('.js-div').innerHTML = `
    <section id="chooseSubectsSection">
      <div class="choose-subjects-div">
      <p class="choose-title">اختر المواد التي من ضمن منهجك</p>
        <div class="choose-subjects-grid">
          <p>التربية الاسلامية</p>
          <input type="checkbox" class="c-box" data-name="التربية الاسلامية">
          <p> اللغة العربية</p>
          <input type="checkbox" class="c-box" data-name="اللغة العربية">
          <p>اللغة الانجليزية</p>
          <input type="checkbox" class="c-box" data-name="اللغة الانجليزية">
          <p>اللغة الكردية</p>
          <input type="checkbox" class="c-box" data-name="اللغة الكردية">
          <p>اللغة الفرنسية</p>
          <input type="checkbox" class="c-box" data-name="اللغة الفرنسية">
          <p>الرياضيات</p>
          <input type="checkbox" class="c-box" data-name="الرياضيات">
          <p>علم الكيمياء</p>
          <input type="checkbox" class="c-box" data-name="علم الكيمياء">
          <p>علم الاحياء</p>
          <input type="checkbox" class="c-box" data-name="علم الاحياء">
          <p>علم الفيزياء</p>
          <input type="checkbox" class="c-box" data-name="علم الفيزياء">
          <p>علم الارض</p>
          <input type="checkbox" class="c-box" data-name="علم الارض">
          <p>الفلسفة وعلم الاجتماع</p>
          <input type="checkbox" class="c-box" data-name="الفلسفة وعلم الاجتماع">
          <p>الاجتماعيات</p> 
          <input type="checkbox" class="c-box" data-name="الاجتماعيات">
          <p>التاريخ</p>
          <input type="checkbox" class="c-box" data-name="التاريخ">
          <p>الجغرافية</p>
          <input type="checkbox" class="c-box" data-name="الجغرافية">
          <p>الاقتصاد</p>
          <input type="checkbox" class="c-box" data-name="الاقتصاد">
          <p>الحاسوب</p>
          <input type="checkbox" class="c-box" data-name="الحاسوب">
          <p>التربية الفنية</p>
          <input type="checkbox" class="c-box" data-name="التربية الفنية">
          <p>التربية الرياضية</p>
          <input type="checkbox" class="c-box" data-name="التربية الرياضية">
        </div>
        <div class="choose-button">
         <button id="chooseSubjectButton">ادخال</button>
        </div>
      </div>
    </section>
    `;
    refreshTheme(); 

  window.location.href = '#chooseSubectsSection';

  const chooseSubjectButton = document.getElementById('chooseSubjectButton');
    chooseSubjectButton.addEventListener('click', function(){
    const checkboxes = document.querySelectorAll('.c-box');
    checkboxes.forEach(box => {
    if(box.checked){
    window.location.href = '#columnsInformations';
    const addingSubInput = document.querySelector('.js-add-sub-input');
    const subjectName = box.dataset.name;
    const inputHYEG = document.querySelector('.js-input-hyeg');
    const inputGBHY = document.querySelector('.js-input-gbhy');

      if (subjectsList.length < 28) {
      const selectClass = sequenceArray[subjectsList.length + removedSubjects];

      subjectsList.push({
        subjectName,
        gradesBeforeHalfYear: inputGBHY.value,
        halfYearExamsGrades: inputHYEG.value,
          classes:{ 
            className: `subject-${selectClass}`,
            firstInput: `input-${selectClass}-a`,
            secondInput: `input-${selectClass}-b`,
            requiredGrade:`grade-div-${selectClass}`,
            resultDiv: `average-div-${selectClass}`}
      });
      } else if (subjectsList.length === 28) {
        alert('لقد تجاوزت الحد الاقصى من المواد التي يمكنك اضافتها');
      }

      addingSubInput.value = '';
      inputGBHY.value = '';
      inputHYEG.value = '';

      renderSubjectsList();
      updateInputsValue();

      }
    });
  });
}

const chooseSubject = document.getElementById('chooseSubjectLink');
  chooseSubject.addEventListener('click', function(){
    chooseSubjects();
});

function validateInput(input) {
  let value = input.value;

  // Remove any non-digit characters
  value = value.replace(/[^0-9]/g, '');

  // Convert the value to a number and check if it is within the range
  if (value !== '') {
    value = parseInt(value, 10);

    if (value > 100) {
      value = 100;
    }
  }

  // Update the input value
  input.value = value;
}
 
function addGrades() {
  for (let i = 0; i < subjectsList.length; i++) {
    const selectClass = sequenceArray[i];
    
    const inputAElement = document.querySelector(`.input-${selectClass}-a`);
    const inputBElement = document.querySelector(`.input-${selectClass}-b`);
    const inputCElement = document.querySelector(`.input-${selectClass}-c`);
    
    if (inputAElement) {
      subjectsList[i].gradesBeforeHalfYear = inputAElement.value;
    }
    
    if (inputBElement) {
      subjectsList[i].halfYearExamsGrades = inputBElement.value;
    }
    
    if (inputCElement) {
      subjectsList[i].gradesAfterHalfYear = inputCElement.value;
    }
  }
}

// Add Subject :
const addSubjectButton = document.querySelector('.add-button');
    addSubjectButton.addEventListener('click', function(){
      addSubject();
    });

    addSubjectButton.addEventListener('keydown', function(event){
      if (event.key === 'Enter'){
        addSubject();
      };
    });

const addSubjectInput = document.querySelector('.js-add-sub-input');
    addSubjectInput.addEventListener('keydown', function(event){
      if(event.key === 'Enter') {
        addSubject();
      };
    });
const addSubInputHYEG = document.querySelector('.js-input-hyeg');
    addSubInputHYEG.addEventListener('keydown', function(event){
      if(event.key === 'Enter') {
        addSubject();
      };
    });
const addSubInputGBHY = document.querySelector('.js-input-gbhy');
    addSubInputGBHY.addEventListener('keydown', function(event){
      if(event.key === 'Enter') {
        addSubject();
      };
    });


function addSubject(){

  addGrades();

  const addingSubInput = document.querySelector('.js-add-sub-input');
  const subjectName = addingSubInput.value ;
  const inputHYEG = document.querySelector('.js-input-hyeg');
  const inputGBHY = document.querySelector('.js-input-gbhy');
         
  if (subjectsList.length < 28) {
    const selectClass = sequenceArray[subjectsList.length + removedSubjects];
  
  subjectsList.push({
    subjectName,
    gradesBeforeHalfYear: inputGBHY.value,
    halfYearExamsGrades: inputHYEG.value,
    classes:{ 
      className: `subject-${selectClass}`,
      firstInput: `input-${selectClass}-a`,
      secondInput: `input-${selectClass}-b`,
      requiredGrade:`grade-div-${selectClass}`,
      resultDiv: `average-div-${selectClass}`}
  });
  } else if (subjectsList.length === 28) {
    alert('لقد تجاوزت الحد الاقصى من المواد التي يمكنك اضافتها');
  }
           
    addingSubInput.value = '';
    inputGBHY.value = '';
    inputHYEG.value = '';

    renderSubjectsList();
    updateInputsValue();  
    refreshTheme(); 
    
};

function updateInputsValue(){
  for (let i = 0; i < subjectsList.length; i++) {
    const subject = subjectsList[i];
      document.querySelector(`.${subject.classes.firstInput}`).value = subject.gradesBeforeHalfYear;
      document.querySelector(`.${subject.classes.secondInput}`).value = subject.halfYearExamsGrades;
      //document.querySelector(`.${subject.classes.thirdInput}`).value = subject.gradesAfterHalfYear;
  }
}

//Calculating Button : 
const calculatingButton = document.getElementById('calculatingButton');
  calculatingButton.addEventListener('click', function(){
    calculate();
  });

function calculate(){

  if(subjectsList.length === 0){
    alert('لا يوجد مواد متاحة. يرجى اضافة مادة او اكثر وادخال الدرجات ثم النقر على "احسب"')
  } else {
    function eachRow(firstInput, secondInput, requiredGrade , averageDiv){

      const inputA = parseFloat(document.querySelector(`.${firstInput}`).value) || 0 ;
      const inputB = parseFloat(document.querySelector(`.${secondInput}`).value) || 0 ;
      const thirdColumnValue = 270 - (inputA + inputB);
      if(thirdColumnValue > 100){
        document.querySelector(`.${requiredGrade}`).innerHTML = '+100';
      } else if(thirdColumnValue <=100){
        document.querySelector(`.${requiredGrade}`).innerHTML = 270 - (inputA + inputB);
      }

      const reqGrade = parseFloat(document.querySelector(`.${requiredGrade}`).textContent);





      const sum = inputA + inputB + reqGrade;
      const average = Math.round( sum / 3);
      document.querySelector(`.${averageDiv}`).innerHTML = average;


    }
    for (let index = 0; index < subjectsList.length; index++){

      const firstInput = subjectsList[index].classes.firstInput;     
      const secondInput = subjectsList[index].classes.secondInput;
      const requiredGrade = subjectsList[index].classes.requiredGrade;
      const averageDiv = subjectsList[index].classes.resultDiv;
      eachRow(firstInput, secondInput, requiredGrade, averageDiv);
    };

    const inputsA = document.querySelectorAll('.js-grade-before-half-year');
     let sumA = 0;
       inputsA.forEach(input => {
         const value = parseFloat(input.value) || 0; 
           sumA += value;
    });
    document.getElementById('sumA').innerHTML = sumA;
    document.getElementById('averageA').innerHTML = Math.round(sumA / subjectsList.length) ;

    const inputsB = document.querySelectorAll('.js-half-year-exams-grades');
     let sumB = 0;
       inputsB.forEach(input => {
         const value = parseFloat(input.value) || 0; 
           sumB += value;
    });
    document.getElementById('sumB').innerHTML = sumB;
    document.getElementById('averageB').innerHTML = Math.round(sumB / subjectsList.length) ;

    const requiredGrades = document.querySelectorAll('.js-grades-after-half-year');
     let sumC = 0;
       requiredGrades.forEach(div => {
         const value = parseFloat(div.textContent) || 0; 
           sumC += value;
    });
    document.getElementById('sumC').innerHTML = sumC;
    document.getElementById('averageC').innerHTML = Math.round(sumC / subjectsList.length) ;
    const outputD = document.querySelectorAll('.text-output-4');
     let sumD = 0;
       outputD.forEach(output => {
         const value = parseFloat(output.textContent) || 0; 
           sumD += value;
    });
    document.getElementById('sumD').textContent = sumD;
    document.getElementById('averageD').innerHTML = Math.round(sumD / subjectsList.length) ;
    
    const outputDivs = document.querySelectorAll('.text-output-4');
    outputDivs.forEach(averageDivMark => {
      const averageMark = parseFloat(averageDivMark.textContent) || 0; // Convert text content to a number

      if (averageMark >= 90) {
          averageDivMark.style.color = 'lightgreen';
      } else if (averageMark >= 75) {
          averageDivMark.style.color = 'gold';
      } else {
          averageDivMark.style.color = 'red';
          averageDivMark.style.textDecoration = 'underline';
      }
    });

      
    const finalAverage = parseFloat(document.getElementById('averageD').textContent) ;
    const finalSum = parseFloat(document.getElementById('sumD').textContent);
    const eachSubject = Array.from(document.querySelectorAll('.text-output-4')).map(averageDivMark => {
      return parseFloat(averageDivMark.textContent);
    });

    let reachedSubjects = 0;

    eachSubject.forEach(subject => {
      if (subject >= 90) {
        reachedSubjects += 1;
      }
    });
    let unreachedSubjects = 0;

    eachSubject.forEach(subject => {
      if (subject < 90 && finalAverage < 85) {
        unreachedSubjects += 1;
      }
    });

    const highestSubject = Math.max(...eachSubject);
    const lowestSubject = Math.min(...eachSubject);

    let exemption = '';
    let text = '';

    if (finalAverage >= 85 && eachSubject.every(subject => subject >= 75)) {
      exemption = 'ممكن';
      text = '<p class="you-have">الاعفاء العام <span class="first-word">ممكن! </span></p>';
      document.getElementById('resultDiv').innerHTML = `
        <p class="result-text">الاحصائيات!</p>
        <p class="you-get">اقل سعي يمكن تحصيله:</p>
        <p class="number-of-average">${finalAverage}</p>
        ${text}
        <p class="you-have-second-paragraph">الاعفائات الفردية الممكنة: <span class="number-of-reached-sub">${reachedSubjects}</span></p>
          <ul class="statistics-list">
            <li>عدد دروسك: <span class="subjects-number">${subjectsList.length}</span></li>
            <li>الاعفاء العام:<span class="statistics-numbers">${exemption}</span> </li>
            <li>الاعفائات الفردية الممكنة:<span class="statistics-numbers"> ${reachedSubjects}</span></li>
            <li>الدروس المستبعدة :<span class="statistics-numbers"> ${unreachedSubjects}</span></li>          
          </ul>
        <button class="reset-button-in-result">مسح النتيجة</button>
      
       
      `;
    } else if (finalAverage < 85 || eachSubject.some(subject => subject < 75)) {
      exemption = 'غير ممكن';
      text = '<p class="you-have"><span class="second-word">للأسف، </span>لا يمكنك الحصول على الاعفاء العام</p>';
      document.getElementById('resultDiv').innerHTML = `
        <p class="result-text">الاحصائيات!</p>
        <p class="you-get">اقل سعي يمكن تحصيله:</p>
        <p class="number-of-average">${finalAverage}</p>
        ${text}
        <p class="you-have-second-paragraph">الاعفائات الفردية الممكنة: <span class="number-of-reached-sub">${reachedSubjects}</span></p>
          <ul class="statistics-list">
            <li>عدد دروسك: <span class="subjects-number">${subjectsList.length}</span></li>
            <li>الاعفاء العام:<span class="statistics-numbers"> ${exemption}</span> </li>
            <li>الاعفائات الفردية الممكنة:<span class="statistics-numbers"> ${reachedSubjects}</span></li>
            <li>الدروس المستبعدة :<span class="statistics-numbers"> ${unreachedSubjects}</span></li>
          </ul>
        <button class="reset-button-in-result">مسح النتيجة</button>
      
      `;
    }

    const resetButtonInResult = document.querySelector('.reset-button-in-result');
      resetButtonInResult.addEventListener('click', function(){
        resetFunction();
      });
  }
  refreshTheme(); 

}

// Reset button :    
const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function(){
    resetFunction();
  });
  
let resetTextsForStat = `
  <p class="result-text" id="statistics">الاحصائيات!</p>
  <div class="adding-grades-img-div">
    <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
  </div>
  <div>
    <p class="no-grades-text" id="statisticsText1">لم يتم ادخال اي درجات </p>
    <p class="no-grades-text" id="statisticsText2">يرجى ادخال جميع الدرجات المطلوبة لرؤية الاحصائيات</p>
  </div>
`;

function resetFunction(){
  document.querySelectorAll('.text-enter-grade').forEach(input => {
    input.value = '';
    document.querySelectorAll('.text-output-4').forEach(div => {
      div.innerHTML = 0;
      div.style.color = 'gold';
      div.style.textDecoration = 'none';
    })
    document.querySelectorAll('.js-grades-after-half-year').forEach(div => {
      div.innerHTML = 0;
      div.style.color = 'gold';
      div.style.textDecoration = 'none';
    })
    document.querySelectorAll('.sum-result').forEach(div => {
      div.innerHTML = 0;
    })
    document.querySelectorAll('.average-result').forEach(div => {
      div.innerHTML = 0;
    })
    document.getElementById('resultDiv').innerHTML = resetTextsForStat;
  });
}

// Delete all subjects button :
const deleteAllSubjects = document.getElementById('deleteAllSubjects');
  deleteAllSubjects.addEventListener('click', function(){
    subjectsList.splice(0,subjectsList.length);
    document.querySelector('.js-div').innerHTML = `
    <div class="no-subjects">
      <p class="no-subjects-text">لا توجد مواد دراسية متاحة. الرجاء إضافة مادة.</p>
    </div>
    <div class="choose-subjects">
       <a class="choose-subject-paragraph" onclick="chooseSubjects()">اختيار مادة</a>
    </div>
    `;
    window.location.href = '#columnsInformations';
  });

// Message Page button
document.getElementById('messageUsButton').addEventListener('click', function(){
  window.location.href = './message-us.html';
})

 
  
  
  



function refreshTheme(){
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    // Set the radio button based on saved value
    const selectedRadio = document.querySelector(`input[type="radio"][name="theme"][value="${savedTheme}"]`);
    if (selectedRadio) {
      selectedRadio.checked = true;
    }
    applyStyle(savedTheme); // Apply the style
  }
}
