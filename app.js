import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8086;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

// Serve static files from the public directory
app.use(express.static("public"));

// Helper function to render content within the layout
app.use((req, res, next) => {
  res.locals.currentPath = req.path;

  const originalRender = res.render;
  res.render = function (view, options, callback) {
    const opts = options || {};

    // Render the view first
    originalRender.call(this, view, opts, (err, content) => {
      if (err) return callback ? callback(err) : next(err);

      // Then render the layout with the view content
      originalRender.call(
        this,
        "layouts/main",
        {
          ...opts,
          content: content,
        },
        callback
      );
    });
  };
  next();
});

// Route to render index page as the main route
app.get("/", (req, res) => {
  console.log("Rendering portfolio homepage");
  res.render("pages/frontpage", {
    title: "Mads Fjeldberg | Portfolio",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
