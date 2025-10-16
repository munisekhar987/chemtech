'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin,
  Droplets,
  Settings,
  Home,
  Package,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const pages = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Settings },
    { href: '/products', label: 'Our Products', icon: Package },
    { href: '/contact', label: 'Contact Us', icon: MessageCircle }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Chemtech</h3>
                <p className="text-sm text-slate-400">Water Technologies & Solutions (India) Pvt Ltd </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Engineering excellence in Industrial water & waste water treament solutions with commitment to sustainability and innovation
            </p>
            <div className="pt-4">
              <p className="text-sm font-semibold mb-2">Quality Certifications</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ISO 9001:2015</Badge>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {pages.map((page) => (
                <Link key={page.href} href={page.href}>
                  <Button
                    variant="ghost"
                    className="justify-start p-0 text-slate-400 hover:text-cyan-300"
                  >
                    <page.icon className="w-4 h-4 mr-2" />
                    {page.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91-8978407249</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@chemtechwatersolutions.co.in</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span>Nagari, Chittoor, Andhra Pradesh</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Emergency Response</h5>
              <p className="text-sm text-cyan-300">24/7 Technical Support Hotline</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; 2025 Chemtech Water Technologies & Solutions (I) Pvt Ltd. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <button className="hover:text-cyan-300 transition-colors">Privacy Policy</button>
              <button className="hover:text-cyan-300 transition-colors">Terms of Service</button>
              <button className="hover:text-cyan-300 transition-colors">Environmental Policy</button>
              <button className="hover:text-cyan-300 transition-colors">Quality Standards</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;