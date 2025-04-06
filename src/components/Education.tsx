
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EducationItem {
  school: string;
  degree: string;
  location: string;
  graduationDate: string;
  description?: string;
}

const educationItems: EducationItem[] = [
  {
    school: "Colorado State University",
    degree: "Masters in Computer Information Systems",
    location: "Fort Collins, CO, US",
    graduationDate: "Dec 2025",
    description: "Graduate Certificate in Business Intelligence"
  },
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelors in Information Science and Engineering",
    location: "Belgaum, India",
    graduationDate: "May 2021"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight mr-2">05.</span> Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {educationItems.map((item) => (
            <Card key={item.school} className="bg-navy-light border-navy-lighter overflow-hidden">
              <div className="h-2 bg-highlight"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-lighter">
                    {item.school}
                  </h3>
                  <span className="font-mono text-sm text-highlight">
                    {item.graduationDate}
                  </span>
                </div>
                
                <p className="font-medium text-slate mb-1">
                  {item.degree}
                </p>
                
                <p className="text-sm text-slate mb-4">
                  {item.location}
                </p>
                
                {item.description && (
                  <p className="text-slate border-t border-navy-lighter pt-4 mt-4">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-highlight mb-6">
            Certifications
          </h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-highlight mr-3 mt-1">▹</span>
              <div>
                <h4 className="font-medium text-slate-lighter">Python for Everybody</h4>
                <p className="text-slate">University of Michigan (Coursera)</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-highlight mr-3 mt-1">▹</span>
              <div>
                <h4 className="font-medium text-slate-lighter">Business Intelligence Graduate Certificate</h4>
                <p className="text-slate">Colorado State University</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
