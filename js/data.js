/* ==========================================================================
   PROJECT / CASE STUDY CONTENT
   --------------------------------------------------------------------------
   This is the only file you need to edit to change the "Selected Work" cards.
   Each object below becomes one case study, in the order listed.

   Fields:
     title    — case study headline
     summary  — one-line italic standfirst under the title
     problem  — the business question
     approach — what you did and which methods you used
     results  — 2–3 quantified outcomes: { value: "+18%", label: "what it measured" }
     tags     — short keywords shown as badges
     link     — (optional) { href: "...", text: "Read the full case study" }

   TODO: Every project below is a PLACEHOLDER with illustrative numbers.
         Replace each one with your real work before sharing the site.
   ========================================================================== */

window.PORTFOLIO_PROJECTS = [
  {
    // TODO: Replace with a real project.
    title: "Segmenting a Wireless Customer Base for Upsell",
    summary: "Finding the customers most likely to upgrade and what to offer them.",
    problem:
      "A wireless retailer pitched the same upgrade offers to every customer, so attach rates were flat and promotional spend was wasted on low-intent buyers.",
    approach:
      "Cleaned 12 months of transaction data in SQL, then built behavioral segments with k-means clustering in Python on usage, tenure, and device age. Each segment got a tailored offer and talk track.",
    results: [
      { value: "+18%", label: "accessory attach rate in pilot stores" },
      { value: "5", label: "actionable segments adopted by sales team" },
      { value: "−12%", label: "promotional spend per upgrade" }
    ],
    tags: ["Segmentation", "SQL", "Python", "Clustering"]
    // link: { href: "https://example.com", text: "Read the full case study" }
  },
  {
    // TODO: Replace with a real project.
    title: "Pricing a Premium Tier with Conjoint Analysis",
    summary: "Measuring what customers would actually pay for before launch.",
    problem:
      "A subscription product planned a premium tier but had no evidence for which features to include or where to set the price.",
    approach:
      "Designed and fielded a choice-based conjoint survey (n = 300), estimated part-worth utilities, and ran market simulations to compare bundle and price scenarios against competitors.",
    results: [
      { value: "$14.99", label: "recommended price point" },
      { value: "+9%", label: "projected revenue vs. original plan" },
      { value: "3 of 7", label: "features shown to drive willingness to pay" }
    ],
    tags: ["Conjoint", "Pricing", "Consumer research", "Excel"]
  },
  {
    // TODO: Replace with a real project.
    title: "Predicting Campaign Response for a US Market Entry",
    summary: "Helping a Korean consumer brand spend its launch budget where it converts.",
    problem:
      "A Korean brand entering the US needed to decide which audiences and channels deserved its limited launch budget.",
    approach:
      "Combined GA4 web analytics with campaign data, built a logistic regression model to predict conversion likelihood, and tracked performance by audience in a Tableau dashboard.",
    results: [
      { value: "2.1×", label: "conversion rate in top-decile audience" },
      { value: "−22%", label: "customer acquisition cost" },
      { value: "0.78", label: "model AUC on holdout data" }
    ],
    tags: ["Predictive modeling", "Regression", "GA4", "Tableau"]
  }
];
