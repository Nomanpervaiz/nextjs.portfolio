
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  )
}

export default Loading