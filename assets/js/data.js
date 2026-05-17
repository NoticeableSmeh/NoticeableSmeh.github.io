window.portfolioData = {
  profile: {
    name: "William de Try",
    role: "Game Programmer",
    location: "Stockholm, Sweden",
    availability: "10-20 hours/week, immediate start",
    focus: "Shipped mobile games, rendering systems, gameplay tools",
    email: "william.detry@hotmail.se",
    resume: "William%20de%20Try%20CV.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/william-de-try-726470247"
      },
      {
        label: "GitHub",
        url: "https://github.com/NoticeableSmeh"
      },
      {
        label: "Itch.io",
        url: "https://noticeablesmeh.itch.io/"
      }
    ]
  },
  services: [
    {
      title: "Mobile Game Development",
      body: "Unity and C# gameplay systems, UI implementation, iOS/Android deployment, and mobile performance work."
    },
    {
      title: "Graphics And Rendering Systems",
      body: "OpenGL and C++ rendering work, shader implementation, camera systems, lighting, and low-level graphics pipeline understanding."
    },
    {
      title: "Rapid Prototyping",
      body: "Fast iteration on mechanics, interaction feel, tools, and technical tests that help a team validate ideas quickly."
    },
    {
      title: "Technical Problem Solving",
      body: "Debugging complex gameplay behavior, improving maintainability, and turning vague production problems into concrete systems."
    }
  ],
  skills: [
    {
      title: "Languages",
      body: "C++, C#, Java, GLSL"
    },
    {
      title: "Engines And Frameworks",
      body: "Unity, Unreal Engine 5, OpenGL, SDL3, CMake"
    },
    {
      title: "Development",
      body: "Git, Android/iOS deployment, Maya, technical documentation"
    },
    {
      title: "Core Strengths",
      body: "Graphics programming, mobile optimization, gameplay systems, editor tooling, rapid prototyping"
    }
  ],
  projects: [
    {
      slug: "cplusengine",
      title: "CPlusEngine",
      subtitle: "Custom C++ Game Engine",
      type: "Engine programming",
      featured: true,
      image: "assets/images/cplusengine-breakout.png",
      imageFit: "contain",
      alt: "CPlusEngine running a Breakout game next to C++ source code",
      highlight: "From-scratch engine architecture",
      summary: "A custom-built C++ game engine with clean separation between engine and game code, SDL3 rendering, scene management, text, audio, and a structured game loop.",
      tags: ["C++", "SDL3", "CMake", "Architecture"],
      stats: ["Engine/game split", "Scene management", "Audio and text"],
      links: [
        {
          label: "GitHub Code",
          url: "https://github.com/NoticeableSmeh/CPlusEngine"
        }
      ],
      sections: [
        {
          heading: "What I Built",
          body: "CPlusEngine is a personal engine project focused on the practical shape of a game codebase: initialization, resource ownership, scenes, renderable objects, audio, and a predictable update loop.",
          bullets: [
            "Separated engine-level systems from game-specific Breakout code.",
            "Built around SDL3, CMake, sprite rendering, text rendering, and audio playback.",
            "Kept the architecture small enough to understand while still being expandable."
          ]
        },
        {
          heading: "Why It Matters",
          body: "The project shows that I can reason about the boundaries between reusable engine code and concrete gameplay code, which is useful on both engine teams and gameplay teams that need maintainable systems."
        }
      ]
    },
    {
      slug: "cpu-rasterizer",
      title: "CPU Graphics Pipeline",
      subtitle: "Software Rasterizer In C++",
      type: "Graphics programming",
      featured: true,
      image: "assets/images/cpu-rasterizer-cow-framebuffer.png",
      imageFit: "contain",
      alt: "A colorful cow model rendered by a CPU rasterizer",
      highlight: "From-scratch rendering system",
      summary: "A CPU-based rasterizer with triangle rasterization, back-face culling, depth buffering, barycentric interpolation, framebuffer output, and OBJ loading.",
      tags: ["C++", "Rasterization", "Depth Buffer", "OBJ Loading"],
      stats: ["5-part devlog", "4,000+ words", "CPU pipeline"],
      links: [
        {
          label: "GitHub Code",
          url: "https://github.com/NoticeableSmeh/Rasterizer_Project"
        },
        {
          label: "Technical Devlog",
          url: "https://dev.to/noticeablesmeh/rasterizer-project-part-1-getting-started-jph"
        }
      ],
      sections: [
        {
          heading: "Technical Scope",
          body: "The rasterizer breaks the graphics pipeline down into understandable parts and implements them directly on the CPU.",
          bullets: [
            "Triangle setup, edge tests, and pixel coverage.",
            "Depth buffering for correct visibility.",
            "Back-face culling and OBJ mesh loading.",
            "Diagnostic renders for triangles, wireframes, and framebuffer output."
          ]
        },
        {
          heading: "Communication",
          body: "I documented the work in a long-form technical series so the project is not just code, but also a clear explanation of decisions, mistakes, and iteration."
        }
      ],
      gallery: [
        {
          image: "assets/images/cpu-rasterizer-triangle.png",
          imageFit: "contain",
          alt: "Triangle rasterization debug image",
          caption: "Triangle rasterization test output."
        },
        {
          image: "assets/images/cpu-rasterizer-wireframe.png",
          imageFit: "contain",
          alt: "Wireframe rasterizer debug image",
          caption: "Wireframe and mesh debugging output."
        },
        {
          image: "assets/images/cpu-rasterizer-project-logo.png",
          alt: "Rasterizer project title image",
          caption: "Project title artwork used for the article series."
        }
      ]
    },
    {
      slug: "modern-opengl",
      title: "Modern OpenGL Systems",
      subtitle: "Real-Time Rendering Study",
      type: "Rendering systems",
      featured: true,
      image: "assets/images/modern-opengl-learning.jpg",
      alt: "Learning OpenGL scene with dark wooden geometry",
      highlight: "Real-time rendering implementation",
      summary: "A technical series covering shaders, lighting, materials, camera systems, model loading, and the practical structure of an OpenGL renderer.",
      tags: ["OpenGL", "GLSL", "Lighting", "Camera Systems"],
      stats: ["6-part devlog", "7,000+ words", "Renderer study"],
      links: [
        {
          label: "View Series",
          url: "https://dev.to/noticeablesmeh/opengl-catching-up-week-1-1k8o"
        }
      ],
      sections: [
        {
          heading: "Focus",
          body: "This project was about catching up on modern OpenGL while turning each step into a working piece of renderer functionality.",
          bullets: [
            "Shader program setup and GLSL iteration.",
            "Camera movement and scene navigation.",
            "Lighting, materials, and model loading.",
            "Written notes that explain the implementation path."
          ]
        },
        {
          heading: "Portfolio Value",
          body: "It demonstrates both technical curiosity and the ability to make low-level graphics topics readable to other developers."
        }
      ]
    },
    {
      slug: "prizm",
      title: "Prizm Puzzle Adventure",
      subtitle: "Shipped Mobile Puzzle Game",
      type: "Shipped game",
      featured: true,
      image: "assets/images/prizm-app-store.png",
      alt: "Prizm Puzzle Adventure App Store listing and screenshots",
      highlight: "Lead Programmer, Unity, iOS/Android",
      summary: "A complete mobile puzzle game shipped from prototype to store release, with deterministic light mechanics, color mixing, editor tooling, and mobile deployment.",
      tags: ["Unity", "C#", "iOS", "Android", "Tools"],
      stats: ["Shipped product", "Lead programmer", "Mobile optimization"],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/se/app/prizm-puzzle-adventure/id6749238738?l=en-GB"
        }
      ],
      sections: [
        {
          heading: "Production Ownership",
          body: "As lead programmer, I owned the technical implementation from prototype through store release.",
          bullets: [
            "Implemented deterministic beam reflection and splitting.",
            "Built RGB color mixing mechanics for puzzle progression.",
            "Created Unity editor tooling for faster level iteration.",
            "Handled mobile performance considerations and store deployment."
          ]
        },
        {
          heading: "What It Shows",
          body: "Prizm proves that I can move beyond isolated prototypes and deliver complete, shippable game systems with tooling, polish, and deployment work included."
        },
        {
          heading: "Production Lessons",
          body: "The project reinforced that tools investment pays off quickly, single sources of truth prevent gameplay and visual mismatches, and clear debugging output saves time on complex interactions."
        }
      ]
    },
    {
      slug: "ue5-environment",
      title: "UE5 Environment And Lighting",
      subtitle: "Atmospheric Unreal Scene",
      type: "Realtime 3D scene",
      featured: true,
      image: "assets/images/ue5-medieval-night-scene.png",
      imageFit: "contain",
      alt: "Medieval night scene rendered in Unreal Engine 5",
      highlight: "Atmospheric environment work",
      summary: "A medieval night environment with custom Maya assets, dynamic lighting, post-processing, composition, and Niagara effects.",
      tags: ["Unreal Engine 5", "Lighting", "Maya", "Niagara"],
      stats: ["Custom assets", "Lighting pass", "Video showcase"],
      links: [
        {
          label: "Watch Video",
          url: "https://www.youtube.com/watch?v=aoOSIZdB6iE"
        }
      ],
      sections: [
        {
          heading: "Scene Goals",
          body: "The scene focuses on composition, night-time lighting, readable focal points, and using engine tools to create atmosphere.",
          bullets: [
            "Built supporting assets in Maya.",
            "Used Unreal lighting and post-processing to shape the mood.",
            "Added environment detail and effects with Niagara."
          ]
        },
        {
          heading: "Why It Belongs Here",
          body: "Even when my primary focus is programming, understanding how art, lighting, and technical systems meet inside an engine helps me collaborate better with artists and designers."
        }
      ]
    },
    {
      slug: "game-projects",
      title: "Other Game Projects",
      subtitle: "Game Jams, Prototypes, And Finished Small Games",
      type: "Gameplay prototyping",
      featured: true,
      image: "assets/images/itch-games-gallery.png",
      imageFit: "contain",
      alt: "Itch.io gallery of William de Try game projects",
      highlight: "Small games and fast iteration",
      summary: "A collection of game jam entries, prototypes, and smaller finished games that show range, experimentation, and fast end-to-end delivery.",
      tags: ["Game Jams", "Unity", "Prototypes", "Itch.io"],
      stats: ["Multiple releases", "Fast iteration", "Playable builds"],
      links: [
        {
          label: "View On Itch.io",
          url: "https://noticeablesmeh.itch.io/"
        }
      ],
      sections: [
        {
          heading: "What This Collection Shows",
          body: "These projects are smaller, but they show comfort with constraints, quick decisions, and finishing playable work under time pressure.",
          bullets: [
            "Game jam scope control.",
            "Playable prototypes and small releases.",
            "Practice with different mechanics, themes, and presentation styles."
          ]
        },
        {
          heading: "Example Project",
          body: ""
        }
      ],
      gallery: [
        {
          image: "assets/images/years-of-games.png",
          alt: "Years of Games project screenshot",
          caption: "Years of Games, one of the smaller finished projects in the Itch.io collection."
        }
      ]
    }
  ]
};
