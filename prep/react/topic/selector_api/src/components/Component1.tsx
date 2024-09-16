import React from 'react'

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
    adInsights: any[];
    cumulativeAdInsights: CumulativeAdInsights;
    campaignName: string | null;
    adSetName: string | null;
  };  

  type Component1Props ={
    data: Ad | null;
  }

function Component1({data}: Component1Props) {
    if(!data){
        return <div>Please select an ad to view its details.</div>
    }
  return (
    <>
        <h2>Ad Details</h2>
        <div>{data.adId}</div>
        <div>{data.totalLeads}</div>
        <div>{data.costPerQualifiedLead}</div>
    </>
  )
}

export default Component1