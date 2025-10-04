'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Award,
  Factory,
  Beaker,
  Microscope,
  Clock,
  Search,
  TrendingUp,
  Droplets,
  Settings,
  Users,
  PhoneCall,
  Mail,
  FlaskConical,
  Wrench,
  Building2,
  Star,
  Eye,
  Target,
  Shield,
  FileText,
  Handshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('About Us');

  const tabs = [
    { id: 'About Us', title: 'About Us', icon: Users },
    { id: 'vision', title: 'Vision', icon: Eye },
    { id: 'core-services', title: 'Core Services', icon: Settings },
    { id: 'industries', title: 'Industries We Serve', icon: Factory },
    { id: 'why-choose', title: 'Why Choose CHEMTECH', icon: Star },
    { id: 'certifications', title: 'Certifications', icon: Shield },
    { id: 'our-team', title: 'Our Team', icon: Users },
    { id: 'testimonials', title: 'Testimonials', icon: FileText }
  ];

  const TabButton = ({ tab, isActive, onClick }) => {
    const Icon = tab.icon;
    return (
      <button
        onClick={() => onClick(tab.id)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
          isActive
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-200'
        }`}
      >
        <Icon className="w-4 h-4" />
        <span className="hidden lg:inline whitespace-nowrap">{tab.title}</span>
      </button>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'About Us':
        return (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-blue-900">About CHEMTECH</h2>
                  <h3 className="text-2xl font-semibold text-blue-700">Water Technologies & Solutions (India) Pvt Ltd</h3>
                </div>
                
                <div className="grid gap-6">
                  {[
                    {
                      icon: Settings,
                      title: "Complete Expertise",
                      description: "CHEMTECH expertise in Industrial Water, Waste Water & Sewage Treatment Plants Design, Equipment Supply, Erection and Commissioning, Operation & Trouble shooting. This enable us accurate analysis of client problems, thereby we can provide precise solutions and products for each application.",
                      gradient: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: Users,
                      title: "Quality Service Network", 
                      description: "CHEMTECH brings to customers a quality based good service network of sales and service with well trained staff. Our staff and dealer cum distribution network are graced to cater to the needs of our clients across the Pan India.",
                      gradient: "from-green-500 to-green-600"
                    },
                    {
                      icon: Target,
                      title: "Effective Customer Solutions",
                      description: "CHEMTECH business is about 'effective customer solutions' through innovations and development, service and co-operation. Our dynamic team focus their energy and resources to offer very best solutions to customer needs.",
                      gradient: "from-purple-500 to-purple-600"
                    }
                  ].map((tile, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-blue-500">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${tile.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <tile.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-blue-900 mb-3">{tile.title}</h4>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            <strong className="text-blue-800">CHEMTECH</strong> {tile.description.replace('CHEMTECH ', '')}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Droplets, title: "WTP/ETP/STP/UF/RO", desc: "Customized & Turn Key Projects" },
                  { icon: FlaskConical, title: "Chemicals Manufacturing & Supply", desc: "In-house specialty chemicals" },
                  { icon: Wrench, title: "Equipment & Spare Supply", desc: "Comprehensive spare parts" },
                  { icon: Building2, title: "Environmental/O&M Services", desc: "Sustainable Operations, Reliable Performance" }
                ].map((item, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-r-full font-bold text-xl mb-8">
                VISION & MISSION
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Handshake,
                  title: "Customer Satisfaction",
                  description: "To achieve and maintain total Customer Satisfaction by providing on-time delivery of high-quality products and services to our esteemed customers",
                  bgColor: "bg-blue-400",
                  textColor: "text-white"
                },
                {
                  icon: Clock,
                  title: "Continuous Development",
                  description: "To develop the necessary competence and upgradation of design, engineering and manufacturing capabilities for total customer satisfaction",
                  bgColor: "bg-red-400",
                  textColor: "text-white"
                },
                {
                  icon: Settings,
                  title: "Legal Compliance",
                  description: "To fulfill legal requirements, compliance obligations and other statutory mandates",
                  bgColor: "bg-yellow-500",
                  textColor: "text-white"
                },
                {
                  icon: Shield,
                  title: "Environmental Protection",
                  description: "To protect the environment and ensure prevention of pollution, injuries and ill-health",
                  bgColor: "bg-purple-500",
                  textColor: "text-white"
                },
                {
                  icon: Wrench,
                  title: "Employee Development",
                  description: "To impart training for all-round development of our employees",
                  bgColor: "bg-indigo-600",
                  textColor: "text-white"
                },
                {
                  icon: TrendingUp,
                  title: "Quality Enhancement",
                  description: "To periodically review the adequacy of our QEHS system and continually motivate our employees to improve our processes and QEHS system",
                  bgColor: "bg-green-500",
                  textColor: "text-white"
                }
              ].map((item, index) => (
                <Card key={index} className={`${item.bgColor} ${item.textColor} p-8 text-center hover:shadow-2xl transition-all duration-300 group rounded-3xl border-0`}>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h3>
                <p className="text-blue-700 text-lg">Guiding principles that drive our commitment to excellence</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Innovation", desc: "Continuous technological advancement", icon: "💡" },
                  { title: "Quality", desc: "Excellence in every product and service", icon: "⭐" },
                  { title: "Sustainability", desc: "Environmental responsibility in all operations", icon: "🌱" },
                  { title: "Partnership", desc: "Building long-term customer relationships", icon: "🤝" }
                ].map((value, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">{value.icon}</div>
                    <h4 className="font-bold text-blue-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'core-services':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Core Services</h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Industrial RO Plant',
                  features: ['Automated Operation', 'Modular Design', 'High Recovery Rate', 'Low Maintenance'],
                  icon: Factory,
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Waste Water Treatment Plant',
                  features: ['Multiple Technologies', 'Pre-fabricated Options', 'Civil Based Systems', 'Custom Solutions'],
                  icon: Factory,
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Ultra Filtration System',
                  features: ['Low Maintenance Cost', 'Consistent Quality', 'Versatile Applications', 'Energy Efficient'],
                  icon: Microscope,
                  gradient: 'from-purple-500 to-violet-500'
                },
                {
                  title: 'Specialty Chemicals',
                  features: ['In-house Manufacturing', 'Quality Assured', 'Custom Formulations', 'Technical Support'],
                  icon: Beaker,
                  gradient: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Lab Services ',
                  features: ['Water  & Waste Water Sample Analysis', 'Ambient Air Quality Monitoring', 'Soil Analysis', 'Stack Emissions Monitoring & Noise Levels'],
                  icon: FlaskConical,
                  gradient: 'from-teal-500 to-blue-500'
                },
                {
                  title: 'Existing Plant Services',
                  features: ['O&M Services', 'Plant Revamping', 'Water Audit', 'Technical Consultancy'],
                  icon: Wrench,
                  gradient: 'from-indigo-500 to-purple-500'
                }
              ].map((service, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blue-900 mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'industries':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Industries We Serve</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Providing specialized water treatment solutions across diverse industrial sectors
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                ['Automobile', 'Tyre / Rubber', 'Electronics', 'Chemical'],
                ['Tannery / Sugar', 'Petro-Chemical', 'Diary Industry', 'Pharmaceutical & Fertilizers '],
                ['Textile Manufacturing', 'Food Processing Industry', 'Distillaries', 'Nutraceuticals'],
                ['Hospitals', 'Institutions', 'Hotels', 'Apartments']
              ].map((column, colIndex) => (
                <div key={colIndex} className="space-y-4">
                  {column.map((industry, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg text-center hover:shadow-md transition-shadow group cursor-pointer">
                      <span className="font-semibold text-blue-800 group-hover:text-blue-900">{industry}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case 'why-choose':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Why Choose CHEMTECH?</h3>
              <p className="text-xl text-gray-600">See the benefits you can get by working with our experts</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Complete In-House Capability",
                    description: "CHEMTECH manufacturers water and waste water treatment chemicals and equipment to fit the needs of all categories of industries.",
                    icon: Building2
                  },
                  {
                    title: "Expert Team of Specialists",
                    description: "CHEMTECH is an organisation of engineers and chemists, team of specialists with experience in virtually all engineering disciplines and technologies.",
                    icon: Users
                  },
                  {
                    title: "Proven Problem Solving",
                    description: "CHEMTECH is uniquely qualified to solve water and waste water treatment plants, sewage treatment plants problems.",
                    icon: Settings
                  },
                  {
                    title: "Single Source Responsibility",
                    description: "CHEMTECH offers single source responsibility for all water and waste water treatment chemicals and equipment.",
                    icon: Shield
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Key Advantages</h4>
                  <div className="space-y-3">
                    {[
                      "15+ years of industry experience",
                      "100+ successful installations",
                      "ISO 9001:2015 registered processes",
                      "In-house R&D capabilities",
                      "24/7 customer support",
                      "Competitive pricing",
                      "Quick turnaround time",
                      "Nationwide service network"
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Certifications & Compliance</h3>
              <p className="text-xl text-gray-600">Quality assurance through recognized standards and certifications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "ISO 9001:2015",
                  description: "Quality Management System certification ensuring consistent quality in our products and services.",
                  icon: Award,
                  color: "blue"
                },
                {
                  title: "ISO 14001:2015",
                  description: "Environmental Management System certification demonstrating our commitment to environmental protection.",
                  icon: Shield,
                  color: "green"
                }
              ].map((cert, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow group">
                  <div className={`w-20 h-20 bg-${cert.color}-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className={`w-10 h-10 text-${cert.color}-600`} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">{cert.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'our-team':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Leadership Team</h3>
              <p className="text-xl text-gray-600">Meet the visionaries behind CHEMTECH's success</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1 text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Users className="w-24 h-24 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900">G Murali</h4>
                    <p className="text-blue-600 font-semibold">Founder & CEO</p>
                    <Badge className="mt-2 bg-green-500">Since 2020</Badge>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      G Murali founded CHEMTECH Water Technologies & Solutions (India) Pvt Ltd in 2020 with a vision to revolutionize industrial water and wastewater treatment solutions across India. With extensive experience in water treatment technologies and environmental engineering, he has built CHEMTECH into a trusted name in the industry.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">Vision</h5>
                          <p className="text-sm text-gray-600">Leading India's sustainable water solutions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">Achievement</h5>
                          <p className="text-sm text-gray-600">50+ successful plant installations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-blue-900 mb-6 text-center">Company Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Headquarters</h5>
                        <p className="text-sm text-gray-600">
                          Plot No: 14, Khasra No: 190/2,<br />
                          Sivan Nagar Main Road, Manali New Town,<br />
                          Chennai - 600103, Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Established</h5>
                        <p className="text-sm text-gray-600">Founded in 2020</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Certifications</h5>
                        <p className="text-sm text-gray-600">ISO 9001:2015 & ISO 14001:2015</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Client Testimonials</h3>
              <p className="text-xl text-gray-600">Hear what our satisfied clients have to say about our services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  company: "Tata Chemicals Limited",
                  industry: "Chemical Manufacturing",
                  location: "Gujarat",
                  testimonial: "CHEMTECH delivered an exceptional ETP solution for our manufacturing facility. Their technical expertise and prompt service have helped us maintain compliance with environmental standards while optimizing our operations.",
                  rating: 5
                },
                {
                  company: "Apollo Tyres Ltd",
                  industry: "Automobile - Tyre Manufacturing",
                  location: "Chennai",
                  testimonial: "We've been working with CHEMTECH for our wastewater treatment needs for over 2 years. Their innovative approach and reliable maintenance services have significantly improved our plant efficiency.",
                  rating: 5
                },
                {
                  company: "Mahindra & Mahindra",
                  industry: "Automotive",
                  location: "Maharashtra",
                  testimonial: "The RO plant installed by CHEMTECH has been running flawlessly. Their team's professionalism and after-sales support are commendable. Highly recommend their services.",
                  rating: 5
                },
                {
                  company: "Dr. Reddy's Laboratories",
                  industry: "Pharmaceutical",
                  location: "Hyderabad",
                  testimonial: "CHEMTECH's specialty chemicals and technical support have been instrumental in maintaining our water treatment standards. Their quality control is excellent.",
                  rating: 5
                },
                {
                  company: "Reliance Industries",
                  industry: "Petrochemical",
                  location: "Gujarat",
                  testimonial: "Outstanding service from design to commissioning. CHEMTECH's team handled our complex wastewater treatment requirements with expertise and delivered on time.",
                  rating: 5
                },
                {
                  company: "Taj Hotels",
                  industry: "Hospitality",
                  location: "Bangalore",
                  testimonial: "We chose CHEMTECH for our STP installation and it was the best decision. The plant operates efficiently with minimal maintenance, and their customer support is always responsive.",
                  rating: 5
                },
                {
                  company: "Asian Paints Limited",
                  industry: "Paint Manufacturing",
                  location: "Mumbai",
                  testimonial: "CHEMTECH's innovative solutions helped us achieve zero liquid discharge. Their technical team is highly knowledgeable and always available for support.",
                  rating: 5
                },
                {
                  company: "Wipro Limited",
                  industry: "IT Services",
                  location: "Pune",
                  testimonial: "The water treatment system installed at our campus is working perfectly. CHEMTECH provided a cost-effective solution without compromising on quality.",
                  rating: 5
                },
                {
                  company: "Hindustan Unilever",
                  industry: "FMCG",
                  location: "Tamil Nadu",
                  testimonial: "Excellent work on our effluent treatment plant. CHEMTECH's attention to detail and commitment to quality is evident in every aspect of their service.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                  
                  <div className="border-t pt-4">
                    <h5 className="font-bold text-blue-900">{testimonial.company}</h5>
                    <p className="text-sm text-gray-600">{testimonial.industry}</p>
                    <p className="text-sm text-blue-600 flex items-center gap-1 mt-1">
                      <Building2 className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Join Our Growing List of Satisfied Clients</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience the CHEMTECH difference with our comprehensive water treatment solutions tailored to your industry needs
              </p>
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                <PhoneCall className="w-4 h-4 mr-2" />
                Request a Consultation
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        {/* Simplified Floating Bubbles Animation */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1400 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Slow floating bubbles across the screen */}
            <g>
              {/* Row 1 - Top bubbles */}
              <circle r="6" fill="#60A5FA" opacity="0.6">
                <animateMotion dur="25s" repeatCount="indefinite" 
                              path="M-50 100 L1450 120" />
                <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="25s" repeatCount="indefinite" />
                <animate attributeName="r" values="6;10;6;8;6" dur="25s" repeatCount="indefinite" />
              </circle>
              <circle r="8" fill="#34D399" opacity="0.5">
                <animateMotion dur="28s" repeatCount="indefinite" begin="3s"
                              path="M-50 140 L1450 160" />
                <animate attributeName="opacity" values="0;0.5;0.3;0.5;0" dur="28s" repeatCount="indefinite" begin="3s" />
                <animate attributeName="r" values="8;12;8;10;8" dur="28s" repeatCount="indefinite" begin="3s" />
              </circle>
              <circle r="5" fill="#06B6D4" opacity="0.7">
                <animateMotion dur="30s" repeatCount="indefinite" begin="6s"
                              path="M-50 80 L1450 100" />
                <animate attributeName="opacity" values="0;0.7;0.5;0.7;0" dur="30s" repeatCount="indefinite" begin="6s" />
                <animate attributeName="r" values="5;9;5;7;5" dur="30s" repeatCount="indefinite" begin="6s" />
              </circle>

              {/* Row 2 - Middle bubbles */}
              <circle r="7" fill="#F59E0B" opacity="0.5">
                <animateMotion dur="32s" repeatCount="indefinite" 
                              path="M-50 250 L1450 280" />
                <animate attributeName="opacity" values="0;0.5;0.3;0.5;0" dur="32s" repeatCount="indefinite" />
                <animate attributeName="r" values="7;11;7;9;7" dur="32s" repeatCount="indefinite" />
              </circle>
              <circle r="9" fill="#EF4444" opacity="0.4">
                <animateMotion dur="26s" repeatCount="indefinite" begin="5s"
                              path="M-50 300 L1450 320" />
                <animate attributeName="opacity" values="0;0.4;0.2;0.4;0" dur="26s" repeatCount="indefinite" begin="5s" />
                <animate attributeName="r" values="9;13;9;11;9" dur="26s" repeatCount="indefinite" begin="5s" />
              </circle>
              <circle r="6" fill="#8B5CF6" opacity="0.6">
                <animateMotion dur="35s" repeatCount="indefinite" begin="8s"
                              path="M-50 220 L1450 240" />
                <animate attributeName="opacity" values="0;0.6;0.4;0.6;0" dur="35s" repeatCount="indefinite" begin="8s" />
                <animate attributeName="r" values="6;10;6;8;6" dur="35s" repeatCount="indefinite" begin="8s" />
              </circle>

              {/* Row 3 - Bottom bubbles */}
              <circle r="8" fill="#22D3EE" opacity="0.5">
                <animateMotion dur="29s" repeatCount="indefinite" 
                              path="M-50 450 L1450 480" />
                <animate attributeName="opacity" values="0;0.5;0.3;0.5;0" dur="29s" repeatCount="indefinite" />
                <animate attributeName="r" values="8;12;8;10;8" dur="29s" repeatCount="indefinite" />
              </circle>
              <circle r="5" fill="#FBBF24" opacity="0.7">
                <animateMotion dur="27s" repeatCount="indefinite" begin="4s"
                              path="M-50 420 L1450 440" />
                <animate attributeName="opacity" values="0;0.7;0.5;0.7;0" dur="27s" repeatCount="indefinite" begin="4s" />
                <animate attributeName="r" values="5;9;5;7;5" dur="27s" repeatCount="indefinite" begin="4s" />
              </circle>
              <circle r="7" fill="#A78BFA" opacity="0.4">
                <animateMotion dur="33s" repeatCount="indefinite" begin="7s"
                              path="M-50 500 L1450 520" />
                <animate attributeName="opacity" values="0;0.4;0.2;0.4;0" dur="33s" repeatCount="indefinite" begin="7s" />
                <animate attributeName="r" values="7;11;7;9;7" dur="33s" repeatCount="indefinite" begin="7s" />
              </circle>

              {/* Additional scattered bubbles for depth */}
              <circle r="4" fill="#60A5FA" opacity="0.3">
                <animateMotion dur="40s" repeatCount="indefinite" begin="10s"
                              path="M-50 180 L1450 200" />
                <animate attributeName="opacity" values="0;0.3;0.1;0.3;0" dur="40s" repeatCount="indefinite" begin="10s" />
                <animate attributeName="r" values="4;7;4;5;4" dur="40s" repeatCount="indefinite" begin="10s" />
              </circle>
              <circle r="6" fill="#34D399" opacity="0.4">
                <animateMotion dur="38s" repeatCount="indefinite" begin="12s"
                              path="M-50 360 L1450 380" />
                <animate attributeName="opacity" values="0;0.4;0.2;0.4;0" dur="38s" repeatCount="indefinite" begin="12s" />
                <animate attributeName="r" values="6;9;6;7;6" dur="38s" repeatCount="indefinite" begin="12s" />
              </circle>
            </g>
          </svg>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                <Award className="w-4 h-4 mr-2 text-blue-300" />
                Pioneering Industrial Water & Waste Water Treatrment Solutions Since 2009 | ISO 9001:2015 Registered
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                CHEMTECH
                <span className="block text-blue-300">Water Technologies</span>
                <span className="block text-3xl lg:text-4xl mt-4 text-blue-200">& Solutions (India) Pvt Ltd</span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                We provide complete, customized solutions for Industrial Water, Wastewater, and Sewage Treatment Plants. From design, fabrication to erection & commissioning, we deliver fully integrated turnkey projects.
                </p>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
Our state-of-the-art Water Treatment Specialty Chemicals Manufacturing Unit ensures reliable supply of chemicals, equipment & spares to customers across Pan India.     </p>
            </div>
            
            <div className="relative">
              <div className="space-y-6">
                {/* 100+ Installations */}
                <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center p-4 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Water ripple effect */}
                  <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping"></div>
                  <div className="flex-1 pl-4 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">50 +</h3>
                    <p className="text-white/90 text-sm font-medium">INSTALLATIONS</p>
                    <p className="text-white/80 text-xs">ACROSS PAN INDIA</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 relative z-10">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Adding New Clients */}
                <div className="bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center p-4 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="flex-1 pl-4 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">ADDING OF NEW CLIENTS</h3>
                    <p className="text-white/90 text-sm font-medium">EVERY YEAR</p>
                    <p className="text-white/80 text-xs">UPTO 1.5 TIMES</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 relative z-10">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Successfully Commissioned Plants */}
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center p-4 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="flex-1 pl-4 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">SUCCESSFULLY</h3>
                    <p className="text-white/90 text-sm font-medium">COMMISSIONED PLANTS</p>
                    <p className="text-white/80 text-xs">1600 + KLD</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 relative z-10">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Experienced Team */}
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center p-4 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  <div className="flex-1 pl-4 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">EXPERIENCED TEAM</h3>
                    <p className="text-white/90 text-sm font-medium">WITH STRONG</p>
                    <p className="text-white/80 text-xs">TECHNICAL KNOW-HOW</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 relative z-10">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Specialized Services */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-700 rounded-full flex items-center p-4 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                  <div className="flex-1 pl-4 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">SPECIALIZED IN</h3>
                    <p className="text-white/90 text-sm font-medium">WTP, STP, ETP, UF & RO</p>
                    <p className="text-white/80 text-xs">ZLD CLIENTS</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 relative z-10">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={setActiveTab}
              />
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-200">Contact us today for a free consultation and customized solution</p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 hover:shadow-2xl"
              >
                <PhoneCall className="w-6 h-6 mr-3" />
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;