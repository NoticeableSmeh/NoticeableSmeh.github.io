window.portfolioData = {
  profile: {
    name: "William de Try",
    role: "Game Programmer",
    location: "Stockholm, Sweden",
    availability: "Open to work, immediate start",
    focus: "Unreal Engine 5 gameplay, mobile game shipping, graphics fundamentals",
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
      title: "Unreal Engine 5 Gameplay",
      body: "C++ actors and interfaces wired into Blueprint-facing systems. Currently doing this on Side By Tide, where I work on the interaction layer, the crafting and puzzle frameworks, and a lot of the code that hooks teammates' actors together."
    },
    {
      title: "Shipped Mobile Game",
      body: "Prizm Puzzle Adventure went live on the App Store with me as lead programmer. I've walked the full path from prototype through iOS and Android submission and picked up which trade-offs actually matter on a phone."
    },
    {
      title: "Graphics Programming",
      body: "A working CPU rasterizer in C++, a six-part OpenGL series, and notes I'm taking as I work through DirectX 12. Comfortable reading shader code and digging below the engine when I have to."
    },
    {
      title: "Multi-Programmer Workflows",
      body: "On team projects I usually end up the integration person — running the Git workflow, doing the merge passes, and patching teammates' work back together when conflicts get ugly."
    }
  ],
  skills: [
    {
      title: "Languages",
      body: "C++, C#, Java, GLSL"
    },
    {
      title: "Engines And APIs",
      body: "Unreal Engine 5, Unity, OpenGL, SDL3"
    },
    {
      title: "Tools And Workflow",
      body: "Git, CMake, Maya, Unreal Blueprints, Android and iOS submission"
    },
    {
      title: "Strengths",
      body: "Gameplay systems in C++, graphics fundamentals, mobile shipping, team integration"
    }
  ],
  projects: [
    {
      slug: "side-by-tide",
      title: "Side By Tide",
      subtitle: "Local Co-op Pirate Adventure In Unreal Engine 5",
      type: "Unreal Engine 5 game",
      featured: true,
      image: "assets/images/side-by-tide-cover.png",
      imageFit: "contain",
      alt: "Side By Tide key art - a squirrel and platypus pirate on a small boat at sunset",
      highlight: "Gameplay programmer - systems and integration",
      summary: "A two-player couch co-op adventure built in Unreal Engine 5 during the SPM course at Stockholm University. One player pilots a gliding squirrel, the other a ground-slamming platypus, and they have to cooperate through puzzles, traversal, and a pirate-island treasure hunt. Currently in active development with a playable build out for testing.",
      tags: ["Unreal Engine 5", "C++", "Gameplay Systems", "Local Co-op", "Blueprints", "In Development"],
      stats: ["In development", "Two-player couch co-op", "Playable build out"],
      links: [
        {
          label: "Play On Itch.io",
          url: "https://noticeablesmeh.itch.io/"
        }
      ],
      sections: [
        {
          heading: "My Role",
          body: "As one of the gameplay programmers on the project, my work concentrates on the shared C++ layer that the rest of the team's actors plug into, along with the Blueprint integration that connects everything together. The squirrel's shooting, the enemies, and the boss are handled by other programmers on the team."
        },
        {
          heading: "C++ Systems I Built",
          body: "Everything below sits on a small set of interfaces (Interactable, PlatypusInteractable, Activatable) so designers can wire any source to any target in the editor without me touching code.",
          bullets: [
            "Crafting framework - BuildSpot with ordered or free-order requirements, item consumption, and a spawn hook that wires the built object straight into the puzzle graph.",
            "Interaction layer - Levers, ShootableButtons, PressurePlateRollingRock, and the Activatable contract they all drive.",
            "Pattern puzzles - PatternPuzzleController coordinating shoot and ground-slam input orders across pressure plates and shootable targets.",
            "Co-op physics - Raft towing with handle snapping, MovingActivatable platforms, and an Elevator that carries players cleanly.",
            "Camera Cutscene Activator - multi-shot sequences with blend timing, delayed actor activation, and clean input lockout while the cutscene plays."
          ]
        },
        {
          heading: "Blueprint And Game Mode Work",
          body: "Most of the glue lives in Blueprints so the rest of the team can read and tweak it.",
          bullets: [
            "Co-op Game Instance handling local player creation and shared coin state for couch co-op.",
            "Base Game Mode respawn logic - drowning, partner-aware checkpoints, and respawn at death location vs last save.",
            "Environmental pieces - dust traps, respawning coconut trees, spawn areas, and teleport-back volumes for out-of-bounds rescue."
          ]
        },
        {
          heading: "Beyond Code",
          body: "Outside the C++ work I helped shape the first island into a coherent thirty-minute level, did most of the bugfix sweeps, and was the person handling Git for the team - managing the dev branch, pushing into main, and rescuing teammates' progress by hand when merges went sideways."
        }
      ],
      gallery: [
        {
          image: "assets/images/side-by-tide-hero.png",
          alt: "Squirrel and platypus pirates crossing a log bridge over a jungle pond",
          caption: "First-island puzzle area - squirrel and platypus crossing a log bridge."
        },
        {
          image: "assets/images/side-by-tide-island-overview.png",
          alt: "Top-down view of the first island level with ponds, palm trees, and rock paths",
          caption: "First island layout - the playable thirty-minute prologue."
        },
        {
          image: "assets/images/side-by-tide-temple-warm.png",
          alt: "Sunset-lit interior of a pirate temple with torches and a throne",
          caption: "Temple interior used in the later puzzle area."
        },
        {
          image: "assets/images/side-by-tide-temple-night.png",
          alt: "Night-lit temple courtyard with stone stairs and pillars",
          caption: "Night-time temple courtyard from the second level."
        }
      ]
    },
    {
      slug: "directx12",
      title: "Learning DirectX 12",
      subtitle: "Ongoing Learning Devlog",
      type: "Graphics learning",
      featured: true,
      image: "assets/images/directx12-part1-banner.png",
      imageFit: "contain",
      alt: "Learning DirectX 12 Part 1 banner with a stylised blue cube",
      highlight: "Learning in public",
      summary: "Notes I'm taking as I work through Frank D. Luna's Introduction to 3D Game Programming with DirectX 12. Each post turns one chapter of dense reference material into something I can come back to later and actually re-use.",
      tags: ["DirectX 12", "C++", "Devlog", "Ongoing", "Learning"],
      stats: ["Ongoing series", "2 parts written", "DirectX 12"],
      links: [
        {
          label: "Read Part 1 - Math",
          url: "https://dev.to/noticeablesmeh"
        },
        {
          label: "Read Part 2 - Initialization Theory",
          url: "https://dev.to/noticeablesmeh"
        }
      ],
      sections: [
        {
          heading: "What's Covered So Far",
          body: "I'm new to DirectX 12, so the early parts cover the theory before I get into actual code.",
          bullets: [
            "Part 1 - vectors, magnitude, normalisation, dot and cross product, matrices, and homogeneous coordinates.",
            "Part 2 - the COM model, swap chains, depth buffering, descriptors, DXGI, residency, resources, and CPU/GPU synchronisation.",
            "Future parts move into actual Direct3D 12 initialization code and the render loop."
          ]
        },
        {
          heading: "Why I'm Writing It",
          body: "Writing in public is the part that locks the material in. Going from 'I can follow a chapter' to 'I can explain this to a stranger' is a different skill, and I want to keep practising it on the API a lot of modern engines still sit on top of."
        }
      ]
    },
    {
      slug: "prizm",
      title: "Prizm Puzzle Adventure",
      subtitle: "Mobile Puzzle Game On iOS And Android",
      type: "Shipped mobile game",
      featured: true,
      image: "assets/images/prizm-app-store.png",
      alt: "Prizm Puzzle Adventure App Store listing and screenshots",
      highlight: "Lead programmer on a shipped mobile title",
      summary: "A Unity puzzle game built with a small team and published to the App Store and Google Play. Light-beam reflection and colour-mixing mechanics, custom Unity editor tooling for level design, and the full submission process across both stores.",
      tags: ["Unity", "C#", "iOS", "Android"],
      stats: ["App Store and Google Play", "Lead programmer", "Light-beam puzzles"],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/se/app/prizm-puzzle-adventure/id6749238738?l=en-GB"
        }
      ],
      sections: [
        {
          heading: "What I Built",
          body: "Lead programmer on a small team. My work spanned the gameplay code, the tooling that supported it, and the platform side of shipping.",
          bullets: [
            "Light-beam reflection and colour-mixing puzzle mechanics in C#.",
            "Unity editor tooling so designers could build and iterate on levels without engineering bottlenecks.",
            "Mobile performance pass across iOS and Android devices.",
            "Store submissions on both platforms - Google Play first, then the longer iOS review process."
          ]
        },
        {
          heading: "What This Project Shows",
          body: "End-to-end mobile shipping: not just the gameplay code, but mobile performance, store assets, privacy disclosures, age ratings, and the review processes on both Apple and Google. Plenty of student projects build a working game; fewer go through what it takes to put one in front of real players."
        },
        {
          heading: "What I Took Away",
          body: "Editor tooling pays for itself quickly, even on a small team. A single source of truth between gameplay logic and visual representation prevents an entire class of bug. And the iOS submission process is its own discipline worth knowing before you need it."
        }
      ]
    },
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
      summary: "A small custom C++ engine with a clean split between engine and game code, SDL3 rendering, scene management, audio, and a predictable update loop - small enough to read, big enough to run a Breakout clone on top of.",
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
          body: "A small engine focused on the boundaries that actually matter in a codebase: initialization, resource ownership, scenes, renderable objects, audio, and the update loop.",
          bullets: [
            "Engine systems cleanly separated from Breakout-specific code.",
            "SDL3 plus CMake for sprite rendering, text, and audio.",
            "Kept small enough that the architecture is the documentation."
          ]
        },
        {
          heading: "The Point",
          body: "CPlusEngine is practice for the boundary between reusable engine code and a specific game on top of it - which is where most engine work actually lives."
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
      highlight: "Catching up on modern OpenGL",
      summary: "A six-part series catching up on modern OpenGL - shaders, lighting, materials, camera systems, model loading, and the practical shape of a small renderer.",
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
          heading: "What I Built",
          body: "Each post lines up with a working piece of renderer functionality - tutorial in spirit, but kept honest by having to write the explanation afterwards.",
          bullets: [
            "Shader program setup and GLSL iteration.",
            "Camera movement and scene navigation.",
            "Lighting, materials, and model loading.",
            "Written notes that walk through the implementation path."
          ]
        },
        {
          heading: "Why I Wrote It Down",
          body: "Writing the series was the part that locked the material in. The DirectX 12 devlog is the direct continuation of that habit."
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
      summary: "A CPU rasterizer with triangle setup, back-face culling, depth buffering, barycentric interpolation, framebuffer output, and OBJ loading - paired with a five-part devlog explaining how each piece works.",
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
          heading: "What's In It",
          body: "Each part of the pipeline is implemented directly on the CPU so the trade-offs and shortcuts are visible.",
          bullets: [
            "Triangle setup, edge tests, and pixel coverage.",
            "Depth buffering for correct visibility.",
            "Back-face culling and OBJ mesh loading.",
            "Diagnostic renders for triangles, wireframes, and framebuffer dumps."
          ]
        },
        {
          heading: "The Writing",
          body: "The devlog is the other half of the project. It's where the decisions, the mistakes, and the iteration get pinned down so the code isn't just a black box six months later."
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
      slug: "ue5-environment",
      title: "UE5 Environment And Lighting",
      subtitle: "Atmospheric Unreal Scene",
      type: "Realtime 3D scene",
      featured: false,
      image: "assets/images/ue5-medieval-night-scene.png",
      imageFit: "contain",
      alt: "Medieval night scene rendered in Unreal Engine 5",
      highlight: "Atmospheric environment work",
      summary: "A medieval night environment in Unreal Engine 5 with custom Maya assets, dynamic lighting, post-processing, composition work, and Niagara effects.",
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
          heading: "What I Was Going For",
          body: "Composition, night-time lighting, readable focal points, and atmosphere using the engine's own tools.",
          bullets: [
            "Supporting assets modelled in Maya.",
            "Unreal lighting and post-processing shaped the mood.",
            "Environment detail and effects layered in with Niagara."
          ]
        },
        {
          heading: "Why It's Here",
          body: "I'm a programmer first, but knowing how art, lighting, and engine tools fit together makes me much easier to work with when artists and tech artists are around the table."
        }
      ]
    },
    {
      slug: "game-projects",
      title: "Other Game Projects",
      subtitle: "Game Jams, Prototypes, And Finished Small Games",
      type: "Gameplay prototyping",
      featured: false,
      image: "assets/images/itch-games-gallery.png",
      imageFit: "contain",
      alt: "Itch.io gallery of William de Try game projects",
      highlight: "Small games and fast iteration",
      summary: "A collection of jam entries, prototypes, and smaller finished games. The point is range and the habit of actually finishing things under time pressure.",
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
          heading: "What It Shows",
          body: "Smaller projects, but the habits that come with them - scoping a jam, making decisions under a deadline, and shipping a playable build at the end of the weekend.",
          bullets: [
            "Game jam scope control.",
            "Playable prototypes and small releases.",
            "Practice across different mechanics, themes, and presentation styles."
          ]
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
