import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    photo: "photo-1583939003579-730e3918a45a",
    fallback: "photo-1548013146-72479768bada",
    name: "Priya & Arjun",
    location: "Udaipur, India",
    type: "Destination Wedding",
    aspect: "aspect-[4/5]",
  },
  {
    photo: "photo-1520242739010-44e95bde329e",
    fallback: "photo-1520854221256-17451cc331bf",
    name: "Sofia & Marco",
    location: "Lake Como, Italy",
    type: "Wedding Ceremony",
    aspect: "aspect-[3/4]",
  },
  {
    photo: "photo-1537633552985-df8429e8048b",
    fallback: "photo-1511285560929-80b456fea0bc",
    name: "Elena & James",
    location: "Santorini, Greece",
    type: "Pre-Wedding",
    aspect: "aspect-[4/5]",
  },
  {
    photo: "photo-1464699908537-0954e50791ee",
    fallback: "photo-1512453979798-5ea266f8880c",
    name: "Aisha & Rahul",
    location: "Dubai, UAE",
    type: "Luxury Wedding",
    aspect: "aspect-[3/4]",
  },
  {
    photo: "photo-1522673607200-164d1b6ce486",
    fallback: "photo-1537996194471-e657df975ab4",
    name: "Mei & Thomas",
    location: "Bali, Indonesia",
    type: "Destination Wedding",
    aspect: "aspect-[4/3]",
  },
  {
    photo: "photo-1519741497674-611481863552",
    fallback: "photo-1499856871958-5b9627545d1a",
    name: "Claire & Antoine",
    location: "Paris, France",
    type: "Elopement",
    aspect: "aspect-[4/3]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function FeaturedStories() {
  return (
    <section id="work" className="py-40 md:py-52 bg-dark">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.35em] text-[10px] mb-5 font-light"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[0.95]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Featured<br /><em>Stories</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 font-light text-base max-w-xs leading-relaxed"
          >
            Each story is an original — intimately crafted, exquisitely told.
          </motion.p>
        </div>

        {/* Editorial grid — row 1: 2/3 + 1/3, row 2: 1/3 + 1/3 + 1/3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">

          {/* Card 1 — large */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7 img-hover-zoom relative group cursor-pointer overflow-hidden"
          >
            <div className="aspect-[3/2] md:aspect-auto md:h-[680px] w-full overflow-hidden">
              <img
                src={`https://images.unsplash.com/${stories[0].photo}?auto=format&fit=crop&q=85&w=1600&h=1000`}
                alt={stories[0].name}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/${stories[0].fallback}?auto=format&fit=crop&q=85&w=1600`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent transition-opacity duration-700" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-700" />
              <StoryLabel story={stories[0]} />
              <ViewBtn />
            </div>
          </motion.div>

          {/* Card 2 — tall narrow */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-5 img-hover-zoom relative group cursor-pointer overflow-hidden"
          >
            <div className="aspect-[4/3] md:aspect-auto md:h-[680px] w-full overflow-hidden">
              <img
                src={`https://images.unsplash.com/${stories[1].photo}?auto=format&fit=crop&q=85&w=1000&h=1360`}
                alt={stories[1].name}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/${stories[1].fallback}?auto=format&fit=crop&q=85&w=1000`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent transition-opacity duration-700" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-700" />
              <StoryLabel story={stories[1]} />
              <ViewBtn />
            </div>
          </motion.div>

          {/* Cards 3-5 — three equal */}
          {stories.slice(2, 5).map((story, i) => (
            <motion.div
              key={i + 2}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-4 img-hover-zoom relative group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-[480px] w-full overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${story.photo}?auto=format&fit=crop&q=85&w=800`}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/${story.fallback}?auto=format&fit=crop&q=85&w=800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent transition-opacity duration-700" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-700" />
                <StoryLabel story={story} />
                <ViewBtn />
              </div>
            </motion.div>
          ))}

          {/* Card 6 — wide */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-12 img-hover-zoom relative group cursor-pointer overflow-hidden"
          >
            <div className="aspect-[16/7] w-full overflow-hidden">
              <img
                src={`https://images.unsplash.com/${stories[5].photo}?auto=format&fit=crop&q=85&w=2400&h=1050`}
                alt={stories[5].name}
                className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/${stories[5].fallback}?auto=format&fit=crop&q=85&w=2400`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/20 to-transparent" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/15 transition-colors duration-700" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/60 uppercase tracking-[0.25em] text-[10px] mb-3">{stories[5].type} — {stories[5].location}</p>
                <h3 className="text-white font-serif text-3xl md:text-5xl">{stories[5].name}</h3>
              </div>
              <ViewBtn />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StoryLabel({ story }: { story: typeof stories[0] }) {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <p className="text-white/60 uppercase tracking-[0.25em] text-[10px] mb-2">{story.type} — {story.location}</p>
      <h3 className="text-white font-serif text-xl md:text-2xl">{story.name}</h3>
    </div>
  );
}

function ViewBtn() {
  return (
    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
      <div className="w-10 h-10 bg-gold flex items-center justify-center">
        <ArrowUpRight className="w-4 h-4 text-dark" />
      </div>
    </div>
  );
}
