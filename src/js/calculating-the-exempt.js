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
      const thirdInput = subjectObject.classes.thirdInput;
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
             <div><input type="text" placeholder="0"  min="0" max="100" class="text-enter-grade ${thirdInput} js-grades-after-half-year " ></div>
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

      document.querySelector(`.${subjectObject.classes.thirdInput}`).value = subjectObject.gradesAfterHalfYear;
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

let listOfSubjects = `
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
          <p>الوطنية</p>
          <input type="checkbox" class="c-box" data-name="الوطنية">
          <p>الاقتصاد</p>
          <input type="checkbox" class="c-box" data-name="الاقتصاد">
          <p>الحاسوب</p>
          <input type="checkbox" class="c-box" data-name="الحاسوب">
          <p>الموسيقى</p>
          <input type="checkbox" class="c-box" data-name="الموسيقى">
          <p>التربية الفنية</p>
          <input type="checkbox" class="c-box" data-name="التربية الفنية">
          <p>التربية الرياضية</p>
          <input type="checkbox" class="c-box" data-name="التربية الرياضية">
        </div>
        <div class="choose-button">
         <button id="chooseSubjectButton" class="choose-subject-button">ادخال</button>
        </div>
      </div>
    </section>
    `;

function chooseSubjects(){
  subjectsList.splice(0,subjectsList.length);

  document.querySelector('.js-div').innerHTML = listOfSubjects;

  window.location.href = '#chooseSubectsSection';

  const chooseSubjectButton = document.getElementById('chooseSubjectButton');
    chooseSubjectButton.addEventListener('click', function(){
    const checkboxes = document.querySelectorAll('.c-box');
    checkboxes.forEach(box => {
    if(box.checked){
    window.location.href = '#columnsInformations';
    const addingSubInput = document.querySelector('.js-add-sub-input');
    const subjectName = box.dataset.name;
    const inputGAHY = document.querySelector('.js-input-gahy');
    const inputHYEG = document.querySelector('.js-input-hyeg');
    const inputGBHY = document.querySelector('.js-input-gbhy');

      if (subjectsList.length < 28) {
      const selectClass = sequenceArray[subjectsList.length + removedSubjects];

      subjectsList.push({
        subjectName,
        gradesBeforeHalfYear: inputGBHY.value,
        halfYearExamsGrades: inputHYEG.value,
        gradesAfterHalfYear: inputGAHY.value,
          classes:{ 
            className: `subject-${selectClass}`,
            firstInput: `input-${selectClass}-a`,
            secondInput: `input-${selectClass}-b`,
            thirdInput:`input-${selectClass}-c`,
            resultDiv: `average-div-${selectClass}`}
      });
      } else if (subjectsList.length === 28) {
        alert('لقد تجاوزت الحد الاقصى من المواد التي يمكنك اضافتها');
      }

      addingSubInput.value = '';
      inputGBHY.value = '';
      inputHYEG.value = '';
      inputGAHY.value = '';

      renderSubjectsList();
      updateInputsValue();

      }
    });
  });
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
const addSubInputGAHY = document.querySelector('.js-input-gahy');
    addSubInputGAHY.addEventListener('keydown', function(event){
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
  const inputGAHY = document.querySelector('.js-input-gahy');
  const inputHYEG = document.querySelector('.js-input-hyeg');
  const inputGBHY = document.querySelector('.js-input-gbhy');
         
  if (subjectsList.length < 28) {
    const selectClass = sequenceArray[subjectsList.length + removedSubjects];
  
  subjectsList.push({
    subjectName,
    gradesBeforeHalfYear: inputGBHY.value,
    halfYearExamsGrades: inputHYEG.value,
    gradesAfterHalfYear: inputGAHY.value,
    classes:{ 
      className: `subject-${selectClass}`,
      firstInput: `input-${selectClass}-a`,
      secondInput: `input-${selectClass}-b`,
      thirdInput:`input-${selectClass}-c`,
      resultDiv: `average-div-${selectClass}`}
  });
  } else if (subjectsList.length === 28) {
    alert('لقد تجاوزت الحد الاقصى من المواد التي يمكنك اضافتها');
  }
           
    addingSubInput.value = '';
    inputGBHY.value = '';
    inputHYEG.value = '';
    inputGAHY.value = '';

    renderSubjectsList();
    updateInputsValue();      
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      // Set the radio button based on saved value
      const selectedRadio = document.querySelector(`input[type="radio"][name="theme"][value="${savedTheme}"]`);
      if (selectedRadio) {
        selectedRadio.checked = true;
      }
      applyStyle(savedTheme); // Apply the style
    }
};

function updateInputsValue(){
  for (let i = 0; i < subjectsList.length; i++) {
    const subject = subjectsList[i];
      document.querySelector(`.${subject.classes.firstInput}`).value = subject.gradesBeforeHalfYear;
      document.querySelector(`.${subject.classes.secondInput}`).value = subject.halfYearExamsGrades;
      document.querySelector(`.${subject.classes.thirdInput}`).value = subject.gradesAfterHalfYear;
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
    function eachRow(firstInput, secondInput, thirdInput, averageDiv){
      const inputA = parseFloat(document.querySelector(`.${firstInput}`).value) || 0 ;
      const inputB = parseFloat(document.querySelector(`.${secondInput}`).value) || 0 ;
      const inputC = parseFloat(document.querySelector(`.${thirdInput}`).value) || 0 ;
      const sum = inputA + inputB + inputC;
      const average = Math.round( sum / 3);
      document.querySelector(`.${averageDiv}`).innerHTML = average;
    }
    for (let index = 0; index < subjectsList.length; index++){

      const firstInput = subjectsList[index].classes.firstInput;     
      const secondInput = subjectsList[index].classes.secondInput;
      const thirdInput = subjectsList[index].classes.thirdInput;
      const averageDiv = subjectsList[index].classes.resultDiv;
      eachRow(firstInput, secondInput, thirdInput, averageDiv);
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
    const inputsC = document.querySelectorAll('.js-grades-after-half-year');
     let sumC = 0;
       inputsC.forEach(input => {
         const value = parseFloat(input.value) || 0; 
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

    let text;
    let exemption;

    let thereIsExempition = `
    <p class="result-text">النتيجة!</p><p class="you-get">لقد حصلت على سعي:</p><p class="number-of-average">${finalAverage}</p><p class="you-have"><span class="first-word">مبروك! </span> لديك اعفاء عام</p><p class="you-have-second-paragraph">الاعفائات الفردية لديك: <span class="number-of-reached-sub">${reachedSubjects}</span></p><p class="statistics">الاحصائيات</p><ul class="statistics-list"><li>عدد دروسك: <span class="subjects-number">${subjectsList.length}</span></li><li>الاعفاء العام:<span class="statistics-numbers">نعم</span> </li><li>الاعفائات الفردية:<span class="statistics-numbers"> ${reachedSubjects}</span></li><li>الدروس التي ستمتحنها:<span class="statistics-numbers"> ${unreachedSubjects}</span></li><li>معدل السعي السنوي:<span class="statistics-numbers"> ${finalAverage}</span></li><li>اعلى درجة:<span class="statistics-numbers"> ${highestSubject}</span></li><li>اوطئ درجة:<span class="statistics-numbers"> ${lowestSubject}</span></li></ul><button class="reset-button-in-result">مسح النتيجة</button><button class="save-as-png" id="saveResultAsPNG">حفط كملف png</button><a class="view-in-table" id="viewInTable">عرض الاحصائيات في جدول</a><div id="statisticsTable"></div>`;
    let thereIsNoExempition = `
    <p class="result-text">النتيجة!</p><p class="you-get">لقد حصلت على سعي:</p><p class="number-of-average">${finalAverage}</p><p class="you-have"><span class="second-word">للأسف، </span> ليس لديك اعفاء عام</p><p class="you-have-second-paragraph">الاعفائات الفردية لديك: <span class="number-of-reached-sub">${reachedSubjects}</span></p><p class="statistics">الاحصائيات</p><ul class="statistics-list"><li>عدد دروسك: <span class="subjects-number">${subjectsList.length}</span></li><li>الاعفاء العام:<span class="statistics-numbers">كلا</span> </li><li>الاعفائات الفردية:<span class="statistics-numbers"> ${reachedSubjects}</span></li><li>الدروس التي ستمتحنها:<span class="statistics-numbers"> ${unreachedSubjects}</span></li><li>معدل السعي السنوي:<span class="statistics-numbers"> ${finalAverage}</span></li><li>اعلى درجة:<span class="statistics-numbers"> ${highestSubject}</span></li><li>اوطئ درجة:<span class="statistics-numbers"> ${lowestSubject}</span></li></ul><button class="reset-button-in-result">مسح النتيجة</button><button class="save-as-png" id="saveResultAsPNG">حفط كملف png</button><a class="view-in-table" id="viewInTable">عرض الاحصائيات في جدول</a><div id="statisticsTable"></div>
    `;

    
    if (finalAverage >= 85 && eachSubject.every(subject => subject >= 75)) {
      document.getElementById('resultDiv').innerHTML = thereIsExempition;
      text = '<p class="you-have"><span class="first-word">مبروك! </span> لديك اعفاء عام</p>';
      exemption = 'نعم';
      refreshTheme();
    } else if (finalAverage < 85 || eachSubject.some(subject => subject < 75)) {
      document.getElementById('resultDiv').innerHTML = thereIsNoExempition;
      exemption = 'كلا';
    text = '<p class="you-have"><span class="second-word">للأسف، </span> ليس لديك اعفاء عام</p>';
      refreshTheme();
    }
   
    
    

    const resetButtonInResult = document.querySelector('.reset-button-in-result');
      resetButtonInResult.addEventListener('click', function(){
        resetFunction();
      });
    
  // Anchor link for: "View Statistics in Table"
  const showTable =`
    <table>
        <thead>
          <th></th>
          <th>الاحصائية</th>
          <th>التفاصيل</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>عدد دروسك</td>
            <td>${subjectsList.length}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>الاعفاء العام</td>
            <td>${exemption}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>الاعفائات الفردية</td>
            <td>${reachedSubjects}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>معدل السعي السنوي</td>
            <td>${finalAverage}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>مجموع السعي السنوي</td>
            <td>${finalSum}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>الدروس التي ستمتحنها</td>
            <td>${unreachedSubjects}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>اعلى درجة</td>
            <td>${highestSubject}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>اوطئ درجة</td>
            <td>${lowestSubject}</td>
          </tr>
        </tbody>
      </table>
  `;
  
  const tableLink = document.getElementById('viewInTable');
    tableLink.addEventListener('click', function(){
      const tableDiv = document.getElementById('statisticsTable');
       tableDiv.innerHTML = showTable;
    })

    const saveResultButton = document.getElementById('saveResultAsPNG');
      saveResultButton.addEventListener('click', function(){
        window.location.href = `#viewSection`;
         const saveResultDiv = document.getElementById('saveResultDiv');
           saveResultDiv.innerHTML = `
            <div class="student-result-form" id="studentResultForm">
            <div class="title-div"><p class="form-title">نتيجة الاعفاء المدرسية</p></div>
            <hr class="line">
              <div class="information-grid">
                <p>اسم الطالب / الطالبة:</p>
                <input type="text">
                <p>الــصـــــــــــــــــــــــــف:</p>
                <input type="text">
                <p>الــــــــــــــمـدرســــــة:</p>
                <input type="text">
                <p>تــــــــاريـخ الـيـــــــوم:</p>
                <input type="date">
                <p>مـــــــلاحــــــــــــــظات:</p>
                <textarea></textarea>
              </div>
              <div class="result-div">
                <p class="result-text">النتيجة</p>
              <p class="you-get">لقد حصلت على سعي:</p>
              <p class="number-of-average">${finalAverage}</p>
              ${text}
              <p class="you-have-second-paragraph">الاعفائات الفردية لديك: <span class="number-of-reached-sub">${reachedSubjects}</span></p>
              <p class="statistics">الاحصائيات</p>
              ${showTable}
              <div class="page-footer">
                <p class="footer-paragraph">موقع نتيجتي لحساب الاعفاء</p>
                <img src="../img/achievement-award-medal-icon.svg" class="logo-img">
              </div>
              </div>
            </div>
            `;
            refreshTheme();
      document.getElementById('saveResultButtonDiv').innerHTML = `
      <button class="save-as-png save-as-png2" id="saveResultNow">حفط كملف png</button>
      `;
      refreshTheme();
      const saveResultNow = document.getElementById('saveResultNow');
      saveResultNow.addEventListener('click', function(){
        html2canvas(document.getElementById('saveResultDiv')).then(function(canvas) {
          // Create a link element
          const link = document.createElement('a');
          // Set the download attribute with a filename
          link.download = 'my-result.png';
          // Convert canvas to a data URL and set it as the href attribute
          link.href = canvas.toDataURL('image/png');
          // Append the link to the body
          document.body.appendChild(link);
          // Programmatically click the link to trigger the download
          link.click();
          // Remove the link after downloading
          document.body.removeChild(link);
        });
      })
    })
  }
  refreshTheme();
}

// Reset button :    
const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function(){
    resetFunction();
  });
  
let resetTexts = `
      <p class="result-text " id="resultText">النتيجة!</p>
      <div class="adding-grades-img-div">
        <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
      </div>
      <div>
        <p class="no-grades-text" id="noGradesText1">لم يتم ادخال اي درجات </p>
        <p class="no-grades-text" id="noGradesText2">يرجى ادخال جميع الدرجات المطلوبة لرؤية النتيجة</p>
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
    document.querySelectorAll('.sum-result').forEach(div => {
      div.innerHTML = 0;
    })
    document.querySelectorAll('.average-result').forEach(div => {
      div.innerHTML = 0;
    })
    document.getElementById('resultDiv').innerHTML = resetTexts;
  });
}

// Delete all subjects button :
const deleteAllSubjects = document.getElementById('deleteAllSubjects');
  deleteAllSubjects.addEventListener('click', function(){
    subjectsList.splice(0,subjectsList.length);
    document.querySelector('.js-div').innerHTML = `
    <div class="no-subjects">
      <p>لا توجد مواد دراسية متاحة. الرجاء إضافة مادة.</p>
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
  




