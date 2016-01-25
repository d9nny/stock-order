exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['companies/addCompanyFeature.js', 'companies/viewCompanyFeature.js', 'components/navbarFeature.js', 'components/userNavbarFeature.js']
}
