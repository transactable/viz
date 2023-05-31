import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Copyright Website Logo"
          width={370}
          height={85}
          priority
        />

      <h1 className="head_text text-center">
        Discover and Share
        <br className="" />
        <span className="orange_gradient text-center">Fair Use Visualizers</span>
      </h1>
      <p className="desc text-center">
        Viztopia is a platform for creating and sharing visualizations of fair use cases.
      </p>

      </div>
    </section>
  )
}
