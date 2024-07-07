// "use client"`
import { axisClasses, BarPlot, ChartsReferenceLine, ChartsYAxis, ResponsiveChartContainer } from '@mui/x-charts';
// import { transform } from 'next/dist/build/swc';
import React, { useEffect } from 'react';

const dataset = [
    {
        seoul: 60,
        name: "lead",
    },
    {
        seoul: 130,
        name: "lead",
    },
    {
        seoul: 100,
        name: "lead",
    },
    {
        seoul: 30,
        name: "lead",
    },
    {
        seoul: 50,
        name: "lead",
    },
    {
        seoul: 10,
        name: "lead",
    },
    {
        seoul: 90,
        name: "lead",
    },
]
const alignBarLabels = ()=> {
    const elements = document.querySelectorAll("text.lead-status-bar-label");

    elements.forEach(element =>{
        const transform = element.style.transform;
        const indexOfBracket = transform.indexOf("(");
        const indexOfComma = transform.indexOf(",");
        const currentTranslate3Dx = transform.substring(indexOfBracket+1, indexOfComma);
        const newTranslate3DX = parseInt(element.style.width) + 175 + "px";
        const newTransform = transform.replace(currentTranslate3Dx, newTranslate3DX);
        element.style.transform = newTransform;
    });
}

export default function HorizontalBar(){
    useEffect(()=>{
        alignBarLabels();
    },[])

    return (
        <ResponsiveChartContainer
            width={800}
            height={400}
            sx={{
                [`.${axisClasses.root} .${axisClasses.label}`]:{
                    fontWeight: 600,
                    transform: 'translateX(-100px)',
                },
                [`.${axisClasses.tickLabel}`]:{
                    fontWeight: 300,
                },
                fontFamily: 'Poppins'
            }}
            margin={{left: 160}}
            series={[{type:'bar', data:dataset.map(item=>item.seoul), layout:'horizontal', color:"#5956D6"}]}
            yAxis={[{scaleType:'band', data:dataset.map((d,i)=>({...d, id:i+5})), dataKey:'id', id:'y', label:"Ad Id", valueFormatter:(v)=>v.name}]}
        >
            <ChartsReferenceLine 
                x={0}
                lineStyle={{strokeDasharray:'2.2', stroke:'lightgray', transform:'translate(0.5%'}}
                labelStyle={{fontSize:'10', alignSelf:'center', transform:'translate(-50%, 20px)', transformBox:'border-box'}}
                label={'0'}
                labelAlign='end'
            />
            <ChartsReferenceLine 
                x={100}
                lineStyle={{strokeDasharray:'2.2', stroke:'lightgray', transform:'translate(0.5%'}}
                labelStyle={{fontSize:'10', alignSelf:'center', transform:'translate(-50%, 20px)', transformBox:'border-box'}}
                label={'0'}
                labelAlign='end'
            />
            <ChartsYAxis axisId={'y'} disableLine disableTicks/>
            <BarPlot skipAnimation barLabel="value" slotProps={{barLabel: {className: 'lead-status-bar-label'}}}/>
        </ResponsiveChartContainer>
    )
}