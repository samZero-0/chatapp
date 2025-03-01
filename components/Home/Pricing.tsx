"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const PricingPlans = () => {
  const [annual, setAnnual] = useState(false);
  
  const plans = [
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
      color: "bg-gray-100"
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
      color: "bg-blue-100"
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
      color: "bg-purple-100"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Messaging",
      description: "Real-time messaging with read receipts and typing indicators"
    },
    {
      icon: Users,
      title: "Group Chats",
      description: "Create and manage group conversations with multiple participants"
    },
    {
      icon: FileText,
      title: "File Sharing",
      description: "Share documents, images, and videos securely"
    },
    {
      icon: Shield,
      title: "Security",
      description: "End-to-end encryption and advanced security features"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className=" px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="px-3 py-1 mb-4 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-50">
            Pricing
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Choose the Perfect Plan for Your Needs
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Whether you're an individual, small team, or large organization, we have a plan that fits your requirements.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch
              checked={annual}
              onCheckedChange={setAnnual}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm font-medium ${annual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                Save 25%
              </Badge>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full ${plan.popular ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className={`pb-8 ${plan.color} rounded-t-lg`}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-500 ml-2">
                        / {annual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : plan.name === 'Free' 
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
        </div>

        {/* Key Features */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Key Features Across All Plans</h3>
          <p className="text-gray-500">
            Every plan includes these essential features to ensure a great chat experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            {[
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
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-500">{faq.answer}</p>
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
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 rounded-full text-blue-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get 3 months free with annual billing
          </h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Sign up for an annual plan today and receive an additional 3 months of service at no extra cost.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Free Trial
            <Zap className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;