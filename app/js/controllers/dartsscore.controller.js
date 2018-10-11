function dartsscoreCtrl() {
  var vm = this;
  vm.test = 'Hello'
}

angular.module('dartsScore')
.controller('dartsscoreCtrl', [dartsscoreCtrl])
