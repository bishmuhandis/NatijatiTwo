document.getElementById('footerContainer').innerHTML =`
  <div class="footer-container" >
          <div class="footer-right">
            <div class="footer-right-top-div">
              <div><p class="social-media-title" id="toMessageUs">للتواصل معنا</p></div>
              <div class="sm-img-div"> <img src="../../assets/images/icons/email-icon.png" id="emailImg" class="email-img" width="100%" ></div>
              <div class="sm-img-div"> <img src="../../assets/images/icons/facebook-icon.png" id="facebookImg" class="facebook-img" target="_blank" width="100%" ></div>
              <div class="sm-img-div"><img src="../../assets/images/icons/telegram-icon.png" id="telegramImg" class="telegram-img" width="100%"></div>
              
            </div>
            <div class="links">
              <div>
                <a class="light-color" id="termsOfService">شروط الخدمة</a>
              </div>
              <div>
                <a id="privacyPolicy" class="light-color">سياسة الخصوصية</a>
              </div>
              <div>
                <a href="../../index.html#common-questions-section" class="light-color" id="commonQuesLink">الاسئلة الشائعة</a>
              </div>
              <div>
                <a href="../pages/message-us.html" class="light-color" id="toMessageUsLink">لمراسلتنا</a>
              </div>
              <div>
                <a href="../pages/calculating-type.html" class="light-color" id="calcExempt">حساب الاعفاء</a>
              </div>
            </div>
          </div>
         <div class="footer-left">
          <div>
            <div class="language" id="language-selector">
              <div class="choose-lang-container">
              <div id="langIcon"><img src="../../assets/images/icons/language-icon-blue.svg" class="lang-icon"></div>
                <p class="choose-lang" id="chooseLang">اخـتـيـار اللــــغة:</p>
                
              </div>
              <div class="languages-radios">
                <div>
                  <input class="radio" type="radio" name="language" value="arabic" id="arabic" checked>
                </div>
                <div>
                  <p class="arabic-paragraph light-color">العربية</p>
                </div>
                <div>
                  <input class="radio" type="radio" name="language" value="kurdish" id="kurdish">
                </div>
                <div>
                  <p class="kurdi-paragraph light-color">کوردی</p>
                </div>
                <div>
                  <input class="radio" type="radio" name="language" value="english" id="english">
                </div>
                <div>
                  <p class="english-paragraph light-color">English</p>
                </div>
              </div>
              </div>
            </div>
            <div class="theme">
              <div class="choose-theme-container">
              <div id="themeIcon"><img src="../../assets/images/icons/palette-icon-blue.svg" class="theme-icon"></div>
                <p class="choose-theme" id="changeTheme">تـغـيـيـر الـسـمـة:</p>
                
              </div>
              <div class="theme-radios">
                <div>
                  <input class="radio" type="radio" name="theme" value="style1" id="style1" checked>
                </div>
                <div>
                  <p class="blue-paragraph" id="blue" >ازرق</p>
                </div>
                <div>
                  <input class="radio" type="radio" name="theme" value="style2" id="style2">
                </div>
                <div>
                  <p class="pink-paragraph" id="pink">زهري</p>
                </div>
                <div>
                  <input class="radio" type="radio" name="theme" value="style3" id="style3">
                </div>
                <div>
                  <p class="green-paragraph" id="green">اخضر</p>
                </div>
                <div>
                  <input class="radio" type="radio" name="theme" value="style4" id="style4">
                </div>
                <div>
                  <p class="yellow-paragraph" id="yellow">اصفر</p>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div class="footer-section-two">
            <div class="copyright-div">
              <p class="copyright-paragraph">
                &#169;2024 Natigati Website. All Rights Reserved.
              </p>
            </div>
            <div class="top-button">         
                <img src="../../assets/images/icons/arrow_upward_icon.svg" class="arrow-button" id="top-of-page" onclick="
                  window.location.href = '#top-of-page'
                  ">          
            </div>
          </div>
          <div id="privacyPolicyDiv"></div>
          <div id="termsOfServiceDiv"></div>
`;



