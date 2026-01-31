import { Award, Users, Globe, Heart, Target, Star } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Travelers' },
    { icon: Globe, value: '120+', label: 'Countries Covered' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: '25+ years crafting luxury travel experiences'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Expert in seamless travel logistics worldwide'
    },
    {
      name: 'Emily Chen',
      role: 'Travel Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      bio: 'Specializing in bespoke Asian adventures'
    },
    {
      name: 'Marcus Thompson',
      role: 'Adventure Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'Leading expeditions to remote destinations'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <h1 className="about-hero-title">Our Story</h1>
          <p className="about-hero-subtitle">
            Crafting Unforgettable Journeys Since 1999
          </p>
        </div>
      </div>

      <section className="about-intro py-100">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-content">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Where Passion Meets Excellence
              </h2>
              <p className="about-text">
                At Wanderluxe, we believe that travel is more than just visiting new places—it's about
                creating meaningful connections, discovering diverse cultures, and transforming perspectives.
                For over two decades, we've been curating exceptional travel experiences that go beyond
                the ordinary.
              </p>
              <p className="about-text">
                Our team of passionate travel experts personally visits every destination, partners with
                the finest local guides, and crafts each itinerary with meticulous attention to detail.
                We don't just plan trips; we create memories that last a lifetime.
              </p>
              <p className="about-text">
                From the bustling streets of Tokyo to the serene beaches of the Maldives, from the
                historical wonders of Rome to the wild safaris of Kenya—we've explored it all so you
                can experience it at its finest.
              </p>
            </div>
            <div className="about-intro-image">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Travel journey"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats py-100">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">
                  <stat.icon size={40} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values py-100">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart />
              </div>
              <h3>Passion for Travel</h3>
              <p>
                We're travelers at heart, driven by an insatiable curiosity to explore and share
                the world's wonders with our guests.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award />
              </div>
              <h3>Excellence in Service</h3>
              <p>
                Every detail matters. We're committed to delivering impeccable service that
                exceeds expectations at every turn.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target />
              </div>
              <h3>Authentic Experiences</h3>
              <p>
                We go beyond tourist attractions to offer genuine cultural immersion and
                connections with local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team py-100">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated experts passionate about creating your perfect journey
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;