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
    console.log('Form submitted:', formData);
    
    const link = document.createElement('a');
    link.href = '/CHEMTECH_Broucher.pdf';
    link.download = 'CHEMTECH_Product_Catalog.pdf';
    link.click();
    
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

  const ProductCard = ({ id, title, description, icon: Icon, color }) => (
    <div id={id} className="scroll-mt-32">
      <Card className={`border-l-4 border-${color}-500 shadow-lg hover:shadow-xl transition-shadow`}>
        <CardHeader className={`bg-gradient-to-r from-${color}-50 to-${color}-100`}>
          <CardTitle className={`text-2xl text-${color}-800 flex items-center gap-3`}>
            <Icon className="w-7 h-7" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );

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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Industry Type</label>
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
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          
          {/* WATER TREATMENT CHEMICALS */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-500">Water Treatment Chemicals</h2>
            
            {/* Raw Water Treatment Chemicals */}
            <h3 className="text-2xl font-bold text-green-800 mb-6 mt-8">Raw Water Treatment Chemicals</h3>
            
            <ProductCard 
              id="coagulants"
              title="Coagulants"
              description="High-performance coagulation agents for effective removal of suspended solids and turbidity from raw water. Our coagulants ensure rapid flocculation and excellent settling characteristics for optimal water clarification."
              icon={Beaker}
              color="green"
            />
            
            <div className="mt-6">
              <ProductCard 
                id="polymers"
                title="Polymers"
                description="Advanced polymeric flocculants designed for enhanced solid-liquid separation in water treatment processes. These polymers provide superior floc formation, improved settling rates, and effective clarification performance."
                icon={FlaskConical}
                color="emerald"
              />
            </div>

            {/* RO & UF Treatment Chemicals */}
            <h3 className="text-2xl font-bold text-blue-800 mb-6 mt-12">RO & UF Treatment Chemicals</h3>
            
            <ProductCard 
              id="antiscalants"
              title="Antiscalants"
              description="Premium antiscalant formulations preventing scale formation on RO and UF membranes. Ensures extended membrane life, maintains optimal flux rates, and reduces cleaning frequency for reverse osmosis systems."
              icon={Shield}
              color="blue"
            />
            
            <div className="space-y-6 mt-6">
              <ProductCard 
                id="anti-oxidants"
                title="Anti Oxidants"
                description="Specialized anti-oxidant chemicals protecting RO membranes from oxidative damage. Essential for membrane preservation and maintaining system integrity in chlorinated water applications."
                icon={Droplets}
                color="cyan"
              />
              
              <ProductCard 
                id="micro-biocide-preservatives"
                title="Micro Biocide & Preservatives"
                description="Effective biocides and preservatives controlling microbial growth in RO and UF systems. Prevents biofilm formation, maintains membrane hygiene, and ensures consistent water quality."
                icon={Shield}
                color="red"
              />
              
              <ProductCard 
                id="ph-booster-and-mineral-additives-food-grade"
                title="pH Booster and Mineral Additives (Food Grade)"
                description="Food-grade pH adjustment chemicals and mineral additives for RO permeate conditioning. Ensures water quality compliance for potable water and food industry applications."
                icon={Settings}
                color="yellow"
              />
              
              <ProductCard 
                id="membrane-cleaning-chemicals"
                title="Membrane Cleaning Chemicals"
                description="Comprehensive range of membrane cleaning formulations for effective removal of organic and inorganic fouling. Restores membrane performance and extends operational life of RO and UF systems."
                icon={Beaker}
                color="purple"
              />
            </div>

            {/* Hardness & Silica Treatment Chemicals */}
            <h3 className="text-2xl font-bold text-teal-800 mb-6 mt-12">Hardness & Silica Treatment Chemicals</h3>
            
            <ProductCard 
              id="silikel"
              title="Silikel"
              description="Advanced silica and hardness control chemical preventing scale formation in industrial water systems. Provides effective treatment for high-silica water sources and ensures scale-free operation."
              icon={FlaskConical}
              color="teal"
            />
          </div>

          {/* EFFLUENT & SEWAGE TREATMENT CHEMICALS */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-green-500">Effluent & Sewage Treatment Chemicals</h2>
            
            <div className="space-y-6">
              <ProductCard 
                id="coagulants-effluent"
                title="Coagulants"
                description="Specialized coagulants for effluent treatment applications providing efficient removal of suspended solids, color, and organic matter. Optimized formulations for various industrial wastewater characteristics."
                icon={Beaker}
                color="green"
              />
              
              <ProductCard 
                id="flocculants"
                title="Flocculants"
                description="High-molecular-weight flocculants enhancing solid-liquid separation in effluent treatment. Ensures rapid settling, improved clarification, and effective sludge dewatering."
                icon={Droplets}
                color="blue"
              />
              
              <ProductCard 
                id="bioflocculants-for-secondary-clarification"
                title="Bio-flocculants for Secondary Clarification"
                description="Eco-friendly bio-flocculants designed for secondary clarifier performance enhancement. Improves sludge settling, reduces turbidity, and ensures better effluent quality in biological treatment systems."
                icon={FlaskConical}
                color="emerald"
              />
              
              <ProductCard 
                id="aerobic-anaerobic-culture-micronutrients"
                title="Aerobic & Anaerobic Culture Micronutrients"
                description="Essential micronutrient blends supporting aerobic and anaerobic microbial cultures. Optimizes biological treatment performance, enhances BOD/COD removal, and maintains healthy microbial populations."
                icon={Settings}
                color="purple"
              />
              
              <ProductCard 
                id="decolourants"
                title="De-Colourants"
                description="Effective color removal chemicals for textile, dyeing, and industrial effluents. Advanced formulations achieving significant color reduction and meeting discharge standards."
                icon={Beaker}
                color="pink"
              />
              
              <ProductCard 
                id="deemulsifier"
                title="De-Emulsifier"
                description="Powerful emulsion-breaking chemicals for oil-water separation in industrial effluents. Ensures efficient phase separation, reduces COD levels, and facilitates downstream treatment processes."
                icon={Droplets}
                color="orange"
              />
              
              <ProductCard 
                id="defoamer"
                title="De-foamer"
                description="Industrial-grade defoaming agents controlling foam in biological and chemical treatment systems. Prevents foam-related operational issues and maintains process efficiency."
                icon={FlaskConical}
                color="indigo"
              />
              
              <ProductCard 
                id="sludge-dewatering-polymer"
                title="Sludge Dewatering Polymer"
                description="High-performance polymers for effective sludge dewatering and volume reduction. Improves filter press performance, reduces moisture content, and minimizes disposal costs."
                icon={Settings}
                color="gray"
              />
              
              <ProductCard 
                id="chemoxy-super"
                title="Chemoxy Super"
                description="Advanced chemical oxidation agent for treating recalcitrant organic compounds in industrial effluents. Provides effective COD reduction and improves biodegradability of wastewater."
                icon={Beaker}
                color="red"
              />
              
              <ProductCard 
                id="deodorant"
                title="Deodorant"
                description="Odor control chemicals neutralizing unpleasant smells in sewage and effluent treatment facilities. Ensures comfortable working environment and compliance with odor emission standards."
                icon={Shield}
                color="green"
              />
              
              <ProductCard 
                id="micronutrients-for-aerobic-anaerobic"
                title="Micronutrients for Aerobic & Anaerobic"
                description="Comprehensive micronutrient supplements optimized for both aerobic and anaerobic biological treatment processes. Enhances microbial activity, improves treatment efficiency, and ensures stable system performance."
                icon={FlaskConical}
                color="purple"
              />
            </div>
          </div>

          {/* COOLING WATER TREATMENT CHEMICALS */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-cyan-500">Cooling Water Treatment Chemicals</h2>
            
            <div className="space-y-6">
              <ProductCard 
                id="scale-corrosion-inhibitor"
                title="Scale & Corrosion Inhibitor"
                description="Multi-functional treatment chemicals providing simultaneous scale and corrosion control in cooling water systems. Protects heat exchangers, extends equipment life, and maintains system efficiency."
                icon={Shield}
                color="blue"
              />
              
              <ProductCard 
                id="ph-booster-cooling"
                title="pH Booster"
                description="Alkalinity adjustment chemicals maintaining optimal pH levels in cooling tower systems. Prevents corrosion, controls scale formation, and ensures effective biocide performance."
                icon={Settings}
                color="yellow"
              />
              
              <ProductCard 
                id="silica-dispersants"
                title="Silica Dispersants"
                description="Specialized dispersants preventing silica polymerization and deposition in cooling systems. Enables operation at higher cycles of concentration and reduces blowdown requirements."
                icon={Droplets}
                color="teal"
              />
              
              <ProductCard 
                id="oxidising-biocide"
                title="Oxidising Biocide"
                description="Powerful oxidizing biocides controlling microbial growth, algae, and slime in cooling towers. Provides broad-spectrum antimicrobial activity and maintains system cleanliness."
                icon={Beaker}
                color="red"
              />
              
              <ProductCard 
                id="nonoxidising-biocide"
                title="Non-Oxidising Biocide"
                description="Non-oxidizing antimicrobial agents complementing oxidizing biocides for comprehensive microbial control. Effective against resistant microorganisms and biofilm formation."
                icon={FlaskConical}
                color="purple"
              />
              
              <ProductCard 
                id="passivation-chemicals"
                title="Passivation Chemicals"
                description="Pre-treatment chemicals forming protective passive films on metal surfaces. Essential for new system start-up and protection against initial corrosion attack."
                icon={Shield}
                color="gray"
              />
              
              <ProductCard 
                id="descaling-chemicals-cooling"
                title="De-Scaling Chemicals"
                description="Effective scale removal formulations for cleaning fouled cooling system equipment. Safely dissolves calcium carbonate, calcium sulfate, and other mineral deposits."
                icon={Wrench}
                color="orange"
              />
              
              <ProductCard 
                id="dealkalizer"
                title="De-Alkalizer"
                description="Alkalinity reduction chemicals preventing high pH-related scaling issues. Controls carbonate scale formation and optimizes cooling water chemistry."
                icon={Settings}
                color="blue"
              />
              
              <ProductCard 
                id="precleaning-chemical-cooling"
                title="Pre-Cleaning Chemical"
                description="Comprehensive pre-operational cleaning chemicals removing mill scale, rust, and construction debris. Prepares new cooling systems for optimal chemical treatment program performance."
                icon={Beaker}
                color="green"
              />
            </div>
          </div>

          {/* BOILER WATER TREATMENT CHEMICALS */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-orange-500">Boiler Water Treatment Chemicals</h2>
            
            <div className="space-y-6">
              <ProductCard 
                id="scale-corrosion-chemicals"
                title="Scale & Corrosion Chemicals"
                description="Comprehensive boiler water treatment formulations preventing scale deposition and corrosion. Ensures efficient heat transfer, protects boiler tubes, and extends equipment life."
                icon={Shield}
                color="orange"
              />
              
              <ProductCard 
                id="sludge-conditioners"
                title="Sludge Conditioners"
                description="Sludge conditioning agents maintaining suspended solids in dispersed form. Prevents boiler tube deposits, facilitates blowdown removal, and maintains system cleanliness."
                icon={Settings}
                color="brown"
              />
              
              <ProductCard 
                id="oxygen-scavengers"
                title="Oxygen Scavengers"
                description="Chemical oxygen scavengers removing dissolved oxygen from boiler feedwater. Prevents oxygen pitting corrosion and protects boiler system integrity."
                icon={Droplets}
                color="blue"
              />
              
              <ProductCard 
                id="ph-booster-boiler"
                title="pH Booster"
                description="Alkalinity builders maintaining optimal pH levels in boiler water. Controls corrosion, prevents acid attack, and ensures proper chemical treatment performance."
                icon={Beaker}
                color="yellow"
              />
              
              <ProductCard 
                id="new-boiler-precleaning-chemicals"
                title="New Boiler Precleaning Chemicals"
                description="Specialized pre-commissioning cleaning chemicals for new boiler systems. Removes manufacturing oils, mill scale, and construction debris before operational start-up."
                icon={Wrench}
                color="green"
              />
              
              <ProductCard 
                id="idle-boiler-preservatives"
                title="Idle Boiler Preservatives"
                description="Protective chemicals for wet or dry storage of idle boilers. Prevents corrosion during shutdown periods and ensures system integrity for quick restart."
                icon={Shield}
                color="purple"
              />
              
              <ProductCard 
                id="descaling-chemicals-boiler"
                title="De-Scaling Chemicals"
                description="Powerful descaling formulations removing hardness scale, silica deposits, and other mineral accumulations. Restores boiler efficiency and heat transfer capability."
                icon={Factory}
                color="red"
              />
              
              <ProductCard 
                id="phosphate-treatment-chemicals"
                title="Phosphate Treatment Chemicals"
                description="Phosphate-based boiler water treatment chemicals providing scale control and alkalinity buffering. Traditional and proven technology for medium-pressure boiler systems."
                icon={FlaskConical}
                color="blue"
              />
              
              <ProductCard 
                id="carbonate-treatment-chemicals"
                title="Carbonate Treatment Chemicals"
                description="Carbonate-based treatment programs for low-pressure boiler applications. Cost-effective scale and corrosion control for heating and process boilers."
                icon={Beaker}
                color="green"
              />
              
              <ProductCard 
                id="morpholine-treatment-chemicals"
                title="Morpholine Treatment Chemicals"
                description="Volatile amine treatments protecting steam and condensate systems. Neutralizes carbonic acid, prevents condensate line corrosion, and maintains pH throughout the system."
                icon={Droplets}
                color="cyan"
              />
            </div>
          </div>

          {/* PLANT DIVISION PRODUCTS */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-500">Plant Division Products</h2>
            
            <div className="space-y-6">
              <ProductCard 
                id="industrial-ro-system-5000-lph"
                title="Industrial RO System 5000 LPH"
                description="High-capacity industrial reverse osmosis plant designed for large-scale water purification needs. Features robust construction, advanced membrane technology, and automated controls for reliable industrial water treatment applications."
                icon={Factory}
                color="blue"
              />
              
              <ProductCard 
                id="compact-ro-unit-500-lph"
                title="Compact RO Unit 500 LPH"
                description="Space-saving RO system perfect for small industries with efficient water treatment capabilities. Compact design with full functionality, ideal for businesses with limited space requirements and moderate water demands."
                icon={Settings}
                color="cyan"
              />
              
              <ProductCard 
                id="municipal-ro-plant-50000-lph"
                title="Municipal RO Plant 50000 LPH"
                description="Large-scale municipal water treatment system providing clean water for communities. Designed for municipal applications with high-capacity treatment, energy-efficient operation, and reliable performance for community water supply."
                icon={Building2}
                color="emerald"
              />
              
              <ProductCard 
                id="uf-membrane-system"
                title="UF Membrane System"
                description="Ultra-filtration system for effective water purification removing bacteria, viruses, and suspended solids. Advanced membrane technology providing superior filtration performance for various water treatment applications."
                icon={Shield}
                color="violet"
              />
              
              <ProductCard 
                id="iron-removal-plant"
                title="Iron Removal Plant"
                description="Complete iron and manganese removal system ensuring clear, clean water for industrial applications. Efficient oxidation and filtration process removing iron and manganese contamination from water sources."
                icon={Settings}
                color="amber"
              />
              
              <ProductCard 
                id="softening-plant"
                title="Softening Plant"
                description="Water softening system for industrial use eliminating hardness and scale formation problems. Ion exchange technology effectively removing calcium and magnesium ions for soft water production."
                icon={Droplets}
                color="lime"
              />
              
              <ProductCard 
                id="mbbr-etp-system"
                title="MBBR ETP System"
                description="Moving bed bio-reactor effluent treatment plant offering efficient biological treatment. Advanced biological treatment technology providing excellent effluent quality with compact design and reliable operation."
                icon={Factory}
                color="emerald"
              />
              
              <ProductCard 
                id="sbr-treatment-plant"
                title="SBR Treatment Plant"
                description="Sequential batch reactor for industrial effluent providing flexible and efficient treatment. Time-controlled biological treatment process offering excellent treatment efficiency with operational flexibility."
                icon={Building2}
                color="sky"
              />
              
              <ProductCard 
                id="mbr-technology-plant"
                title="MBR Technology Plant"
                description="Membrane bio-reactor for advanced treatment delivering superior effluent quality. Combination of biological treatment and membrane filtration providing excellent water quality for reuse applications."
                icon={FlaskConical}
                color="rose"
              />
              
              <ProductCard 
                id="asp-sewage-plant"
                title="ASP Sewage Plant"
                description="Activated sludge process sewage treatment system providing reliable and efficient treatment. Proven biological treatment technology for municipal and industrial sewage treatment applications."
                icon={Settings}
                color="stone"
              />
              
              <ProductCard 
                id="packaged-stp-unit"
                title="Packaged STP Unit"
                description="Pre-fabricated sewage treatment plant offering quick installation and reliable performance. Factory-built treatment units providing immediate deployment and consistent treatment performance."
                icon={Building2}
                color="slate"
              />
              
              <ProductCard 
                id="decentralized-stp"
                title="Decentralized STP"
                description="Modular sewage treatment solution ideal for residential complexes and commercial buildings. Flexible modular design allowing scalable treatment capacity for various residential and commercial applications."
                icon={Wrench}
                color="neutral"
              />
            </div>
          </div>

          {/* MAINTENANCE DIVISION SERVICES */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-purple-500">Maintenance Division Services</h2>
            
            <div className="space-y-6">
              <ProductCard 
                id="etp-om-services"
                title="ETP O&M Services"
                description="Complete operation and maintenance of effluent plants ensuring optimal performance and compliance. Professional O&M services maintaining plant efficiency, regulatory compliance, and operational reliability."
                icon={Wrench}
                color="purple"
              />
              
              <ProductCard 
                id="stp-management"
                title="STP Management"
                description="Full-service sewage treatment plant management with skilled technicians and regular monitoring. Comprehensive management services ensuring consistent performance and regulatory compliance for sewage treatment facilities."
                icon={Settings}
                color="indigo"
              />
              
              <ProductCard 
                id="wtp-operations"
                title="WTP Operations"
                description="Water treatment plant operational support ensuring consistent water quality and system efficiency. Professional operational services maintaining optimal water treatment performance and quality standards."
                icon={Droplets}
                color="blue"
              />
              
              <ProductCard 
                id="efficiency-upgrade-package"
                title="Efficiency Upgrade Package"
                description="Performance enhancement for existing plants improving efficiency and reducing operational costs. Comprehensive upgrade solutions enhancing plant performance, reducing energy consumption, and improving overall efficiency."
                icon={Factory}
                color="orange"
              />
              
              <ProductCard 
                id="technology-modernization"
                title="Technology Modernization"
                description="Upgrading old systems with latest technology for improved performance and compliance. Modern technology integration improving treatment efficiency, automation capabilities, and regulatory compliance."
                icon={FlaskConical}
                color="cyan"
              />
              
              <ProductCard 
                id="capacity-enhancement"
                title="Capacity Enhancement"
                description="Expanding plant capacity and throughput to meet growing treatment requirements. Strategic capacity expansion solutions accommodating increased treatment demands while maintaining operational efficiency."
                icon={Building2}
                color="green"
              />
              
              <ProductCard 
                id="water-audit-services"
                title="Water Audit Services"
                description="Comprehensive water usage and efficiency audit identifying optimization opportunities. Detailed assessment of water consumption patterns, treatment efficiency, and cost reduction opportunities."
                icon={Shield}
                color="teal"
              />
              
              <ProductCard 
                id="process-optimization"
                title="Process Optimization"
                description="Technical consultation for process improvement enhancing efficiency and reducing costs. Expert analysis and recommendations for optimizing treatment processes, reducing operational costs, and improving performance."
                icon={Settings}
                color="emerald"
              />
              
              <ProductCard 
                id="troubleshooting-support"
                title="Troubleshooting Support"
                description="24/7 technical problem-solving assistance ensuring minimal downtime and quick resolution. Round-the-clock technical support providing rapid problem diagnosis and solution implementation."
                icon={Wrench}
                color="red"
              />
              
              <ProductCard 
                id="ro-membrane-replacement"
                title="RO Membrane Replacement"
                description="High-quality replacement membranes ensuring optimal performance and extended system life. Premium replacement membranes manufactured to exact specifications for maximum compatibility and performance."
                icon={Droplets}
                color="blue"
              />
              
              <ProductCard 
                id="pump-motor-spares"
                title="Pump & Motor Spares"
                description="Complete spare parts for pumping systems including impellers, seals, and motor components. Comprehensive inventory of pump and motor spare parts ensuring quick replacement and minimal system downtime."
                icon={Factory}
                color="gray"
              />
              
              <ProductCard 
                id="control-panel-components"
                title="Control Panel Components"
                description="Electrical and automation spare parts for control systems and monitoring equipment. Complete range of control panel components including sensors, switches, controllers, and monitoring devices."
                icon={Settings}
                color="violet"
              />
            </div>
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