import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hacker House Goa — Build, Ship, Repeat" },
      {
        name: "description",
        content:
          "Hacker House Goa 2026: a house by the sea for people who make things happen. Goa, India, 28-31 Oct 2026.",
      },
      { property: "og:title", content: "Hacker House Goa — Build, Ship, Repeat" },
      {
        property: "og:description",
        content: "A house by the sea for people who make things happen. Goa, India, 28-31 Oct 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/hh-goa-homepage.html"
      title="Hacker House Goa"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
    />
  );
}
