import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";

const listings = {
  properties: [
    {
      title: "3BR Airbnb | Bozeman, MT",
      proof: "AirDNA: $4,200/mo est. revenue",
      cashflow: "$2,000/mo net"
    },
    {
      title: "2BR STR | Scottsdale, AZ",
      proof: "AirDNA: $3,900/mo avg",
      cashflow: "$1,800/mo net"
    }
  ],
  turo: [
    {
      title: "2022 Tesla Model 3",
      proof: "Turo: $2,100/mo @ $70/day",
      cashflow: "$1,300/mo net"
    }
  ],
  businesses: [
    {
      title: "Absentee Dry Cleaner",
      proof: "Gross: $25K/mo | Staffed",
      cashflow: "$5,800/mo net"
    }
  ],
  notes: [
    {
      title: "Performing Note | Ohio",
      proof: "6.5% ROI | $120K secured",
      cashflow: "$650/mo"
    }
  ]
};

const ListingCard = ({ title, proof, cashflow }) => (
  <Card className="m-2 shadow-lg">
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{proof}</p>
      <p className="text-green-600 font-bold">{cashflow}</p>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔥 Top Investment Opportunities</h1>
      <Tabs defaultValue="properties">
        <TabsList className="bg-white shadow rounded mb-6">
          <TabsTrigger value="properties">🏡 Properties</TabsTrigger>
          <TabsTrigger value="turo">🚗 Turo</TabsTrigger>
          <TabsTrigger value="businesses">🏪 Businesses</TabsTrigger>
          <TabsTrigger value="notes">💰 Notes</TabsTrigger>
        </TabsList>

        {Object.entries(listings).map(([key, items]) => (
          <TabsContent value={key} key={key}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <ListingCard key={i} {...item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