// - - - - - - - - - - - - Language Settings - - - - - - - - - - - 
// Language content object
const languageContent = {
  arabic: {
    headerButton: 'حساب الاعفاء',
    mainPage: 'الصفحة الرئيسية',
    commonQuestions: 'الاسئلة الشائعة',
    messageUs: 'راسلنا',
    pageTitle: 'مرحبا بكم في موقع نتيجتي لحساب ',
    word1: 'الاعفاء',
    secondParagraph: 'كل ما تحتاج معرفته عن الإعفاء!',
    button: 'قم بحساب الاعفاء الآن!',
    calcQues: 'ماذا تريد أن تحسب؟',
    finalResultTitle: 'حساب الاعفاء',
    unknownMarksTitle: 'حساب الدرجات المطلوبة',
    finalResultDetails: 'من هنا يمكنك معرفة اذا ما كنت معفي أم لا ويشمل ذلك الإعفاء العام والإعفائات الفردية، حيث يتم حساب السعي السنوي لكل مادة بالإضافة الى معدل السعي السنوي ',
    unknownMarksDetails: 'هنا يمكنك معرفة الحد الأدنى من الدرجات التي يجب عليك الحصوول عليها في كل مادة في الفصل الثاني من المرحلة الدراسية لتتمكن من الحصول على الإعفاء',
    commonQuesTitle: 'الاسئلة الشائعة',
    quesOne: 'ما هو الاعفاء؟',
    ansOne: 'الاعفاء هو أن تعفى من حضور الامتحانات النهائية سواء كان ذلك بعدة مواد (اعفاء فردي) او بجميع المواد (اعفاء عام ) ، وعندما تحصل على إعفاء بكل الدروس تكون قد عبرت الى المرحلة الدراسية القادمة ، والإعفاء يشمل المراحل الدراسية غير المنتهية فقط',
    quesTwo: 'كيف اعرف اني معفي؟',
    ansTwo: 'بالنسبة للاعفاء الفردي يجب ان لا يقل سعي المادة عن 90 درجة، حيث يكون مجموع درجة الفصل الأول ونصف السنة والفصل الثاني لا يقل عن 270 درجة. اما بالنسبة للإعفاء العام فيجب ان لا يقل معدل السعي عن 85 درجة شرط ان لا يقل سعي اي مادة عن 75 درجة.  يمكنك تجربة موقعنا لحساب الإعفاء، كل ما عليك هو ملئ الخانات بالدرجات ثم سيتم تحديد ما اذا كنت معفيا أم لا.',
    quesThree: 'ما الفرق بين الاعفاء العام والاعفاء الفردي؟',
    ansThree: 'الإعفاء العام هو ان تعفى في جميع المواد أما الإعفاء الفردي فهو اعفاء بمادة واحدة أو عدة مواد',
    quesFour: 'ما فائدة الاعفاء؟',
    ansFour: 'بواسطة الاعفاء العام يمكنك العبور للمرحلة الدراسية التالية في وقت مبكر دون الحاجة لأداء الإمتحانات النهائية، وهذا سيزيد من مدة العطلة الصيفية بحوالي شهر على الأقل، أما بالنسبة للاعفائات الفردية فيمكن ان تستفيد منها للتركيز على باقي الإمتحانات حيث ستوفر لك وقت اضافي لمراجعتها',
    quesFive: 'كيف اقوم بتحصيل الاعفاء؟',
    ansFive: 'يعتمد حصولك على الاعفاء على درجة الفصل الأول ونصف السنة والفصل الثاني، فبالنسبة للاعفاء الفردي يجب ان لا يقل سعي المادة عن 90 درجة، اما الاعفاء العام يجب ان لا يقل معدل السعي السنوي عن 85 درجة شرط ان لا تقل اي مادة عن 75 درجة',
    quesSix: 'كيف اقوم بحساب الاعفاء؟',
    ansSix: 'بالنسبة للإعفاء الفردي يجب ان تجمع درجة الفصل الأول ونصف السنة والفصل الثاني، ويجب ان لا يقل مجموعهم عن 270 درجة بحيث يتم تقسيمهم على 3 فيكون سعي المادة لا يقل عن 90 درجة، وبهذا تكون قد عفيت من المادة. أما الإعفاء العام فيجب عليك حساب معدل السعي السنوي وذلك من خلال جمع سعيات جميع المواد ثم تقسيم الناتج على عدد المواد، عندها يجب أن لا يقل معدل السعي عن 85 درجة شرط ان لا يقل سعي اي مادة عن 75 درجة، وهكذا تكون قد عفيت بكل المواد اعفاء عام',
    quesSeven: 'ما هي المراحل المشمولة بالاعفاء؟',
    ansSeven: 'المراحل المشمولة هي المراحل غير المنتهية وهي الأول المتوسط والثاني المتوسط والرابع الاعدادي والخامس الاعدادي، اي ان المراحل الوزارية غير مشمولة وهي الثالث المتوسط والسادس الاعدادي',
    noteFirstSec: 'اذا كنت تريد طرح المزيد من الأسئلة او تريد التبليغ عن خطأ أو بعض الملاحظات يرجى مراسلتنا من خلال ',
    noteSecondSec: 'الضغط هنا',
    noteThirdSec: 'نستقبل كافة الآراء والملاحظات',
    messageUsTitle: 'اذا كنت تريد طرح المزيد من الأسئلة والإستفسارات أو لطرح آرائكم وملاحظاتكم فلا تترددوا لمراسلتنا',
    messageUsButton: 'صفحة المراسلة',
    toMessageUs: 'للتواصل معنا',
    goUp: 'العودة لأعلى',
    chooseLang: 'اختيار اللغة',
    changeTheme: 'تغيير السمة',
    blue: 'ازرق',
    pink: 'زهري',
    green: 'اخضر ',
    yellow: 'اصفر',
    linksTitle: 'روابط',
    termsOfService: 'شروط الخدمة',
    privacyPolicy: 'سياسة الخصوصية',
    commonQuesLink: 'الاسئلة الشائعة',
    toMessageUsLink: 'لمراسلتنا',
    calcExempt: 'حساب الاعفاء',
    customerServicePart1: 'هل تواجه اي مشكلة؟',
    customerServicePart2: 'لا تتردد لمراسلتنا عند الحاجة، اخبرنا بكل ما تريد قوله!',
    messageUsPageTitle: 'صفحة المراسلة',
    MUTitlePart1: 'يمكنك مراسلتنا من خلال كتابة رسالة بواسطة',
    MUTitlePart2: 'كما موضح ادناه ، أو يمكنك مراسلتنا من خلال مواقع التواصل الاجتماعي مثل صفحتنا على',
    emailAnchorLink: 'البريد الالكتروني',
    facebookAnchorLink: 'الفيسبوك',
    schoolImgText: 'لا تترددوا لمراسلتنا، نحن ننتظر رسائلكم، وجاهزون لبذل ما بوسعنا لتقديم المساعدة',
    sendTitle: 'ارسال رسالة عبر البريد الالكتروني',
    sPersonName: 'اسم المرسل:',
    sPersonEmail: 'البريد الالكتروني:',
    sPersonSubjcet: 'الموضوع:',
    sPersonMessage: 'الرسالة:',
    sendButton: 'ارسال',
    placeholderName: 'اسمك(مطلوب)',
    placeholderEmail: 'عنوان بريدك الالكتروني (مطلوب)',
    placeholderSubject: 'موضوعك',
    placeholderMessage: 'الرسالة',
    welcomeCalcTheExempition: 'مرحبا بكم في صفحة حساب الاعفاء',
    HTUTitle: 'كيفية الاستخدام:',
    explainCalcExempition: `<li>تحديد المواد: اختر المواد التي من ضمن منهجك من خلال الضغط على "اختيار مادة" لاختيار المواد، ان كانت هناك مادة لا تريدها يمكنك حذفها من خلال زر الحذف، وفي حال عدم وجود مواد معينة يمكنك اضافتها من خلال كتابة اسم المادة ثم النقر على زر الاضافة.</li><li>ادخال الدرجات: بعد اختيار المواد، قم بادخال الدرجات في كل مادة من الحقول الثلاثة</li><li>الحساب: بعد داخال الدرجات انقر على الزر "احسب" ليتم حساب سعي كل مادة في الحقل الرابع واظهار النتيجة، اذا كانت الدرجة باللون الاخضر فلديك اعفاء فردي بتلك المادة وعندما يكون اللون احمر فلا يوجد اعفاء فردي واعفاء عام وعندما تكون باللون الاصفر فلا يوجد اعفاء فردي مع امكانية تحصيل الاعفاء العام</li><li> وعند النقر على احسب ستظهر النتيجة، التي ستقول لك ما اذا كنت معفي ام لا بالاضافة الى اللاحصائيات </li><li> يمكنك مسح النتيجة من خلال النقر على "مسح النتيجة" ويمكنك حفظهامن خلال الضغط على "حفظ كملف png"</li>`,
    AddSubjectP: 'اضافة مادة',
    mainSubjectNameP: 'اسم المادة',
    GBHYTitle: 'درجة الفصل الاول',
    HYEGTitle: 'درجة امتحان نصف السنة',
    GAHYTitle: 'درجة الفصل الثاني',
    paragraphTitle4: 'معدل السعي السنوي',
    sumText: 'المجموع',
    AverageText: 'المعدل',
    resetButton: 'مسح النتيجة',
    calculatingButton: 'احسب',
    deleteAllButton: 'حذف المواد',
    noSubjectsText: 'لا توجد مواد دراسية متاحة. الرجاء إضافة مادة.',
    chooseSubjectP: 'اختيار مادة',
    resultText: 'النتيجة!',
    noGradesText1: 'لم يتم ادخال اي درجات',
    noGradesText2: 'يرجى ادخال جميع الدرجات المطلوبة لرؤية النتيجة',
    welcomeCalcRequired: 'مرحبا بكم في صفحة حساب الدرجات المطلوبة',
    explainCalaRequired: '<li>تحديد المواد: اختر المواد التي من ضمن منهجك من خلال الضغط على "اختيار مادة" لاختيار المواد، ان كانت هناك مادة لا تريدها يمكنك حذفها من خلال زر الحذف، وفي حال عدم وجود مواد معينة يمكنك اضافتها من خلال كتابة اسم المادة ثم النقر على زر الاضافة.</li><li>ادخال الدرجات: بعد اختيار المواد، قم بادخال الدرجات في كل مادة في الحقلين</li><li>الحساب: بعد داخال الدرجات انقر على الزر "احسب" ليتم حساب سعي كل مادة والدرجات التي تحتاجها في الفصل الثاني واظهار الاحصائيات اذا كانت الدرجة باللون الاخضر فلديك اعفاء فردي بتلك المادة وعندما يكون اللون احمر فلا يوجد اعفاء فردي واعفاء عام وعندما تكون باللون الاصفر فلا يوجد اعفاء فردي مع امكانية تحصيل الاعفاء العام</li>',
    statistics: 'الاحصائيات!',
    statisticsText1: 'لم يتم ادخال اي درجات',
    statisticsText2: 'يرجى ادخال جميع الدرجات المطلوبة لرؤية الاحصائيات',
    chooseList: `<section id="chooseSubectsSection">
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
    </section>`,
    resultTexts: `<p class="result-text " id="resultText">النتيجة!</p>
      <div class="adding-grades-img-div">
        <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
      </div>
      <div>
        <p class="no-grades-text" id="noGradesText1">لم يتم ادخال اي درجات </p>
        <p class="no-grades-text" id="noGradesText2">يرجى ادخال جميع الدرجات المطلوبة لرؤية النتيجة</p>
      </div>`,
      statisticsText: `
      <p class="result-text" id="statistics">الاحصائيات!</p>
<div class="adding-grades-img-div">
  <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
</div>
<div>
  <p class="no-grades-text" id="statisticsText1">لم يتم ادخال اي درجات </p>
  <p class="no-grades-text" id="statisticsText2">يرجى ادخال جميع الدرجات المطلوبة لرؤية الاحصائيات</p>
</div>
`
  },
  kurdish: {
    headerButton: 'حسابی لێخۆشبوون',
    mainPage: 'ماڵپەڕی سەرەکی',
    commonQuestions: 'پرسیارە باوەکان',
    messageUs: 'پەیوەندیمان پێوەبکە',
    pageTitle: 'بەخێربێن بۆ ماڵپەڕی ناتیجاتی بۆ حیسابکردنی ',
    word1: 'لێخۆشبوونەکە',
    secondParagraph: 'هەموو شتێک کە پێویستە بزانیت دەربارەی لێخۆشبوونەکە!',
    button: 'ئێستا لێخۆشبوونەکە حیساب بکە!',
    calcQues: 'دەتەوێت چی حیساب بکەیت؟',
    finalResultTitle: 'حسابی لێخۆشبوون',
    unknownMarksTitle: 'حیسابکردنی نمرەی پێویست',
    finalResultDetails: 'لێرەوە دەتوانیت بزانیت کە ئایا تۆ بەخشراویت یان نا ئەمەش لێخۆشبوونی گشتی و لێخۆشبوونی تاکەکەسی دەگرێتەوە، کە تێیدا بەدواداچوونی ساڵانەی هەر بابەتێک جگە لە ڕێژەی بەدواداچوونی ساڵانە حیسابی بۆ دەکرێت',
    unknownMarksDetails: 'لێرەدا دەتوانیت کەمترین نمرەکان بزانیت کە دەبێت لە هەر بابەتێکدا بەدەستی بهێنیت لە وەرزی دووەمی قۆناغی خوێندندا بۆ ئەوەی بتوانیت لێخۆشبوونەکە بەدەستبهێنیت',
    commonQuesTitle: 'پرسیارە باوەکان',
    quesOne: 'لێخۆشبوون چییە؟',
    ansOne: 'لێخۆشبوون بریتییە لە ئامادەبوون لە تاقیکردنەوەکانی کۆتایی، جا بۆ چەند بابەتێک بێت (لێخۆشبوونی تاکەکەسی) یان بۆ هەموو بابەتەکان (بەخشینی گشتی) کاتێک لێخۆشبوونێک بۆ هەموو وانەکان بەدەست دەهێنیت، ئەوا بۆ قۆناغی خوێندنی داهاتوو تێپەڕیت، و لێخۆشبوونەکەش دەگرێتەوە تەنها قۆناغە ئەکادیمییە تەواونەکراوەکان.',
    quesTwo: "چۆن بزانم کە لێخۆش بووم؟",
    ansTwo: 'بۆ لێخۆشبوونی تاکەکەسی، دەبێت خولەکە بەلایەنی کەمەوە ٩٠ پلە بێت، کۆی گشتی نمرەکانی وەرزی یەکەم و نیو ساڵ و وەرزی دووەم لە ٢٧٠ پلە کەمتر نەبێت. سەبارەت بە لێخۆشبوونی گشتی، تێکڕای شوێنکەوتن نابێت لە ٨٥ پلە کەمتر بێت، بە مەرجێک بەدواداچوون بۆ هەر بابەتێک لە ٧٥ پلە کەمتر نەبێت. دەتوانن ماڵپەڕەکەمان تاقی بکەنەوە بۆ حیسابکردنی لێخۆشبوونەکە تەنها پێویستە مەیدانەکان پڕبکەنەوە بە نمرەکان و دواتر دیاری دەکرێت کە ئایا تۆ لێخۆشبوونت یان نا.',
    quesThree: 'جیاوازی نێوان لێخۆشبوونی گشتی و لێخۆشبوونی تاکەکەسی چییە؟',
    ansThree: 'لێخۆشبوونی گشتی لە هەموو بابەتەکان بەخشراوە، لە کاتێکدا لێخۆشبوونی تاکەکەسی لە بابەتێک یان چەند بابەتێک بەخشراوە.',
    quesFour: 'سوودی لێخۆشبوون چییە؟',
    ansFour: 'لەگەڵ لێخۆشبوونی گشتیدا دەتوانیت زوو تێپەڕیت بۆ قۆناغی خوێندنی داهاتوو بەبێ ئەوەی پێویست بکات تاقیکردنەوەکانی کۆتایی ئەنجام بدەیت و بەمەش ماوەی پشووی هاوینە لانیکەم مانگێک زیاد دەکات سەبارەت بە لێخۆشبوونی تاکەکەسی، دەتوانیت سوودیان لێ وەربگریت بۆ ئەوەی سەرنجت لەسەر باقی تاقیکردنەوەکان بێت، چونکە کاتێکی زیاترت بۆ دابین دەکات بۆ پێداچوونەوەیان.',
    quesFive: 'چۆن لێخۆشبوونەکە کۆبکەمەوە؟',
    ansFive: 'لێخۆشبوونەکەت بەندە بە نمرەی وەرزی یەکەم و نیوەی ساڵ و وەرزی دووەم بۆ لێخۆشبوونی تاکەکەسی نابێت نمرەی بابەتەکە لە ٩٠ نمرە کەمتر بێت سەبارەت بە لێخۆشبوونی گشتی نابێت تێکڕای نمرەی ساڵانە کەمتر بێت لە 85 نمرە، بە مەرجێک هەر بابەتێک لە 75 نمرە کەمتر نەبێت.',
    quesSix: 'چۆن لێخۆشبوونەکە حیساب بکەم؟',
    ansSix: "بۆ لێخۆشبوونی تاکەکەسی، پێویستە نمرەکانی وەرزی یەکەم و نیو ساڵ و وەرزی دووەم کۆبکەیتەوە و کۆی گشتییان لە ٢٧٠ نمر کەمتر نەبێت، دابەشکراوە بەسەر ٣، بەجۆرێک کە بەدواداچوونی بابەتەکە لە ٩٠ کەمتر نەبێت نمرەکان، و بەم شێوەیە لە بابەتەکە بەخشراو دەبیت. سەبارەت بە لێخۆشبوونی گشتی، دەبێت ڕێژەی بەدواداچوونی ساڵانە بە کۆکردنەوەی شوێنکەوتنی هەموو بابەتەکان و پاشان دابەشکردنی ئەنجامەکە بەسەر ژمارەی بابەتەکاندا حیسابی بۆ بکەیت، ئەوا ڕێژەی بەدواداچوونەکە نابێت لە ٨٥ پلە کەمتر بێت، بە مەرجێک بەدواداچوون بۆ هەر بابەتێک لە ٧٥ پلە کەمتر نییە، و بەم شێوەیە لە هەموو بابەتەکان بەخشراو دەبیت،",
    quesSeven: 'ئەو قۆناغانە چین کە لێخۆشبوونەکە دەیگرێتەوە؟',
    ansSeven: 'قۆناغەکانی وەرگیراو بریتین لە قۆناغە تەواونەکراوەکان، کە بریتین لە قۆناغی ناوەندی یەکەم، ناوەندی دووەم، ناوەندی چوارەم و ناوەندی پێنجەم، واتە قۆناغە وەزارییەکان نەخراونەتە ناوەوە، کە بریتین لە قۆناغی نێوان سێیەم و ناوەندی شەشەم.',
    noteFirstSec: 'ئەگەر دەتەوێت پرسیاری زیاتر بکەیت یان دەتەوێت هەڵەیەک یان هەندێک سەرنج ڕابگەیەنیت، تکایە پەیوەندیمان پێوە بکە لە ڕێگەی',
    noteSecondSec: 'کرتەی ئێرە بکە,',
    noteThirdSec: 'هەموو بۆچوون و سەرنجێکمان پێدەگات',
    messageUsTitle: 'ئەگەر دەتەوێت پرسیار و پرسیاری زیاتر بکەیت یان بۆچوون و سەرنجەکانت دەرببڕیت، دوودڵ مەبە لە نووسین بۆمان.',
    messageUsButton: 'لاپەڕەی نامەنووسی',
    toMessageUs: 'بۆ پەیوەندیکردن بە ئێمەوە',
    goUp: 'گەڕانەوە بۆ سەرەوە',
    chooseLang: 'زمان هەڵبژێرە',
    changeTheme: 'گۆڕینی بابەت',
    blue: 'شین',
    pink: 'پەمبە',
    green: 'سەوز',
    yellow: 'سەوز',
    linksTitle: 'بەستەرەکان',
    termsOfService: 'مه‌رجه‌کانی خزمه‌تگوزاری',
    privacyPolicy: 'سیاسەتی پاراستنی نهێنی',
    commonQuesLink: 'پرسیارە باوەکان',
    toMessageUsLink: 'بۆ ئەوەی بۆمان بنووسێت',
    calcExempt: 'حسابی لێخۆشبوون',
    customerServicePart1: 'ئایا ڕووبەڕووی هیچ کێشەیەک بویتەوە؟',
    customerServicePart2: 'دوودڵ مەبە لە کاتی پێویستدا بۆمان بنووسە، هەموو شتێکمان پێ بڵێ کە دەتەوێت بیڵێیت!',
    messageUsPageTitle: 'لاپەڕەی نامە ناردن',
    MUTitlePart1: 'دەتوانن پەیوەندیمان پێوە بکەن بە نووسینی نامە لە ڕێگەی',
    MUTitlePart2: 'وەک لە خوارەوە دیارە، یان دەتوانن لە ڕێگەی تۆڕە کۆمەڵایەتییەکانی وەک پەیجەکەمانەوە بۆمان بنووسن لە',
    emailAnchorLink: 'ئیمەیڵ',
    facebookAnchorLink: 'فەیسبووک',
    schoolImgText: 'دوودڵ مەبن لە نوسین بۆ ئێمە، چاوەڕێی پەیامەکانتانین، و ئامادەین هەموو هەوڵێکمان بدەین بۆ پێشکەشکردنی هاوکاری',
    sendTitle: 'لە ڕێگەی ئیمەیڵەوە نامە بنێرە',
    sPersonName: 'ناوی نێرەر:',
    sPersonEmail: 'ئیمەیڵ:',
    sPersonSubjcet: 'بابەتەکە:',
    sPersonMessage: 'نامەكە:',
    sendButton: 'ناردن',
    placeholderName: 'ناوی تۆ (پێویستە)',
    placeholderEmail: 'ناونیشانی ئیمەیڵەکەت (پێویستە)',
    placeholderSubject: 'بابەتەکەت',
    placeholderMessage: 'نامەكە',
    welcomeCalcTheExempition: 'بەخێربێن بۆ پەیجی ئەکاونتی لێخۆشبوون',
    HTUTitle: 'چۆن بەكار دەهێنرێت:',
    explainCalcExempition: `<li>بابەتەکان هەڵبژێرە: ئەو بابەتانە هەڵبژێرە کە بەشێکن لە مەنهەجەکەت بە کرتەکردن لەسەر “بابەتێک هەڵبژێرە” بۆ هەڵبژاردنی بابەتەکان ئەگەر بابەتێک هەبوو کە تۆ ناتەوێت، دەتوانیت بە بەکارهێنانی دوگمەی سڕینەوە بیسڕیتەوە هیچ بابەتێکی دیاریکراو نین، دەتوانیت زیادیان بکەیت بە نووسینی ناوی بابەتەکە و پاشان کلیک لەسەر دوگمەی زیادکردن بکە.</li><li>داخڵکردنی نمرەکان: دوای هەڵبژاردنی بابەتەکان، لە سێ بوارەکەوە نمرەکانی هەر بابەتێک داخڵ بکە</li><li> حیسابکردن: دوای داخڵکردنی نمرەکان، کلیک لەسەر دوگمەی “حیسابکردن” بکە بۆ حیسابکردنی شوێنکەوتنی هەر بابەتێک لە بواری چوارەم و پیشاندانی ئەنجامەکە ئەگەر نمرەکە بە ڕەنگی سەوز بوو، ئەوا لێخۆشبوونی تاکەکەسیت هەیە بۆ ئەو بابەتە، و کاتێک ڕەنگەکە سوورە، هیچ لێخۆشبوونێکی تاکەکەسی و لێخۆشبوونی گشتی نییە، کاتێکیش بە ڕەنگی زەرد بێت، هیچ لێخۆشبوونێکی تاکەکەسی نییە لەگەڵ ئەگەری بەدەستهێنانی لێخۆشبوونی گشتی</li><li> کاتێک کلیک لەسەر Calculate دەکەیت ئەنجامەکە دەردەکەوێت، کە پێت دەڵێت جگە لە ئامارەکان لێخۆشبوونت یان نا. </li><li> دەتوانیت ئەنجامەکە پاک بکەیتەوە بە کرتەکردن لەسەر "Clear Result" و دەتوانیت بە کلیککردن لەسەر "Save as png" سەیڤی بکەیت. </li>`,
    statistics: 'ئامارەکان!',
    statisticsText1: 'هیچ نمرەیەک داخڵ نەکراوە',
    statisticsText2: 'تکایە هەموو نمرە پێویستەکان داخڵ بکە بۆ بینینی ئامارەکان',
    AddSubjectP: 'شتێک زیاد بکە',
    mainSubjectNameP: 'ناوی بابەت',
    GBHYTitle: 'پۆلی وەرزی یەکەم',
    HYEGTitle: 'تاقیکردنەوەی ناوەڕاستی ساڵ',
    GAHYTitle: 'پۆلی وەرزی دووەم',
    paragraphTitle4: 'رادةى مامناوةند',
    sumText: 'کۆی گشتی',
    AverageText: 'رادةى مامناوةند',
    resetButton: 'ئەنجامەکە پاک بکەرەوە',
    calculatingButton: 'حیساب بکە',
    deleteAllButton: 'سڕینەوەی مادەکان',
    noSubjectsText: 'هیچ کەرەستەیەکی خوێندن لەبەردەستدا نییە. تکایە بابەتێک زیاد بکەن.',
    chooseSubjectP: 'ماددەیەک هەڵبژێرە',
    resultText: 'ئەنجامەکە!',
    noGradesText1: 'هیچ نمرەیەک داخڵ نەکراوە',
    noGradesText2: 'تکایە هەموو نمرە پێویستەکان داخڵ بکە بۆ بینینی ئەنجامەکە',
    welcomeCalcRequired: 'بەخێربێن بۆ پەیجی حیسابکردنی نمرەی پێویست',
    explainCalaRequired: '<li>دیارکردنی مادەکان: هەڵبژێرەوە مادەکانی داخل ئەو بەرنامەیە کە لە سەلمەکەیت هەبوون لە ژێر کردنی "هەڵبژێرە مادە"، دەتوانی مادەیەکی نادیار بسڕیتەوە لە ژێر کردنی سڕینەوە، و ئەگەر مادەێک بەرزیت بەرەوی دەکات دەتوانی ئەوە بەرز بکەیت لە ژێر نووسینی ناوی مادە و کرتە بکە بەرەوەی زەرەری زیادکردن.</li><li>ناردنی نمرەکان: پاش هەڵبژێردنی مادەکان، نمرەکانت دابنێ لە هەر مادەیەک لە خانەکان.</li><li>بەرزبینی: پاش ناردنی نمرەکان کرتە بکە لەسەر زەرەر "بەرزبینی" بۆ بەرزبینی ئەمرەکانی هەر مادە و نمرەیەکەی پێویستت بۆ خوێندنەوەی دوایین و پیشاندانی ئامارەکان، ئەگەر نمرە بە رەنگی سەوزە دا هەبێت ئەوا ئەوە بەرزی تایبەتی بۆ ئەو مادە و بە رەنگی سۆرۆک ئەگەر نەبێت بەرزی تایبەتی هەبێت و چەندە رەنگی زەرەر دا هەبێت بەرزی تایبەتی یەکەم</li>',
    chooseList: `<section id="chooseSubectsSection">
    <div class="choose-subjects-div">
        <p class="choose-title">دەستەوورەکانیت هەڵبژێرە بۆ پەڕەیەکی بڵاوکردن</p>
        <div class="choose-subjects-grid">
            <p>ئەدەبی عیسلامی</p>
            <input type="checkbox" class="c-box" data-name="ئەدەبی عیسلامی">
            <p>زمانی عەرەبی</p>
            <input type="checkbox" class="c-box" data-name="زمانی عەرەبی">
            <p>زمانی ئینگلیزی</p>
            <input type="checkbox" class="c-box" data-name="زمانی ئینگلیزی">
            <p>زمانی کوردی</p>
            <input type="checkbox" class="c-box" data-name="زمانی کوردی">
            <p>زمانی فەرەنسی</p>
            <input type="checkbox" class="c-box" data-name="زمانی فەرەنسی">
            <p>ریاضیات</p>
            <input type="checkbox" class="c-box" data-name="ریاضیات">
            <p>شیمیا</p>
            <input type="checkbox" class="c-box" data-name="شیمیا">
            <p>زانستی حیاتیات</p>
            <input type="checkbox" class="c-box" data-name="زانستی حیاتیات">
            <p>فیزیک</p>
            <input type="checkbox" class="c-box" data-name="فیزیک">
            <p>زانستی زمین</p>
            <input type="checkbox" class="c-box" data-name="زانستی زمین">
            <p>فێلسۆفی و ئەلمانیی کۆمەڵایەتی</p>
            <input type="checkbox" class="c-box" data-name="فێلسۆفی و ئەلمانیی کۆمەڵایەتی">
            <p>سۆشیالیزم</p>
            <input type="checkbox" class="c-box" data-name="سۆشیالیزم">
            <p>تاریخ</p>
            <input type="checkbox" class="c-box" data-name="تاریخ">
            <p>جیئەوزە</p>
            <input type="checkbox" class="c-box" data-name="جیئەوزە">
            <p>نەتەواری</p>
            <input type="checkbox" class="c-box" data-name="نەتەواری">
            <p>بازاریات</p>
            <input type="checkbox" class="c-box" data-name="بازاریات">
            <p>کۆمپیوتەر</p>
            <input type="checkbox" class="c-box" data-name="کۆمپیوتەر">
            <p>مۆسیقا</p>
            <input type="checkbox" class="c-box" data-name="مۆسیقا">
            <p>هونەری ئەندازیاری</p>
            <input type="checkbox" class="c-box" data-name="هونەری ئەندازیاری">
            <p>ئامێری ریاضی</p>
            <input type="checkbox" class="c-box" data-name="ئامێری ریاضی">
            </div>
            <div class="choose-button">
                <button id="chooseSubjectButton" class="choose-subject-button">تایبەتکردن</button>
            </div>
            </div>
            </section>
            `,
            resultTexts: `<p class="result-text" id="resultText">ئەنجام!</p>
            <div class="adding-grades-img-div">
              <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
            </div>
            <div>
              <p class="no-grades-text" id="noGradesText1">هیچ نرخێك دانراو نییە</p>
              <p class="no-grades-text" id="noGradesText2">تكایە هەموو نرخەكانی پێویستە داخڵ بکە بۆ ئەوەی ئەنجام ببینیت</p>
            </div>
            `,
            statisticsText: `<p class="result-text" id="statistics">ئامار!</p>
<div class="adding-grades-img-div">
  <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
</div>
<div>
  <p class="no-grades-text" id="statisticsText1">هیچ نمرێك نه‌دراوه‌ </p>
  <p class="no-grades-text" id="statisticsText2">تكایه‌ هه‌موو نمره‌كانی پێویست وه‌ربگره‌ بۆ سه‌یركردنی ئامار</p>
</div>
`
  },
  english: {
    headerButton: 'Exemption',
    mainPage: 'Main Page',
    commonQuestions: 'Common Questions',
    messageUs: 'Message us',
    pageTitle: 'Welcome to Natijati Website for Calculating the ',
    word1: 'Exemption',
    secondParagraph: 'Everything you need to know about the exemption!',
    button: 'Calculate your exemption now!',
    calcQues: 'What do you want to calculate?',
    finalResultTitle: 'Calculating Exemption',
    unknownMarksTitle: 'Calculate required grades',
    finalResultDetails: 'From here you can find out whether you are exempt or not, including the general exemption and individual exemptions, where the annual pursuit of each subject is calculated in addition to the annual pursuit rate',
    unknownMarksDetails: 'Here you can find out the minimum grades that you must obtain in each subject in the second semester of the academic stage in order to be able to obtain the exemption',
    commonQuesTitle: 'Common Questions',
    quesOne: 'What is an exemption?',
    ansOne: 'Exemption is to be exempted from attending final exams, whether for several subjects (individual exemption) or for all subjects (general exemption), and when you obtain an exemption for all lessons, you will have passed to the next academic stage, and the exemption includes unfinished academic stages only',
    quesTwo: "How do I know I'm exempt?",
    ansTwo: 'For the individual exemption, the course must be at least 90 degrees, with the total score for the first semester, the half-year, and the second semester being no less than 270 degrees.As for the general exemption, the subject average must not be less than 85 degrees, provided that the average of any subject is not less than 75 degrees. You can try our website to calculate the exemption. All you have to do is fill in the fields with grades and then it will be determined whether you are exempt or not',
    quesThree: 'What is the difference between general exemption and individual exemption?',
    ansThree: 'The general exemption is to be exempted from all subjects, while the individual exemption is to be exempted from one or several subjects',
    quesFour: 'What is the benefit of the exemption?',
    ansFour: 'With the general exemption, you can pass to the next academic stage early without the need to take the final exams, and this will increase the duration of the summer vacation by at least a month. As for the individual exemptions, you can benefit from them to focus on the rest of the exams, as it will provide you with additional time to review them',
    quesFive: 'How do I collect the exemption?',
    ansFive: 'Your exemption depends on the grade of the first semester, the half-year, and the second semester. For the individual exemption, the subject average must not be less than 90 degrees. As for the general exemption, the annual subject average must not be less than 85 degrees, provided that no subject is less than 75 degrees',
    quesSix: 'How do I calculate the exemption?',
    ansSix: "With regard to the individual exemption, you must combine the grades of the first semester, the half-year, and the second semester, and their sum must not be less than 270 grades, divided by 3, so that the subject's average is not less than 90 grades, and thus you will be exempted from the subject. As for the general exemption, you must calculate the average of all subjects averages and then dividing the result by the number of subjects. Then the averagw must not be less than 85 degrees, provided that the average of any subject is not less than 75 degrees, and thus you will be exempted from all subjects General exemption",
    quesSeven: 'What are the stages covered by the exemption?',
    ansSeven: 'The stages included are the unfinished stages, which are the first intermediate, the second intermediate, the fourth intermediate, and the fifth intermediate, meaning that the ministerial stages are not included, which are the third intermediate and the sixth intermediate',
    noteFirstSec: 'If you want to ask more questions or want to report an error or some comments, please write to us by',
    noteSecondSec: 'clicking here',
    noteThirdSec: 'We receive all opinions and comments',
    messageUsTitle: 'If you want to ask more questions and inquiries or to express your opinions and comments, do not hesitate to write to us.',
    messageUsButton: 'Message page',
    toMessageUs: 'To Contact Us',
    goUp: 'Back to top',
    chooseLang: 'Select Language',
    changeTheme: 'Change theme',
    blue: 'Blue',
    pink: 'Pink',
    green: 'Green',
    yellow: 'Yellow',
    linksTitle: 'Links',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    commonQuesLink: 'Common Questions',
    toMessageUsLink: 'To Message Us',
    calcExempt: 'Calculating Exempt',
    customerServicePart1: 'Are you facing any problem?',
    customerServicePart2: 'Do not hesitate to write to us when needed, tell us everything you want to say!',
    messageUsPageTitle: 'Messaging page',
    MUTitlePart1: 'You can contact us by writing a message via',
    MUTitlePart2: 'As shown below, or you can write to us through social networking sites such as our page on',
    emailAnchorLink: 'E-mail',
    facebookAnchorLink: 'Facebook',
    schoolImgText: 'Do not hesitate to write to us, we are waiting for your messages, and are ready to do our best to provide assistance',
    sendTitle: 'Send a message via email',
    sPersonName: "The sender's name:",
    sPersonEmail: 'E-mail:',
    sPersonSubjcet: 'Subject:',
    sPersonMessage: 'The message:',
    sendButton: 'Send',
    placeholderName: 'Your name (required)',
    placeholderEmail: 'Your email address (required)',
    placeholderSubject: 'Your subject',
    placeholderMessage: 'The message',
    welcomeCalcTheExempition: 'Welcome to the exemption account page',
    HTUTitle: 'How to use:',
    explainCalcExempition: `<li>Select subjects: Choose the subjects that are part of your curriculum by clicking on “Choose a subject” to select the subjects. If there is a subject that you do not want, you can delete it using the delete button. If there are no specific subjects, you can add them by writing the name of the subject and then Click on the add button.</li>
    <li>Entering grades: After selecting the subjects, enter the grades in each subject from the three fields</li>
    <li>
    Calculation: After entering the grades, click on the “Calculate” button to calculate the pursuit of each subject in the fourth field and show the result. If the grade is in green, you have an individual exemption for that subject, and when the color is red, there is no individual exemption and general exemption, and when it is in yellow, there is no individual exemption. With the possibility of obtaining a general exemption
    </li>
    <li>
    When you click on Calculate, the result will appear, which will tell you whether you are exempt or not, in addition to the statistics.
    </li>
    <li>
    You can clear the result by clicking on "Clear Result" and you can save it by clicking on "Save as png"
    </li>`,
    AddSubjectP: 'Add Subject',
    mainSubjectNameP: 'Subject Name',
    GBHYTitle: 'First semester grade',
    HYEGTitle: 'Mid-year exam grade',
    GAHYTitle: 'Second semester grade',
    paragraphTitle4: 'Average',
    sumText: 'Sum',
    AverageText: 'Average',
    resetButton: 'Reset Result',
    calculatingButton: 'Calculate',
    deleteAllButton: 'Delete Subjects',
    noSubjectsText: 'There are no subjects available. Please add a subject.',
    chooseSubjectP: 'Choose a subject',
    resultText: 'Result!',
    noGradesText1: 'No grades have been entered',
    noGradesText2: 'Please enter all required grades to see the result',
    welcomeCalcRequired: 'Welcome to the required grades calculation page',
    explainCalaRequired: `<li>Subject Selection: Choose the subjects included in your curriculum by clicking "Select Subject" to pick them. If there's a subject you don't want, you can delete it by pressing the delete button. If certain subjects are missing, you can add them by typing the subject's name and clicking the add button.</li><li>Grade Input: After selecting the subjects, enter the grades for each subject in the fields.</li><li>Calculation: After entering the grades, click the "Calculate" button to calculate the GPA for each subject and the grades needed for the second semester. It will display statistics; if the grade is in green, you have an individual exemption for that subject. If it's red, there's no individual exemption but a general exemption is possible. If it's yellow, there's no individual exemption but a general exemption can be obtained.</li>`,
    statistics: 'Statistics!',
    statisticsText1: 'No grades have been entered',
    statisticsText2: 'Please enter all required grades to see the statistics',
    chooseList: `<section id="chooseSubectsSection">
    <div class="choose-subjects-div">
    <p class="choose-title">Choose the subjects from your curriculum</p>
    <div class="choose-subjects-grid">
    <p>Islamic education</p>
    <input type="checkbox" class="c-box" data-name="Islamic Education">
    <p>Arabic language</p>
    <input type="checkbox" class="c-box" data-name="Arabic language">
    <p>English language</p>
    <input type="checkbox" class="c-box" data-name="English language">
    <p>Kurdish language</p>
    <input type="checkbox" class="c-box" data-name="Kurdish language">
    <p>French language</p>
    <input type="checkbox" class="c-box" data-name="French">
    <p>Mathematics</p>
    <input type="checkbox" class="c-box" data-name="math">
    <p>Chemistry</p>
    <input type="checkbox" class="c-box" data-name="Chemistry">
    <p>Biology</p>
    <input type="checkbox" class="c-box" data-name="Biology">
    <p>Physics</p>
    <input type="checkbox" class="c-box" data-name="Physics">
    <p>Earth science</p>
    <input type="checkbox" class="c-box" data-name="Earthology">
    <p>Philosophy and Sociology</p>
    <input type="checkbox" class="c-box" data-name="Philosophy and Sociology">
    <p>Social</p>
    <input type="checkbox" class="c-box" data-name="Social">
    <p>History</p>
    <input type="checkbox" class="c-box" data-name="date">
    <p>Geography</p>
    <input type="checkbox" class="c-box" data-name="geographic">
    <p>National</p>
    <input type="checkbox" class="c-box" data-name="National">
    <p>Economy</p>
    <input type="checkbox" class="c-box" data-name="Economy">
    <p>Computer</p>
    <input type="checkbox" class="c-box" data-name="computer">
    <p>Music</p>
    <input type="checkbox" class="c-box" data-name="music">
    <p>Art Education</p>
    <input type="checkbox" class="c-box" data-name="Art Education">
    <p>Physical education</p>
    <input type="checkbox" class="c-box" data-name="Physical Education">
    </div>
    <div class="choose-button">
    <button id="chooseSubjectButton" class="choose-subject-button">Enter</button>
    </div>
    </div>
    </section>`,
    resultTexts: `<p class="result-text" id="resultText">Result!</p>
    <div class="adding-grades-img-div">
      <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
    </div>
    <div>
      <p class="no-grades-text" id="noGradesText1">No grades entered</p>
      <p class="no-grades-text" id="noGradesText2">Please enter all required grades to see the result</p>
    </div>`,
    statisticsText: `<p class="result-text" id="statistics">Statistics!</p>
<div class="adding-grades-img-div">
  <img src="../../assets/images/adding-grades-in-computer.jpg" class="adding-grades-to-computer-icon">
</div>
<div>
  <p class="no-grades-text" id="statisticsText1">No grades entered</p>
  <p class="no-grades-text" id="statisticsText2">Please enter all required grades to view the statistics</p>
</div>
`
  }
};


// Function to update the text direction based on the selected language

function updateDirection(language) {
  const selectedDirection = language === 'english' ? 'ltr' : 'rtl';
  function selectByClass(className){
    if(document.querySelector(`${className}`)){
      document.querySelector(`${className}`).style.direction = selectedDirection;
   }
  }
  function selectById(id){
    if(document.getElementById(`${id}`)){
      document.getElementById(`${id}`).style.direction = selectedDirection;
    }
  }
  function selectAllClasses(className){
    if(document.querySelectorAll(`${className}`)){
      document.querySelectorAll(`${className}`).forEach((selection) => {
        selection.style.direction = selectedDirection;
      })
    }
  }

  selectByClass('.second-paragraph');
  selectById('.finalResultDetails');
  selectById('.unknownMarksDetails');
  selectAllClasses('.content-container');
  selectById('.messageUsTitle');
  selectById('.button');
  selectById('schoolImgText');
  selectByClass('.footer-container');
  selectByClass('.choose-lang-container');
  selectByClass('.choose-theme-container');
  selectByClass('.customer-service-grid');
  selectByClass('.mu-title-grid');
  selectAllClasses('.input-div');
  selectAllClasses('.content-paragraph');
  selectByClass('.last-content-paragraph');
  selectAllClasses('input');
  selectByClass('textarea');
  selectAllClasses('.htu-explain');
  selectAllClasses('.htu-text-div');
  selectByClass('.htu-title');
  selectAllClasses('.grades-information');
  selectById('statistics');
  selectAllClasses('.result-text');

}

  function changePlaceHolder(id, object){
    if(document.getElementById(`${id}`)){
      document.getElementById(`${id}`).setAttribute("placeholder", object);
    }
  }
  function changePlaceHolderAllClasses(className, object){
    if(document.querySelectorAll(`${className}`)){
      document.querySelectorAll(`${className}`).forEach((input) => {
        input.setAttribute("placeholder", object);
      })
    }
  }
  
  

// Function to update the content based on the selected language
function updateContent(language) {
  const contentDiv = document.getElementById('content');
  const selectedLanguageContent = languageContent[language];

  const body = document.querySelector('body');
  const headerButton = document.querySelector('.calculate-button-header');
  function changeFontByClass(className){
    if(document.querySelector(`${className}`)){
      if (language === 'kurdish') {   
        document.querySelector(`${className}`).style.fontFamily = 'SarchiaMakka,Arial';
      } else {
        document.querySelector(`${className}`).style.fontFamily = 'Lalezar';
      }
    }
  }
  function changeFontAllClasses(className){
    document.querySelectorAll(`${className}`).forEach((text) => {
    if(document.querySelector(`${className}`)){
      if (language === 'kurdish') {   
        text.style.fontFamily = 'SarchiaMakka,Arial';
      } else {
        text.style.fontFamily = 'Lalezar';
      }
    }
   })
  }
  function changeFontById(id){
    if(document.getElementById(`${id}`)){
      if (language === 'kurdish') {   
        document.getElementById(`${id}`).style.fontFamily = 'SarchiaMakka,Arial';
      } else {
        document.getElementById(`${id}`).style.fontFamily = 'Lalezar';
      }
    }
  }

  changeFontByClass('.calculate-button');
  changeFontByClass('.mu-button');
  changeFontByClass('.calculate-button');
  changeFontById('name');
  changeFontById('email');
  changeFontById('subject');
  changeFontById('message');
  changeFontById('sendButton');
  changeFontByClass('.input-subject-name');
  changeFontAllClasses('.js-add-sub-input');
  changeFontById('chooseSubjectButton');
  changeFontAllClasses('.calculating-button');
  changeFontAllClasses('.reset-button');
  changeFontAllClasses('.delete-all-button');
  changeFontAllClasses('.cs-button');

  
  // Set font-family for Kurdish paragraphs
  if (language === 'kurdish') {
    body.style.fontFamily = 'SarchiaMakka,Arial';
    headerButton.style.fontFamily = 'SarchiaMakka,Arial';
  } else {
    // Reset font-family for other languages
    body.style.fontFamily = 'Lalezar';
    headerButton.style.fontFamily = 'Lalezar';
  }

  replacingTextByAllClases('.calculate-button-header', selectedLanguageContent.headerButton);
  replacingTextByAllClases('.mainPage', selectedLanguageContent.mainPage);
  replacingTextByAllClases('.commonQuestions', selectedLanguageContent.commonQuestions);
 replacingTextByAllClases('.messageUs', selectedLanguageContent.messageUs);

 replacingTextById('pageTitle', selectedLanguageContent.pageTitle);
 replacingTextById('lastWord', selectedLanguageContent.word1);
 replacingTextById('secondParagraph', selectedLanguageContent.secondParagraph);
 replacingTextById('button', selectedLanguageContent.button);
 replacingTextByAllClases('.calculating-type-title', selectedLanguageContent.calcQues);
 replacingTextByAllClases('.finalResultTitle', selectedLanguageContent.finalResultTitle);
 replacingTextByAllClases('.unknownMarksTitle', selectedLanguageContent.unknownMarksTitle);
 replacingTextByAllClases('.finalResultDetails', selectedLanguageContent.finalResultDetails);
 replacingTextByAllClases('.unknownMarksDetails', selectedLanguageContent.unknownMarksDetails);

 replacingTextById('commonQuesTitle', selectedLanguageContent.commonQuesTitle);
 replacingTextById('quesOne', selectedLanguageContent.quesOne);
 replacingTextById('ansOne', selectedLanguageContent.ansOne);
 replacingTextById('quesTwo', selectedLanguageContent.quesTwo);
 replacingTextById('ansTwo', selectedLanguageContent.ansTwo);
 replacingTextById('quesThree', selectedLanguageContent.quesThree);
 replacingTextById('ansThree', selectedLanguageContent.ansThree);
 replacingTextById('quesFour', selectedLanguageContent.quesFour);
 replacingTextById('ansFour', selectedLanguageContent.ansFour);
 replacingTextById('quesFive', selectedLanguageContent.quesFive);
 replacingTextById('ansFive', selectedLanguageContent.ansFive);
 replacingTextById('quesSix', selectedLanguageContent.quesSix);
 replacingTextById('ansSix', selectedLanguageContent.ansSix);
 replacingTextById('quesSeven', selectedLanguageContent.quesSeven);
 replacingTextById('ansSeven', selectedLanguageContent.ansSeven);
  const noteSelectAll = document.querySelectorAll('.message-us-note');
  if(noteSelectAll) {
    noteSelectAll.forEach(function(section) {
      section.innerHTML = `${selectedLanguageContent.noteFirstSec}<a class="message-us-anchor" href="src/pages/message-us.html">${selectedLanguageContent.noteSecondSec}</a> ${selectedLanguageContent.noteThirdSec} &#128521;`;
     });
  }
  replacingTextById('messageUsTitle', selectedLanguageContent.messageUsTitle);
  replacingTextById('messageUsButton', selectedLanguageContent.messageUsButton);
  replacingTextById('toMessageUs', selectedLanguageContent.toMessageUs);
  replacingTextById('chooseLang', selectedLanguageContent.chooseLang);
  replacingTextById('changeTheme', selectedLanguageContent.changeTheme);
  replacingTextById('blue', selectedLanguageContent.blue);
  replacingTextById('pink', selectedLanguageContent.pink);
  replacingTextById('green', selectedLanguageContent.green);
  replacingTextById('yellow', selectedLanguageContent.yellow);
  replacingTextById('termsOfService', selectedLanguageContent.termsOfService);
  replacingTextById('privacyPolicy', selectedLanguageContent.privacyPolicy);
  replacingTextById('commonQuesLink', selectedLanguageContent.commonQuesLink);
  replacingTextById('toMessageUsLink', selectedLanguageContent.toMessageUsLink);
  replacingTextById('calcExempt', selectedLanguageContent.calcExempt);
  replacingTextByAllClases('.customer-service-part1', selectedLanguageContent.customerServicePart1);
  replacingTextByAllClases('.customer-service-part2', selectedLanguageContent.customerServicePart2);
  replacingTextById('messageUsPageTitle', selectedLanguageContent.messageUsPageTitle);
  replacingTextById('MUTitlePart1', selectedLanguageContent.MUTitlePart1);
  replacingTextById('MUTitlePart2', selectedLanguageContent.MUTitlePart2);
  replacingTextById('emailAnchorLink', selectedLanguageContent.emailAnchorLink);
  replacingTextById('facebookAnchorLink', selectedLanguageContent.facebookAnchorLink);
  replacingTextById('schoolImgText', selectedLanguageContent.schoolImgText);
  replacingTextById('sendTitle', selectedLanguageContent.sendTitle);
  replacingTextById('sPersonName', selectedLanguageContent.sPersonName);
  replacingTextById('sPersonEmail', selectedLanguageContent.sPersonEmail);
  replacingTextById('sPersonSubjcet', selectedLanguageContent.sPersonSubjcet);
  replacingTextById('sPersonMessage', selectedLanguageContent.sPersonMessage);
  replacingTextById('sendButton', selectedLanguageContent.sendButton);
  replacingTextById('welcomeCalcTheExempition', selectedLanguageContent.welcomeCalcTheExempition);
  replacingTextByAllClases('.htu-title', selectedLanguageContent.HTUTitle);
  replacingTextById('explainCalcExempition', selectedLanguageContent.explainCalcExempition);
  replacingTextByAllClases('.add-subject-paragraph', selectedLanguageContent.AddSubjectP);
  replacingTextByAllClases('.main-subject-name-paragraph', selectedLanguageContent.mainSubjectNameP);
  replacingTextByAllClases('.gbhy-title', selectedLanguageContent.GBHYTitle);
  replacingTextByAllClases('.hyeg-title', selectedLanguageContent.HYEGTitle);
  replacingTextByAllClases('.gahy-title', selectedLanguageContent.GAHYTitle);
  replacingTextByAllClases('.paragraph-title-4', selectedLanguageContent.paragraphTitle4);
  replacingTextByAllClases('.sum-text', selectedLanguageContent.sumText);
  replacingTextByAllClases('.average-text', selectedLanguageContent.AverageText);
  replacingTextByAllClases('.calculating-button', selectedLanguageContent.calculatingButton);
  replacingTextByAllClases('.reset-button ', selectedLanguageContent.resetButton);
  replacingTextByAllClases('.delete-all-button', selectedLanguageContent.deleteAllButton);
  replacingTextByAllClases('.no-subjects-text', selectedLanguageContent.noSubjectsText);
  replacingTextByAllClases('.choose-subject-paragraph', selectedLanguageContent.chooseSubjectP);
  replacingTextById('resultText', selectedLanguageContent.resultText);
  replacingTextById('noGradesText1', selectedLanguageContent.noGradesText1);
  replacingTextById('noGradesText2', selectedLanguageContent.noGradesText2);
  replacingTextById('welcomeCalcRequired', selectedLanguageContent.welcomeCalcRequired);
  replacingTextById('explainCalaRequired', selectedLanguageContent.explainCalaRequired);
  replacingTextById('statistics', selectedLanguageContent.statistics);
  replacingTextById('statisticsText1', selectedLanguageContent.statisticsText1);
  replacingTextById('statisticsText2', selectedLanguageContent.statisticsText2);
 

  listOfSubjects = selectedLanguageContent.chooseList;
  resetTexts = selectedLanguageContent.resultTexts;
  resetTextsForStat = selectedLanguageContent.statisticsText;
 






  changePlaceHolder('name', selectedLanguageContent.placeholderName );
  changePlaceHolder('email', selectedLanguageContent.placeholderEmail );
  changePlaceHolder('subject', selectedLanguageContent.placeholderSubject );
  changePlaceHolder('message', selectedLanguageContent.placeholderMessage );
  changePlaceHolderAllClasses('.js-add-sub-input', selectedLanguageContent.mainSubjectNameP );

  

}

// Function to save the selected language in localStorage
function saveLanguage(language) {
  localStorage.setItem('selectedLanguage', language);
}

// Function to load the selected language from localStorage
function loadLanguage() {
  return localStorage.getItem('selectedLanguage') || 'arabic'; // Default to 'arabic' if not set
}

// Function to initialize the language settings
function initializeLanguageSettings() {
  const selectedLanguage = loadLanguage();
  const radio = document.querySelector(`input[name="language"][value="${selectedLanguage}"]`);
  if (radio) {
    radio.checked = true;
  }
  updateDirection(selectedLanguage);
  //changePlaceHolder(selectedLanguage);
  updateContent(selectedLanguage);
}

// Add event listener to the language selector
document.getElementById('language-selector').addEventListener('change', function(event) {
  const selectedLanguage = event.target.value;
  saveLanguage(selectedLanguage);
  updateDirection(selectedLanguage);
  //changePlaceHolder(selectedLanguage);
  updateContent(selectedLanguage);
});

// Initialize the language settings on page load
document.addEventListener('DOMContentLoaded', initializeLanguageSettings);


function replacingTextById(id, object){
  if(document.getElementById(`${id}`)){
    document.getElementById(`${id}`).innerHTML = `${object}`;
  }
}

function replacingTextByAllClases(className, object){
  if(document.querySelectorAll(`${className}`)){
    document.querySelectorAll(`${className}`).forEach((text) => {
      text.innerHTML = `${object}`;
    })
  }
}

// - - - - - - - - - - - - Theme Settings - - - - - - - - - - - 
document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll('input[type="radio"][name="theme"]');

  // Check localStorage for saved value
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    // Set the radio button based on saved value
    const selectedRadio = document.querySelector(`input[type="radio"][name="theme"][value="${savedTheme}"]`);
    if (selectedRadio) {
      selectedRadio.checked = true;
    }
    applyStyle(savedTheme); // Apply the style
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      const selectedStyle = this.value;
      localStorage.setItem('selectedTheme', selectedStyle); // Save selected value to localStorage
      applyStyle(selectedStyle); // Apply the style
    });
  });
});


function applyStyle(style) {
  switch (style) {
    case 'style1':
      allFunctions(colorsObject.blue.light, colorsObject.blue.dark, 'blue');
      break;
    case 'style2':
      allFunctions(colorsObject.pink.light, colorsObject.pink.dark, 'pink');
      break;
    case 'style3':
      allFunctions(colorsObject.green.light, colorsObject.green.dark, 'green');
      break;
    case 'style4':
      allFunctions(colorsObject.yellow.light, colorsObject.yellow.dark, 'yellow');
      break;
    default:
      allFunctions(colorsObject.blue.light, colorsObject.blue.dark, 'blue');
  }
}

const colorsObject = {
  blue: { light: 'rgb(44, 202, 255)', dark: 'rgb(14, 31, 45)' },
  pink: { light: 'rgb(255, 139, 236)', dark: 'rgb(45, 14, 45)' },
  green: { light: 'rgb(100, 255, 100)', dark: 'rgb(18, 45, 14)' },
  yellow: { light: 'gold', dark: 'rgb(45, 44, 14)' }
};

function allFunctions(light, dark, color) {
  scrolBarColor(light);
  backgroundColor('.calculate-button-header', light);
  backgroundColor('nav', dark);
  backgroundColor('a', light);
  textColor('.word-1', light);
  backgroundColor('.calculate-button', light);
  elementHover('calculate-button', 'color', light, 'white');
  elementHover('calculate-button', 'backgroundColor', 'black', light);
  borderColor('.unknown-marks', light);
  borderColor('.final-result', light);
  textColor('.unknown-marks-title', light);
  textColor('.final-result-title', light);
  backgroundColor('.calculate-type-title', dark);
  backgroundColor('.calculate-type-grid', dark);
  textColor('.details-element', light);
  document.querySelectorAll('summary').forEach(function (summaryElem) {
    summaryElem.style.backgroundColor = dark;
  });
  document.querySelectorAll('article').forEach(function (articleElem) {
    articleElem.style.backgroundColor = light;
  });
  detailsMarker(light);
  backgroundColor('.mu-button', light);
  backgroundColor('.footer-container', dark);
  textColor('.social-media-title', light);
  textColor('.email', light);
  textColor('.facebook', light);
  textColor('.messenger', light);
  textColor('.whatsapp', light);
  textColor('.telegram', light);
  textColor('.choose-lang', light);
  textColor('.choose-theme', light);
  textColor('.arabic-paragraph', light);
  textColor('.kurdi-paragraph', light);
  textColor('.english-paragraph', light);
  textColor('.blue-paragraph', light);
  textColor('.pink-paragraph', light);
  textColor('.green-paragraph', light);
  textColor('.yellow-paragraph', light);
  textColor('.copyright-paragraph', dark);
  textColor('.links-title', light);
  textColor('.return-to-top-paragraph', light);
  document.querySelectorAll('.nav-a').forEach((link) => {
    link.style.color = light;
  });
  document.querySelectorAll('.links a').forEach((link) => {
    link.style.color = light;
  });

textColor('.email-anchor-link', light);
textColor('.facebook-anchor-link', light);
textColor('.send-title', light);
backgroundColor('.footer-section-two', light);
backgroundColor('.top-button', dark);
backgroundColor('.send-button', light);

elementHover('send-button', 'backgroundColor', 'gold', light);
elementHover('send-button', 'color', 'black', 'white');
backgroundColor('.cs-button', light);
backgroundColor('.htu-explain-div', dark);
textColor('.htu-explain ', light);
backgroundColor('.tools-container', dark);
borderColor('.tools-container', light);
borderColor('.text-box-subject', light);
document.querySelectorAll('.text-enter-grade').forEach((link) => {
  link.style.borderColor = light;
});
document.querySelectorAll('.choose-subject-paragraph').forEach((link) => {
  link.style.color = light;
});
backgroundColor('.add-button', light);
elementHover('add-button', 'backgroundColor', dark, light)
backgroundColor('.grades-information-title', dark);
borderColor('.grades-information-title', light);
document.querySelectorAll('.paragraph-title').forEach((link) => {
  link.style.color = light;
});
backgroundColor('.grades-information-buttons', dark);
borderColor('.grades-information-buttons', light);
backgroundColor('.calculating-button', light);
document.querySelectorAll('.subject-container').forEach((link) => {
  link.style.backgroundColor = dark;
  link.style.borderColor = light;
});
document.querySelectorAll('.delete-button').forEach((link) => {
  link.style.backgroundColor = dark;
  link.style.borderColor = light;
});
backgroundColor('.choose-subjects-div', dark);
document.querySelectorAll('.choose-subjects-grid p').forEach((link) => {
  link.style.color = light;
});
backgroundColor('.choose-subject-button', light);
elementHover('choose-subject-button', 'color', 'black', 'white');
backgroundColor('.grades-information-title-sum', dark);
backgroundColor('.grades-information-title-average', dark);
document.querySelectorAll('.statistics').forEach((link) => {
  link.style.color = light;
});
backgroundColor('.reset-button-in-result', light);
elementHover('save-as-png', 'color', light, 'white');
textColor('.view-in-table ', light);
textColor('.form-title ', light);
borderColor('.line', light);
elementHover('save-as-png2', 'color', light, 'white');
textColor('.first-word ', light);
  languageIcon(color);
  themeIcon(color);
}

function scrolBarColor(color) {
  const style = document.createElement('style');
  style.innerHTML = `::-webkit-scrollbar-thumb { background-color: ${color}; border-radius: 6px; }`;
  document.head.appendChild(style);
}

function elementHover(elemClass, property, valueOn, valueOff) {
  const target = document.querySelector(`.${elemClass}`);
  if (target) {
    target.addEventListener('mouseenter', () => {
      target.style[property] = `${valueOn}`;
    });
    target.addEventListener('mouseleave', () => {
      target.style[property] = `${valueOff}`;
    });
  } 
}

function backgroundColor(elemClass, color) {
  const element = document.querySelector(`${elemClass}`);
  if (element) {
    element.style.backgroundColor = `${color}`;
  } 
}

function textColor(elemClass, color) {
  const element = document.querySelector(`${elemClass}`);
  if (element) {
    element.style.color = `${color}`;
  } 
}

function borderColor(elemClass, color) {
  const element = document.querySelector(`${elemClass}`);
  if (element) {
    element.style.borderColor = `${color}`;
  } 
}

function detailsMarker(light) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  const cssRule = `summary::marker { color: ${light}; }`;
  styleSheet.appendChild(document.createTextNode(cssRule));
  document.head.appendChild(styleSheet);
}

function languageIcon(color) {
  const iconDiv = document.getElementById('langIcon');
  if (iconDiv) {
    iconDiv.innerHTML = `<img src="../../assets/images/icons/language-icon-${color}.svg" class="lang-icon">`;
  } 
}

function themeIcon(color) {
  const iconDiv = document.getElementById('themeIcon');
  if (iconDiv) {
    iconDiv.innerHTML = `<img src="../../assets/images/icons/palette-icon-${color}.svg" class="theme-icon">`;
  } 
}


// - - - - - - - - - - - - Privacy Policy - - - - - - - - - - - - - - - - 

