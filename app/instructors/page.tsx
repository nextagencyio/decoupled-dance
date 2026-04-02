import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_INSTRUCTORS } from '@/lib/queries'
import { InstructorsData } from '@/lib/types'
import Header from '../components/Header'
import InstructorCard from '../components/InstructorCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Instructors | Rhythm & Flow Dance Studio',
  description: 'Meet our talented dance instructors.',
}

async function getInstructors() {
  try {
    const client = getClient()
    const data = await client.raw(GET_INSTRUCTORS, { first: 50 })
    return data?.nodeInstructors?.nodes || []
  } catch (error) {
    console.error('Error fetching instructors:', error)
    return []
  }
}

export default async function InstructorsPage() {
  const items = await getInstructors()

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-10 left-[10%] w-14 h-14 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 right-[8%] w-10 h-10 bg-purple-400 rounded-xl opacity-30 rotate-12 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
        <div className="absolute top-16 right-[20%] w-12 h-12 bg-accent-300 rounded-2xl opacity-35 -rotate-6 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Our Instructors
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Meet the passionate professionals who bring movement to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Instructors Yet</h2>
              <p className="text-gray-500">
                Instructors will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <InstructorCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
