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
  ChevronDown,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FlowchartServicesPage = () => {
  const [expandedSubsections, setExpandedSubsections] = useState({});

  const toggleSubsection = (subsectionId) => {
    setExpandedSubsections(prev => ({
      ...prev,
      [subsectionId]: !prev[subsectionId]
    }));
  };

  const servicesData = [
    {
      id: 'chemical',
      title: 'Chemical Division',
      icon: Beaker,
      // description: 'Manufacturing specialty formulations for multiple industrial applications',
      color: 'from-green-500 to-emerald-500',
      subsections: [
        {
          id: 'ro-antiscale',
          title: 'RO Antiscale Solutions',
          products: [
            { name: 'ChemScale Guard Pro', description: 'Premium antiscalant for industrial RO systems' },
            { name: 'AquaShield AS-200', description: 'High-performance scale inhibitor for harsh water conditions' },
            { name: 'ClearFlow Antiscale', description: 'Cost-effective scale prevention for municipal systems' }
          ]
        },
        {
          id: 'ro-chemicals',
          title: 'RO Treatment Chemicals',
          products: [
            { name: 'MemClean MC-100', description: 'Advanced membrane cleaning solution' },
            { name: 'BioGuard RO', description: 'Biocide for RO system protection' },
            { name: 'pH Stabilizer Pro', description: 'pH adjustment chemical for optimal RO performance' }
          ]
        },
        {
          id: 'boiler-chemicals',
          title: 'Boiler & Cooling Tower Chemicals',
          products: [
            { name: 'SteamGuard BT-500', description: 'Complete boiler treatment solution' },
            { name: 'CoolTower CT-300', description: 'Cooling tower water treatment chemical' },
            { name: 'CorroStop Inhibitor', description: 'Corrosion prevention for industrial systems' }
          ]
        },
        {
          id: 'specialty-chemicals',
          title: 'Specialty Treatment Chemicals',
          products: [
            { name: 'BioNutrient Plus', description: 'Micronutrient supplement for biological treatment' },
            { name: 'FoamAway Defoamer', description: 'Industrial defoaming agent' },
            { name: 'CoaguFloc Super', description: 'High-efficiency coagulant for water treatment' }
          ]
        }
      ]
    },
    {
      id: 'plant',
      title: 'Plant Division',
      icon: Factory,
      // description: 'Complete turnkey projects from design to commissioning',
      color: 'from-blue-500 to-cyan-500',
      subsections: [
        {
          id: 'ro-plants',
          title: 'Reverse Osmosis Plants',
          products: [
            { name: 'Industrial RO System 5000 LPH', description: 'High-capacity industrial reverse osmosis plant' },
            { name: 'Compact RO Unit 500 LPH', description: 'Space-saving RO system for small industries' },
            { name: 'Municipal RO Plant 50000 LPH', description: 'Large-scale municipal water treatment system' }
          ]
        },
        {
          id: 'wtp-plants',
          title: 'Water Treatment Plants',
          products: [
            { name: 'UF Membrane System', description: 'Ultra-filtration system for water purification' },
            { name: 'Iron Removal Plant', description: 'Complete iron and manganese removal system' },
            { name: 'Softening Plant', description: 'Water softening system for industrial use' }
          ]
        },
        {
          id: 'etp-plants',
          title: 'Effluent Treatment Plants',
          products: [
            { name: 'MBBR ETP System', description: 'Moving bed bio-reactor effluent treatment plant' },
            { name: 'SBR Treatment Plant', description: 'Sequential batch reactor for industrial effluent' },
            { name: 'MBR Technology Plant', description: 'Membrane bio-reactor for advanced treatment' }
          ]
        },
        {
          id: 'stp-plants',
          title: 'Sewage Treatment Plants',
          products: [
            { name: 'ASP Sewage Plant', description: 'Activated sludge process sewage treatment system' },
            { name: 'Packaged STP Unit', description: 'Pre-fabricated sewage treatment plant' },
            { name: 'Decentralized STP', description: 'Modular sewage treatment for residential complexes' }
          ]
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      icon: Wrench,
      // description: 'Comprehensive maintenance and technical support services',
      color: 'from-purple-500 to-indigo-500',
      subsections: [
        {
          id: 'operation-maintenance',
          title: 'Operation & Maintenance',
          products: [
            { name: 'ETP O&M Services', description: 'Complete operation and maintenance of effluent plants' },
            { name: 'STP Management', description: 'Full-service sewage treatment plant management' },
            { name: 'WTP Operations', description: 'Water treatment plant operational support' }
          ]
        },
        {
          id: 'plant-upgrades',
          title: 'Plant Upgrades & Revamping',
          products: [
            { name: 'Efficiency Upgrade Package', description: 'Performance enhancement for existing plants' },
            { name: 'Technology Modernization', description: 'Upgrading old systems with latest technology' },
            { name: 'Capacity Enhancement', description: 'Expanding plant capacity and throughput' }
          ]
        },
        {
          id: 'technical-services',
          title: 'Technical Consultancy',
          products: [
            { name: 'Water Audit Services', description: 'Comprehensive water usage and efficiency audit' },
            { name: 'Process Optimization', description: 'Technical consultation for process improvement' },
            { name: 'Troubleshooting Support', description: '24/7 technical problem-solving assistance' }
          ]
        },
        {
          id: 'spare-parts',
          title: 'Spare Parts & Components',
          products: [
            { name: 'RO Membrane Replacement', description: 'High-quality replacement membranes' },
            { name: 'Pump & Motor Spares', description: 'Complete spare parts for pumping systems' },
            { name: 'Control Panel Components', description: 'Electrical and automation spare parts' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Over the years, we have developed expertise in offering highly effective water and waste water treatment chemicals and industrial process chemicals. This has been possible due to our strong commitment towards quality and state-of-the-art manufacturing and testing facilities. In order to streamline our manufacturing competency, we have developed following divisions.          </p>
        </div>
      </section>

      {/* Interactive Flowchart */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main CHEMTECH Title */}
          <div className="flex flex-col items-center mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-8 rounded-3xl shadow-2xl mb-8">
              <div className="flex items-center gap-4 justify-center">
                {/* <Droplets className="w-12 h-12 text-white" /> */}
                <h1 className="text-4xl font-bold">DIVISIONS</h1>
              </div>
              {/* <p className="text-blue-100 mt-2 text-center">Water Technologies & Solutions</p> */}
            </div>
            
            {/* Connection Lines */}
            <div className="relative">
              {/* Main vertical line */}
              <div className="w-1 h-16 bg-blue-400 mx-auto"></div>
              {/* Horizontal line */}
              <div className="w-full max-w-4xl h-1 bg-blue-400 relative mx-auto">
                {/* Three vertical lines going down */}
                <div className="absolute left-0 top-0 w-1 h-16 bg-blue-400"></div>
                <div className="absolute left-1/2 top-0 w-1 h-16 bg-blue-400 transform -translate-x-1/2"></div>
                <div className="absolute right-0 top-0 w-1 h-16 bg-blue-400"></div>
              </div>
            </div>
          </div>

          {/* Three Divisions in Single Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData.map((section, sectionIndex) => (
              <div key={section.id} className="relative">
                {/* Division Card */}
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Division Header */}
                  <CardHeader className={`bg-gradient-to-r ${section.color} text-white text-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                    <p className="text-white/90 text-sm">{section.description}</p>
                  </CardHeader>

                  {/* Always Visible Subsections */}
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subsection.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          {/* Subsection Title - Always Visible */}
                          <div 
                            className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer p-3"
                            onClick={() => toggleSubsection(subsection.id)}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-semibold text-blue-900">{subsection.title}</h3>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
                                  {subsection.products.length}
                                </span>
                                {expandedSubsections[subsection.id] ? 
                                  <ChevronDown className="w-3 h-3 text-gray-600" /> : 
                                  <ChevronRight className="w-3 h-3 text-gray-600" />
                                }
                              </div>
                            </div>
                          </div>

                          {/* Products List - Hidden by Default */}
                          {expandedSubsections[subsection.id] && (
                            <div className="p-3 bg-white space-y-2">
                              {subsection.products.map((product, productIndex) => (
                                <div 
                                  key={productIndex} 
                                  className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-3 border-l-4 border-blue-500 hover:shadow-md transition-shadow cursor-pointer"
                                  onClick={() => {
                                    // Convert product name to ID format and navigate to specific section
                                    const productId = product.name.toLowerCase()
                                      .replace(/[^a-z0-9\s]/g, '') // Remove special characters like &, -, etc.
                                      .replace(/\s+/g, '-') // Replace spaces with hyphens
                                      .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
                                    console.log('Navigating to:', `/products#${productId}`); // Debug log
                                    window.location.href = `/products#${productId}`;
                                  }}
                                >
                                  <div className="flex items-start gap-2">
                                    <Droplets className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                                    <div>
                                      <h4 className="font-semibold text-gray-800 mb-1 text-sm hover:text-blue-600 transition-colors">{product.name}</h4>
                                      <p className="text-gray-600 text-xs leading-relaxed">{product.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default FlowchartServicesPage;