const ND={};
async function loadND(){const names=['sales','rentals','footfall','filters','monthly_sales','center_year','tenant_year','monthly_footfall'];for(const n of names){ND[n]=await fetch(`data/${n}.json`).then(r=>{if(!r.ok)throw new Error(n);return r.json()})}return ND;}
function salesFiltered({year,center='Todos',tenant='Todos',status='Todos'}){return ND.sales.filter(d=>(!year||d.Year==year)&&(center==='Todos'||d.Center===center)&&(tenant==='Todos'||d.Tenant===tenant)&&(status==='Todos'||d.Status===status));}
function rentalFiltered({center='Todos',tenant='Todos'}){return ND.rentals.filter(d=>(center==='Todos'||d.Center===center)&&(tenant==='Todos'||d.Tenant===tenant));}
function footfallFiltered({year,center='Todos'}){return ND.footfall.filter(d=>(!year||d.Year==year)&&(center==='Todos'||d.Center===center));}
function sum(a,k){return a.reduce((t,d)=>t+(+d[k]||0),0)}
function uniq(a,k){return new Set(a.map(d=>d[k])).size}
