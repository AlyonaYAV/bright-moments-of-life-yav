import settingsProd from './prod';
import settingsDev from './dev';
// Save content to the variable conditionally for a file (Module).
const settings = (process.env.NODE_ENV === 'production') ? settingsProd : settingsDev;
// Exports settings (object) from the Module
export default settings;