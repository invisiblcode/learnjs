function start() {
  main.pagetext("intro");
  return "Okay, let's begin!";
}

function jsrunson(platforms) {
  for (var i = 0; i < platforms.length; i++) {
    console.log("Javascript runs on " + platforms[i]);
  }
  if (
    platforms.contains("web") &&
    platforms.contains("desktop") &&
    platforms.contains("terminal") &&
    platforms.contains("mobile")
  ) {
    console.log("Great work!");
    main.pagetext("datatypes");
  } else {
    console.error("Hmmm... Try that again.");
  }
}
