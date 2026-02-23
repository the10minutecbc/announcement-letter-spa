import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen py-8 px-4 sm:py-16 sm:px-10 flex justify-center font-domine text-[#2c2a25]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-[#fcfbfa] shadow-md border border-[#e8e4db] rounded-sm p-8 sm:p-14 md:p-20 relative overflow-hidden"
      >
        {/* Paper Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        {/* Subtle gradient for aged paper effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#ffffff] via-transparent to-[#e8e0d5] opacity-40"></div>

        <div className="text-center mb-16 mt-2 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-medium text-[#1a1814] tracking-tight mb-4 leading-tight">
            Blessed-to-be Fulton Sheen
          </h1>
          <span className="font-caveat text-3xl sm:text-4xl text-[#7a7363] -rotate-2 inline-block tracking-wide">
            our lenten companion
          </span>
          <div className="w-24 h-[2px] bg-[#d4c5b0] mx-auto mt-10 opacity-60 rounded-full"></div>
        </div>

        <p className="mb-8 text-lg sm:text-xl leading-[1.8] tracking-[0.01em]">Dear readers,</p>
        
        <p className="mb-8 text-lg sm:text-xl indent-12 sm:indent-16 text-justify leading-[1.8] tracking-[0.01em]">
          As we complete our first book of 2026, <em>Jesus of Nazareth: From the Baptism in the Jordan to the Transfiguration</em> by Pope Benedict XVI, we are truly grateful to have begun the year with this book. The Pope takes us through a journey of Christology, the character of Jesus set in a specific time and a specific place in history - our history as members of His Church. Slowly by slowly, he walks with us, guiding us through along an exegetical meditation on the gospels; beginning from - as the title of the book reveals - Christ’s baptism in the Jordan to His temptation in the desert, the teachings of the Kingdom of God; to a deep dive on the Sermon on the mountain and the Lord’s Prayer; to the choosing of the 12 apostles and the meaning and purpose of the Parables; all the way to principal images in John’s gospel and the transfiguration, and finally to the revelation of the true identity of Christ, as the Son of the Living God.
        </p>

        <p className="mb-8 text-lg sm:text-xl indent-12 sm:indent-16 text-justify leading-[1.8] tracking-[0.01em]">
          It is said we cannot love what we do not know. Cardinal Ratzinger, in his brilliant, careful, and methodical way over the last two months, has taught us a lot about Christ and the deeper meaning of the Gospel texts. He has revealed Christ to us through his Word, and now we know Him. Being armed with this knowledge and love for Our Lord, we are ready to move into this season of Lent with our new Lenten read, <em>The Cries of Jesus on the Cross: A Fulton Sheen Anthology</em> by Venerable Fulton Sheen, which still focuses on Christ, only that this time, the one we love is on the Cross. Blessed-to-be Fulton Sheen, in his book, looks at the 7 last words of Jesus on the cross, a timely read for us in this season.
        </p>

        <p className="mb-8 text-lg sm:text-xl indent-12 sm:indent-16 text-justify leading-[1.8] tracking-[0.01em]">
          Some days ago, on the 9th of this month, Pope Leo XIV authorised the Dicastery for the cause of Saints to proceed with the Beatification of Venerable Archbishop Fulton J. Sheen, after it had stalled for many years. Given my love and yours for him, this was the best news! Moreover, for us in the book club, this was a blessing preceding the book we are about to start. As we read his book over the next 40 days, let's ask for his intercession in our own lives and pray for his cause of Beatification using the prayer card below.
        </p>

        <p className="mb-12 text-lg sm:text-xl indent-12 sm:indent-16 text-justify leading-[1.8] tracking-[0.01em]">
          I look forward to reading this book with all of you, and I pray that we all renew our intention to read in the presence of Our Lord in prayerful contemplation each day for just 10 minutes as we walk with Our Lord to Calvary and join him on the Cross this Lenten season.
        </p>

        <div className="mb-20 pl-4 sm:pl-8">
          <p className="text-lg sm:text-xl leading-[1.8] tracking-[0.01em]">With Blessings,</p>
          <p className="font-caveat text-4xl sm:text-5xl mt-6 text-[#297373] -rotate-2 origin-left inline-block">Nyandia Maina</p>
          <p className="text-sm sm:text-base mt-4 text-gray-600 tracking-wide">10minCBC Founder & Moderator.</p>
        </div>

        {/* Prayer Card */}
        <div className="mt-12 border-2 border-double border-[#d4c5b0] p-6 sm:p-10 rounded-lg bg-[#f9f6f0] text-center shadow-inner relative overflow-hidden">
          {/* Subtle corner decorations for the prayer card */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#d4c5b0] opacity-50"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#d4c5b0] opacity-50"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#d4c5b0] opacity-50"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#d4c5b0] opacity-50"></div>

          <h3 className="text-lg sm:text-xl font-semibold mb-6 uppercase tracking-wider text-[#4a3f35]">Fulton Sheen Prayer Card For a Favour</h3>
          
          <p className="mb-5 text-base sm:text-lg italic leading-relaxed">
            Eternal Father, You alone grant us every blessing in Heaven and on earth, through the redemptive mission of Your Divine Son, Jesus Christ, and by the working of the Holy Spirit.
          </p>
          
          <p className="mb-5 text-base sm:text-lg italic leading-relaxed">
            If it be according to Your Will, glorify Your servant, Archbishop Fulton J. Sheen, by granting the favor I now request through his prayerful intercession <br/><span className="text-sm sm:text-base text-gray-500 not-italic mt-2 inline-block">(mention your request here)</span>
          </p>
          
          <p className="mb-8 text-base sm:text-lg italic leading-relaxed">
            I make this prayer confidently through Jesus Christ, Our Lord. Amen.
          </p>
          
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest border-t border-[#d4c5b0] pt-4 inline-block">
            Imprimatur: +Most Reverend Daniel R. Jenky, C.S.C., Bishop of Peoria
          </p>
        </div>
      </motion.div>
    </div>
  );
}
