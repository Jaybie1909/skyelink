import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, User, Building } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Message sent successfully! We'll get back to you soon.");
    e.target.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with custom QR solutions? Let's
            start a conversation and bring your vision to life.
          </p>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-300/20 rounded-full blur-lg animate-pulse delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Send us a Message
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User
                    className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                      focusedField === "name"
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div className="relative">
                  <Mail
                    className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                      focusedField === "email"
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <Building
                  className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                    focusedField === "company"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField("")}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell us about your project... *"
                  required
                  rows={5}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 resize-vertical text-gray-700 placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors"></p>
                    <p className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">
                      skyelinkvp@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors duration-200">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-green-600 hover:text-green-700 cursor-pointer transition-colors">
                      +63 910 203 5362
                    </p>
                    <p className="text-green-600 hover:text-green-700 cursor-pointer transition-colors">
                      +63 995 393 9523
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors duration-200">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Address
                    </h4>
                    <p className="text-purple-600">
                      11flr. Unit MN CyberOne Building Eastwood
                      <br />
                      Bagumbayan Quezon City
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 transition-colors duration-200">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h4>
                    <p className="tePxt-orange-600 text-sm">
                      <span className="block">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </span>
                      <span className="block">
                        Saturday: 10:00 AM - 4:00 PM
                      </span>
                      <span className="block font-medium">Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <h4 className="text-xl font-bold mb-3">Quick Response Promise</h4>
              <p className="text-blue-100 leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, don't hesitate to call us
                directly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
