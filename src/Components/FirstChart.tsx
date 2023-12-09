import React, { useEffect } from 'react'
import { Chart as ChartJS , ArcElement, Tooltip, Legend } from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'

type Props = {}

const FirstChart = (props: Props) => {


    ChartJS.register(ArcElement, Tooltip, Legend);
    useEffect(()=> {
        
    })

  return (
   <section className='row justify-content-between'>
     <div className='col-lg-4 col-sm-7'>
         <Doughnut  data={{ 
            
            labels: ['Kenya', "Tanzania", "march"],
            datasets: [
                {
                    label: "Kenya",
                    data: [1,2,3],
                    backgroundColor: "red"
                },
                {
                    label: "Tanzania",
                    data: [4,6,7],
                    backgroundColor: "blue"
                },
                {
                    label: "Uganda",
                    data: [4,6,7],
                    backgroundColor: "pink"
                },
            ]
          }}/>
    </div>
    <div className='col-lg-4 col-sm-7'>
         <Doughnut datasetIdKey='id' data={{ 
            
            labels: ['Kenya', "Tanzania", "march"],
            datasets: [
                {
                    label: "Kenya",
                    data: [1,2,3],
                    backgroundColor: "red"
                },
                {
                    label: "Tanzania",
                    data: [4,6,7],
                    backgroundColor: "blue"
                },
                {
                    label: "Uganda",
                    data: [4,6,7],
                    backgroundColor: "pink"
                },
            ]
          }}/>
    </div>

   </section>
  )
}

export default FirstChart