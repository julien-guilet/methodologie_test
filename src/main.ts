
function main() {
  const currentLanguage = getCurrentLanguageSystem();
  console.log(`Current language system: ${currentLanguage}`);
  console.log("Current language system:" + navigator.language.toString());
}

function getCurrentLanguageSystem() {
  // Code to retrieve the current language system goes here
  // Replace this with your actual implementation
  return navigator.language.split('-')[0] ?? 'en';
}

main();
