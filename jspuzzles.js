var iamlearningjs = false;
function learningjscheck() {
  document.getElementById('learningjscheckresult').innerHTML = iamlearningjs ? "Yep, you're learning Javascript." : "The variable <code>iamlearningjs</code> is set to false (no). Use <code>iamlearningjs = true</code> and click again";
  if (iamlearningjs) {
    setTimeout(function () {
      main.pagetext('variables');
    }, 1000);
  }
}
