import { useState, useEffect } from 'react';
import { Search, ArrowUpRight, Library, BookOpen, GraduationCap } from 'lucide-react';

interface FeaturedItem {
  type: string;
  icon: string;
  color: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string; // Optional image URL
}

const CATEGORIES = [
  { id: 'all', label: 'All Resources', icon: Library },
  { id: 'writing', label: 'Scientific Writing', icon: BookOpen },
  { id: 'review', label: 'Peer Review', icon: GraduationCap },
  { id: 'guides', label: 'Research Guides', icon: Library },
  { id: 'tools', label: 'Publication Tools', icon: BookOpen },
  { id: 'funding', label: 'Funding', icon: GraduationCap }
];

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    type: 'writing',
    icon: '✍️',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'Middlebury Scientific Writing Resources',
    description: 'Comprehensive guide for academic writing excellence with templates and examples.',
    link: 'https://sites.middlebury.edu/middsciwriting/teaching-resources/',
    tags: ['writing', 'academic'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'writing',
    icon: '📚',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'CSTE Scientific Writing Toolkit',
    description: 'Professional toolkit with advanced writing techniques and peer review guidelines.',
    link: 'https://www.cste.org/page/scientificwriting',
    tags: ['writing', 'toolkit'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'tools',
    icon: '🔧',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'Equator Network Resources',
    description: 'Essential guidelines and checklists for health research reporting standards.',
    link: 'https://www.equator-network.org/',
    tags: ['tools', 'health'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'tools',
    icon: '📖',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'Springer Nature Writing Guide',
    description: 'Expert insights on manuscript preparation and submission best practices.',
    link: 'https://beta.springernature.com/pre-submission/writing-quality',
    tags: ['writing', 'publishing'],
    image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'guides',
    icon: '🔍',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'CASP Research Tools',
    description: 'Advanced tools for critical analysis and systematic review methodology.',
    link: 'https://casp-uk.net/casp-tools-checklists/',
    tags: ['research', 'analysis'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'writing',
    icon: '📝',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'Academic Phrasebank',
    description: 'Extensive collection of academic phrases and writing structures.',
    link: 'https://www.phrasebank.manchester.ac.uk/',
    tags: ['writing', 'language'],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'review',
    icon: '🔎',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'Wiley Peer Review Guide',
    description: 'Comprehensive handbook for conducting effective peer reviews.',
    link: 'https://authorservices.wiley.com/Reviewers/journal-reviewers/how-to-perform-a-peer-review/index.html',
    tags: ['review', 'publishing'],
    image: 'https://source.unsplash.com/400x300/?peer,review'
  },
  {
    type: 'funding',
    icon: '💡',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'Research Funding Opportunities',
    description: 'Latest grants and funding programs for innovative research projects.',
    link: 'https://grandchallengesnigeria.org/funding-opportunities/',
    tags: ['funding', 'grants'],
    image: 'https://source.unsplash.com/400x300/?funding,grants'
  },
  {
    type: 'funding',
    icon: '📜',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'AREF Essential Grant-Writing Skills Programme',
    description: 'The Africa Research Excellence Fund (AREF) Essential Grant-Writing Skills Programme March/May 2025.',
    link: 'https://africaresearchexcellencefund.org.uk/funding-calls/the-africa-research-excellence-fund-aref-essential-grant-writing-skills-programme-march-may-2025/',
    tags: ['funding', 'grants', 'writing'],
    image: 'https://source.unsplash.com/400x300/?grant,writing'
  },
  {
    type: 'funding',
    icon: '🌍',
    color: 'bg-gradient-to-r from-blue-100 to-blue-200',
    title: 'Emanuele Antola Research Hub',
    description: 'A comprehensive resource for research methodologies and funding opportunities.',
    link: 'https://emanueleantola.org/',
    tags: ['funding', 'research'],
    image: 'https://source.unsplash.com/400x300/?research,methodology'
  },
  {
    type: 'funding',
    icon: '📊',
    color: 'bg-gradient-to-r from-green-100 to-green-200',
    title: 'SGP Nigeria Funding Opportunities',
    description: 'Explore funding opportunities for sustainable development projects in Nigeria.',
    link: 'https://sgpnigeria.org/',
    tags: ['funding', 'sustainability'],
    image: 'https://source.unsplash.com/400x300/?sustainability,funding'
  },
  {
    type: 'funding',
    icon: '🌱',
    color: 'bg-gradient-to-r from-purple-100 to-purple-200',
    title: 'IGC Agri-SME Evidence Fund',
    description: 'Funding opportunities for agricultural SMEs to support evidence-based research.',
    link: 'https://www.theigc.org/initiatives/agri-sme-evidence-fund/current-funding-opportunities',
    tags: ['funding', 'agriculture'],
    image: 'https://source.unsplash.com/400x300/?agriculture,funding'
  },
  {
    type: 'funding',
    icon: '🌡️',
    color: 'bg-gradient-to-r from-red-100 to-red-200',
    title: 'ADF Climate Action Window',
    description: 'Call for proposals under the ADF Climate Action Window for climate-related projects.',
    link: 'https://www.afdb.org/en/topics-and-sectors/initiatives-and-partnerships/adf-climate-action-window/call-proposals-climate-action-window',
    tags: ['funding', 'climate'],
    image: 'https://source.unsplash.com/400x300/?climate,action'
  },
  {
    type: 'funding',
    icon: '🎓',
    color: 'bg-gradient-to-r from-yellow-100 to-yellow-200',
    title: 'Oxford Early Career Funding',
    description: 'Funding opportunities for early-career researchers in demography and related fields.',
    link: 'https://www.demography.ox.ac.uk/early-career-funding',
    tags: ['funding', 'early-career'],
    image: 'https://source.unsplash.com/400x300/?early-career,research'
  },
  {
    type: 'funding',
    icon: '🔬',
    color: 'bg-gradient-to-r from-indigo-100 to-indigo-200',
    title: 'HFSP Research Grants',
    description: 'Funding for innovative research projects in life sciences.',
    link: 'https://www.hfsp.org/funding/hfsp-funding/research-grants',
    tags: ['funding', 'life-sciences'],
    image: 'https://source.unsplash.com/400x300/?life-sciences,research'
  },
  {
    type: 'funding',
    icon: '🌐',
    color: 'bg-gradient-to-r from-teal-100 to-teal-200',
    title: 'Global Health EDCTP3 Funding',
    description: 'Calls for proposals under the Global Health EDCTP3 initiative.',
    link: 'https://www.global-health-edctp3.europa.eu/funding/calls-proposals_en',
    tags: ['funding', 'global-health'],
    image: 'https://source.unsplash.com/400x300/?global-health,funding'
  },
  {
    type: 'funding',
    icon: '💼',
    color: 'bg-gradient-to-r from-cyan-100 to-cyan-200',
    title: 'Grand Challenges Canada Funding',
    description: 'Funding opportunities for innovative global health and development projects.',
    link: 'https://www.grandchallenges.ca/funding-opportunities/',
    tags: ['funding', 'global-health'],
    image: 'https://source.unsplash.com/400x300/?global-health,innovation'
  },
  {
    type: 'funding',
    icon: '📱',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'GSMA Innovation Fund for AI',
    description: 'Funding for impactful AI projects in mobile for development.',
    link: 'https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/gsma-innovation-fund/the-gsma-innovation-fund-for-impactful-ai/',
    tags: ['funding', 'AI'],
    image: 'https://source.unsplash.com/400x300/?AI,mobile'
  }
];

// import React, { useState, useEffect } from 'react';
import {
  // Search,
  // ArrowUpRight,
  // BookOpen,
  FileText,
  // GraduationCap,
  BarChart,
  Target,
  Microscope,
  PenTool,
  BookMarked
} from 'lucide-react';

const RESOURCE_CATEGORIES = [
  { id: 'all', label: 'All Resources', icon: BookOpen },
  { id: 'research', label: 'Research Papers', icon: FileText },
  { id: 'education', label: 'Educational', icon: GraduationCap },
  { id: 'analysis', label: 'Data Analysis', icon: BarChart },
  { id: 'methodology', label: 'Methodology', icon: Target },
  { id: 'science', label: 'Scientific', icon: Microscope }
];

const ADDITIONAL_FEATURED_ITEMS = [
  {
    title: "Advanced Research Methodologies",
    description: "Comprehensive guide to modern research methodologies and best practices in academic research.",
    type: "methodology",
    tags: ["Research", "Methods", "Academic"],
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-purple-100",
    icon: "📚"
  },
  {
    title: "Data Analysis Techniques",
    description: "In-depth exploration of statistical analysis methods for research data.",
    type: "analysis",
    tags: ["Statistics", "Data", "Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-blue-100",
    icon: "📊"
  },
  {
    title: "Scientific Writing Guide",
    description: "Master the art of writing compelling scientific papers and research articles.",
    type: "education",
    tags: ["Writing", "Science", "Publishing"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-green-100",
    icon: "✍️"
  },
  {
    title: "Research Ethics Framework",
    description: "Essential guidelines for maintaining ethical standards in research.",
    type: "methodology",
    tags: ["Ethics", "Guidelines", "Standards"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-yellow-100",
    icon: "⚖️"
  },
  {
    title: "Experimental Design Principles",
    description: "Learn how to design effective experiments for research studies.",
    type: "science",
    tags: ["Experiments", "Design", "Research"],
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-red-100",
    icon: "🔬"
  },
  {
    title: "Literature Review Techniques",
    description: "Systematic approaches to conducting comprehensive literature reviews.",
    type: "research",
    tags: ["Literature", "Review", "Research"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-indigo-100",
    icon: "📖"
  },
  {
    title: "Quantitative Research Methods",
    description: "Advanced techniques for quantitative data collection and analysis.",
    type: "analysis",
    tags: ["Quantitative", "Methods", "Data"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-blue-100",
    icon: "📈"
  },
  {
    title: "Qualitative Research Guide",
    description: "Comprehensive guide to qualitative research methodologies.",
    type: "methodology",
    tags: ["Qualitative", "Research", "Methods"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-green-100",
    icon: "🔍"
  },
  {
    title: "Research Publication Strategy",
    description: "Strategic approaches to publishing research in high-impact journals.",
    type: "education",
    tags: ["Publishing", "Strategy", "Journals"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-purple-100",
    icon: "📰"
  },
  {
    title: "Statistical Analysis Tools",
    description: "Overview of essential statistical tools for research analysis.",
    type: "analysis",
    tags: ["Statistics", "Tools", "Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-blue-100",
    icon: "🔢"
  },
  {
    title: "Research Project Management",
    description: "Best practices for managing complex research projects effectively.",
    type: "methodology",
    tags: ["Management", "Projects", "Planning"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-yellow-100",
    icon: "📋"
  },
  {
    title: "Academic Writing Workshop",
    description: "Improve your academic writing skills with practical exercises.",
    type: "education",
    tags: ["Writing", "Academic", "Skills"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-red-100",
    icon: "✏️"
  },
  {
    title: "Research Funding Guide",
    description: "Comprehensive guide to securing research funding and grants.",
    type: "research",
    tags: ["Funding", "Grants", "Research"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-green-100",
    icon: "💰"
  },
  {
    title: "Peer Review Process",
    description: "Understanding and navigating the academic peer review process.",
    type: "education",
    tags: ["Peer Review", "Publishing", "Academic"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-indigo-100",
    icon: "👥"
  },
  {
    title: "Research Data Management",
    description: "Best practices for organizing and managing research data.",
    type: "methodology",
    tags: ["Data", "Management", "Organization"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-purple-100",
    icon: "💾"
  },
  {
    title: "Scientific Communication",
    description: "Effective strategies for communicating research findings.",
    type: "science",
    tags: ["Communication", "Science", "Presentation"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    link: "#",
    color: "bg-blue-100",
    icon: "🎯"
  }
];

function ReportsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(FEATURED_ITEMS);

  useEffect(() => {
    const filtered = FEATURED_ITEMS.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === 'all' ||
        item.type === selectedCategory ||
        item.tags.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
    setFilteredItems(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white/30 backdrop-blur-sm border-b border-slate-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNEREUxRTYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Research Resources Hub
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              Discover curated tools, guides, and opportunities to enhance your research journey
            </p>
            {/* Search Bar */}
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur transition group-hover:bg-blue-500/30" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200/50 bg-white/90 backdrop-blur-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                            placeholder:text-slate-400 text-slate-900 text-lg shadow-lg"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            {/* Category Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                      transition-all duration-300 ease-out transform hover:scale-105
                      ${selectedCategory === category.id
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/80 text-slate-600 hover:bg-white hover:shadow-md'}
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl
                        transition-all duration-500 ease-out transform hover:-translate-y-1
                        border border-slate-100 hover:border-slate-200 overflow-hidden"
            >
              {/* Image Section */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="p-8 relative">
                <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6
                               shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <span className="text-2xl transform transition-transform duration-500
                                 group-hover:scale-110">{item.icon}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600
                                transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100
                                  rounded-full transition-colors duration-300 hover:bg-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-6 text-blue-500 font-medium">
                  Explore Resource
                  <ArrowUpRight className="h-4 w-4 transition-all duration-300
                                        group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/5
                             group-hover:ring-slate-900/10" />
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                           bg-slate-100 text-slate-400 mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No resources found</h3>
            <p className="text-slate-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportsSection;