
// - - - - - - - - - - - Main Functions to use - - - - - - - - - -
// For buttons to transport from html page to another html page
function transportPageButton(buttonClass, pageName){
if(document.querySelector(`.${buttonClass}`)){
  document.querySelector(`.${buttonClass}`).addEventListener('click', function(){
    window.location.href = `./src/pages/${pageName}.html`;
  })
}
};

// - - - - - - -- - -- - -- Header Section - -- - - - - - - - -  

function showSiderbar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

//Calculate Type Button in Header Bar
document.querySelector('.calculate-button-header').addEventListener('click', function(){
  window.location.href = './src/pages/calculating-type.html';
});


// - - - - - - - - - - Calculating Button Section - - - - - - - - - - 

transportPageButton('calculate-button', 'calculating-type');

// - - - - - - - - - Calculating Type Section - - - - - - - - - - - 

transportPageButton('final-result', 'calculating-the-exempt');
transportPageButton(`unknown-marks`, `calculate-required-grades`);

// - - - - - - - - - - - Message Us Section -- - - - - - - - - -

transportPageButton(`mu-button`, `message-us`);

// - - - - - - - - - - - - Social Media Links - - - - - - - - - - -
document.getElementById('facebookImg').addEventListener('click', function(){
  window.open('https://www.facebook.com/people/Natigati-Website/61560080236721/', '_blank' );
})
document.getElementById('telegramImg').addEventListener('click', function(){
  window.open('https://t.me/natigatiTChannel2468', '_blank' );
})
