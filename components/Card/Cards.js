import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from 'lib/queries'
import Card from './Card'

export default function Cards() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return 'Loading...'
  if (error) return <div>{error}</div>
  return (
    <main>
      <div className="grid sm:grid-cols-4 md:grid-cols-6 gap-4 lg:gap-4">
        {data.locations.map((location) => (
          <Card
            key={location.id}
            country={location.country}
            place={location.place}
            attributes={location}
            image={location.image}
          />
        ))}
      </div>
    </main>
  )
}
