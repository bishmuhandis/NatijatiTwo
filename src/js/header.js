
document.getElementById('headerDiv').innerHTML = `
   <nav class="dark-color">
        <ul class="sidebar">
          <li  id="hideSidebar"><svg class="close-button" xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
          <li><a class="header-anchor nav-a messageUs" href="../pages/message-us.html" id="messageUs">راسلنا</a></li>
          <li><a class="header-anchor nav-a commonQuestions" href="../../index.html#common-questions-section" id="commonQuestions">الأسئلة الشائعة</a></li>
          <li><a class="header-anchor nav-a mainPage" href="../../index.html" id="mainPage">الصفحة الرئيسية</a></li>
        </ul>
        <ul>
          <li>
            <div class="left-section">
            <div>
              <img src="../img/achievement-award-medal-icon.svg" class="logo-image">
            </div>
            <div>
              <p class="title">نتيــــــــجتي</p>
            </div>
            </div>
          </li>
          <li class="hideOnMobile"><a class="header-anchor nav-a messageUs" href="../pages/message-us.html" id="messageUsB">راسلنا</a></li>
          <li class="hideOnMobile"><a class="header-anchor nav-a commonQuestions" href="../../index.html#common-questions-section" id="commonQuestionsB">الأسئلة الشائعة</a></li>
          <li class="hideOnMobile"><a class="header-anchor nav-a mainPage" href="../../index.html" id="mainPageB">الصفحة الرئيسية</a></li>
          <li class="button-li">
            <div class="calculate-button-header-div">
              <button class="calculate-button-header" id="headerButton">حساب الإعفاء</button>
            </div>
          </li>
          <li class="menu-button" id="showSiderbar"><svg xmlns="http://www.w3.org/2000/svg" height="46px" viewBox="0 -960 960 960" width="46px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
        </ul>
      </nav>
`;

document.getElementById('hideSidebar').addEventListener('click', function(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
 }
)
document.getElementById('showSiderbar').addEventListener('click', function(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
 }
)

document.querySelector('.calculate-button-header').addEventListener('click', function(){
  window.location.href = '../pages/calculating-type.html';
});
