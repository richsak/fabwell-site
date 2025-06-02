"use client";

import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const whyWorkAtFabwell = [
  "Competitive salary and benefits package",
  "Professional development and training opportunities",
  "Safety-first work environment",
  "Opportunity to work on diverse, challenging projects",
  "Team-oriented collaborative culture",
  "Work-life balance and flexible scheduling"
];

const CareersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-10 group text-sm">
          <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Be part of a growing company that values precision, safety, and professional excellence. We&apos;re always looking for skilled professionals to join our certified team.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
            Why Work at Fabwell?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyWorkAtFabwell.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 rounded-xl shadow-xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
            We&apos;re always looking for talented individuals to join our team. Whether you&apos;re an experienced welder, project manager, crane operator, or other skilled professional, we&apos;d love to hear from you.
          </p>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Send us your resume and tell us about your experience. We&apos;ll be in touch if there&apos;s a good fit for current or future opportunities.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base">
            <Link href="mailto:info@fabwell.ca?subject=Career%20Opportunity"> {/* Opens mail client */}
              Contact Us About Careers
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;