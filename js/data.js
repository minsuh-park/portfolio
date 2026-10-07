/* ==========================================================================
   PROJECT / CASE STUDY CONTENT
   --------------------------------------------------------------------------
   This is the only file you need to edit to change the "Selected Work" cards.
   Each object below becomes one case study, in the order listed.

   Fields:
     title          — case study headline
     summary        — one-line italic standfirst under the title
     problem        — the business question
     approach       — what you did and which methods you used
     recommendation — (optional) the decision you recommended
     results        — 2–3 quantified outcomes: { value: "3.0×", label: "what it measured" }
     tags           — short keywords shown as badges
     note           — (optional) small-print disclaimer shown under the tags
     link           — (optional) { href: "assets/deck.pdf", text: "View the full deck (PDF)" }

   All figures below come directly from the case study decks.
   ========================================================================== */

window.PORTFOLIO_PROJECTS = [
  {
    title: "Kirin: Turning Customer Preferences into Product Strategy",
    summary: "Which product profile and customer segment should a new beer target?",
    problem:
      "Kirin sits mid-pack in a crowded import beer market, holding a 12.9% share of preference against 17.2% for the leading brands. Should it launch a new beer, and if so, which product profile and segment should it target?",
    approach:
      "Segmented 317 respondents with hierarchical clustering, finding three behavioral segments. Then used conjoint analysis across 7 attributes and 21 levels to measure customer trade-offs and simulate share of preference for a new concept against 7 competitors.",
    recommendation:
      "Lead positioning with calorie-conscious, Japanese-heritage, occasion-based cues rather than packaging or glass redesign. Re-test the full-bodied recipe with the occasion-driven majority before committing launch resources.",
    results: [
      { value: "23.2%", label: "simulated family share of preference, up from 12.9% (+10.3 pts)" },
      { value: "17.7%", label: "of preference driven by calories, the top attribute" },
      { value: "51%", label: "of respondents are occasion-driven, the largest segment" }
    ],
    tags: ["Conjoint analysis", "Segmentation", "Hierarchical clustering", "Positioning"],
    note: "MBA academic case using Enginius-provided data. Independently developed; not work performed for or endorsed by Kirin."
    // TODO: To link the full deck, add the PDF to assets/ and uncomment:
    // link: { href: "assets/Kirin_Product_Strategy_PMM_Portfolio.pdf", text: "View the full deck (PDF)" }
  },
  {
    title: "Bookbinders Club: Predictive Targeting for a Catalog Launch",
    summary: "Deciding who should receive a catalog for a new art title.",
    problem:
      "A direct-mail book club mails its whole customer file for every new title, but only 25% of customers respond. Three in four catalogs produce no sale.",
    approach:
      "Built a logistic regression response model on 1,600 customers' purchase histories (10 predictors). Scored and ranked the file by predicted response probability, then tested mailing cutoffs against breakeven campaign economics.",
    recommendation:
      "Mail the top 25% of the ranked file in two tiers and route the rest to a lower-cost channel such as email. Validate on a holdout sample and pilot in one region before committing the full budget.",
    results: [
      { value: "3.0×", label: "lift over random targeting in the top 10% of the list" },
      { value: "86.5%", label: "predicted response in the top 5%, vs. 14.7% in the bottom 75%" },
      { value: "+48%", label: "profit vs. mailing everyone, at 75% less spend (illustrative costs)" }
    ],
    tags: ["Predictive modeling", "Logistic regression", "Targeting", "Campaign analysis"],
    note: "MBA case using Enginius predictive-modeling data. Accuracy and lift were measured in-sample; cost and margin figures are illustrative assumptions."
    // link: { href: "assets/Bookbinders_Club_Predictive_Targeting_PMM_Portfolio.pdf", text: "View the full deck (PDF)" }
  },
  {
    title: "Blue Apron: What Really Drives Social Engagement",
    summary: "Is engagement driven by what gets posted, or by who posts it?",
    problem:
      "Influencer marketing budgets often go toward better content mechanics: hashtags, captions, photos. Do those actually move engagement, or does the creator matter more?",
    approach:
      "Analyzed 4,179 posts from 98 creator accounts with panel regression. A Hausman test (p < 0.001) ruled out random effects, so I used a fixed-effects model to separate post-level factors from account-level effects.",
    recommendation:
      "Spend efficiency depends on who you partner with, not how they post. Pilot a budget shift toward top-quartile creators against a control group, and judge it on attributed signups per dollar rather than engagement alone.",
    results: [
      { value: "~24 pts", label: "engagement-rate spread between the highest and lowest account effects" },
      { value: "0 of 4", label: "content mechanics (length, hashtags, photo, mentions) significant at 5%" },
      { value: "4,179", label: "posts analyzed across 98 creator accounts" }
    ],
    tags: ["Panel regression", "Fixed effects", "Influencer marketing", "Social analytics"],
    note: "MBA case applying Enginius panel-regression data to a Blue Apron question. The source data does not name Blue Apron, and engagement is a proxy for reach, not revenue."
    // link: { href: "assets/Blue_Apron_Social_Engagement_Analysis.pdf", text: "View the full deck (PDF)" }
  }
];
