'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu,
  Droplets,
  Settings,
  Home,
  Package,
  MessageCircle,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const pathname = usePathname();

  const pages = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Settings },
    { href: '/products', label: 'Our Products', icon: Package },
    { href: '/contact', label: 'Contact Us', icon: MessageCircle }
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-slate-50 via-blue-50 to-cyan-50 border-b-2 border-blue-200 z-50 shadow-lg">
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Main logo container */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              
              {/* Water ripples */}
              <div className="absolute inset-0 w-12 h-12 border-2 border-blue-300/50 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-12 h-12 border border-cyan-400/30 rounded-full animate-pulse"></div>
            </div>
            
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent tracking-[0.3em] group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-green-500 transition-all duration-500">
                CHEMTECH
              </h1>
              <p className="text-xs text-slate-600 leading-tight -mt-1 font-medium">
                Water Technologies & Solutions (India) Pvt Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === page.href 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                <page.icon className="w-4 h-4" />
                {page.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-blue-200 hover:bg-blue-50">
                <Menu className="w-5 h-5 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-b from-blue-50 to-cyan-50">
              <div className="flex flex-col gap-4 mt-8">
                {/* Mobile logo */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent tracking-[0.3em]">CHEMTECH</h2>
                    <p className="text-xs text-slate-600 font-medium">Water Technologies & Solutions</p>
                  </div>
                </div>
                
                {pages.map((page) => (
                  <Link key={page.href} href={page.href}>
                    <Button
                      variant="ghost"
                      className={`justify-start w-full text-base font-medium py-3 ${
                        pathname === page.href ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-blue-100'
                      }`}
                    >
                      <page.icon className="w-5 h-5 mr-3" />
                      {page.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Decorative water wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>
    </header>
  );
};

export default Header;