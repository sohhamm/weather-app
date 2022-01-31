import Layout from './components/layout/Layout'
import Sidebar from './components/sidebar/Sidebar'
import Stats from './components/stats/Stats'
import useWeather from './data/weather'

export default function App() {
  const {weather, fetchingWeather} = useWeather()

  return (
    <Layout>
      <Sidebar
        weather={weather ? weather.consolidated_weather[0] : null}
        fetchingWeather={fetchingWeather}
        place={weather ? weather.parent.title : ''}
      />
      <Stats />
    </Layout>
  )
}
