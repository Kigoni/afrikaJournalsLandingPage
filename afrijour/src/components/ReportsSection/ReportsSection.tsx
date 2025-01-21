import { useState, useEffect } from 'react';
import { Search, ArrowUpRight, Filter, BookOpen, GraduationCap, Library } from 'lucide-react';

interface FeaturedItem {
  type: string;
  icon: string;
  color: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
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
    tags: ['writing', 'academic']
  },
  {
    type: 'writing',
    icon: '📚',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'CSTE Scientific Writing Toolkit',
    description: 'Professional toolkit with advanced writing techniques and peer review guidelines.',
    link: 'https://www.cste.org/page/scientificwriting',
    tags: ['writing', 'toolkit']
  },
  {
    type: 'tools',
    icon: '🔧',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'Equator Network Resources',
    description: 'Essential guidelines and checklists for health research reporting standards.',
    link: 'https://www.equator-network.org/',
    tags: ['tools', 'health']
  },
  {
    type: 'tools',
    icon: '📖',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'Springer Nature Writing Guide',
    description: 'Expert insights on manuscript preparation and submission best practices.',
    link: 'https://beta.springernature.com/pre-submission/writing-quality',
    tags: ['writing', 'publishing']
  },
  {
    type: 'guides',
    icon: '🔍',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'CASP Research Tools',
    description: 'Advanced tools for critical analysis and systematic review methodology.',
    link: 'https://casp-uk.net/casp-tools-checklists/',
    tags: ['research', 'analysis']
  },
  {
    type: 'writing',
    icon: '📝',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'Academic Phrasebank',
    description: 'Extensive collection of academic phrases and writing structures.',
    link: 'https://www.phrasebank.manchester.ac.uk/',
    tags: ['writing', 'language']
  },
  {
    type: 'review',
    icon: '🔎',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'Wiley Peer Review Guide',
    description: 'Comprehensive handbook for conducting effective peer reviews.',
    link: 'https://authorservices.wiley.com/Reviewers/journal-reviewers/how-to-perform-a-peer-review/index.html',
    tags: ['review', 'publishing']
  },
  {
    type: 'funding',
    icon: '💡',
    color: 'bg-gradient-to-r from-pink-100 to-pink-200',
    title: 'Research Funding Opportunities',
    description: 'Latest grants and funding programs for innovative research projects.',
    link: 'https://grandchallengesnigeria.org/funding-opportunities/',
    tags: ['funding', 'grants']
  },
  {
    type: 'funding',
    icon: '📜',
    color: 'bg-gradient-to-r from-orange-100 to-orange-200',
    title: 'AREF Essential Grant-Writing Skills Programme',
    description: 'The Africa Research Excellence Fund (AREF) Essential Grant-Writing Skills Programme March/May 2025.',
    link: 'https://africaresearchexcellencefund.org.uk/funding-calls/the-africa-research-excellence-fund-aref-essential-grant-writing-skills-programme-march-may-2025/',
    tags: ['funding', 'grants', 'writing']
  }
];

function ReportsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState(FEATURED_ITEMS);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

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
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-white/30 backdrop-blur-sm border-b border-slate-100">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Research Resources Hub
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              Discover curated tools, guides, and opportunities to enhance your research journey
            </p>

            {/* Enhanced Search Bar */}
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
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0
                            group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 relative">
                <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6
                              transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
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
                        className="px-2 py-1 text-xs font-medium text-slate-600 bg-slate-100
                                 rounded-md transition-colors duration-300"
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
