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

  // ✅ FIXED PRODUCT NAVIGATION
  const navigateToProduct = (productName: string) => {
    const productMap: Record<string, string> = {
      // WTP
      'Coagulants': 'coagulants',
      'Polymers': 'polymers',
      'Antiscalants': 'antiscalants',
      'Anti Oxidants': 'anti-oxidants',
      'Micro Biocide & Preservatives': 'micro-biocide-preservatives',
      'pH Booster and Mineral Additives (Food Grade)': 'ph-booster-and-mineral-additives-food-grade',
      'Membrane Cleaning Chemicals': 'membrane-cleaning-chemicals',
      '2010 L (Liquid) ': 'silikel',

      // ETP
      'General Coagulants': 'coagulants-effluent',
      'Chemtech Coagulants': 'coagulants-effluent',
      'Anionic Polymers': 'flocculants',
      'Calionic Polymers/ Sludge Dewatering Polymers': 'sludge-dewatering-polymer',
      'Bio-Culture': 'bioflocculants-for-secondary-clarification',
      'Aerobic Culture': 'bioflocculants-for-secondary-clarification',
      'Anaerobic Culture': 'bioflocculants-for-secondary-clarification',
      'Micronutrients': 'micronutrients-for-aerobic-anaerobic',
      'Biomass Setting Polymers':'Biomass-Setting-Polymers',

      // Defoamers
      'Silica Based Defoamers': 'defoamer',
      'Non-Silica Defoamers': 'defoamer',

      // Cooling Water
      'Scale & Corrosion Inhibitor': 'scale-corrosion-inhibitor',
      'pH Booster': 'ph-booster',
      'Silica Dispersants': 'silica-dispersants',
      'Oxidising Biocide': 'oxidising-biocide',
      'Non-Oxidising Biocide': 'nonoxidising-biocide',
      'Passivation Chemicals': 'passivation-chemicals',
      'De-Scaling Chemicals': 'descaling-chemicals-cooling',
      'De-Alkalizer': 'dealkalizer',
      'Pre-Cleaning Chemical': 'precleaning-chemical-cooling',

      // Boiler Water
      'Scale & Corrosion Chemicals': 'scale-corrosion-chemicals',
      'Sludge Conditioners': 'sludge-conditioners',
      'Oxygen Scavengers': 'oxygen-scavengers',
      'pH Booster (Boiler)': 'ph-booster-boiler',
      'New Boiler Precleaning Chemicals': 'new-boiler-precleaning-chemicals',
      'Idle Boiler Preservatives': 'idle-boiler-preservatives',
      'Phosphate Treatment Chemicals': 'phosphate-treatment-chemicals',
      'Carbonate Treatment Chemicals': 'carbonate-treatment-chemicals',
      'Morpholine Treatment Chemicals': 'morpholine-treatment-chemicals',
    };

    const slugify = (str: string) =>
      str.toLowerCase()
        .normalize('NFKD')
        .replace(/&/g, 'and')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    const base = slugify(productName);
    const id = productMap[productName] || base;

    const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-4', 'ring-cyan-300');
      setTimeout(() => el.classList.remove('ring-4', 'ring-cyan-300'), 1800);
      return;
    }
    window.location.href = `/products#${id}`;
  };

  // ✅ FULL DIVISIONS DATA RESTORED
  const divisionsData = {
    chemical: {
      id: 'chemical',
      title: 'Chemical Division',
      icon: Beaker,
      color: 'from-green-500 to-emerald-500',
      sections: [
        {
          id: 'water-treatment',
          title: 'Water Treatment Chemicals(WTP)',
          subsections: [
            { id: 'raw-water', title: 'Raw Water Pre-Treatment Chemicals', products: ['Coagulants', 'Polymers'] },
            {
              id: 'ro-uf',
              title: 'R.O & U.F Membrane Treatment Chemicals',
              products: [
                'Antiscalants',
                'Anti Oxidants',
                'Micro Biocide & Preservatives',
                'pH Booster and Mineral Additives (Food Grade)',
                'Membrane Cleaning Chemicals'
              ]
            },
            { id: 'hardness-silica', title: 'Hardness & Silica Treatment Chemicals', products: ['2010 L (Liquid) '] }
          ]
        },
        {
          id: 'effluent-sewage',
          title: 'Effluent & Sewage Treatment Chemicals (ETP)',
          subsections: [
            { id: 'coagulants', title: 'Coagulants', products: ['General Coagulants', 'Chemtech Coagulants'] },
            { id: 'polymers', title: 'Flocculants / Polymers', products: ['Anionic Polymers', 'Calionic Polymers/ Sludge Dewatering Polymers'] },
            { id: 'bioculture', title: 'Bio-Culture', products: ['Aerobic Culture', 'Anaerobic Culture'] },
            { id: 'micronutrients', title: 'Micronutrients', products: ['Aerobic Culture', 'Aerobic Culture'] },
             { id: 'Biomass-Setting-Polymers', title: 'Biomass Setting Polymers', products: [] },
            { id: 'defoamers', title: 'Defoamers', products: ['Silica Based Defoamers', 'Non-Silica Defoamers'] }
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
                'pH Booster (Boiler)',
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
            { id: 'ro-systems', title: 'Industrial to Municipal Scale RO', products: ['Industrial RO System 5000 LPH', 'Compact RO Unit 500 LPH', 'Municipal RO Plant 50000 LPH'] }
          ]
        },
        {
          id: 'wtp-plants',
          title: 'Water Treatment Plants',
          subsections: [
            { id: 'wtp-systems', title: 'Advanced Filtration Systems', products: ['UF Membrane System', 'Iron Removal Plant', 'Softening Plant'] }
          ]
        },
        {
          id: 'etp-plants',
          title: 'Effluent Treatment Plants',
          subsections: [
            { id: 'etp-systems', title: 'Biological Treatment Technologies', products: ['MBBR ETP System', 'SBR Treatment Plant', 'MBR Technology Plant'] }
          ]
        },
        {
          id: 'stp-plants',
          title: 'Sewage Treatment Plants',
          subsections: [
            { id: 'stp-systems', title: 'Sewage Treatment Solutions', products: ['ASP Sewage Plant', 'Packaged STP Unit', 'Decentralized STP'] }
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
            { id: 'om-products', title: 'Professional O&M Services', products: ['ETP O&M Services', 'STP Management', 'WTP Operations'] }
          ]
        },
        {
          id: 'upgrades',
          title: 'Plant Upgrades & Revamping',
          subsections: [
            { id: 'upgrade-products', title: 'Modernization & Enhancement', products: ['Efficiency Upgrade Package', 'Technology Modernization', 'Capacity Enhancement'] }
          ]
        },
        {
          id: 'consultancy',
          title: 'Technical Consultancy',
          subsections: [
            { id: 'consultancy-products', title: 'Expert Advisory Services', products: ['Water Audit Services', 'Process Optimization', 'Troubleshooting Support'] }
          ]
        },
        {
          id: 'spares',
          title: 'Spares & Components',
          subsections: [
            { id: 'spare-products', title: 'Quality Replacement Parts', products: ['RO Membrane Replacement', 'Pump & Motor Spares', 'Control Panel Components'] }
          ]
        }
      ]
    }
  };

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Over the years, we have developed expertise in offering highly effective water and waste water treatment solutions.
          </p>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.values(divisionsData).map((division) => {
            const Icon = division.icon;
            return (
              <Card key={division.id} className="flex flex-col" style={{ height: '600px' }}>
                <CardHeader className={`bg-gradient-to-r ${division.color} text-white text-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{division.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-1 overflow-y-auto">
                  <div className="space-y-3">
                    {division.sections.map((section) => (
                      <div key={section.id} className="border-2 rounded-xl overflow-hidden shadow-sm">
                        <div
                          className="p-4 bg-blue-100 cursor-pointer flex justify-between items-center"
                          onClick={() => toggleSection(section.id)}
                        >
                          <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                            <Droplets className="w-5 h-5" /> {section.title}
                          </h3>
                          {expandedSections[section.id] ? <ChevronDown /> : <ChevronRight />}
                        </div>
                        {expandedSections[section.id] && (
                          <div className="p-4 bg-gray-50 space-y-3">
                            {section.subsections.map((sub) => (
                              <div key={sub.id} className="border rounded-lg bg-white">
                                <div
                                  className="p-3 bg-blue-50 cursor-pointer flex justify-between items-center"
                                  onClick={() => toggleSubSection(sub.id)}
                                >
                                  <span className="font-medium text-blue-900 flex items-center gap-2">
                                    <Droplets className="w-4 h-4" /> {sub.title}
                                  </span>
                                  {expandedSubSections[sub.id] ? <ChevronDown /> : <ChevronRight />}
                                </div>
                                {expandedSubSections[sub.id] && (
                                  <div className="p-3 bg-white space-y-2">
                                    {sub.products.map((product, i) => (
                                      <div
                                        key={i}
                                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 cursor-pointer"
                                        onClick={() => navigateToProduct(product)}
                                      >
                                        <div className="flex items-center gap-2 text-blue-900">
                                          <Droplets className="w-3 h-3" /> {product}
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
      </section>
    </div>
  );
};

export default FlowchartServicesPage;