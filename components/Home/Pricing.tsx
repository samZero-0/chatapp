"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X, 
  Zap, 
  Shield, 
  Users, 
  MessageSquare, 
  FileText, 
  HelpCircle,
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  Globe,
  Loader2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingPlans = () => {
  const [annual, setAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("individual");
  
  // Simulate loading when switching billing cycles
  const handleBillingChange = (newValue) => {
    setIsLoading(true);
    setTimeout(() => {
      setAnnual(newValue);
      setIsLoading(false);
    }, 600);
  };
  
  const plans = {
    individual: [
      {
        name: "Free",
        description: "Perfect for casual users and small teams",
        price: { monthly: 0, annual: 0 },
        features: [
          { name: "Up to 5 group chats", included: true },
          { name: "Basic message formatting", included: true },
          { name: "1GB file storage", included: true },
          { name: "Mobile and desktop apps", included: true },
          { name: "Standard support", included: true },
          { name: "Message history (30 days)", included: true },
          { name: "AI-powered suggestions", included: false },
          { name: "Advanced security features", included: false },
          { name: "Unlimited message history", included: false },
          { name: "Custom branding", included: false },
        ],
        cta: "Get Started",
        popular: false,
        color: "bg-gray-50"
      },
      {
        name: "Pro",
        description: "For teams that need more features and flexibility",
        price: { monthly: 12, annual: 9 },
        features: [
          { name: "Unlimited group chats", included: true },
          { name: "Advanced message formatting", included: true },
          { name: "10GB file storage", included: true },
          { name: "Mobile and desktop apps", included: true },
          { name: "Priority support", included: true },
          { name: "Message history (1 year)", included: true },
          { name: "AI-powered suggestions", included: true },
          { name: "Advanced security features", included: true },
          { name: "Unlimited message history", included: false },
          { name: "Custom branding", included: false },
        ],
        cta: "Start Free Trial",
        popular: true,
        color: "bg-blue-50"
      },
      {
        name: "Enterprise",
        description: "For organizations with advanced needs",
        price: { monthly: 29, annual: 24 },
        features: [
          { name: "Unlimited group chats", included: true },
          { name: "Advanced message formatting", included: true },
          { name: "Unlimited file storage", included: true },
          { name: "Mobile and desktop apps", included: true },
          { name: "Dedicated support", included: true },
          { name: "Unlimited message history", included: true },
          { name: "AI-powered suggestions", included: true },
          { name: "Advanced security features", included: true },
          { name: "Unlimited message history", included: true },
          { name: "Custom branding", included: true },
        ],
        cta: "Contact Sales",
        popular: false,
        color: "bg-purple-50"
      }
    ],
    business: [
      {
        name: "Startup",
        description: "For growing startups and small businesses",
        price: { monthly: 19, annual: 15 },
        features: [
          { name: "Up to 20 team members", included: true },
          { name: "Advanced message formatting", included: true },
          { name: "50GB team storage", included: true },
          { name: "Mobile and desktop apps", included: true },
          { name: "Priority support", included: true },
          { name: "Message history (1 year)", included: true },
          { name: "AI-powered workflow automation", included: true },
          { name: "Advanced security features", included: true },
          { name: "Custom integration support", included: false },
          { name: "Custom branding", included: false },
        ],
        cta: "Start Free Trial",
        popular: false,
        color: "bg-green-50"
      },
      {
        name: "Business",
        description: "For mid-sized companies with serious needs",
        price: { monthly: 39, annual: 32 },
        features: [
          { name: "Up to 100 team members", included: true },
          { name: "Advanced message formatting", included: true },
          { name: "200GB team storage", included: true },
          { name: "Mobile and desktop apps", included: true },
          { name: "Priority support", included: true },
          { name: "Unlimited message history", included: true },
          { name: "AI-powered workflow automation", included: true },
          { name: "Advanced security & compliance", included: true },
          { name: "Custom integration support", included: true },
          { name: "Custom branding", included: true },
        ],
        cta: "Start Free Trial",
        popular: true,
        color: "bg-blue-50"
      },
      {
        name: "Enterprise",
        description: "For large organizations with custom requirements",
        price: { monthly: "Custom", annual: "Custom" },
        features: [
          { name: "Unlimited team members", included: true },
          { name: "Advanced message formatting", included: true },
          { name: "Unlimited team storage", included: true },
          { name: "Mobile and desktop apps", included: true },
          { name: "Dedicated account manager", included: true },
          { name: "Unlimited message history", included: true },
          { name: "Custom AI workflow development", included: true },
          { name: "Enterprise-grade security", included: true },
          { name: "Custom API integration", included: true },
          { name: "White labeling options", included: true },
        ],
        cta: "Contact Sales",
        popular: false,
        color: "bg-purple-50"
      }
    ]
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Messaging",
      description: "Instant messaging with read receipts and typing indicators"
    },
    {
      icon: Users,
      title: "Collaborative Spaces",
      description: "Create dynamic team channels for focused discussions"
    },
    {
      icon: FileText,
      title: "Secure File Sharing",
      description: "Share documents, images, and videos with confidence"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and advanced compliance tools"
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access your workspaces anytime, anywhere, on any device"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect with team members across different time zones"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      comment: "This platform transformed how our team communicates. The Pro plan offers incredible value for small teams.",
      avatar: "/api/placeholder/32/32"
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupHub",
      comment: "The Enterprise plan gave us exactly what we needed: security, customization, and dedicated support.",
      avatar: "/api/placeholder/32/32"
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, both our Pro and Enterprise plans come with a 14-day free trial. No credit card required to start your trial."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and for Enterprise customers, we also support invoicing."
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer: "Yes, we offer special pricing for eligible non-profits, educational institutions, and open-source projects. Please contact our sales team for more information."
    }
  ];

  const currentPlans = plans[activeTab];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-3 py-1 mb-4 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-50">
              Simple Pricing
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose the Perfect Plan for Your Needs
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're an individual, small team, or large organization, we have a plan that fits your requirements.
            </p>
          
            {/* Plan Category Tabs */}
            <div className="mb-8">
              <Tabs defaultValue="individual" className="w-full max-w-md mx-auto" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="individual">Individual & Teams</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className={`text-sm font-medium transition-colors ${!annual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
              <div className="relative">
                <Switch
                  checked={annual}
                  onCheckedChange={handleBillingChange}
                  className="data-[state=checked]:bg-blue-600"
                  disabled={isLoading}
                />
                {isLoading && (
                  <Loader2 className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 animate-spin" />
                )}
              </div>
              <span className={`text-sm font-medium transition-colors ${annual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  Save 25%
                </Badge>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (annual ? "-annual" : "-monthly")}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full border-2 ${plan.popular ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200'} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <Badge className="bg-blue-600 hover:bg-blue-700 px-3 py-1 font-medium">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className={`pb-8 ${plan.color} rounded-t-lg`}>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">{plan.description}</CardDescription>
                    <div className="mt-4 flex items-end">
                      {typeof plan.price.monthly === "number" ? (
                        <>
                          <span className="text-5xl font-bold">
                            ${annual ? plan.price.annual : plan.price.monthly}
                          </span>
                          {plan.price.monthly > 0 && (
                            <span className="text-gray-500 ml-2 mb-1">
                              / {annual ? 'year' : 'month'}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-3xl font-bold">
                          {plan.price.monthly}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                {feature.included ? (
                                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <Check className="h-3 w-3 text-green-600" />
                                  </div>
                                ) : (
                                  <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <X className="h-3 w-3 text-gray-400" />
                                  </div>
                                )}
                              </TooltipTrigger>
                              <TooltipContent>
                                {feature.included ? "Included in this plan" : "Not available in this plan"}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400'} text-sm`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full transition-all ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200' 
                          : plan.name === 'Free' || plan.name === 'Startup'
                            ? 'bg-gray-900 hover:bg-gray-800' 
                            : 'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.comment}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Key Features Across All Plans</h3>
            <p className="text-gray-500">
              Every plan includes these essential features to ensure a great chat experience
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[...features, ...additionalFeatures].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-200"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <HelpCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-500 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl text-white max-w-4xl mx-auto shadow-xl shadow-blue-100"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get 3 months free with annual billing
          </h3>
          <p className="text-white text-opacity-90 mb-8 max-w-xl mx-auto">
            Sign up for an annual plan today and receive an additional 3 months of service at no extra cost.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Free Trial
            <Zap className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;