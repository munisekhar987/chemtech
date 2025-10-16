'use client';

import React, { useState } from 'react';
import { 
  Droplets,
  Beaker,
  Factory,
  Settings,
  Wrench,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FlowchartServicesPage = () => {
  const [activeDivision, setActiveDivision] = useState('chemical');
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubSections, setExpandedSubSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleSubSection = (subSectionId) => {
    setExpandedSubSections(prev => ({
      ...prev,
      [subSectionId]: !prev[subSectionId]
    }));
  };

  const navigateToProduct = (productName) => {
    const productId = productName.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
    window.location.href = `/products#${productId}`;
  };

  const divisionsData = {
    chemical: {
      id: 'chemical',
      title: 'Chemical Division',
      icon: Beaker,
      color: 'from-green-500 to-emerald-500',
      sections: [
        {
          id: 'water-treatment',
          title: 'Water Treatment Chemicals',
          subsections: [
            {
              id: 'raw-water',
              title: 'Raw Water Purification Solutions',
              products: ['Coagulants', 'Polymers']
            },
            {
              id: 'ro-uf',
              title: 'Membrane Protection & Performance',
              products: [
                'Antiscalants',
                'Anti Oxidants',
                'Micro Biocide & Preservatives',
                'pH Booster and Mineral Additives (Food Grade)',
                'Membrane Cleaning Chemicals'
              ]
            },
            {
              id: 'hardness-silica',
              title: 'Scale Prevention Specialty',
              products: ['Silikel']
            }
          ]
        },
        {
          id: 'effluent-sewage',
          title: 'Effluent & Sewage Treatment Chemicals',
          subsections: [
            {
              id: 'effluent-products',
              title: 'Complete Effluent Treatment Range',
              products: [
                'Coagulants',
                'Flocculants',
                'Bio-flocculants for Secondary Clarification',
                'Aerobic & Anaerobic Culture Micronutrients',
                'De-Colourants',
                'De-Emulsifier',
                'De-foamer',
                'Sludge Dewatering Polymer',
                'Chemoxy Super',
                'Deodorant',
                'Micronutrients for Aerobic & Anaerobic'
              ]
            }
          ]
        },
        {
          id: 'cooling-water',
          title: 'Cooling Water Treatment Chemicals',
          subsections: [
            {
              id: 'cooling-products',
              title: 'Cooling Tower Performance Solutions',
              products: [
                'Scale & Corrosion Inhibitor',
                'pH Booster',
                'Silica Dispersants',
                'Oxidising Biocide',
                'Non-Oxidising Biocide',
                'Passivation Chemicals',
                'De-Scaling Chemicals',
                'De-Alkalizer',
                'Pre-Cleaning Chemical'
              ]
            }
          ]
        },
        {
          id: 'boiler-water',
          title: 'Boiler Water Treatment Chemicals',
          subsections: [
            {
              id: 'boiler-products',
              title: 'Boiler Protection & Efficiency',
              products: [
                'Scale & Corrosion Chemicals',
                'Sludge Conditioners',
                'Oxygen Scavengers',
                'pH Booster',
                'New Boiler Precleaning Chemicals',
                'Idle Boiler Preservatives',
                'De-Scaling Chemicals',
                'Phosphate Treatment Chemicals',
                'Carbonate Treatment Chemicals',
                'Morpholine Treatment Chemicals'
              ]
            }
          ]
        }
      ]
    },
    plant: {
      id: 'plant',
      title: 'Plant Division',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      sections: [
        {
          id: 'ro-plants',
          title: 'Reverse Osmosis Plants',
          subsections: [
            {
              id: 'ro-systems',
              title: 'Industrial to Municipal Scale RO',
              products: [
                'Industrial RO System 5000 LPH',
                'Compact RO Unit 500 LPH',
                'Municipal RO Plant 50000 LPH'
              ]
            }
          ]
        },
        {
          id: 'wtp-plants',
          title: 'Water Treatment Plants',
          subsections: [
            {
              id: 'wtp-systems',
              title: 'Advanced Filtration Systems',
              products: [
                'UF Membrane System',
                'Iron Removal Plant',
                'Softening Plant'
              ]
            }
          ]
        },
        {
          id: 'etp-plants',
          title: 'Effluent Treatment Plants',
          subsections: [
            {
              id: 'etp-systems',
              title: 'Biological Treatment Technologies',
              products: [
                'MBBR ETP System',
                'SBR Treatment Plant',
                'MBR Technology Plant'
              ]
            }
          ]
        },
        {
          id: 'stp-plants',
          title: 'Sewage Treatment Plants',
          subsections: [
            {
              id: 'stp-systems',
              title: 'Sewage Treatment Solutions',
              products: [
                'ASP Sewage Plant',
                'Packaged STP Unit',
                'Decentralized STP'
              ]
            }
          ]
        }
      ]
    },
    maintenance: {
      id: 'maintenance',
      title: 'Service Division',
      icon: Wrench,
      color: 'from-purple-500 to-indigo-500',
      sections: [
        {
          id: 'om-services',
          title: 'Operation & Maintenance',
          subsections: [
            {
              id: 'om-products',
              title: 'Professional O&M Services',
              products: [
                'ETP O&M Services',
                'STP Management',
                'WTP Operations'
              ]
            }
          ]
        },
        {
          id: 'upgrades',
          title: 'Plant Upgrades & Revamping',
          subsections: [
            {
              id: 'upgrade-products',
              title: 'Modernization & Enhancement',
              products: [
                'Efficiency Upgrade Package',
                'Technology Modernization',
                'Capacity Enhancement'
              ]
            }
          ]
        },
        {
          id: 'consultancy',
          title: 'Technical Consultancy',
          subsections: [
            {
              id: 'consultancy-products',
              title: 'Expert Advisory Services',
              products: [
                'Water Audit Services',
                'Process Optimization',
                'Troubleshooting Support'
              ]
            }
          ]
        },
        {
          id: 'spares',
          title: 'Spares & Components',
          subsections: [
            {
              id: 'spare-products',
              title: 'Quality Replacement Parts',
              products: [
                'RO Membrane Replacement',
                'Pump & Motor Spares',
                'Control Panel Components'
              ]
            }
          ]
        }
      ]
    }
  };

  const toggleDivision = (divisionId) => {
    setActiveDivision(activeDivision === divisionId ? null : divisionId);
  };

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
            Over the years, we have developed expertise in offering highly effective water and waste water treatment chemicals and industrial process chemicals. This has been possible due to our strong commitment towards quality and state-of-the-art manufacturing and testing facilities.
          </p>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main DIVISIONS Title */}
          <div className="flex flex-col items-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-8 rounded-3xl shadow-2xl">
              <h1 className="text-4xl font-bold text-center">DIVISIONS</h1>
            </div>
          </div>

          {/* Three Division Cards Side by Side - Fixed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.values(divisionsData).map((division) => {
              const Icon = division.icon;
              
              return (
                <Card 
                  key={division.id}
                  className="flex flex-col"
                  style={{ height: '600px' }}
                >
                  {/* Division Header - Fixed */}
                  <CardHeader 
                    className={`bg-gradient-to-r ${division.color} text-white text-center flex-shrink-0`}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{division.title}</CardTitle>
                  </CardHeader>

                  {/* Division Content - Scrollable */}
                  <CardContent className="p-6 flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {division.sections.map((section) => (
                        <div key={section.id} className="border-2 rounded-xl overflow-hidden shadow-sm" style={{ borderColor: '#bfdbfe' }}>
                          {/* Section Header - Clickable */}
                          <div 
                            className="p-4 cursor-pointer transition-all"
                            style={{ backgroundColor: '#dbeafe' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#bfdbfe'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                            onClick={() => toggleSection(section.id)}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg flex items-center gap-3" style={{ color: '#1e3a8a' }}>
                                <Droplets className="w-5 h-5" style={{ color: '#1e40af' }} />
                                {section.title}
                              </h3>
                              {expandedSections[section.id] ? 
                                <ChevronDown className="w-5 h-5" style={{ color: '#1e3a8a' }} /> : 
                                <ChevronRight className="w-5 h-5" style={{ color: '#1e3a8a' }} />
                              }
                            </div>
                          </div>

                          {/* Subsections - Level 2 */}
                          {expandedSections[section.id] && (
                            <div className="p-4 bg-gray-50 space-y-3">
                              {section.subsections.map((subsection) => (
                                <div key={subsection.id} className="border rounded-lg overflow-hidden bg-white shadow-sm" style={{ borderColor: '#bfdbfe' }}>
                                  {/* Subsection Header - Clickable */}
                                  <div 
                                    className="p-3 cursor-pointer transition-all"
                                    style={{ backgroundColor: '#dbeafe' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#bfdbfe'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                                    onClick={() => toggleSubSection(subsection.id)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <h4 className="text-base flex items-center gap-2" style={{ color: '#1e3a8a' }}>
                                        <Droplets className="w-4 h-4" style={{ color: '#1e40af' }} />
                                        {subsection.title}
                                      </h4>
                                      <div className="flex items-center gap-2">
                                        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>
                                          {subsection.products.length}
                                        </span>
                                        {expandedSubSections[subsection.id] ? 
                                          <ChevronDown className="w-4 h-4" style={{ color: '#1e40af' }} /> : 
                                          <ChevronRight className="w-4 h-4" style={{ color: '#1e40af' }} />
                                        }
                                      </div>
                                    </div>
                                  </div>

                                  {/* Products - Level 3 */}
                                  {expandedSubSections[subsection.id] && (
                                    <div className="p-3 bg-white space-y-2">
                                      {subsection.products.map((product, idx) => (
                                        <div 
                                          key={idx}
                                          className="p-3 rounded-lg border-l-4 transition-all cursor-pointer"
                                          style={{ backgroundColor: '#dbeafe', borderLeftColor: '#3b82f6' }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#bfdbfe';
                                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#dbeafe';
                                            e.currentTarget.style.boxShadow = 'none';
                                          }}
                                          onClick={() => navigateToProduct(product)}
                                        >
                                          <div className="flex items-center gap-2">
                                            <Droplets className="w-3 h-3 flex-shrink-0" style={{ color: '#1e40af' }} />
                                            <span className="text-sm" style={{ color: '#1e3a8a' }}>
                                              {product}
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlowchartServicesPage;