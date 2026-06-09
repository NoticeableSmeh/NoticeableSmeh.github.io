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
      title: "Unity And C#",
      body: "C# in Unity is still my mobile path. Prizm Puzzle Adventure shipped to the App Store and Google Play with me writing the reflection and splitter beam mechanics, the level selector, the victory screen, and a lot of the bugfix passes. MonoBehaviour patterns, editor work, and mobile performance are all comfortable ground."
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
      story: [
        {
          heading: "What I Worked On",
          body: "Gameplay programmer on a five-person team building Side By Tide in Unreal Engine 5 during the SPM course at Stockholm University. I worked across most of the C++ and Blueprint codebase with a focus on keeping systems SOLID and decoupled so teammates' actors could plug in without me having to touch their code. The squirrel's shooting, the enemies, and the boss are handled by other programmers on the team."
        },
        {
          heading: "Whiteboxing The Islands",
          body: "Before any code went in I spent the first weeks whiteboxing - laying out the rough geometry of the first island, then helping shape the second and third. The third one brought a key co-op idea: one player swims across, the other follows by a different path, so the swim mechanic had to be planned into the layout from the start."
        },
        {
          image: "assets/images/side-by-tide-process/first-whitebox.png",
          alt: "Rough whitebox geometry of the first island in Unreal Engine 5",
          caption: "First island whitebox - rough geometry to feel the layout before any art landed."
        },
        {
          image: "assets/images/side-by-tide-process/third-island-whitebox.png",
          alt: "Whitebox of the third island with a turquoise water channel for the swim path",
          caption: "Third island - water swim path baked in for the co-op split."
        },
        {
          heading: "Blueprints And The C++ Layer",
          body: "Then the code went in. C++ for the systems that needed to be fast or reusable - interfaces, the crafting framework, the elevator, the raft, the pattern puzzle controller. Blueprints for the glue: BaseGameMode, BasePlayerController, CoopGameInstance, the player character BPs, and anything the rest of the team needed to read or tweak themselves."
        },
        {
          image: "assets/images/side-by-tide-process/ue5-editor.png",
          alt: "Unreal Engine 5 editor showing the project's blueprints in the content browser",
          caption: "Working in the UE5 editor - the project's Blueprints landing in the content browser."
        },
        {
          heading: "Mechanics Talking To Each Other",
          body: "The card on the team's Trello labelled 'how mechanics talk to each other' was the Activatable / Interactable contract. A small set of interfaces in C++ - one for sources (lever, button, pressure plate), one for targets (door, platform, rolling rock) - so designers can wire any source to any target in the editor without me touching code. That decoupling is what let the puzzle layer scale once levels started filling up."
        },
        {
          image: "assets/images/side-by-tide-process/trello-done.png",
          alt: "Trello Done column with cards for Updraft, Pick up and Drop, Skjuta ekollon, How mechanics talk to each other, Co-op, and Rulla stenar",
          caption: "Mechanics ticking off the Done column - that 'how mechanics talk to each other' card was the Activatable interface."
        },
        {
          heading: "The Crafting Framework",
          body: "BuildSpot started life as hardcoded check-this-then-this logic. I rewrote it into something readable: ordered or free-order requirements, item consumption, and a spawn hook that drops the built object straight into the puzzle graph. Now a designer can build a bridge with whatever items they want, not just the two combinations I happened to plan for."
        },
        {
          image: "assets/images/side-by-tide-process/crafting-ui.png",
          alt: "Player standing on a build spot with a 1x stick UI prompt",
          caption: "Crafting system in the wild - sticks and coconuts as inventory items plugged into BuildSpot."
        },
        {
          heading: "Shootable Targets And Pattern Puzzles",
          body: "Shootable buttons drive the squirrel side of the puzzles - she shoots acorns, the button fires its Activatable target. The pattern variant adds order through PatternPuzzleController: hit the targets in the right sequence and the door opens, hit the wrong one and it resets. Same contract underneath, just composed differently."
        },
        {
          image: "assets/images/side-by-tide-process/bullseye.png",
          alt: "Tree with a yellow target and a sign reading Squirrel can shoot things marked with a bullseye",
          caption: "Bullseye markers tell the player what's shootable - the visual language for puzzle elements."
        },
        {
          heading: "Onboarding And Level Integration",
          body: "Outside the systems I helped shape the first island into a coherent thirty-minute prologue - onboarding signs, fall-damage volumes, raft handle snapping, and the spot where the elevator used to push players into the floor. Most of the level integration ran through me too: wiring teammates' actors together so a button actually opens its door."
        },
        {
          image: "assets/images/side-by-tide-process/tutorial-signs.png",
          alt: "Tutorial scene with a WASD / L-STICK TO MOVE sign next to player character placeholder cylinders",
          caption: "Tutorial signs for the first island - keeping onboarding readable for the playtest."
        },
        {
          heading: "Visual Identity",
          body: "Art-wise the whitebox squirrel and platypus carried the project for months. When the polished models dropped in, the whole game suddenly looked like a real product."
        },
        {
          image: "assets/images/side-by-tide-process/whitebox-characters.png",
          alt: "Whitebox placeholder models for the squirrel and platypus player characters",
          caption: "Whiteboxed player characters - placeholders carrying the game through most of dev."
        },
        {
          image: "assets/images/side-by-tide-process/polished-characters.png",
          alt: "Polished stylised squirrel and platypus character models",
          caption: "Polished pass - the project genuinely cute now."
        },
        {
          heading: "Co-op Physics",
          body: "Raft towing with handle snapping so both players ride together. MovingActivatable platforms driving doors, water blocks, and disappearing surfaces from the Activatable contract. An Elevator that finally stops pushing players into the floor after the fix sweep. And water puzzles where the platypus swims across and the squirrel rides a platform over the top."
        },
        {
          image: "assets/images/side-by-tide-process/coop-water.png",
          alt: "Co-op water puzzle with yellow and blue placeholder cylinders on platforms above water",
          caption: "Co-op water puzzle - the platypus swims, the squirrel rides a platform across."
        },
        {
          heading: "How The Team Worked",
          body: "Five of us with overlapping roles - gameplay programmers, level design, art, and audio splitting across the team. My work landed mostly on the shared C++ layer so other people's actors had something stable to plug into. I also ran the Git workflow: managing the dev branch, doing the merges into main, and rescuing teammates' progress by hand when conflicts got ugly."
        },
        {
          heading: "Around The Code",
          body: "Beyond the systems I wrote and maintained four of the team's design documents - including the visual-language doc that pushed us to colour-code puzzle elements with red marks for anything interactable. And I swept up most of the bugs the team didn't have time for during the run-up to playtests."
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
      imagePosition: "top",
      alt: "Prizm Puzzle Adventure App Store listing and screenshots",
      highlight: "Programmer on a shipped Unity / C# mobile title",
      summary: "A Unity puzzle game built with a five-person student team and published to the App Store and Google Play. Light-beam reflection and splitter mechanics, a level selector wired for thirty levels, and the full submission process on both stores.",
      tags: ["Unity", "C#", "iOS", "Android"],
      stats: ["App Store and Google Play", "Unity / C#", "Light-beam puzzles"],
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/se/app/prizm-puzzle-adventure/id6749238738?l=en-GB"
        }
      ],
      story: [
        {
          heading: "What I Worked On",
          body: "I was one of two programmers on Prizm, a five-person student team building in Unity and C#. I gravitated toward the parts that were either painful to figure out or holding teammates up, and ended up writing a chunk of the puzzle and meta-game systems."
        },
        {
          image: "assets/images/prizm/prototype-editor.png",
          alt: "Earliest Prizm prototype open in the Unity editor",
          caption: "Earliest playable prototype in the editor - a single beam from the top, a target at the bottom."
        },
        {
          heading: "The Beam",
          body: "Light-beam reflection was the first real system to come together. Raycasting from a LightSource, drawing the path with a LineRenderer, and resolving hits against goal, wall, and stop-line tags so the puzzle actually scores correctly."
        },
        {
          image: "assets/images/prizm/drawbeam-code.png",
          alt: "DrawBeam C# function using Physics2D.Raycast",
          caption: "DrawBeam - the raycasting routine the whole puzzle runs on."
        },
        {
          image: "assets/images/prizm/dashed-renderer.png",
          alt: "Dashed line renderer drawing reflected beams in the Unity editor",
          caption: "Dashed line renderer landing in the editor."
        },
        {
          heading: "Art And Levels",
          body: "As the gameplay locked in, the visual language landed too - gem sprites for targets and sources, a prism at the bottom of the screen, dashed beams between them. Levels started filling out."
        },
        {
          image: "assets/images/prizm/early-art.png",
          alt: "Early art pass with a single gem dropping a dashed beam onto the prism",
          caption: "First art pass: gem to prism with a dashed beam."
        },
        {
          image: "assets/images/prizm/gem-sprites.png",
          alt: "Four colour-gem sprites arranged on a dark level",
          caption: "Fresh gem sprites dropped into the project."
        },
        {
          image: "assets/images/prizm/early-level.png",
          alt: "Mid-development level with four colour gems and a Launch button",
          caption: "An early level layout with the four colour gems."
        },
        {
          heading: "Splitter Mechanic",
          body: "The one that took a proper rewrite of the earlier reflection logic. When the beam hits a splitter, the original projectile keeps going and a second one spawns reflected off a predefined side-point - and the whole pipeline had to handle that cleanly without breaking the existing tags and bounce counts."
        },
        {
          image: "assets/images/prizm/splitter-mechanic.png",
          alt: "Splitter mechanic in action with the beam splitting and reflecting through multiple gems",
          caption: "Splitter mechanic in action - the beam splits and reflects from a predefined side point."
        },
        {
          heading: "Level Selector And Victory Flow",
          body: "I wired the level selector for up to thirty slots so content could be dropped straight in, and built the victory screen with the animated star system tied to the level result."
        },
        {
          image: "assets/images/prizm/level-selector.png",
          alt: "Level selector grid with thirty numbered level tiles",
          caption: "Our level selector, wired for up to thirty levels."
        },
        {
          image: "assets/images/prizm/victory-screen.png",
          alt: "Victory screen with three earned-star slots and Home, Restart, and Next Level buttons",
          caption: "Our victory screen with the animated star system."
        },
        {
          heading: "Around The Code",
          body: "Outside the systems I set up the team's Git workflow at the start of the project - branches, merges, and unblocking teammates who were nervous about touching it - and ran bugfix passes across the codebase to keep the build stable as it grew."
        },
        {
          heading: "How The Team Worked",
          body: "Five of us: an artist, two programmers, and two people splitting sound and mechanic work. No formal titles - what mattered was who picked up the hard problems. I took the splitter, the level selector, the Git workflow, and a lot of the cross-team bugfixes, and sat down with teammates when their own mechanics weren't quite landing."
        },
        {
          heading: "Shipping It",
          body: "Once the game played, I drove most of the rest - mobile performance pass, store assets, privacy and age-rating paperwork, then Google Play and the longer iOS review. Going through that end-to-end is the part most student projects skip."
        },
        {
          image: "assets/images/prizm/final-build.png",
          alt: "Polished Prizm build with multiple gems and a multi-bounce light beam",
          caption: "A later build - multi-bounce beam navigating the puzzle."
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
