import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, Cpu, Drone, History, Leaf, Newspaper, Zap } from 'lucide-react';
import SiteFooter from '../components/SiteFooter';
import roboticsVideo from '../assets/advanced robotics.mp4';
import robotImage from '../assets/professional drone.jpg';
import solarImage from '../assets/roof-top solar.jpg';
import droneImage from '../assets/agricultural drone.jpg';

const anchors = [
  ['#body-of-work', 'Our Body of Work'],
  ['#the-automation-moment', 'The Automation Moment'],
  ['#robotics-for-the-field', 'Robotics for the Field'],
  ['#connecting-physical-operations', 'Connecting Physical Operations'],
  ['#energy-resilience', 'Energy Resilience'],
  ['#like-no-place-you-have-worked', 'Like No Place You Have Worked'],
];

const storySections = [
  {
    id: 'the-automation-moment',
    title: 'The Automation Moment',
    eyebrow: 'Practical intelligence',
    description:
      'Robotics, aerial systems, and renewable energy are moving from isolated experiments into everyday operations. Bella exists to help organizations make that transition with discipline.',
    media: roboticsVideo,
    mediaType: 'video',
    icon: Cpu,
  },
  {
    id: 'robotics-for-the-field',
    title: 'Robotics for the Field',
    eyebrow: 'Machines that work',
    description:
      'We focus on robots that can inspect, move, support, test, clean, and assist in real environments where reliability matters more than a showroom demonstration.',
    media: robotImage,
    mediaType: 'image',
    icon: Zap,
  },
  {
    id: 'connecting-physical-operations',
    title: 'Connecting Physical Operations',
    eyebrow: 'Aerial visibility',
    description:
      'Drones extend the reach of teams that manage farms, infrastructure, sites, and assets. Our work centers on useful payloads, route planning, monitoring, and safe operation.',
    media: droneImage,
    mediaType: 'image',
    icon: Drone,
  },
  {
    id: 'energy-resilience',
    title: 'Energy Resilience',
    eyebrow: 'Sustainable deployment',
    description:
      'Solar systems make technology more dependable by reducing operating risk and energy uncertainty. We connect product selection with site planning and long-term support.',
    media: solarImage,
    mediaType: 'image',
    icon: Leaf,
  },
];

const resourceLinks = [
  ['History', 'How Bella is building its technology platform', '/about', History],
  ['Newsroom', 'Company updates and deployment notes', '/news', Newspaper],
  ['Careers', 'Join the team building practical technology', '/careers', BriefcaseBusiness],
  ['Partners', 'Work with us across supply, deployment, and channels', '/partners', ArrowRight],
];

function About() {
  useEffect(() => {
    const sectionIds = anchors.map(([href]) => href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let ticking = false;

    const updateHash = (id) => {
      const nextUrl = `${window.location.pathname}#${id}`;
      if (window.location.hash !== `#${id}`) {
        window.history.replaceState(null, '', nextUrl);
      }
    };

    const setHashFromScrollPosition = () => {
      const viewportAnchor = window.scrollY + window.innerHeight * 0.42;
      const activeSection = sections.reduce((current, section) => {
        const sectionTop = section.offsetTop;
        return sectionTop <= viewportAnchor ? section : current;
      }, sections[0]);

      if (activeSection?.id) {
        updateHash(activeSection.id);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(setHashFromScrollPosition);
        ticking = true;
      }
    };

    setHashFromScrollPosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section id="body-of-work" className="scroll-mt-24 bg-slate-950 pt-28 text-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-10">
          <nav className="mb-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-white/10 pb-6 text-sm font-semibold text-slate-300">
            {anchors.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-300">About Bella</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-normal md:text-7xl">
                Our Body of Work
              </h1>
            </div>
            <div>
              <p className="text-xl leading-9 text-slate-200">
                Bella builds practical technology across robotics, drones, and solar energy for organizations that need smarter operations, cleaner power, and dependable automation.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">
                Explore with our team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main>
        {storySections.map(({ id, title, eyebrow, description, media, mediaType, icon: Icon }, index) => (
          <section key={id} id={id} className={`scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className={`mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold uppercase text-blue-700">{eyebrow}</p>
                <h2 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 md:text-5xl">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-700">{description}</p>
              </div>

              <div className="overflow-hidden rounded-lg bg-slate-900 shadow-xl">
                {mediaType === 'video' ? (
                  <video className="aspect-video w-full object-cover" autoPlay muted loop playsInline>
                    <source src={media} type="video/mp4" />
                  </video>
                ) : (
                  <img src={media} alt="" className="aspect-video w-full object-cover" />
                )}
              </div>
            </div>
          </section>
        ))}

        <section id="like-no-place-you-have-worked" className="scroll-mt-24 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-300">Culture</p>
              <h2 className="mt-4 text-4xl font-bold tracking-normal md:text-5xl">Like no place you have worked.</h2>
            </div>
            <div>
              <p className="text-2xl font-semibold leading-10 text-slate-100">
                “The mission is to make advanced technology useful outside perfect conditions. Everyone here is expected to think clearly, build carefully, and stay close to the customer.”
              </p>
              <Link to="/careers" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                See careers
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-4">
            {resourceLinks.map(([title, description, href, Icon]) => (
              <Link key={title} to={href} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
                <Icon className="h-6 w-6 text-blue-700" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default About;