document.getElementById('privacyPolicy').addEventListener('click', function(){
  const privacyPolicyDiv = document.getElementById('privacyPolicyDiv');
  
  privacyPolicyDiv.innerHTML = `
     <div class="privacy-policy-div" >
        <img src="../../assets/images/icons/close_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg" class="close-pp">
     
        <h1>سياسة الخصوصية</h1>
        <p>آخر تحديث: 15 يونيو 2024</p>
        <p>توضح سياسة الخصوصية هذه سياساتنا وإجراءاتنا فيما يتعلق بجمع واستخدام وكشف معلوماتك عند استخدامك للخدمة، وتُبيّن لك حقوق خصوصيتك وكيفية حمايتك بموجب القانون.</p>
        <p>نحن نستخدم بياناتك الشخصية لتقديم الخدمة وتحسينها. باستخدام الخدمة، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة. تم إعداد هذه السياسة بمساعدة من <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">مُنشئ سياسة الخصوصية</a>.</p>
        <h2>التفسير والتعاريف</h2>
        <h3>التفسير</h3>
        <p>لهذه الشروط التي تبدأ بحرف كبير، تحدد معاني محددة في الظروف التالية. تشمل التعريفات التالية نفس المعنى بغض النظر عما إذا كانت في صيغة مفرد أم جمع.</p>
        <h3>التعاريف</h3>
        <p>لأغراض هذه السياسة الخاصة بالخصوصية:</p>
        <ul>
        <li>
        <p><strong>الحساب</strong>: يعني حسابًا فريدًا يتم إنشاؤه لك للوصول إلى خدمتنا أو أجزاء من خدمتنا.</p>
        </li>
        <li>
        <p><strong>الشركة</strong>: تشير (بالمُقصود "الشركة" أو "نحن" أو "لنا" أو "لنا" في هذا الاتفاق) إلى موقع الويب Natigati.</p>
        </li>
        <li>
        <p><strong>الكوكيز</strong>: هي ملفات صغيرة يتم وضعها على جهازك الكمبيوتر أو الجوال أو أي جهاز آخر عن طريق موقع ويب، تحتوي على تفاصيل تاريخ التصفح الخاص بك على تلك المواقع بين استخداماتها العديدة.</p>
        </li>
        <li>
        <p><strong>الدولة</strong>: تشير إلى: العراق</p>
        </li>
        <li>
        <p><strong>البيانات الشخصية</strong>: أي معلومات تتعلق بفرد محدد أو قابل للتعرف عليه.</p>
        </li>
        <li>
        <p><strong>الخدمة</strong>: تشير إلى الموقع الإلكتروني.</p>
        </li>
        <li>
        <p><strong>مقدم الخدمة</strong>: يشير إلى أي شخص طبيعي أو معنوي يعالج البيانات نيابةً عن الشركة. يشير إلى الشركات أو الأفراد الذين يعملون بناءً على طلب من الشركة لتسهيل الخدمة أو تقديم الخدمة نيابةً عن الشركة، أو تنفيذ الخدمات المتعلقة بالخدمة أو مساعدة الشركة في تحليل كيفية استخدام الخدمة.</p>
        </li>
        <li>
        <p><strong>بيانات الاستخدام</strong>: تشير إلى البيانات التي يتم جمعها تلقائيًا، إما بواسطة استخدام الخدمة أو من بنية الخدمة نفسها (على سبيل المثال، مدة زيارة الصفحة).</p>
        </li>
        <li>
        <p><strong>الموقع الإلكتروني</strong>: يشير إلى موقع Natigati، الذي يمكن الوصول إليه من <a href="https://natigatiwebsite.com" rel="external nofollow noopener" target="_blank">https://natigatiwebsite.com</a></p>
        </li>
        <li>
        <p><strong>أنت</strong>: تعني الفرد الذي يواصل استخدام الخدمة، أو الشركة، أو الكيان القانوني الآخر الذي يتصرف بهذا الفرد استخدام الخدمة، حسب الاقتضاء.</p>
        </li>
        </ul>
        <h2>جمع واستخدام بياناتك الشخصية</h2>
        <h3>أنواع البيانات المجمعة</h3>
        <h4>البيانات الشخصية</h4>
        <p>أثناء استخدام خدمتنا، قد نطلب منك تزويدنا ببعض المعلومات الشخصية التي يمكن استخدامها للاتصال بك أو التعرف عليك. قد تشمل المعلومات الشخصية المعرفة على سبيل المثال لا الحصر:</p>
        <ul>
        <li>
        <p>عنوان البريد الإلكتروني</p>
        </li>
        <li>
        <p>الاسم الأول واسم العائلة</p>
        </li>
        <li>
        <p>رقم الهاتف</p>
        </li>
        <li>
        <p>العنوان، الولاية، المقاطعة، الرمز البريدي، المدينة</p>
        </li>
        <li>
        <p>بيانات الاستخدام</p>
        </li>
        </ul>
        <h4>بيانات الاستخدام</h4>
        <p>يتم جمع بيانات الاستخدام تلقائيًا أثناء استخدام الخدمة.</p>
        <p>قد تتضمن بيانات الاستخدام معلومات مثل عنوان بروتوكول الإنترنت لجهازك (مثل عنوان IP)، نوع المتصفح، إصدار المتصفح، الصفحات التي تزورها على خدمتنا، الوقت وتاريخ زيارتك، وقت البقاء على تلك الصفحات، معرفات الجهاز الفريدة، وبيانات تشخيصية أخرى.</p>
        <p>عندما تصل إلى الخدمة باستخدام جهاز محمول، قد نجمع معلومات معينة تلقائيًا، بما

        في ذلك نوع الجهاز المحمول الذي تستخدمه، ومعرف الجهاز المحمول الفريد، عنوان IP لجهازك المحمول، نظام التشغيل المحمول، نوع متصفح الإنترنت المحمول الذي تستخدمه، ومعرفات جهاز فريدة وبيانات تشخيصية أخرى.</p>
        <p>قد نجمع أيضًا معلومات يرسلها متصفحك كلما زرت خدمتنا أو عندما تصل إلى الخدمة باستخدام جهاز محمول.</p>
        <h4>تقنيات التتبع والكوكيز</h4>
        <p>نستخدم الكوكيز وتقنيات التتبع المماثلة لتتبع النشاط على خدمتنا وتخزين بعض المعلومات. يشمل استخدام التقنيات التي نستخدمها:</p>
        <ul>
        <li><strong>كوكيز المتصفح</strong>: هو ملف صغير يتم وضعه على جهازك. يمكنك تعليم متصفحك برفض جميع الكوكيز أو إشعارك عندما يتم إرسال كوكيز. ومع ذلك، إذا لم تقبل الكوكيز، فقد لا تتمكن من استخدام بعض أجزاء من خدمتنا. ما لم تكن قد ضبطت إعدادات متصفحك بحيث يرفض الكوكيز، قد تستخدم خدمتنا الكوكيز.</li>
        <li><strong>البيانات الشخصية</strong>: تستخدم بعض أقسام خدمتنا ورسائل البريد الإلكتروني الملفات الإلكترونية الصغيرة المعروفة باسم شعارات الويب (أو الأشعاعات الواضحة أو العلامات الواضحة للبكسل أو البكسل الفردي) التي تسمح للشركة، على سبيل المثال، بإحصاء المستخدمين الذين قاموا بزيارة تلك الصفحات أو فتح بريد إلكتروني ولأغراض إحصائيات الموقع ذات الصلة (على سبيل المثال، تسجيل شعبية قسم معين والتحقق من أمان ونزاهة النظام والخادم).</li>
        </ul>
        <p>يمكن أن تكون الكوكيز "دائمة" أو "جلسة". تبقى الكوكيز الدائمة على جهاز الكمبيوتر الشخصي أو الجوال الخاص بك عندما تكون غير متصل بالإنترنت، بينما تُحذف الكوكيز الجلسة بمجرد إغلاق متصفح الويب الخاص بك. يمكنك معرفة المزيد عن الكوكيز على موقع الويب <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">مقالة موقع TermsFeed</a>.</p>
        <p>نستخدم كل من الكوكيز الجلسة والدائمة للأغراض المحددة أدناه:</p>
        <ul>
        <li>
        <p><strong>كوكيز ضرورية / أساسية</strong></p>
        <p>النوع: كوكيز جلسة</p>
        <p>يديره: نحن</p>
        <p>الغرض: هذه الكوكيز ضرورية لتوفير الخدمات المتاحة من خلال الموقع الإلكتروني وتمكينك من استخدام بعض ميزاته. إنها تساعد في مصادقة المستخدمين ومنع الاستخدام الاحتيالي لحسابات المستخدمين. بدون هذه الكوكيز، لا يمكن توفير الخدمات التي طلبتها، ونحن نستخدم هذه الكوكيز فقط لتوفير تلك الخدمات لك.</p>
        </li>
        <li>
        <p><strong>سياسة الكوكيز / كوكيز قبول الإشعار</strong></p>
        <p>النوع: كوكيز دائمة</p>
        <p>يديره: نحن</p>
        <p>الغرض: تحديد ما إذا كان المستخدمون قد قبلوا استخدام الكوكيز على الموقع الإلكتروني.</p>
        </li>
        <li>
        <p><strong>كوكيز الوظيفة</strong></p>
        <p>النوع: كوكيز دائمة</p>
        <p>يديره: نحن</p>
        <p>الغرض: تسمح لنا هذه الكوكيز بتذكر الخيارات التي تقوم بها عند استخدام الموقع الإلكتروني، مثل تذكر تفاصيل تسجيل الدخول الخاصة بك أو تفضيل اللغة. الغرض من هذه الكوكيز هو توفير تجربة شخصية أكثر لك وتجنب الحاجة إلى إعادة إدخال تفضيلاتك في كل مرة تستخدم فيها الموقع الإلكتروني.</p>
        </li>
        </ul>
        <p>لمزيد من المعلومات حول الكوكيز التي نستخدمها وخياراتك بشأن الكوكيز، يرجى زيارة سياسة الكوكيز الخاصة بنا أو قسم الكوكيز في سياسة الخصوصية لدينا.</p>
        <h3>استخدام بياناتك الشخصية</h3>
        <p>قد تستخدم الشركة البيانات الشخصية لأغراض التالية:</p>
        <ul>
        <li>
        <p><strong>لتقديم وصيانة خدمتنا</strong>: بما في ذلك رصد استخدام خدمتنا.</p>
        </li>
        <li>
        <p><strong>لإدارة حسابك:</strong> لإدارة تسجيلك كمستخدم للخدمة. يمكن أن تمنحك البيانات الشخصية التي تقدمها الوصول إلى وظائف مختلفة من الخ

        دمة المتاحة لك كمستخدم مسجل.</p>
        </li>
        <li>
        <p><strong>لأداء عقد:</strong> تطوير، والامتثال، والقيام بعقد الشراء للمنتجات، والعناصر أو الخدمات التي قمت بشرائها أو أي عقد آخر معنا من خلال الخدمة.</p>
        </li>
        <li>
        <p><strong>للاتصال بك:</strong> للاتصال بك عبر البريد الإلكتروني، والمكالمات الهاتفية، والرسائل القصيرة، أو أشكال الاتصال الإلكتروني المكافئة الأخرى، مثل إشعارات التطبيق النقال حول التحديثات أو الاتصالات الإعلامية ذات الصلة بالوظائف، والمنتجات أو الخدمات المتعاقدة، بما في ذلك التحديثات الأمنية، عند الضرورة أو عندما يكون ذلك مناسبًا لتنفيذها.</p>
        </li>
        <li>
        <p><strong>لتزويدك بالأخبار والعروض الخاصة والمعلومات العامة عن السلع والخدمات والفعاليات الأخرى التي نقدمها والتي تشبه تلك التي قمت بشرائها أو استفسرت عنها بالفعل ما لم تكن قد اخترت عدم استلام مثل هذه المعلومات.</p>
        </li>
        <li>
        <p><strong>لإدارة طلباتك:</strong> لحضور وإدارة طلباتك إلينا.</p>
        </li>
        <li>
        <p><strong>للنقل التجاري:</strong> قد نستخدم معلوماتك لتقييم أو إجراء عملية دمج، أو البيع، أو إعادة التنظيم، أو إعادة الهيكلة، أو التصفية، أو أي بيع أو نقل آخر لجميع أو جزء من أصولنا، سواء ككيان تعمل أو كجزء من إجراءات الإفلاس، أو التصفية، أو الإجراء المماثل، التي يتم بين أصولنا.</p>
        </li>
        <li>
        <p><strong>لأغراض أخرى</strong>: قد نستخدم معلوماتك لأغراض أخرى، مثل تحليل البيانات، وتحديد اتجاهات الاستخدام، وتحديد فعالية حملاتنا الترويجية وتقييم وتحسين خدمتنا، ومنتجاتنا، وخدماتنا، وتسويقك، وتجربتك.</p>
        </li>
        </ul>
        <p>قد نشارك معلوماتك الشخصية في الحالات التالية:</p>
        <ul>
        <li><strong>مع مقدمي الخدمة:</strong> قد نشارك معلوماتك الشخصية مع مقدمي الخدمة لمراقبة وتحليل استخدام خدمتنا، للاتصال بك.</li>
        <li><strong>للنقل التجاري:</strong> قد نشارك أو ننقل معلوماتك الشخصية الخاصة بك فيما يتعلق بأو أثناء المفاوضات بشأن أي دمج، أو بيع لأصول الشركة، أو التمويل، أو الاستحواذ على كامل أو جزء من أعمالنا لشركة أخرى.</li>
        <li><strong>مع الشركاء التجاريين:</strong> قد نشارك معلوماتك مع شركائنا التجاريين لنقدم لك بعض المنتجات، أو الخدمات، أو العروض.</li>
        <li><strong>مع المستخدمين الآخرين:</strong> عندما تشارك معلومات شخصية أو تتفاعل بأي شكل آخر في المناطق العامة مع المستخدمين الآخرين، قد يمكن لجميع المستخدمين رؤية هذه المعلومات ويمكن توزيعها علنًا خارجيًا.</li>
        <li><strong>مع موافقتك</strong>: قد نكشف معلوماتك الشخصية لأي غرض آخر بموافقتك.</li>
        </ul>
        <h3>احتفاظك ببياناتك الشخصية</h3>
        <p>سوف تحتفظ الشركة ببياناتك الشخصية فقط للفترة اللازمة للأغراض المنصوص عليها في سياسة الخصوصية هذه. سنحتفظ ببياناتك الشخصية واستخدامها إلى حد الضرورة للامتثال بالالتزامات القانونية (على سبيل المثال، إذا كنا ملزمين بالاحتفاظ ببياناتك للامتثال بالقوانين السارية)، وحل النزاعات، وفرض الاتفاقات والسياسات القانونية لدينا.</p>
        <p>سوف تحتفظ الشركة أيضًا بالبيانات الشخصية لأغراض تحليلية داخلية. عادةً ما يتم الاحتفاظ ببيانات الاستخدام لفترة أقصر، ما لم تستخدم هذه البيانات لتعزيز الأمان أو لتحسين وظائف خدمتنا، أو كنحن ملزمون قانونًا بالاحتفاظ بتلك البيانات لفترات زمنية أطول.</p>
        <h3>نقل بياناتك الشخصية الخاصة بك</h3>
        <p>يتم معالجة معلوماتك، بما في ذلك البيانات الشخصية، في مكاتب الشركة وفي أي مكان آخر يقع فيه الأطراف المشاركة في المعالجة. يعني ذلك أن هذه المعلومات يمكن نقلها إلى – والحفاظ عليها – على أجهزة الكمبيوتر الموجودة خارج

        دولتك الوطنية، حيث يمكن أن تكون معايير الحماية للبيانات مختلفة.</p>
        <p>تقدم الشركة تدابير أمان معقولة لحماية المعلومات الشخصية التي تقدمها أثناء النقل؛ ومع ذلك، لا يمكننا ضمان أمان أي نوع من البيانات خلال نقل الإنترنت أو نظام التخزين الإلكتروني، ونتمنى عليك أن تتخذ تدابير الحماية اللازمة عند نقل معلومات شخصية عبر الإنترنت أو غيرها من الشبكات.</p>
        <h3>الأمان الخاص ببياناتك الشخصية</h3>
        <p>الشركة تحتفظ ببياناتك الشخصية في طرق مؤمنة ضد الفقد أو السرقة، فضلا عن الوصول غير المصرح به أو الاستخدام، والتدمير غير المصرح به، بما في ذلك تدابير أمنية في المستودعات الفيزيائية حيث يتم حفظ البيانات الشخصية.</p>
        <p>ومع ذلك، لا يمكننا ضمان أمان أي نوع من البيانات مؤمنة 100%. لذا، على الرغم من أننا نسعى جاهدين لحماية بياناتك الشخصية، لا يمكننا ضمان أمان أو صحة أي معلومات ترسلها أو تتلقاها من خدمتنا، وتقع المسؤولية النهائية على المستخدمين لتحديد ما إذا كانوا يرغبون في مشاركة المعلومات الشخصية.</p>
        <h3>حقوقك بشأن بياناتك الشخصية</h3>
        <p>فيما يتعلق ببياناتك الشخصية، لديك بعض الحقوق والخيارات المتاحة لك:</p>
        <ul>
        <li><strong>الوصول إلى بياناتك الشخصية:</strong> لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها والتي نعالجها.</li>
        <li><strong>تصحيح بياناتك الشخصية:</strong> لديك الحق في طلب تصحيح أو إكمال بياناتك الشخصية إذا كانت غير دقيقة أو غير مكتملة.</li>
        <li><strong>حذف بياناتك الشخصية:</strong> لديك الحق في طلب حذف بياناتك الشخصية في ظروف معينة.</li>
        <li><strong>منع المعالجة:</strong> لديك الحق في طلب منع معالجة بياناتك الشخصية في ظروف معينة.</li>
        <li><strong>نقل البيانات:</strong> لديك الحق في استلام بياناتك الشخصية التي قدمتها لنا بتنسيق منظم وشائع الاستخدام ولديك الحق في نقل تلك البيانات إلى آخر، حيثما أكملت النقل التلقائي.</li>
        <li><strong>سحب الموافقة:</strong> إذا كنت قد منحت موافقتك لمعالجة بياناتك الشخصية، لديك الحق في سحب هذه الموافقة في أي وقت.</li>
        <li><strong>الشكوى إلى سلطة الحماية الخاصة بالبيانات:</strong> لديك الحق في تقديم شكوى إلى سلطة الحماية الخاصة بالبيانات في بلدك إذا كنت تعتقد أننا قد خرقنا أي من حقوقك.</li>
        </ul>
        <p>لمزيد من المعلومات حول كيفية ممارسة هذه الحقوق أو إذا كنت ترغب في تقديم طلب، يرجى الاتصال بنا باستخدام تفاصيل الاتصال الموجودة أدناه.</p>
        <h3>تغييرات على سياسة الخصوصية الخاصة بنا</h3>
        <p>نحتفظ بحق تغيير هذه السياسة الخاصة بالخصوصية في أي وقت، لذا يُرجى مراجعة هذه الصفحة بانتظام. إذا أجرينا تغييرات يعتبر موافقتك على تلك التغييرات.</p>
        <h3>الاتصال بنا</h3>
        <p>إذا كانت لديك أسئلة أو استفسارات حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا عبر البريد الإلكتروني على privacy@company.com أو عن طريق البريد إلى:</p>
        <p>شركة المثال المحدودة<br>شارع المثال، المدينة، البلد<br>صندوق بريد: 12345</p>
        <p>آخر تحديث: 1 يناير 2024</p>
     </div>
  `;

  document.querySelector('.close-pp').addEventListener('click', function(){
    privacyPolicyDiv.innerHTML = ``;
  });
});

