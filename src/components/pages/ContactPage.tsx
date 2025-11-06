'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Calculator,
  Wrench,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactPage = () => {
  // --- Separate states for each form ---
  const [techForm, setTechForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    plantType: '',
    timeline: '',
    message: '',
  });

  const [serviceForm, setServiceForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    priority: '',
    message: '',
  });

  const [techStatus, setTechStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serviceStatus, setServiceStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // --- Handle field changes ---
  const handleChange = (formType: 'tech' | 'service', field: string, value: string) => {
    if (formType === 'tech') {
      setTechForm((prev) => ({ ...prev, [field]: value }));
    } else {
      setServiceForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  // --- Send email function ---
  const sendEmail = async (templateId: string, formData: Record<string, string>, formType: 'tech' | 'service') => {
    if (formType === 'tech') setTechStatus('sending');
    else setServiceStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        templateId,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (formType === 'tech') {
        setTechStatus('success');
        setTimeout(() => setTechStatus('idle'), 3000);
      } else {
        setServiceStatus('success');
        setTimeout(() => setServiceStatus('idle'), 3000);
      }
    } catch (err) {
      console.error('Email send failed:', err);
      if (formType === 'tech') {
        setTechStatus('error');
        setTimeout(() => setTechStatus('idle'), 3000);
      } else {
        setServiceStatus('error');
        setTimeout(() => setServiceStatus('idle'), 3000);
      }
    }
  };

  // --- Technical Consultation Submit ---
  const handleTechSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      form_type: 'Technical Consultation',
      ...techForm,
    };

    sendEmail(process.env.NEXT_PUBLIC_EMAILJS_TECH_TEMPLATE_ID!, payload, 'tech');
    setTechForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      plantType: '',
      timeline: '',
      message: '',
    });
  };

  // --- Service Request Submit ---
  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      form_type: 'Service Request',
      ...serviceForm,
    };

    sendEmail(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TEMPLATE_ID!, payload, 'service');
    setServiceForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceType: '',
      priority: '',
      message: '',
    });
  };

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
          <div className="grid lg:grid-cols-2 gap-16 mb-12">
            
            {/* --- Technical Consultation Form --- */}
            <div className="bg-white rounded-xl shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleTechSubmit} noValidate>
                <Card className="shadow-none border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl text-sky-900 flex items-center gap-3">
                      <Calculator className="w-6 h-6" />
                      Technical Consultation
                    </CardTitle>
                    <CardDescription>For System Analysis & Recommendations</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Name" value={techForm.name} onChange={(e) => handleChange('tech', 'name', e.target.value)} required />
                      <Input placeholder="Company" value={techForm.company} onChange={(e) => handleChange('tech', 'company', e.target.value)} required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email" value={techForm.email} onChange={(e) => handleChange('tech', 'email', e.target.value)} required />
                      <Input type="tel" placeholder="Mobile Number" value={techForm.phone} onChange={(e) => handleChange('tech', 'phone', e.target.value)} required />
                    </div>

                    <Select onValueChange={(val) => handleChange('tech', 'industry', val)}>
                      <SelectTrigger><SelectValue placeholder="Select Industry Type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="Pharmaceutical">Pharmaceutical</SelectItem>
                        <SelectItem value="Chemical">Chemical</SelectItem>
                        <SelectItem value="Dairy">Dairy</SelectItem>
                        <SelectItem value="Textile">Textile</SelectItem>
                        <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="grid grid-cols-2 gap-4">
                      <Select onValueChange={(val) => handleChange('tech', 'plantType', val)}>
                        <SelectTrigger><SelectValue placeholder="Select Plant Type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Existing Plant">Existing Plant</SelectItem>
                          <SelectItem value="New Plant">New Plant</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select onValueChange={(val) => handleChange('tech', 'timeline', val)}>
                        <SelectTrigger><SelectValue placeholder="Project Timeline" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</SelectItem>
                          <SelectItem value="Short Term (1-3 months)">Short Term (1-3 months)</SelectItem>
                          <SelectItem value="Medium Term (3-6 months)">Medium Term (3-6 months)</SelectItem>
                          <SelectItem value="Long Term (6+ months)">Long Term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Textarea rows={4} placeholder="Describe your requirements..." value={techForm.message} onChange={(e) => handleChange('tech', 'message', e.target.value)} />

                    <Button type="submit" disabled={techStatus === 'sending'} className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-xl">
                      {techStatus === 'sending' ? 'Sending...' : 'Request Technical Consultation'}
                    </Button>

                    {techStatus === 'success' && <p className="text-green-600 text-center">✅ Email sent successfully!</p>}
                    {techStatus === 'error' && <p className="text-red-600 text-center">❌ Failed to send. Try again.</p>}
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* --- Service Request Form --- */}
            <div className="bg-white rounded-xl shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleServiceSubmit} noValidate>
                <Card className="shadow-none border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl text-sky-900 flex items-center gap-3">
                      <Wrench className="w-6 h-6" />
                      Service Request
                    </CardTitle>
                    <CardDescription>Operation & Maintenance, Support Services</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Name" value={serviceForm.name} onChange={(e) => handleChange('service', 'name', e.target.value)} required />
                      <Input placeholder="Company" value={serviceForm.company} onChange={(e) => handleChange('service', 'company', e.target.value)} required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email" value={serviceForm.email} onChange={(e) => handleChange('service', 'email', e.target.value)} required />
                      <Input type="tel" placeholder="Mobile Number" value={serviceForm.phone} onChange={(e) => handleChange('service', 'phone', e.target.value)} required />
                    </div>

                    <Select onValueChange={(val) => handleChange('service', 'serviceType', val)}>
                      <SelectTrigger><SelectValue placeholder="Service Type Required" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Emergency Repair">Emergency Repair</SelectItem>
                        <SelectItem value="Scheduled Maintenance">Scheduled Maintenance</SelectItem>
                        <SelectItem value="System Upgrade">System Upgrade</SelectItem>
                        <SelectItem value="Instrument Calibration">Instrument Calibration</SelectItem>
                        <SelectItem value="Operator Training">Operator Training</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select onValueChange={(val) => handleChange('service', 'priority', val)}>
                      <SelectTrigger><SelectValue placeholder="Priority Level" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Critical (System Down)">Critical (System Down)</SelectItem>
                        <SelectItem value="High (Performance Issues)">High (Performance Issues)</SelectItem>
                        <SelectItem value="Medium (Routine Service)">Medium (Routine Service)</SelectItem>
                        <SelectItem value="Low (Future Planning)">Low (Future Planning)</SelectItem>
                      </SelectContent>
                    </Select>

                    <Textarea rows={4} placeholder="Describe the service requirement..." value={serviceForm.message} onChange={(e) => handleChange('service', 'message', e.target.value)} />

                    <Button type="submit" disabled={serviceStatus === 'sending'} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl">
                      {serviceStatus === 'sending' ? 'Sending...' : 'Submit Service Request'}
                    </Button>

                    {serviceStatus === 'success' && <p className="text-green-600 text-center">✅ Email sent successfully!</p>}
                    {serviceStatus === 'error' && <p className="text-red-600 text-center">❌ Failed to send. Try again.</p>}
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
