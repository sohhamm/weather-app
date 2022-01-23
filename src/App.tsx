import Layout from './components/layout/Layout'
import Sidebar from './components/sidebar/Sidebar'
import Stats from './components/stats/Stats'

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <Stats />
    </Layout>
  )
}
