import HeaderSection from '@/components/HeaderSection'

export default function Home() {
  return (
    <main className="snap-mandatory scrollbar-hide overflow-auto">
      <HeaderSection />
      <div className="hidden">
        <div className="w-full h-screen relative center z-[1] snap-start overflow-scroll">
          About Section Modal
        </div>
        <div className="w-full h-screen relative center z-[1] snap-start overflow-scroll">
          Portfolio Section Modal
        </div>
        <div className="w-full h-screen relative center z-[1] snap-start overflow-scroll">
          Rest Modal
        </div>
      </div>
    </main>
  )
}
