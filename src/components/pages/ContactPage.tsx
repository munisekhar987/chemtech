'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin,
  Calculator,
  Wrench,
  Clock,
  Truck,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactPage = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Connect With Experts</h1>
          <p className="text-xl text-sky-100 max-w-4xl mx-auto">
            Let's discuss your water treatment challenges and engineer the perfect solution together
          </p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Consultation Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-sky-900 flex items-center gap-3">
                  <Calculator className="w-6 h-6" />
                  Technical Consultation
                </CardTitle>
                <CardDescription>Free system analysis & recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Company" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                </div>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Industry Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                    <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                    <SelectItem value="textile">Textile</SelectItem>
                    <SelectItem value="municipal">Municipal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="number"
                    placeholder="Required Capacity (LPH)"
                  />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Project Timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                      <SelectItem value="short">Short term (1-3 months)</SelectItem>
                      <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                      <SelectItem value="long">Long term (6+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  rows={4}
                  placeholder="Describe your water treatment requirements, quality parameters, and specific challenges..."
                  className="resize-none"
                />

                <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-xl">
                  Request Technical Consultation
                </Button>

                <p className="text-xs text-center text-slate-500">
                  Our engineers will contact you within 24 hours with a preliminary assessment
                </p>
              </CardContent>
            </Card>

            {/* Service Request Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-sky-900 flex items-center gap-3">
                  <Wrench className="w-6 h-6" />
                  Service Request
                </CardTitle>
                <CardDescription>Maintenance & support services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Contact Person" />
                  <Input placeholder="Facility Location" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Emergency Contact" />
                </div>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Type Required" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency Repair</SelectItem>
                    <SelectItem value="maintenance">Scheduled Maintenance</SelectItem>
                    <SelectItem value="upgrade">System Upgrade</SelectItem>
                    <SelectItem value="calibration">Instrument Calibration</SelectItem>
                    <SelectItem value="training">Operator Training</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical (System Down)</SelectItem>
                    <SelectItem value="high">High (Performance Issues)</SelectItem>
                    <SelectItem value="medium">Medium (Routine Service)</SelectItem>
                    <SelectItem value="low">Low (Future Planning)</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  rows={4}
                  placeholder="Describe the service requirement, symptoms observed, or maintenance needed..."
                  className="resize-none"
                />

                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div className="text-sm">
                    <p className="font-semibold text-green-800">Service Response Times:</p>
                    <p className="text-green-700">Critical: 2-4 hours | High: Same day | Medium: 24-48 hours</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl">
                  Submit Service Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-sky-900 mb-8">Visit Our Engineering Center</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-900 mb-2">Corporate Headquarters</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Chemtech Water Technologies & Solutions India Pvt Ltd<br />
                      Nagari, Chittoor District<br />
                      Andhra Pradesh - 517501<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-900 mb-2">Business Hours</h4>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-green-600 font-medium mt-2">Emergency Support: 24/7 Available</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-900 mb-2">Service Coverage</h4>
                    <p className="text-slate-600">
                      Pan-India service network with regional offices in Chennai, Bangalore, Hyderabad, and Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h3 className="text-3xl font-bold text-sky-900 mb-8">Find Us on Map</h3>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.8839147773855!2d79.5850316!3d13.3339724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75446bed41cb%3A0x2dc4a0e6e10fb8f2!2sChemtech%20Water%20Technologies%20%26%20Solutions%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chemtech Water Technologies & Solutions India Pvt Ltd - Nagari, Chittoor"
                  className="rounded-2xl"
                ></iframe>
              </div>
              
              {/* Map instructions */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium mb-2">Directions to Our Office:</p>
                <p className="text-sm text-blue-700">
                  Located in Nagari, Chittoor District, Andhra Pradesh - easily accessible from major highways. 
                  Ample parking space available on premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;