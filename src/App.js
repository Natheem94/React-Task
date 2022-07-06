import './App.css';
import Pricing from './Pricing';

function App() {
  let data = [{
    a:"Free",
    b:"0",
    c:"Single User",
    isc:true,
    d:"5GB Storage",
    isd:true,
    e:"Unlimited Public Projects",
    ise:true,
    f:"Community Access",
    isf:true,
    g:"Unlimited Private Projects",
    isg:false,
    h:"Dedicated Phone Support",
    ish:false,
    i:"Free Subdomain",
    isi:false,
    j:"Monthly Status Reports",
    isj:false
  },
  {
    a:"Plus",
    b:"9",
    c:"5 Users",
    isc:true,
    d:"50GB Storage",
    isd:true,
    e:"Unlimited Public Projects",
    ise:true,
    f:"Community Access",
    isf:true,
    g:"Unlimited Private Projects",
    isg:true,
    h:"Dedicated Phone Support",
    ish:true,
    i:"Free Subdomain",
    isi:true,
    j:"Monthly Status Reports",
    isj:false
  },
  {
    a:"Pro",
    b:"49",
    c:"5 Users",
    isc:true,
    d:"Unlimited Users",
    isd:true,
    e:"Unlimited Public Projects",
    ise:true,
    f:"Community Access",
    isf:true,
    g:"Unlimited Private Projects",
    isg:true,
    h:"Dedicated Phone Support",
    ish:true,
    i:"Unlimited Free Subdomains",
    isi:true,
    j:"Monthly Status Reports",
    isj:true
  }]
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
      data.map((e)=>{
        return <Pricing data = {e}/>
      })
    }
    </div>
  </div>
</section>
  </>
}

export default App;
