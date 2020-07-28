import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PowerBIEmbed } from 'powerbi-client-react';
import './styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { models } from 'powerbi-client';


//@ts-check
function ReportTest()  {
  let token = 'H4sIAAAAAAAEACWWxw60CA6E3-W_MhI5jTQHQpNzhhvQ5JzDat99e7RXqy4u2-XvP3-s9Omn9Pvn7z-CG5CBs6qn8aHD21NSmvGqaxZlXNZEFT3ikayTtZSWJSMT1rgdeHDgc4ix5FvvyNHTlUk1BDpqzxTDYQUmdSw56zPywlVjJnNyHMbUlI31tRBaq4Bk7CaahsuytjANK8FflH7WOcY00Fa_LTYAgnDSRqsY0yS7Zv5QshADKhtgpmFr00uG_PlI6xynSi60OhOuNN2sqaNaR_bGXomBdmKHvvVJab4kddTLM1AgHdwKEFkky-tVbxKpjGI_KxsKcdlJ6YHzYwoAEWGfCHpCibbZ_GZvHI0EBpNISOXptNSNI9KNQCRhFnnBDPpzGiwrB35IayJbHl-A1vUoV8QIP6i4bRv0SMpBjaBzoaeYQgO0TVE9JL5xPFvVlSyHgCgr9DiZDVOLdONqQ9cgDrN2j98CBTK-GSJdyiZQHN_14AMi0j1Tx30-nCLjGY6FdmkGlbt2JCw7jcgdY7VG8-4EgbViCgV49OYcploOJr3K7fBETcxvybrG44I6e7MCZyinFcB4ilX3d3im2DjnjpYDwH2xGiv7tNjkJB59NgAYOgZ4okWPvuhA7WJdsE734VEivJ7cOibYt7CaY71zUwrL5fqbFQzPu2FbT6ErYulqHt6Tb9YITDlvDzPbfR31pRV1155KsOMQAh8mbVHRgU6bQhSHD6TmFEyuzKAODOHnkuWp_5I0tQgtCSVzS0CIoZbCG6nwFPOaXIlvjxeOkxrTjWYR110LkucKdQterVelH55ee4n9Se1BreZYADqdv2Z9wdunKldCPahT6WJDKjgFdcmXyxExDYRYZgVC4jhO3bka0KQmU0wZ8szExW1bx446xV7YeekA5lNBxhd4FAEKjHeV32COAB3UmwGALso-WS49FIDPYaFLH-4F6XocpPjEUfdGNeVpnvV5ExwYkJAYFMJBq72EOnP5mY-eXGUf1RvqiLlB1BkmI3cJdDWLNFIRnenv6sG-ILQeHaDCDW67RhNuguJ1XcuYv1WJXn7O7oqlLwqeKI766FdCrkS4tR5K9RWShMGSXRj0oiggKQ_sMYcYJNFa9i76LbAXYTCPxRDIcRP1fE1Wx28J1nQZyvIj1DdgPkVykwmrghLxLvJmama4-YA7l4zfIFBlNEf14E5a4MBUgIx2zGpDSQZNe3LuSWKEkIST-DBDGwZxPG2HA0ylS_dPRekp5wwxDQgLAo9gtXOUILimYjf9WQy9htoh8dgerLJOlMxZhLzhLe1S1zUmCtkUOenAmsyqas4jHoBeUrby25GaZnJmAzrP7D3h54i6Ykaud3YHue5-K011gE_P06qfUYsUthLzU56L-lRRN3JdR-rynxpovt-pKW8EowUs__A59lx1HDT3iOR4NuHzKDqFOsypcMjEPDf2L764FrVIkX94upFnpiDf77I5LRv0ZLAF-FcFCPpWvXx5znvhkKVc6S1MNVFIg0zAOA-oAcyLZvD7BVr2001G59UYQaeqASwaC3OhwzGRP5KvdsjwTsaXYHNweH-4z3Dh09vTAbk_rYCYbz-NtD1gR3eye-uDHJKr4PAVcG5hUkG2li6EdLivKiyqg0LKjcZCxWG7Kp9S2F9705hUrX6liL26o4W9m5FDpCfOlSSEsLx4PHTOsJFjbLQDiWZRLoRgfUxFj_YMmCg6uReODR8k8o4gsbXm0MyH8ZBF92F_-1YJTL3nO3Nt0V_hJkHLbdQ0r3UmyNCCVdPgl14cIHT2dkq29tWPogWVkeZAPffBUA7JNKxQtZplQ6c_MmoDCQ7a8Ynkmbt4yOqrssIQTvCo-X4cPczSNWS6N6E-ruzJPtaLNvHQZqcm7xxFxpsJA4v717mttE7ns-nzPVTRe-mAo1yyNNiRXIrQiSRjq_Nd9NQIgwE6oloMm6Q09Tq-CmnMFNMA8KBuacImFLZ8rjPTSxvAN6onKjdCP1smEKr_baCHTaU4XS6s4hW5v-MawpxoCfnnY7w73AefT-Yvgh5-uH3xs-R4MZorxw3fqQhwAbn2lFYNZwkOJDim2yF7qvE30tknKF8Erl5wPq6uyS5BajNSdv5c4_Gx45OVqIWnnSwB9m5moQ-XYOOki7zbhRSUZ-zHTEHn66NrkF6q5NQtVyEfnJ7cRjTfL2Yv4sRn4y7VNZCjtdwNJxaBNC3BIjcIIMAVhvKu6BMBA5WIiubIvZOK_XIERCkphVtjmji9VEYzM4gSLlCr0cwXJOPxyYsIfRLEjzABCNARSresNUr6knhPGofyGzfwzPznrz_c-sz7pBbPD2cI9bxzK6aVvC7ChwDphLNNe4NlouNkSgkTMYYfiPcN82XItnEF_2RIFIpzv6GV0rExMkBgNo74APCaB-tiuS9kWXcUY1_ZSRKCEbLcupy86KyZSP8BgA15zgmY06uUg2ZQWPpG6WYT53G4n4hwwnI4U2hHyIbjrlF2q1H4nbebCSbdB24_jlVK6QhEWlBpO9dc0sVAUGnlQpMUdgP9nBvENnOyzGFZPvhdewVxs2LTcAeN3KKbjCZcfoJuCsp3IeIlShcdIAw9DRtFitXldWfsAaNF5eYNNdNCXfNvGRDKukI9rmcKRhIgZCEZStWER2ubVzGLFyD1BXIQAn88ajuMD_PPP__a_Mx1scrBz2Uv56Mkxxd1LwqiTycD933-_yq3qcZ0P9biJ9sABvLFF0gqbNhQIToUyz0glttnTekEZCHaS40RoyobuJ88C2QBGKftEmWquNfLmER-FHAxsBgNYDxvfhK1lJ22hheZe_GlOtcilDxGJHtuYvLA3Xwr2L33Gj-KGr7f60yMgbLEIy5u-c8lqNPOYtFYHlxfMnL8xL7V0zlbjXiPhD6MlpECE3IO7O49IR5TAUPpqr6N-9rEJ5pbOeY8aOexEqRPiVsrXdwHO_2TqLekCqUJA3_vGHrGSAxqwU85_3VgvXzUIB4T4s74a84gBdDsVQM9RJL3lywwky68yIabru6Cm3aSsdiS9nXkspGqw52R2j0GWL1Yl2wxrx2lH-yG_9r83_8Bd-xPPMILAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19';
  let embedUrlBi = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d';
  let reportId = 'f6bfd646-b718-44dc-a378-b73e6b528204';
  const embedConfigArray = [
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    },
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    },
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    },
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    },
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    },

    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    },
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
    {
      type: 'report',   // Supported types: report, dashboard, tile, visual and qna
      id: reportId,
      embedUrl: embedUrlBi,
      accessToken: token,
      tokenType: models.TokenType.Embed
    }
    ,
];

const [embedConfigState,setEmbedConfig]=useState([]);

const [pageDetails,setPageDetails]=useState({total: embedConfigArray.length,
  per_page: 9,
  current_page: 0});

   useEffect(() => { 
      if (pageDetails.current_page === 0){
            setEmbedConfig(embedConfigArray.slice(pageDetails.current_page*pageDetails.per_page,
            (1*pageDetails.per_page)));
      }
      else{
        setEmbedConfig(embedConfigArray.slice((pageDetails.current_page-1)*pageDetails.per_page,
        (pageDetails.current_page*pageDetails.per_page)));
      }
    },[pageDetails]);

function getGraphs(number){
  setPageDetails({...pageDetails,current_page:number})
}
const pageNumbers = [];
if (pageDetails.total !== null) {
  for (let i = 1; i <= Math.ceil(pageDetails.total / pageDetails.per_page); i++) {
    pageNumbers.push(i);
  }
}
  return (
    <>
    <div class="container">
      <table>      
        <th>{pageDetails.current_page}</th>
        <tbody>
          {embedConfigState.map(emp=>(
           <tr key={emp.id} class="float">
             <PowerBIEmbed 
            embedConfig = {{
                type: emp.type,   
                id: emp.id,
                embedUrl: emp.embedUrl,
                accessToken: emp.accessToken,
                tokenType: models.TokenType.Embed
            }}     
            cssClassName = { "report-style-class" }   
        />
        </tr>        
      
  
          ))}
        </tbody>
      </table>
     <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item page-link"  onClick= {() => getGraphs(1)}>Previous</li>
          { pageNumbers.map(number => (
                      <li key={number} class="page-link" onClick={() => getGraphs(number)} >{number}</li>
        
                  ))}

          <li class="page-item page-link"onClick= {() => getGraphs(pageDetails.current_page + 1)}>Next</li>
        </ul>
    </nav>
</div>

 </>
);
  }


const element=<ReportTest />

ReactDOM.render(element,document.getElementById("root"));


