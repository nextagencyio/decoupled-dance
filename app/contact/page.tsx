import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Rhythm & Flow Dance Studio.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary-800 mb-4">Contact Us</h1>
            <p className="text-base md:text-lg text-gray-600">
              Have questions about Rhythm & Flow Dance Studio? We&#39;d love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-primary-100 p-8">
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-gray-900">Email</h3>
                    <p className="text-gray-600">info@rhythmflow.example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 789-0123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-gray-900">Address</h3>
                    <p className="text-gray-600">789 Dance Avenue<br />Artsville, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-gray-900">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 10AM - 9PM<br />Saturday: 9AM - 5PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg border-2 border-accent-100 p-8">
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={6} className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white py-3 px-6 rounded-full hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 font-bold text-lg shadow-lg shadow-primary-200 hover:-translate-y-0.5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
