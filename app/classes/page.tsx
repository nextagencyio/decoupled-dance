import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_CLASSES } from '@/lib/queries'
import { ClassesData } from '@/lib/types'
import Header from '../components/Header'
import ClassCard from '../components/ClassCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Classes | Rhythm & Flow Dance Studio',
  description: 'Explore our dance classes from ballet to hip hop.',
}

async function getClasses() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ClassesData>({
      query: GET_CLASSES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeClasses?.nodes || []
  } catch (error) {
    console.error('Error fetching classes:', error)
    return []
  }
}

export default async function ClassesPage() {
  const items = await getClasses()

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Floating decorative shapes */}
        <div className="absolute top-12 left-[8%] w-16 h-16 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-8 right-[12%] w-12 h-12 bg-purple-400 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-8 right-[25%] w-10 h-10 bg-accent-300 rounded-xl opacity-35 -rotate-12 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Our Classes
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Find the perfect dance style for you -- from graceful ballet to energetic hip hop.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Classes Yet</h2>
              <p className="text-gray-500">
                Classes will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ClassCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
