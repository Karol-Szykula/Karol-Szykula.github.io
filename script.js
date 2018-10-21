const menuToggle = document.querySelector('.container__nav-top__toggle__link');
const menuList = document.querySelector('.container__nav-top__flex-wrapper');
const menuListItems = document.querySelectorAll('.container__nav-top__flex-wrapper__menu-item');

const menuListHeight = menuListItems[0].clientHeight * menuListItems.length;
//console.log(menuListHeight);
menuList.classList.add('container__nav-top__flex-wrapper--collapsed');

menuToggle.addEventListener(
    'click',
    (event) => {
        event.preventDefault();

        if(menuList.classList.contains('container__nav-top__flex-wrapper--collapsed')){
            menuList.classList.remove('container__nav-top__flex-wrapper--collapsed');
            menuList.style.maxHeight = menuListHeight + 'px';
        }else{
            menuList.classList.add('container__nav-top__flex-wrapper--collapsed');
        }


    }
)