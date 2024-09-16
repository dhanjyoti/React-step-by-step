// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Milestone = {
  milestoneIndex: number;
  leads: number;
};

type CumulativeAdInsights = {
  clicks: number;
  impressions: number;
  spend: number;
  inlineLinkClicks: number;
  fullViewImpressions: number;
  fullViewReach: number;
  reach: number;
  ctr: number;
  frequency: number;
  inlineLinkClicksCtr: number;
  cpc: number;
  cpm: number;
  cpp: number;
};

type Ad = {
  _id: string;
  adId: string;
  externalAdId: string;
  serviceId: string;
  totalLeadsSuccessWithRetargeting: number;
  totalLeadsSuccessWithoutRetargeting: number;
  totalLeadsTimedOut: number;
  totalLeadsReEntry: number;
  totalLeads: number;
  totalLeadsSuccess: number;
  costPerLead: number | null;
  costPerQualifiedLeadWithRetargeting: number | null;
  costPerQualifiedLeadWithoutRetargeting: number | null;
  costPerQualifiedLead: number | null;
  milestones: Milestone[];
  cumulativeAdInsights: CumulativeAdInsights;
  campaignName: string | null;
  adSetName: string | null;
};

type Data = {
  ads: Ad[];
};

const ads: Ad[] = [
  {
    _id: "43d1712d-dcb4-4a1b-3abc-80086acf330f",
    adId: "43d1712d-dcb4-4a1b-3abc-80086acf330f",
    externalAdId: "01291381371311212",
    serviceId: "a66b72c2-b428-4442-b3fc-9e061b5ec268",
    totalLeadsSuccessWithRetargeting: 0,
    totalLeadsSuccessWithoutRetargeting: 0,
    totalLeadsTimedOut: 0,
    totalLeadsReEntry: 0,
    totalLeads: 0,
    totalLeadsSuccess: 0,
    costPerLead: null,
    costPerQualifiedLeadWithRetargeting: null,
    costPerQualifiedLeadWithoutRetargeting: null,
    costPerQualifiedLead: null,
    milestones: [],
    cumulativeAdInsights: {
      clicks: 0,
      impressions: 0,
      spend: 0,
      inlineLinkClicks: 0,
      fullViewImpressions: 0,
      fullViewReach: 0,
      reach: 0,
      ctr: 0,
      frequency: 0,
      inlineLinkClicksCtr: 0,
      cpc: 0,
      cpm: 0,
      cpp: 0,
    },
    campaignName: null,
    adSetName: null,
  },
  {
    _id: "728a1abb-d579-462a-8e65-a4a0cc83cd27",
    adId: "728a1abb-d579-462a-8e65-a4a0cc83cd27",
    externalAdId: "120210789565030789",
    serviceId: "a66b72c2-b428-4442-b3fc-9e061b5ec268",
    totalLeadsSuccessWithRetargeting: 0,
    totalLeadsSuccessWithoutRetargeting: 0,
    totalLeadsTimedOut: 0,
    totalLeadsReEntry: 0,
    totalLeads: 4,
    totalLeadsSuccess: 0,
    costPerLead: null,
    costPerQualifiedLeadWithRetargeting: null,
    costPerQualifiedLeadWithoutRetargeting: null,
    costPerQualifiedLead: null,
    milestones: [
      {
        milestoneIndex: 0,
        leads: 4,
      },
    ],
    cumulativeAdInsights: {
      clicks: 4,
      impressions: 41,
      spend: 9.62,
      inlineLinkClicks: 3,
      fullViewImpressions: 0,
      fullViewReach: 0,
      reach: 41,
      ctr: 9.756098,
      frequency: 1,
      inlineLinkClicksCtr: 7.317073,
      cpc: 2.405,
      cpm: 234.634146,
      cpp: 234.634146,
    },
    campaignName: "Campaign NewAr",
    adSetName: "New Engagement ad set AR",
  },
  {
    _id: "168efad0-edd1-4878-a230-e9abcb5e1389",
    adId: "168efad0-edd1-4878-a230-e9abcb5e1389",
    externalAdId: "120210341382760789",
    serviceId: "a66b72c2-b428-4442-b3fc-9e061b5ec268",
    totalLeadsSuccessWithRetargeting: 0,
    totalLeadsSuccessWithoutRetargeting: 0,
    totalLeadsTimedOut: 0,
    totalLeadsReEntry: 0,
    totalLeads: 0,
    totalLeadsSuccess: 0,
    costPerLead: null,
    costPerQualifiedLeadWithRetargeting: null,
    costPerQualifiedLeadWithoutRetargeting: null,
    costPerQualifiedLead: null,
    milestones: [],
    cumulativeAdInsights: {
      clicks: 2,
      impressions: 28,
      spend: 17.34,
      inlineLinkClicks: 0,
      fullViewImpressions: 0,
      fullViewReach: 0,
      reach: 28,
      ctr: 7.142857,
      frequency: 1,
      inlineLinkClicksCtr: 0,
      cpc: 8.67,
      cpm: 619.285714,
      cpp: 619.285714,
    },
    campaignName: "Campaign NewAr",
    adSetName: "New Ar ad set",
  },
  {
    _id: "83d1298d-dcb4-4a4b-9abc-30086acf330f",
    adId: "83d1298d-dcb4-4a4b-9abc-30086acf330f",
    externalAdId: "120210642299930789",
    serviceId: "a66b72c2-b428-4442-b3fc-9e061b5ec268",
    totalLeadsSuccessWithRetargeting: 0,
    totalLeadsSuccessWithoutRetargeting: 0,
    totalLeadsTimedOut: 0,
    totalLeadsReEntry: 4,
    totalLeads: 11,
    totalLeadsSuccess: 0,
    costPerLead: null,
    costPerQualifiedLeadWithRetargeting: null,
    costPerQualifiedLeadWithoutRetargeting: null,
    costPerQualifiedLead: null,
    milestones: [
      {
        milestoneIndex: 1,
        leads: 1,
      },
      {
        milestoneIndex: 2,
        leads: 1,
      },
      {
        milestoneIndex: 0,
        leads: 9,
      },
    ],
    cumulativeAdInsights: {
      clicks: 67,
      impressions: 10174,
      spend: 174.77,
      inlineLinkClicks: 45,
      fullViewImpressions: 0,
      fullViewReach: 0,
      reach: 10117,
      ctr: 4.503018,
      frequency: 1.0403385,
      inlineLinkClicksCtr: 2.4831425,
      cpc: 3.217224,
      cpm: 232.2016625,
      cpp: 249.8930885,
    },
    campaignName: "Shrikant campaign 14/08/2024 Campaign",
    adSetName: "Shrikant campaign 14/08/2024 Ad Set",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ ads });
}
