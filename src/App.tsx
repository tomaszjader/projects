import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Blocks } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Tomasz Jąder</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/tomaszjader/" className="text-white hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tomasz-j%C4%85der-a25427200/" className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tomasz.jader@gmail.com" className="text-white hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Wiedza techniczna</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code2 className="w-8 h-8" />}
              title="Frontend Development"
              skills={['Angular', 'TypeScript', 'Bootstrap']}
            />
            <SkillCard
              icon={<Terminal className="w-8 h-8" />}
              title="Backend Development"
              skills={['Node.js', 'Python', 'Ruby']}
            />
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="Databases"
              skills={['PostgreSQL']}
            />
            <SkillCard
              icon={<Blocks className="w-8 h-8" />}
              title="DevOps"
              skills={['Terminal', 'Git', 'GitHub']}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution built with React, Node.js, and PostgreSQL"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
              tags={['React', 'Node.js', 'PostgreSQL']}
            />
            <ProjectCard
              title="AI Chat Application"
              description="Real-time chat application with AI-powered responses"
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
              tags={['Python', 'TensorFlow', 'WebSocket']}
            />
            <ProjectCard
              title="DevOps Dashboard"
              description="Monitoring and analytics dashboard for DevOps teams"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              tags={['React', 'Go', 'Docker']}
            />
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution built with React, Node.js, and PostgreSQL"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
              tags={['React', 'Node.js', 'PostgreSQL']}
            />
            <ProjectCard
              title="AI Chat Application"
              description="Real-time chat application with AI-powered responses"
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
              tags={['Python', 'TensorFlow', 'WebSocket']}
            />
            <ProjectCard
              title="DevOps Dashboard"
              description="Monitoring and analytics dashboard for DevOps teams"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              tags={['React', 'Go', 'Docker']}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
          <p className="text-gray-600 mb-8">
          Zawsze z zainteresowaniem słucham o nowych projektach i możliwościach.
          </p>
          <a
            href="mailto:tomasz.jader@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Skontaktuj się
          </a>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Tomasz Jąder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;