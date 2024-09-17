"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { api } from "@/lib/axios"
import { Heart, Users, Briefcase, BarChart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface FeatureCardProps {
  title: string,
  description: string,
  icon: any,
}


export default function LandingPage() {
  const [data, setData] = useState({})

  useEffect(() => {
    api.get('/centro/1/count')
      .then(response => {
        localStorage.setItem('landingPageData', JSON.stringify({ totalChildren: response.data.totalChildren }));
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    const getItem = localStorage.getItem('landingPageData')
  
    if(getItem){
      const savedData = JSON.parse(getItem);
    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow">
        <section className="bg-cover h-[600px] py-20 text-center" style={{ backgroundImage: "url('/gh.jpg')" }}>
          <div className="container mx-auto px-4">
            <h1 className="mt-20 text-4xl md:text-6xl font-bold mb-6 text-white">Streamline Your Foster Care Management</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              FosterCare Pro helps agencies manage foster children, families, and case workers efficiently and effectively.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Heart className="h-10 w-10 text-primary" />}
                title="Child Management"
                description="Track and manage foster children's information, placements, and care plans."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Family Coordination"
                description="Manage foster families, their certifications, and placement preferences."
              />
              <FeatureCard
                icon={<Briefcase className="h-10 w-10 text-primary" />}
                title="Case Worker Support"
                description="Streamline case worker assignments, caseloads, and reporting."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10 text-primary" />}
                title="Reporting & Analytics"
                description="Generate insightful reports and analytics to improve care quality."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About FosterCare Pro</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              FosterCare Pro is designed to empower foster care agencies with the tools they need to provide the best possible care for children in the foster system. Our platform streamlines administrative tasks, improves communication, and helps agencies make data-driven decisions to enhance the lives of foster children and families.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Foster Care Management?</h2>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 FosterCare Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
