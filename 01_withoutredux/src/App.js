import Stats from './components/Stats'
import ApiList from './components/ApiList'

const Layout = (props) => {
    return (
        <div className="container mx-auto px-4 mt-20 max-w-2xl">
            {props.children}
        </div>
    )
}

function App() {
    return (
        <Layout>
            <h1 className="text-gray-400 text-3xl font-bold mb-4">
                ACME Service
            </h1>
            <Stats />
            <ApiList />
        </Layout>
    )
}

export default App
