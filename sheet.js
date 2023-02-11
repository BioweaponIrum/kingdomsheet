Hooks.on("renderActorSheet", (app, html, data) => {
  if (app.actor.data.type !== "kingdom") return;

  html.find("#base").change(function() {
    html.find("#control-dc").val(html.find("#base").val() + html.find("#size").val());
  });

  html.find("#size").change(function() {
    html.find("#control-dc").val(html.find("#base").val() + html.find("#size").val());
  });
});
