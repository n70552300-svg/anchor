export type AttentionLevel = "high" | "monitor";

export type Account = {
  slug: string;
  name: string;
  attention: AttentionLevel;
  why: string;
  signals: string[];
  recommendedNextStep: string;
};openUrl: string;   

export const sampleAccounts: Account[] = [
  {
    slug: "example-service",
    name: "Example Service",
    attention: "high",
    why: "Old, inactive, and appeared in a breach.",
    signals: [
      "Account is several years old",
      "No recent activity",
      "Breach exposure signal",
    ],
    recommendedNextStep:
    openUrl: "https://example.com"  
      "Reset the password, enable MFA if available, or close the account if unused.",
  },
  {
    slug: "another-service",
    name: "Another Service",
    attention: "monitor",
    why: "No strong signals of elevated risk right now.",
    signals: [
      "Active account signals present",
      "No breach correlation found",
    ],
    recommendedNextStep:
     openUrl: "https://example.com"
      "No immediate action needed. Keep an eye on changes.",
  },
];
