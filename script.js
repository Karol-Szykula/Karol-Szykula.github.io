const menuToggle = document.querySelector('.nav-top__toggle__link');
const menuList = document.querySelector('.nav-top__flex-wrapper');
const menuListItems = document.querySelectorAll('.nav-top__flex-wrapper__menu-item');

const menuListHeight = menuListItems[0].clientHeight * menuListItems.length;
//console.log(menuListHeight);
menuList.classList.add('nav-top__flex-wrapper--collapsed');

menuToggle.addEventListener(
    'click',
    (event) => {
        event.preventDefault();

        if(menuList.classList.contains('nav-top__flex-wrapper--collapsed')){
            menuList.classList.remove('nav-top__flex-wrapper--collapsed');
            menuList.style.maxHeight = menuListHeight + 'px';
        }else{
            menuList.classList.add('nav-top__flex-wrapper--collapsed');
        }


    }
)