document.getElementById('termsOfService').addEventListener('click', function(){
  const termsOfServiceDiv = document.getElementById('termsOfServiceDiv');
  
  termsOfServiceDiv.innerHTML = `
     <div class="privacy-policy-div" >
        <img src="../../assets/images/icons/close_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg" class="close-pp">  
        <h1>الشروط والأحكام</h1>
          <p>آخر تحديث: 29 يونيو 2024</p>
          <p>يُرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمتنا.</p>
          <h2>التفسير والتعاريف</h2>
          <h3>التفسير</h3>
          <p>الكلمات التي يبدأ الحرف الأول منها بالأحرف الكبيرة لها معاني محددة وفقًا للشروط التالية. يكون للتعريفات التالية نفس المعنى بغض النظر عما إذا كانت تظهر بصيغة المفرد أو الجمع.</p>
          <h3>تعريفات</h3>
          <p>لأغراض هذه الشروط والأحكام:</p>
          <ul>
          <li>
          <p><strong>الشركة التابعة</strong> تعني الكيان الذي يتحكم في طرف ما أو يخضع لسيطرته أو يخضع لسيطرة مشتركة معه، حيث تكون "السيطرة" يُقصد به ملكية 50% أو أكثر من الأسهم أو حصص الملكية أو الأوراق المالية الأخرى التي يحق لها التصويت لانتخاب أعضاء مجلس الإدارة أو أي سلطة إدارية أخرى.</p>
          </li>
          <li>
          <p><strong>الدولة</strong> تشير إلى: العراق</p>
          </li>
          <li>
          <p><strong>الشركة</strong> (يشار إليها إما بـ "الشركة" أو "نحن" أو "نا" أو "خاصتنا" في هذه الاتفاقية) تشير إلى موقع Natigati الإلكتروني.</p>
          </li>
          <li>
          <p><strong>الجهاز</strong> يعني أي جهاز يمكنه الوصول إلى الخدمة مثل جهاز كمبيوتر أو هاتف جوال أو جهاز لوحي رقمي.</p>
          </li>
          <li>
          <p><strong>الخدمة</strong> تشير إلى موقع الويب.</p>
          </li>
          <li>
          <p><strong>الشروط والأحكام</strong> (يشار إليها أيضًا باسم "الشروط")؛ تعني هذه الشروط والأحكام التي تشكل الاتفاقية الكاملة بينك وبين الشركة فيما يتعلق باستخدام الخدمة. تم إنشاء اتفاقية الشروط والأحكام هذه بمساعدة <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">مولد الشروط والأحكام</a>. </ص>
          </li>
          <li>
          <p><strong>خدمة الوسائط الاجتماعية لجهة خارجية</strong> تعني أي خدمات أو محتوى (بما في ذلك البيانات أو المعلومات أو المنتجات أو الخدمات) يقدمها طرف ثالث والتي قد يتم عرضها أو تضمينها أو إتاحتها بواسطة الخدمة. </ص>
          </li>
          <li>
          يشير <p><strong>موقع الويب</strong> إلى موقع Natigati، الذي يمكن الوصول إليه من <a href="https://www.natigati.com" rel="external nofollow noopener" target="_blank">https:// www.natigati.com</a></p>
          </li>
          <li>
          <p><strong>أنت</strong> تعني الفرد الذي يصل إلى الخدمة أو يستخدمها، أو الشركة، أو أي كيان قانوني آخر يقوم هذا الفرد بالنيابة عنه بالوصول إلى الخدمة أو استخدامها، حسب الاقتضاء.</p>
          </li>
          </ul>
          <h2>شكرًا وعرفانًا</h2>
          <p>هذه هي الشروط والأحكام التي تحكم استخدام هذه الخدمة والاتفاقية السارية بينك وبين الشركة. تحدد هذه الشروط والأحكام حقوق والتزامات جميع المستخدمين فيما يتعلق باستخدام الخدمة.</p>
          <p>إن وصولك إلى الخدمة واستخدامها مشروط بقبولك لهذه الشروط والأحكام والامتثال لها. تنطبق هذه الشروط والأحكام على جميع الزوار والمستخدمين وغيرهم ممن يصلون إلى الخدمة أو يستخدمونها.</p>
          <p>من خلال الوصول إلى الخدمة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط والأحكام، فلا يجوز لك الوصول إلى الخدمة.</p>
          <p>إنك تقر بأن عمرك يزيد عن 18 عامًا. ولا تسمح الشركة لمن هم أقل من 18 عامًا باستخدام الخدمة.</p>
          <p>إن وصولك إلى الخدمة واستخدامها مشروط أيضًا بقبولك لسياسة الخصوصية الخاصة بالشركة والامتثال لها. تصف سياسة الخصوصية الخاصة بنا سياساتنا وإجراءاتنا بشأن جمع معلوماتك الشخصية واستخدامها والكشف عنها عند استخدام التطبيق أو موقع الويب، وتخبرك بحقوق الخصوصية الخاصة بك وكيف يحميك القانون. يرجى قراءة سياسة الخصوصية الخاصة بنا بعناية قبل استخدام خدمتنا.</p>
          <h2>روابط لمواقع أخرى</h2>
          <p>قد تحتوي خدمتنا على روابط لمواقع ويب أو خدمات تابعة لجهات خارجية لا تملكها الشركة أو تسيطر عليها.</p>
          <p>لا تملك الشركة أي سيطرة على المحتوى أو سياسات الخصوصية أو الممارسات الخاصة بأي مواقع ويب أو خدمات تابعة لجهات خارجية ولا تتحمل أي مسؤولية عنها. أنت تقر وتوافق أيضًا على أن الشركة لن تكون مسؤولة أو ملزمة، بشكل مباشر أو غير مباشر، عن أي ضرر أو خسارة ناتجة أو يُزعم أنها ناجمة عن أو فيما يتعلق باستخدام أو الاعتماد على أي محتوى أو سلع أو خدمات متاحة على أو من خلال أي مواقع ويب أو خدمات من هذا القبيل.</p>
          <p>ننصحك بشدة بقراءة الشروط والأحكام وسياسات الخصوصية الخاصة بأي مواقع ويب أو خدمات تابعة لجهات خارجية تزورها.</p>
          <h2>الإنهاء</h2>
          <p>يجوز لنا إنهاء أو تعليق وصولك على الفور، دون إشعار مسبق أو مسؤولية، لأي سبب من الأسباب، بما في ذلك على سبيل المثال لا الحصر، إذا قمت بخرق هذه الشروط والأحكام.</p>
          <p>عند الإنهاء، سيتوقف حقك في استخدام الخدمة على الفور.</p>
          <h2>حدود المسؤولية</h2>
          <p>بغض النظر عن أي أضرار قد تتكبدها، فإن المسؤولية الكاملة للشركة وأي من مورديها بموجب أي شرط من هذه الشروط والتعويض الحصري الخاص بك عن كل ما سبق ستقتصر على المبلغ الذي دفعته فعليًا من خلال الخدمة. أو 100 دولار أمريكي إذا لم تقم بذلكاشتريت أي شيء من خلال الخدمة.</p>
          <p>إلى الحد الأقصى الذي يسمح به القانون المعمول به، لن تتحمل الشركة أو موردوها بأي حال من الأحوال المسؤولية عن أي أضرار خاصة أو عرضية أو غير مباشرة أو تبعية من أي نوع (بما في ذلك، على سبيل المثال لا الحصر، الأضرار الناجمة عن خسارة الأرباح أو الخسارة البيانات أو المعلومات الأخرى، لانقطاع الأعمال، أو الإصابة الشخصية، أو فقدان الخصوصية الناشئة عن أو بأي شكل من الأشكال المرتبطة باستخدام أو عدم القدرة على استخدام الخدمة، وبرامج الطرف الثالث و/أو أجهزة الطرف الثالث المستخدمة مع الخدمة، أو ما يتعلق بأي شرط من هذه الشروط)، حتى لو تم إخطار الشركة أو أي مورد بإمكانية حدوث مثل هذه الأضرار وحتى إذا فشل العلاج في غرضه الأساسي.</p>
          <p>لا تسمح بعض الدول باستثناء الضمانات الضمنية أو تحديد المسؤولية عن الأضرار العرضية أو التبعية، مما يعني أن بعض القيود المذكورة أعلاه قد لا تنطبق. في هذه الدول، ستكون مسؤولية كل طرف محدودة إلى أقصى حد يسمح به القانون.</p>
          <h2>&quot;كما هو&quot; و &quot;كما هو متاح&quot; إخلاء المسؤولية</h2>
          <p>الخدمة مقدمة لك &quot;كما هي&quot; و &quot;كما هو متاح&quot; وبكافة العيوب والعيوب دون ضمان من أي نوع. إلى الحد الأقصى المسموح به بموجب القانون المعمول به، تخلي الشركة، بالأصالة عن نفسها وبالنيابة عن الشركات التابعة لها ومرخصيها ومقدمي الخدمات التابعين لها، مسؤوليتها صراحةً عن جميع الضمانات، سواء كانت صريحة أو ضمنية أو قانونية أو غير ذلك، فيما يتعلق الخدمة، بما في ذلك جميع الضمانات الضمنية الخاصة بالتسويق والملاءمة لغرض معين والملكية وعدم الانتهاك والضمانات التي قد تنشأ عن سياق التعامل أو مسار الأداء أو الاستخدام أو الممارسة التجارية. دون حصر ما سبق، لا تقدم الشركة أي ضمان أو تعهد، ولا تقدم أي تعهد من أي نوع بأن الخدمة ستلبي متطلباتك، وتحقق أي نتائج مقصودة، وتكون متوافقة أو تعمل مع أي برامج أو تطبيقات أو أنظمة أو خدمات أخرى، أو تعمل. دون انقطاع، أو تلبية أي معايير أداء أو موثوقية أو خلوها من الأخطاء أو أنه يمكن أو سيتم تصحيح أي أخطاء أو عيوب.</p>
          <p>دون تقييد ما سبق، لا تقدم الشركة ولا أي من مقدمي الخدمة أي تعهد أو ضمان من أي نوع، صريحًا أو ضمنيًا: (1) فيما يتعلق بتشغيل الخدمة أو توفرها، أو المعلومات والمحتوى و المواد أو المنتجات المدرجة فيه؛ (2) أن الخدمة ستكون دون انقطاع أو خالية من الأخطاء؛ (3) فيما يتعلق بدقة أو موثوقية أو عملة أي معلومات أو محتوى مقدم من خلال الخدمة؛ أو (4) أن الخدمة أو خوادمها أو المحتوى أو رسائل البريد الإلكتروني المرسلة من الشركة أو بالنيابة عنها خالية من الفيروسات أو البرامج النصية أو أحصنة طروادة أو الفيروسات المتنقلة أو البرامج الضارة أو القنابل الموقوتة أو المكونات الضارة الأخرى.</p>
          <p>لا تسمح بعض الولايات القضائية باستثناء أنواع معينة من الضمانات أو القيود على الحقوق القانونية المعمول بها للمستهلك، لذلك قد لا تنطبق عليك بعض أو كل الاستثناءات والقيود المذكورة أعلاه. ولكن في مثل هذه الحالة، سيتم تطبيق الاستثناءات والقيود المنصوص عليها في هذا القسم إلى أقصى حد قابل للتنفيذ بموجب القانون المعمول به.</p>
          <h2>القانون الحاكم</h2>
          <p>ستحكم قوانين الدولة، باستثناء قواعد تعارض القوانين، هذه الشروط واستخدامك للخدمة. قد يخضع استخدامك للتطبيق أيضًا لقوانين محلية أو حكومية أو وطنية أو دولية أخرى.</p>
          <h2>تسوية النزاعات</h2>
          <p>إذا كانت لديك أي مخاوف أو نزاع بشأن الخدمة، فإنك توافق على محاولة حل النزاع بشكل غير رسمي أولاً عن طريق الاتصال بالشركة.</p>
          <h2>بالنسبة لمستخدمي الاتحاد الأوروبي (EU)</h2>
          <p>إذا كنت مستهلكًا في الاتحاد الأوروبي، فستستفيد من أي أحكام إلزامية في قانون البلد الذي تقيم فيه.</p>
          <h2>الامتثال القانوني للولايات المتحدة</h2>
          <p>إنك تقر وتضمن أنك (1) لا تتواجد في بلد يخضع للحظر الذي تفرضه حكومة الولايات المتحدة، أو تم تصنيفه من قبل حكومة الولايات المتحدة على أنه "دولة داعمة للإرهاب". البلد، و(2) أنك لست مدرجًا في أي قائمة تابعة لحكومة الولايات المتحدة للأطراف المحظورة أو المقيدة.</p>
          <h2>قابلية الفصل والتنازل</h2>
          <h3>قابلية الفصل</h3>
          <p>إذا تم اعتبار أي شرط من هذه الشروط غير قابل للتنفيذ أو غير صالح، فسيتم تغيير هذا الشرط وتفسيره لتحقيق أهداف هذا الحكم إلى أقصى حد ممكن بموجب القانون المعمول به وستظل الأحكام المتبقية سارية المفعول والتأثير الكامل .</p>
          <h3>التنازل</h3>
          <p>باستثناء ما هو منصوص عليه هنا، فإن الفشل في ممارسة حق أو طلب أداء التزام بموجب هذه الشروط لن يؤثر على قدرة الطرف على ممارسة هذا الحق أو يتطلب هذا الأداء في أي وقت بعد ذلك ولا يشكل التنازل عن الانتهاك التنازل عن أي خرق لاحق.</p>
          <h2>الترجمة الفورية</h2>
          <p>ربما تم نقل هذه الشروط والأحكاممحددة إذا جعلناها متاحة لك في خدمتنا.
          أنت توافق على أن النص الأصلي باللغة الإنجليزية هو الذي يجب أن يسود في حالة وجود نزاع.</p>
          <h2>التغييرات على هذه الشروط والأحكام</h2>
          <p>نحن نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كانت المراجعة جوهرية، فسنبذل جهودًا معقولة لتقديم إشعار قبل 30 يومًا على الأقل من سريان أي شروط جديدة. سيتم تحديد ما يشكل تغييرًا جوهريًا وفقًا لتقديرنا الخاص.</p>
          <p>من خلال الاستمرار في الوصول إلى خدمتنا أو استخدامها بعد أن تصبح هذه المراجعات سارية، فإنك توافق على الالتزام بالشروط المعدلة. إذا كنت لا توافق على الشروط الجديدة، كليًا أو جزئيًا، فيرجى التوقف عن استخدام الموقع والخدمة.</p>
          <h2>اتصل بنا</h2>
          <p>إذا كانت لديك أي أسئلة حول هذه الشروط والأحكام، يمكنك الاتصال بنا:</p>
          <ul>
          <li>عبر البريد الإلكتروني: 2024natijati@gmail.com</li>
          </ul>
     </div>
  `;

  document.querySelector('.close-pp').addEventListener('click', function(){
    termsOfServiceDiv.innerHTML = ``;
  });
});


document.getElementById('emailImg').addEventListener('click', function(){
  const textToCopy = '2024natijati@gmail.com';

    // Create a textarea element (off-screen) to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Copy the text from textarea to clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
  alert(`
    تم نسخ عنوان البريد الالكتروني
    2024natijati@gmail.com
    `);
})
