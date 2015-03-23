function onComplete(reports) {
  if (reports.length) {
    throw new Error("There was an error - fail the build!");
  }
}


HTMLInspector.inspect({
  excludeRules: ["unused-classes"],
  excludeElements: ["svg", "iframe"]
  , onComplete: onComplete
});