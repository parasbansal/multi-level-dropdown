import MultiLevelDropdown from './components/MultiLevelDropdown'

import mockData from './utils/mock-data.json'

function App() {
  return (
    <div className="h-screen w-full bg-neutral-100 flex items-center justify-center">
      <div className="max-w-72 w-full">
        <MultiLevelDropdown
          data={mockData}
          placeholder="Select a category..."
          isParentSelectable={false}
        />
      </div>
    </div>
  )
}

export default App
