/* eslint-disable no-empty */
/* eslint-disable no-inner-declarations */
/* Template Name: Superex - NFT Marketplace HTML Template
   Author: Shreethemes
   E-mail: support@shreethemes.in
   Website: https://shreethemes.in
   Created: February 2022
   Version: 1.5.0
   File Description: Common JS file of the template(plugins.init.js)
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     12)  Back Button          *
 *     13)  Switcher JS          *
 ================================*/

//=========================================//
/*/*            12) Back Button            */
//=========================================//
document
  .getElementsByClassName('back-button')[0]
  ?.addEventListener('click', e => {
    if (document.referrer !== '') {
      e.preventDefault()
      window.location.href = document.referrer
    }
  })

//=========================================//
/*            13) Switcher JS              */
//=========================================//

try {
  function toggleSwitcher() {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }

  function setColor(theme) {
    document.getElementById('color-opt').href = 'css/colors/' + theme + '.css'
    toggleSwitcher(false)
  }

  function setTheme(theme) {
    document.getElementById('theme-opt').href = './css/' + theme + '.min.css'
    toggleSwitcher(false)
  }
} catch (error) { }
