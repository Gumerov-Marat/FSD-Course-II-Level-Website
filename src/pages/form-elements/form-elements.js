// Styles
import './form-elements';


//import '../../components/field-checkbox/field-checkbox'; // неизвестный блок
import { dropdown } from '../../components/dropdown/dropdown.js';
import { MaskedTextField } from '../../components/masked-text-field/masked-text-field';


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
 import '../../assets/images/avatar-free.png';
 import '../../assets/images/avatar.png';
 import '../../components/logo/images/logo.svg';
 import '../../components/logo/images/logo-gray.svg';
 import '../../components/logo/images/logo-mobile.svg';


// собственные модули
// import '../../modules/field-checkbox/field-checkbox'
