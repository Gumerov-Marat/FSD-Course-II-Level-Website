// Styles
import './form-elements';


import { dropdown } from '../../components/dropdown/dropdown.js';


var readyPage = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}


readyPage(() => {
  //const maskedTextDate = new MaskedTextField('date')

  const demoDropDownVisitors = new dropdown('.dropdown-visitors');
  const demoDropDownVisitorsWithoutClear = new dropdown('.dropdown-visitors-without-clear');
  const demoDropDownVisitorsClear = new dropdown('.dropdown-visitors-clear');

  const demoDropDownEnarenmentClose = new dropdown('.dropdown-envarenment-close');
  const demoDropDownEnarenmentOpen = new dropdown('.dropdown-envarenment-open');
});

// изображения
// import '../../modules/comment/img/avatar-free.png'
// import './images/avatar.png'
// import '../../modules/logo/images/logo.svg'
// import '../../modules/logo/images/logo-gray.svg'
// import '../../modules/logo/images/logo-mobile.svg'


// собственные модули
// import '../../modules/field-checkbox/field-checkbox'
