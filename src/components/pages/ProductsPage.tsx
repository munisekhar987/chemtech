'use client';

import React, { useState } from 'react';
import { 
  Droplets,
  Beaker,
  Factory,
  Settings,
  Shield,
  Wrench,
  FlaskConical,
  Building2,
  X,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductsPage = () => {
  const [showCatalogForm, setShowCatalogForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // After successful submission, trigger the download
    const link = document.createElement('a');
    link.href = '/CHEMTECH_Broucher.pdf';
    link.download = 'CHEMTECH_Product_Catalog.pdf';
    link.click();
    
    // Close the form and reset
    setShowCatalogForm(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      industry: ''
    });
  };

  const isFormValid = formData.name && formData.email && formData.company && formData.phone;

  return (
    <div className="pt-32">
      {/* Catalog Request Modal */}
      {showCatalogForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-900">Request Product Catalog</h3>
                <button 
                  onClick={() => setShowCatalogForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industry Type
                  </label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                      <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                      <SelectItem value="textile">Textile</SelectItem>
                      <SelectItem value="chemical">Chemical</SelectItem>
                      <SelectItem value="municipal">Municipal</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl"
                    disabled={!isFormValid}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Catalog
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By downloading, you agree to receive updates about our products and services.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Comprehensive range of water treatment solutions manufactured with precision and quality assurance
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          
          {/* ChemScale Guard Pro */}
          <div id="chemscale-guard-pro" className="scroll-mt-32">
            <Card className="border-l-4 border-green-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-3xl text-green-800 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  ChemScale Guard Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Premium antiscalant for industrial RO systems offering superior scale prevention and membrane protection. This advanced formulation provides exceptional performance in harsh water conditions, extending membrane life and maintaining optimal system efficiency.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* AquaShield AS-200 */}
          <div id="aquashield-as200" className="scroll-mt-32">
            <Card className="border-l-4 border-blue-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                  <Droplets className="w-8 h-8" />
                  AquaShield AS-200
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  High-performance scale inhibitor designed for harsh water conditions with enhanced mineral control. Features advanced chemistry for superior scale prevention in challenging water quality scenarios, ensuring reliable RO system operation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* ClearFlow Antiscale */}
          <div id="clearflow-antiscale" className="scroll-mt-32">
            <Card className="border-l-4 border-cyan-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <CardTitle className="text-3xl text-cyan-800 flex items-center gap-3">
                  <FlaskConical className="w-8 h-8" />
                  ClearFlow Antiscale
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cost-effective scale prevention solution for municipal systems with reliable performance. Specially formulated for municipal water treatment applications, providing consistent scale control while maintaining economic viability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* MemClean MC-100 */}
          <div id="memclean-mc100" className="scroll-mt-32">
            <Card className="border-l-4 border-purple-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardTitle className="text-3xl text-purple-800 flex items-center gap-3">
                  <Beaker className="w-8 h-8" />
                  MemClean MC-100
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Advanced membrane cleaning solution that effectively removes organic and inorganic fouling. This powerful cleaning formulation restores membrane performance, extending operational life and maintaining optimal permeate quality.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* BioGuard RO */}
          <div id="bioguard-ro" className="scroll-mt-32">
            <Card className="border-l-4 border-red-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="text-3xl text-red-800 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  BioGuard RO
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Powerful biocide for RO system protection against microbial growth and biofilm formation. Ensures complete disinfection of RO systems, preventing bacterial contamination and maintaining system hygiene standards.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* pH Stabilizer Pro */}
          <div id="ph-stabilizer-pro" className="scroll-mt-32">
            <Card className="border-l-4 border-yellow-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardTitle className="text-3xl text-yellow-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  pH Stabilizer Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Precise pH adjustment chemical for optimal RO performance and membrane longevity. Maintains ideal pH conditions for reverse osmosis operations, ensuring maximum membrane efficiency and extended service life.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SteamGuard BT-500 */}
          <div id="steamguard-bt500" className="scroll-mt-32">
            <Card className="border-l-4 border-orange-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-3xl text-orange-800 flex items-center gap-3">
                  <Factory className="w-8 h-8" />
                  SteamGuard BT-500
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete boiler treatment solution providing scale prevention, corrosion control, and oxygen scavenging. Comprehensive formulation ensures optimal boiler operation, protecting against scale, corrosion, and oxygen-related damage.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CoolTower CT-300 */}
          <div id="cooltower-ct300" className="scroll-mt-32">
            <Card className="border-l-4 border-teal-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                <CardTitle className="text-3xl text-teal-800 flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  CoolTower CT-300
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cooling tower water treatment chemical offering algae control, scale prevention, and corrosion inhibition. Multi-functional treatment solution maintaining optimal cooling tower performance and extending equipment life.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CorroStop Inhibitor */}
          <div id="corrostop-inhibitor" className="scroll-mt-32">
            <Card className="border-l-4 border-gray-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
                <CardTitle className="text-3xl text-gray-800 flex items-center gap-3">
                  <Wrench className="w-8 h-8" />
                  CorroStop Inhibitor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Advanced corrosion prevention solution for industrial systems with multi-metal protection. Provides comprehensive corrosion inhibition for various metals, extending equipment life and reducing maintenance costs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* BioNutrient Plus */}
          <div id="bionutrient-plus" className="scroll-mt-32">
            <Card className="border-l-4 border-green-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-3xl text-green-800 flex items-center gap-3">
                  <FlaskConical className="w-8 h-8" />
                  BioNutrient Plus
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Essential micronutrient supplement for biological treatment processes enhancing microbial activity. Optimizes biological treatment performance by providing essential nutrients for microbial growth and metabolism.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FoamAway Defoamer */}
          <div id="foamaway-defoamer" className="scroll-mt-32">
            <Card className="border-l-4 border-indigo-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <CardTitle className="text-3xl text-indigo-800 flex items-center gap-3">
                  <Droplets className="w-8 h-8" />
                  FoamAway Defoamer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Effective industrial defoaming agent for controlling foam in various treatment processes. Rapidly eliminates foam formation in treatment systems, ensuring smooth operation and preventing process disruptions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CoaguFloc Super */}
          <div id="coagufloc-super" className="scroll-mt-32">
            <Card className="border-l-4 border-pink-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
                <CardTitle className="text-3xl text-pink-800 flex items-center gap-3">
                  <Beaker className="w-8 h-8" />
                  CoaguFloc Super
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  High-efficiency coagulant for water treatment providing superior clarification and solid removal. Advanced coagulation chemistry ensures rapid floc formation and excellent settling characteristics for optimal water clarification.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Industrial RO System 5000 LPH */}
          <div id="industrial-ro-system-5000-lph" className="scroll-mt-32">
            <Card className="border-l-4 border-blue-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                  <Factory className="w-8 h-8" />
                  Industrial RO System 5000 LPH
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  High-capacity industrial reverse osmosis plant designed for large-scale water purification needs. Features robust construction, advanced membrane technology, and automated controls for reliable industrial water treatment applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Compact RO Unit 500 LPH */}
          <div id="compact-ro-unit-500-lph" className="scroll-mt-32">
            <Card className="border-l-4 border-cyan-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <CardTitle className="text-3xl text-cyan-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  Compact RO Unit 500 LPH
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Space-saving RO system perfect for small industries with efficient water treatment capabilities. Compact design with full functionality, ideal for businesses with limited space requirements and moderate water demands.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Municipal RO Plant 50000 LPH */}
          <div id="municipal-ro-plant-50000-lph" className="scroll-mt-32">
            <Card className="border-l-4 border-emerald-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-3xl text-emerald-800 flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  Municipal RO Plant 50000 LPH
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Large-scale municipal water treatment system providing clean water for communities. Designed for municipal applications with high-capacity treatment, energy-efficient operation, and reliable performance for community water supply.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* UF Membrane System */}
          <div id="uf-membrane-system" className="scroll-mt-32">
            <Card className="border-l-4 border-violet-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
                <CardTitle className="text-3xl text-violet-800 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  UF Membrane System
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ultra-filtration system for effective water purification removing bacteria, viruses, and suspended solids. Advanced membrane technology providing superior filtration performance for various water treatment applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Iron Removal Plant */}
          <div id="iron-removal-plant" className="scroll-mt-32">
            <Card className="border-l-4 border-amber-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                <CardTitle className="text-3xl text-amber-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  Iron Removal Plant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete iron and manganese removal system ensuring clear, clean water for industrial applications. Efficient oxidation and filtration process removing iron and manganese contamination from water sources.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Softening Plant */}
          <div id="softening-plant" className="scroll-mt-32">
            <Card className="border-l-4 border-lime-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-lime-50 to-green-50">
                <CardTitle className="text-3xl text-lime-800 flex items-center gap-3">
                  <Droplets className="w-8 h-8" />
                  Softening Plant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Water softening system for industrial use eliminating hardness and scale formation problems. Ion exchange technology effectively removing calcium and magnesium ions for soft water production.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* MBBR ETP System */}
          <div id="mbbr-etp-system" className="scroll-mt-32">
            <Card className="border-l-4 border-emerald-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-3xl text-emerald-800 flex items-center gap-3">
                  <Factory className="w-8 h-8" />
                  MBBR ETP System
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Moving bed bio-reactor effluent treatment plant offering efficient biological treatment. Advanced biological treatment technology providing excellent effluent quality with compact design and reliable operation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SBR Treatment Plant */}
          <div id="sbr-treatment-plant" className="scroll-mt-32">
            <Card className="border-l-4 border-sky-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50">
                <CardTitle className="text-3xl text-sky-800 flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  SBR Treatment Plant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sequential batch reactor for industrial effluent providing flexible and efficient treatment. Time-controlled biological treatment process offering excellent treatment efficiency with operational flexibility.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* MBR Technology Plant */}
          <div id="mbr-technology-plant" className="scroll-mt-32">
            <Card className="border-l-4 border-rose-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                <CardTitle className="text-3xl text-rose-800 flex items-center gap-3">
                  <FlaskConical className="w-8 h-8" />
                  MBR Technology Plant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Membrane bio-reactor for advanced treatment delivering superior effluent quality. Combination of biological treatment and membrane filtration providing excellent water quality for reuse applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* ASP Sewage Plant */}
          <div id="asp-sewage-plant" className="scroll-mt-32">
            <Card className="border-l-4 border-stone-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-stone-50 to-gray-50">
                <CardTitle className="text-3xl text-stone-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  ASP Sewage Plant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Activated sludge process sewage treatment system providing reliable and efficient treatment. Proven biological treatment technology for municipal and industrial sewage treatment applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Packaged STP Unit */}
          <div id="packaged-stp-unit" className="scroll-mt-32">
            <Card className="border-l-4 border-slate-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
                <CardTitle className="text-3xl text-slate-800 flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  Packaged STP Unit
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pre-fabricated sewage treatment plant offering quick installation and reliable performance. Factory-built treatment units providing immediate deployment and consistent treatment performance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Decentralized STP */}
          <div id="decentralized-stp" className="scroll-mt-32">
            <Card className="border-l-4 border-neutral-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-neutral-50 to-gray-50">
                <CardTitle className="text-3xl text-neutral-800 flex items-center gap-3">
                  <Wrench className="w-8 h-8" />
                  Decentralized STP
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modular sewage treatment solution ideal for residential complexes and commercial buildings. Flexible modular design allowing scalable treatment capacity for various residential and commercial applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* ETP O&M Services */}
          <div id="etp-om-services" className="scroll-mt-32">
            <Card className="border-l-4 border-purple-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardTitle className="text-3xl text-purple-800 flex items-center gap-3">
                  <Wrench className="w-8 h-8" />
                  ETP O&M Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete operation and maintenance of effluent plants ensuring optimal performance and compliance. Professional O&M services maintaining plant efficiency, regulatory compliance, and operational reliability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* STP Management */}
          <div id="stp-management" className="scroll-mt-32">
            <Card className="border-l-4 border-indigo-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <CardTitle className="text-3xl text-indigo-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  STP Management
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Full-service sewage treatment plant management with skilled technicians and regular monitoring. Comprehensive management services ensuring consistent performance and regulatory compliance for sewage treatment facilities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* WTP Operations */}
          <div id="wtp-operations" className="scroll-mt-32">
            <Card className="border-l-4 border-blue-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                  <Droplets className="w-8 h-8" />
                  WTP Operations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Water treatment plant operational support ensuring consistent water quality and system efficiency. Professional operational services maintaining optimal water treatment performance and quality standards.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Efficiency Upgrade Package */}
          <div id="efficiency-upgrade-package" className="scroll-mt-32">
            <Card className="border-l-4 border-orange-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-3xl text-orange-800 flex items-center gap-3">
                  <Factory className="w-8 h-8" />
                  Efficiency Upgrade Package
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Performance enhancement for existing plants improving efficiency and reducing operational costs. Comprehensive upgrade solutions enhancing plant performance, reducing energy consumption, and improving overall efficiency.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technology Modernization */}
          <div id="technology-modernization" className="scroll-mt-32">
            <Card className="border-l-4 border-cyan-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <CardTitle className="text-3xl text-cyan-800 flex items-center gap-3">
                  <FlaskConical className="w-8 h-8" />
                  Technology Modernization
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Upgrading old systems with latest technology for improved performance and compliance. Modern technology integration improving treatment efficiency, automation capabilities, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Capacity Enhancement */}
          <div id="capacity-enhancement" className="scroll-mt-32">
            <Card className="border-l-4 border-green-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-3xl text-green-800 flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  Capacity Enhancement
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Expanding plant capacity and throughput to meet growing treatment requirements. Strategic capacity expansion solutions accommodating increased treatment demands while maintaining operational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Water Audit Services */}
          <div id="water-audit-services" className="scroll-mt-32">
            <Card className="border-l-4 border-teal-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                <CardTitle className="text-3xl text-teal-800 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  Water Audit Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Comprehensive water usage and efficiency audit identifying optimization opportunities. Detailed assessment of water consumption patterns, treatment efficiency, and cost reduction opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Process Optimization */}
          <div id="process-optimization" className="scroll-mt-32">
            <Card className="border-l-4 border-emerald-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-3xl text-emerald-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  Process Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Technical consultation for process improvement enhancing efficiency and reducing costs. Expert analysis and recommendations for optimizing treatment processes, reducing operational costs, and improving performance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Troubleshooting Support */}
          <div id="troubleshooting-support" className="scroll-mt-32">
            <Card className="border-l-4 border-red-500 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="text-3xl text-red-800 flex items-center gap-3">
                  <Wrench className="w-8 h-8" />
                  Troubleshooting Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  24/7 technical problem-solving assistance ensuring minimal downtime and quick resolution. Round-the-clock technical support providing rapid problem diagnosis and solution implementation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RO Membrane Replacement */}
          <div id="ro-membrane-replacement" className="scroll-mt-32">
            <Card className="border-l-4 border-blue-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                  <Droplets className="w-8 h-8" />
                  RO Membrane Replacement
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  High-quality replacement membranes ensuring optimal performance and extended system life. Premium replacement membranes manufactured to exact specifications for maximum compatibility and performance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pump & Motor Spares */}
          <div id="pump-motor-spares" className="scroll-mt-32">
            <Card className="border-l-4 border-gray-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
                <CardTitle className="text-3xl text-gray-800 flex items-center gap-3">
                  <Factory className="w-8 h-8" />
                  Pump & Motor Spares
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete spare parts for pumping systems including impellers, seals, and motor components. Comprehensive inventory of pump and motor spare parts ensuring quick replacement and minimal system downtime.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Control Panel Components */}
          <div id="control-panel-components" className="scroll-mt-32">
            <Card className="border-l-4 border-violet-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
                <CardTitle className="text-3xl text-violet-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  Control Panel Components
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Electrical and automation spare parts for control systems and monitoring equipment. Complete range of control panel components including sensors, switches, controllers, and monitoring devices.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Product Information or Quotes?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Contact our technical team for detailed product specifications, customization options, and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowCatalogForm(true)}
              className="bg-white text-blue-900 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              Request Product Catalog
            </Button>
            <a href="tel:+91-8978407249">
              <Button 
                size="lg"
                className="bg-gray-700 text-white hover:bg-gray-800 hover:shadow-2xl transition-all duration-300"
              >
                Get Technical Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;