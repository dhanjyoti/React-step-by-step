import Component1 from "@/components/Component1";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

type Data = {
  ads: Ad[];
};
const fetchAds = async (): Promise<Data>=>{
  const response = await fetch("/api/ads");
  console.log(response)
  if(!response.ok){
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default function Home() {
  const [selected, setSelected] = useState<Ad | null>(null)

  const {data, error, isLoading} = useQuery({
    queryKey: ["ads"],
    queryFn: fetchAds,
  })
  if(isLoading) return <div>...Loading</div>;
  if(error instanceof Error) return <div>Error: {error.message}</div>

  if(!data || !Array.isArray(data.ads)){
    return <div>No data found</div>
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const c = data.ads.find((x)=> x._id === e.target.value);
    console.log(c)
    if(c){
      setSelected(c);
    } else {
      setSelected(null)
    }
  }
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <select onChange={handleSelectChange} defaultValue="default" className="border-2 border-black px-3 py-2 rounded-md">
          <option value="default">Choose an option</option>
        {data ? data.ads.map((ad: any)=>(
          <option key={ad._ad} value={ad._id}>
            {ad.adId}
          </option>
        )) : null}
        </select>
      </main>
      <Component1 data={selected} />
    </>
  );
}
