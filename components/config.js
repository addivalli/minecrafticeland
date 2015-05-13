'use strict';

// Þetta eru grunnstillingar fyrir síðuna, allt sem er hér komið liggur útum allt.
angular.module('MC_web.config', [])

  // Hvert á að leiða notendum þegar þeir eru ekki loggaðir inn (sjá components/security.js)
  .constant('loginRedirectPath', '/login')

  // Firebase slóðin á svæðið þitt
  .constant('FBURL', 'https://minecrafticeland.firebaseio.com');

