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
          label: "Watch Playthrough",
          url: "https://www.youtube.com/watch?v=kXBlQ6Hhff8"
        },
        {
          label: "Play On Itch.io",
          url: "https://noticeablesmeh.itch.io/"
        }
      ],
      story: [
        {
          heading: "What I Worked On",
          body: "Gameplay programmer on Side By Tide, a couch co-op pirate adventure built in Unreal Engine 5 during the SPM course at Stockholm University. I wrote the spine of the C++ and Blueprint codebase that the rest of the team's actors plug into - the puzzle layer, the crafting framework, the raft, the co-op camera, and most of the interaction surface area - kept SOLID and decoupled so designers could compose new puzzles without me touching code. Combat and the boss were owned by other programmers on the team."
        },
        {
          heading: "Whiteboxing The Islands",
          body: "Before any code went in I spent the first weeks whiteboxing - I laid out the first island and shaped the second and third alongside the level design team. The third one brought a key co-op idea: one player swims across, the other follows by a different path, so the swim mechanic had to be planned into the layout from the start."
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
          image: "assets/images/side-by-tide-process/finished-island.png",
          alt: "Polished overview of the first island region with painted terrain, foliage, and the level streaming bounds visible",
          caption: "Same shape months later - whitebox layout dressed up with terrain, foliage, and proper level streaming."
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
          body: "The card on the team's Trello labelled 'how mechanics talk to each other' was the Activatable / Interactable contract. A small set of interfaces in C++ - one for sources (lever, button, pressure plate), one for targets (door, elevator, raft, rolling rock, even the cutscene camera) - so designers can wire any source to any target in the editor without me touching code. I think about them basically the same way I think about Java interfaces, just inside Unreal. The chain holds end-to-end: a coconut on a tree is interactable (so it can be shot down), the dropped coconut item is interactable (so it can be picked up), the BuildSpot it goes into is interactable (so the player can drop it in). That decoupling is what let the puzzle layer scale once levels started filling up."
        },
        {
          image: "assets/images/side-by-tide-process/activatable-wiring.png",
          alt: "Unreal Engine 5 editor showing an activator object with its Activatable target slot highlighted in the Details panel and a red arrow pointing to the gate it opens",
          caption: "Designer view in the editor - drop any Activatable into the target slot and it just works. Same interface, any source, any target."
        },
        {
          heading: "The Crafting Framework",
          body: "BuildSpot started life as hardcoded check-this-then-this logic. I rewrote it into something data-driven: ordered or free-order requirements, item consumption, and a spawn hook that drops the built object straight into the puzzle graph. Adding a new item type or a new recipe is now a one-click change in the editor - the bullet list of requirements just grows. That was the thing I cared most about: a designer being able to extend it without ever needing me."
        },
        {
          image: "assets/images/side-by-tide-process/crafting-ui.png",
          alt: "Player standing on a build spot with a 1x stick UI prompt",
          caption: "Crafting in action - the BuildSpot asking for one stick, then one coconut."
        },
        {
          heading: "Shootable Targets And Pattern Puzzles",
          body: "Shootable buttons drive the squirrel side of the puzzles - she shoots acorns, the button fires its Activatable target. The pattern variant adds order through PatternPuzzleController: hit the targets in the right sequence and the door opens, hit the wrong one and it resets. Same contract underneath, just composed differently."
        },
        {
          image: "assets/images/side-by-tide-process/finished-sign.png",
          alt: "Polished wooden tutorial sign with LT and RT button prompts and an illustration of the squirrel shooting a bullseye target",
          caption: "Polished onboarding sign - LT / RT to shoot the bullseye targets. Same teaching moment, with the art pass landed."
        },
        {
          heading: "Onboarding And Level Integration",
          body: "Outside the systems I shaped the first island into a coherent thirty-minute prologue - onboarding signs, fall-damage volumes, raft handle snapping, and the spot where the elevator used to push players into the floor. Most of the level integration ran through me too: wiring teammates' actors together so a button actually opens its door."
        },
        {
          image: "assets/images/side-by-tide-process/tutorial-signs.png",
          alt: "Tutorial scene with a WASD / L-STICK TO MOVE sign next to player character placeholder cylinders",
          caption: "First sign on the first island - the simplest possible movement onboarding."
        },
        {
          image: "assets/images/side-by-tide-process/bridge-coop.png",
          alt: "Squirrel and platypus standing together on a wooden plank bridge over a turquoise pond with a puzzle hint board on the cliffside",
          caption: "Co-op moment in-game - both players on the bridge, puzzle hint posted on the cliff."
        },
        {
          heading: "Visual Identity",
          body: "Art-wise the whitebox squirrel and platypus carried the project for months. When the polished models dropped in, the whole game suddenly looked like a real product."
        },
        {
          image: "assets/images/side-by-tide-process/cute-duo.png",
          alt: "Polished platypus and squirrel character models posing together in front of stylised cliffs",
          caption: "The polished duo, front and centre - chubby platypus, expressive squirrel, the whole vibe shift in one shot."
        },
        {
          image: "assets/images/side-by-tide-process/finished-characters.png",
          alt: "Squirrel and platypus character models standing on the raft deck",
          caption: "On the raft deck - squirrel pilot, platypus first mate."
        },
        {
          heading: "Co-op Physics",
          body: "Raft towing works through a parent / child attach - the player who grabs the handle becomes a child of the raft, so they ride while the other one steers. A hit-box around the wheel means only the player standing inside can drive, not a passing teammate. Around the raft sit the rest of the co-op physics: MovingActivatable platforms driving doors, water blocks, and disappearing surfaces; an Elevator that finally stops pushing players into the floor after the fix sweep; a PressurePlateRollingRock the platypus tail-slams to move (only she can shift it); and teleport volumes that catch players who fall off the map and handle the level-to-level transition when you walk into the hole at the end of an area. The raft and player state are also exposed cleanly on the Blueprints so animators and VFX can drive their work without touching code."
        },
        {
          image: "assets/images/side-by-tide-process/finished-raft.png",
          alt: "Polished raft model in a cave dock with the wireframe interaction box around the wheel visible",
          caption: "The raft in the wild - wireframe interaction box around the wheel so only the player standing inside can drive."
        },
        {
          heading: "Camera, Respawn, And Co-op State",
          body: "The auto-follow camera tracks the character's facing angle with a roughly twelve-degree dead zone so small wobbles don't push the view, an interp curve when it has to swing back after the players spread apart, and a hard stop when the player looks straight into the camera so it doesn't twitch. The kind of system you only notice when it's done badly - so I worked the math until you don't notice it at all. Around it sit the spawn-area volumes (walk through one, your respawn point updates and gets marked with an arrow), the death logic (one player dies, they respawn at the spot they died after a few seconds; both die, the whole co-op resets to the checkpoint), and the CoopGameInstance that carries shared state - coins, customization, level progress - between levels."
        },
        {
          image: "assets/images/side-by-tide-process/respawn-blueprint.png",
          alt: "Unreal Engine Blueprint graph for the death check - branches on both players dead vs single player dead, routing to checkpoint respawn or death-location respawn",
          caption: "BaseGameMode's death check - both players dead, respawn at the checkpoint; otherwise respawn at the spot they fell."
        },
        {
          heading: "Customization And Hats",
          body: "A hat system that swaps meshes via a socket on each character's head, with a customization menu that handles two controllers fighting over focus. Pragmatic implementation - the sockets, mesh swap, and focus routing are all done, so dropping a new hat into the rotation is a copy-paste drop-in for whoever picks it up next."
        },
        {
          image: "assets/images/side-by-tide-process/customization.png",
          alt: "Customization screen side-by-side showing both the squirrel and the platypus with hat selection grids and a Save Outfit button",
          caption: "Customization screen - hat grid on the right, character preview on the left, Save Outfit at the bottom. Two-controller focus routing baked in."
        },
        {
          heading: "How The Team Worked",
          body: "Nine of us: four programmers, two modellers, an animator, a VFX person, and an audio designer. I held the shared C++ layer the rest of the team's actors plugged into, and exposed the right state on Blueprints so animators and VFX could drive their work without ever touching code. I also ran the team's Git workflow - dev branch management, main merges, and pulling teammates' progress out of conflict hell by hand when it went sideways."
        },
        {
          heading: "Around The Code",
          body: "Beyond the code I wrote four of the team's design documents - including the visual-language doc that pushed us to colour-code puzzle elements with red marks for anything interactable. I also swept up the bulk of the bugs the rest of the team didn't have time for in the run-up to playtests - the work nobody tracks on a Trello board but the build needs anyway."
        }
      ],
      gallery: [
        {
          image: "assets/images/side-by-tide-process/pirate-ship.png",
          alt: "Polished pirate ship 3D model with grey sail on a blue background",
          caption: "The pirate ship asset, finished pass - one of the hero models the project sails on."
        },
        {
          image: "assets/images/side-by-tide-process/sticker-logo.png",
          alt: "Cartoon sticker of the platypus and squirrel heads side by side as a brand mark",
          caption: "Team sticker - the platypus and squirrel as a brand mark in their own right."
        },
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
      story: [
        {
          heading: "Why I Built This",
          body: "I wanted to know what's behind the curtain when you call into a graphics API. Every glDraw or DrawIndexedInstanced eventually turns into pixels on a screen - and the rasterizer is the part that does that turning. So I wrote one from scratch on the CPU, with no GPU involved, just so I could see every step happen in code I wrote myself."
        },
        {
          image: "assets/images/rasterizer/01-first-framebuffer.png",
          alt: "Tiny 64-by-64 black framebuffer image with three white pixels visible",
          caption: "Part 1: a 64x64 framebuffer, three white pixels, and an stb_image write to disk. Genuinely thrilling."
        },
        {
          heading: "A Canvas And Three Pixels",
          body: "Part 1 set up the bones - a Framebuffer struct that owns the width, height, and a flat byte buffer of RGBA pixels, with a set(x, y, color) that maps 2D coordinates into the 1D byte index via (y * w + x) * 4. Plus a save_png through stb_image so I could actually see what I was drawing."
        },
        {
          image: "assets/images/rasterizer/02-line-lerp-code.webp",
          alt: "Initial line drawing function using a 0.02 LERP step",
          caption: "First attempt at lines - LERP at 2% increments. Looks fine until you draw a steep line and the gaps show up."
        },
        {
          image: "assets/images/rasterizer/03-first-triangle.png",
          alt: "First completed triangle output in the rasterizer with red, green, and blue edges",
          caption: "First proper triangle - red, green, blue edges, once the steep-slope and reverse-direction bugs were fixed."
        },
        {
          heading: "Lines, Slopes, And Bresenham",
          body: "Part 2 was lines. Started with a naive LERP, then hit the obvious bugs: lines drawn right-to-left wouldn't render, and steep vertical lines turned into dotted lines because we were stepping in x. Fix the first with a swap, fix the second with a 'steep' branch that transposes x and y. Then I optimised the inner loop into integer-only Bresenham - same math, no divides, no floats, just an error accumulator that flips a sign bit. The kind of small ritual that taught me more about CPU branch prediction than three years of school had."
        },
        {
          image: "assets/images/rasterizer/04-project-code.webp",
          alt: "Project function converting a vec3 into 2D screen coordinates",
          caption: "Vertex projection - normalise the clip-space x and y into [0,1], multiply by screen size, done."
        },
        {
          heading: "The Geometry Layer",
          body: "Part 3 was the math: a vec2 and vec3 with the operators they need (add, sub, scalar mul/div), dot product, length, normalize, and the cross product for surface normals. I built them by hand instead of pulling in glm, because the point was to know exactly what each one was doing - cross product especially, since it's the formula I always have to Google."
        },
        {
          image: "assets/images/rasterizer/05-triceratops-draw-loop.webp",
          alt: "Triceratops model loaded and drawn face by face with red lines",
          caption: "The draw loop - pull each face out of the model, project its three vertices, draw three lines between them."
        },
        {
          image: "assets/images/rasterizer/06-triceratops-wireframe.png",
          alt: "Red wireframe of a high-poly triceratops model rendered on a black background",
          caption: "Triceratops wireframe - 150k triangles, every edge drawn one line at a time on the CPU."
        },
        {
          heading: "Triceratops Wireframe",
          body: "Part 4 was the first time the rasterizer rendered something recognisable. A Model class that reads .obj files line by line - 'v' lines push vertex positions, 'f' lines push face indices - and a draw loop that pulls each face out of the model, projects all three vertices into screen space, and draws three lines between them. Slow as you'd expect, but it works, and the triceratops looks like a triceratops."
        },
        {
          image: "assets/images/rasterizer/07-triangle-fill-code.webp",
          alt: "Triangle fill function using barycentric coordinates inside a bounding-box loop",
          caption: "Triangle fill - for every pixel in the bounding box, compute barycentric weights w0/w1/w2 and fill if all three are non-negative."
        },
        {
          image: "assets/images/rasterizer/08-backface-cull-code.png",
          alt: "Backface culling function using a signed area test",
          caption: "Backface culling through a signed area test - if the triangle winds the wrong way, skip it."
        },
        {
          heading: "Filling Triangles And Killing Back-Faces",
          body: "Part 5 was the jump from wireframe to filled. Barycentric coordinates over the triangle's bounding box test each pixel for in-triangle membership - all three weights non-negative means inside. Then backface culling: compute the signed area of the projected triangle, and if it's the wrong sign the triangle is facing away, drop it. Half the geometry stops drawing immediately and you don't notice, which is the whole point."
        },
        {
          image: "assets/images/rasterizer/09-draw-model-filled-code.webp",
          alt: "draw_model_filled function looping over faces, culling backfaces, and filling triangles with a per-face colour",
          caption: "draw_model_filled - project each face, cull the back-facing ones, paint the rest with a per-face colour derived from the face index."
        },
        {
          image: "assets/images/rasterizer/10-cow-final.webp",
          alt: "Final cow model rendered as filled triangles in a rainbow of colours",
          caption: "Final build - a triangulated cow model with each face coloured by index. Every pixel here was set, in order, by code I wrote."
        },
        {
          heading: "What I Took Away",
          body: "Writing this is what made the graphics APIs make sense. Once you've felt the inner loop of barycentric pixel coverage on the CPU, the OpenGL or DirectX equivalents stop being magic - you know what the silicon is doing, you just have someone faster doing it for you. The devlog is the other half of the project: it's where the decisions, the mistakes, and the iteration get pinned down so the code isn't just a black box six months later."
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
      story: [
        {
          heading: "Why I Did This",
          body: "I wanted to get comfortable enough with OpenGL to step into DirectX 12 with a real foundation. So I worked through learnopengl.com, then wrote each chapter back in my own voice - informal devlog posts that doubled as my own study notes. Six parts in total, and each one had to be explained afterwards in plain English, which is the part that locked the material in."
        },
        {
          image: "assets/images/opengl/01-hello-window.webp",
          alt: "Textured smiley-face cube rendered in a Visual Studio LearnOpenGL window",
          caption: "Part 1: Hello Window to textures. The first thing on screen."
        },
        {
          heading: "Hello Window And Textures",
          body: "Getting OpenGL talking to a GPU through GLAD and GLFW, defining a vertex array with positions, colours and UV coordinates, writing the first vertex and fragment shaders in GLSL, and uploading a texture so the shape isn't just a flat colour. The mental jump was learning that OpenGL is a state machine - you bind, you set, you draw."
        },
        {
          image: "assets/images/opengl/02-spinning-cubes.webp",
          alt: "Multiple textured cubes floating in 3D space rendered with OpenGL",
          caption: "Part 2: cubes moving through model, view, and projection matrices."
        },
        {
          heading: "Camera And Matrices",
          body: "Once geometry exists, the next step is moving the camera around it. I wrote a Camera class with the standard FPS controls - yaw and pitch via mouse, WASD for translation - and learned how the model / view / projection matrix split actually works in practice."
        },
        {
          image: "assets/images/opengl/03-ambient.webp",
          alt: "An orange cube under ambient lighting with a white light cube floating in the scene",
          caption: "Part 3: ambient lighting - fake global illumination so nothing is pitch black."
        },
        {
          image: "assets/images/opengl/04-specular.webp",
          alt: "Orange cube with a bright specular highlight from a small white light cube",
          caption: "Specular highlight reading from the dot product of view and reflect directions."
        },
        {
          heading: "Lighting And Normals",
          body: "Ambient, diffuse, specular - the three-part Phong model with normals supplied per vertex. The mental model that helped: ambient is cheap fake bounce, diffuse is the angle of incidence, specular is the angle reaching the camera."
        },
        {
          image: "assets/images/opengl/05-disco.webp",
          alt: "Cube lit by a coloured light source cycling through hues",
          caption: "Part 4: materials, with the light colour cycling through sine waves for fun."
        },
        {
          image: "assets/images/opengl/06-specular-map.png",
          alt: "Specular map texture - a black square with a worn metallic border",
          caption: "Specular map - dark stays matte, bright stays shiny."
        },
        {
          heading: "Materials And Specular Maps",
          body: "Materials as proper structs in the shader, then lighting maps so different parts of the same object can react differently to light. The wooden middle of a crate stays matte, the steel border catches the highlight - one texture sample swap, no extra geometry."
        },
        {
          image: "assets/images/opengl/07-lighting-maps.webp",
          alt: "Wood-textured crate lit by a single white light cube",
          caption: "Crate with diffuse and specular maps - the steel border picks up the highlight."
        },
        {
          image: "assets/images/opengl/08-point-light.webp",
          alt: "Multiple wood crates floating in space under a single point light with attenuation",
          caption: "Part 5: point lights with proper attenuation through the inverse-square fall-off."
        },
        {
          image: "assets/images/opengl/09-spotlight.webp",
          alt: "Wood crate corner illuminated by a tight cone of light from a spotlight",
          caption: "Spotlight - a cone with smooth inner / outer cutoff so the edge doesn't pop."
        },
        {
          heading: "Light Casters",
          body: "Three light types: directional (parallel rays, no position), point (radial with attenuation), and spotlight (a cone with inner and outer cutoff so the edge falls off smoothly). The spotlight one took me the longest - clamping the cosine of the angle to get a smooth border without a hard ring."
        },
        {
          image: "assets/images/opengl/10-model-loading.webp",
          alt: "Detailed survival backpack 3D model rendered with Assimp loading",
          caption: "Part 6: model loading with Assimp - the survival backpack, the canonical learnopengl asset."
        },
        {
          heading: "Model Loading",
          body: "Cubes were getting old. Part 6 was about plugging in Assimp to read .fbx and .obj files, building a Mesh class around vertices, indices and textures, and wrapping that in a Model class that holds the whole hierarchy. The first time the textured backpack appeared in the window was the real payoff."
        },
        {
          heading: "Why I Wrote It Down",
          body: "Going from 'I can follow a chapter' to 'I can explain this to a stranger' is a different skill. Writing in public was the part that locked the material in - and the DirectX 12 devlog is the direct continuation of that habit."
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
      story: [
        {
          heading: "Why I Made This",
          body: "I'm a programmer first, but knowing how art, lighting, and engine tools fit together makes me much easier to work with when artists and tech artists are around the table. So I built a whole atmospheric medieval scene from the ground up - custom Maya assets, Unreal lighting, post-processing, fog, particle effects - just to know what each layer of that pipeline actually does."
        },
        {
          image: "assets/images/ue5-env/moodboard.jpg",
          alt: "Moodboard collage of five stylised medieval village references with a five-stop colour palette underneath",
          caption: "Moodboard - five stylised village references and the colour palette I pulled from them."
        },
        {
          heading: "Mood And References",
          body: "I started by collecting stylised medieval references - the painterly Pixar-adjacent look, not photoreal - and pulled a five-stop colour palette out of them so the lighting and materials had a target to hit before I touched the engine."
        },
        {
          image: "assets/images/ue5-env/modular-kit.png",
          alt: "Modular asset kit laid out in viewport - wall sections with cutouts, a roof slab, and doorway and archway frames",
          caption: "Modular kit pieces in viewport - wall sections with cutouts, a roof slab, and doorway frames built to snap together."
        },
        {
          image: "assets/images/ue5-env/door-texture.png",
          alt: "Close-up of a weathered wooden door with an iron ring handle",
          caption: "Texture pass on one of the doors - weathered planks and iron ring handle."
        },
        {
          heading: "Building The Kit In Maya",
          body: "Modelled a small modular kit in Maya - wall sections, a roof slab, doorways, archways, the basic structural pieces - the kind of library that lets you build a whole house out of a handful of reused parts. Then a texturing pass to give each piece some age so the assets read as inhabited rather than freshly milled."
        },
        {
          image: "assets/images/ue5-env/day-wide.png",
          alt: "Daytime composition in Unreal Engine 5 with two houses across a stream, trees, and red wildflowers",
          caption: "Daytime composition - two houses across a stream, foliage, and red wildflowers."
        },
        {
          image: "assets/images/ue5-env/day-close.png",
          alt: "Closer daytime shot of a house with a red roof under sun and tree shadow",
          caption: "Closer day shot - sun through canopy, warm red roof, ambient shadow doing the work."
        },
        {
          heading: "Daytime Pass",
          body: "A daytime version of the scene - establishing the kit reads right under directional sun and ambient sky, and the composition holds together with foliage and water in the frame. From here the project pushed somewhere more atmospheric."
        },
        {
          image: "assets/images/ue5-env/wip-window.png",
          alt: "WIP night build with a red circle drawn around a bright window and the wall around it",
          caption: "Iteration shot - the bright window and the wall around it circled for another pass."
        },
        {
          image: "assets/images/ue5-env/wip-treeline.png",
          alt: "WIP night build with a red circle drawn around the distant treeline and sky band",
          caption: "Another iteration shot - the distant treeline and sky band circled for revision."
        },
        {
          heading: "Pushing It To Night",
          body: "The night pass is where the project really came together. Exponential height fog, point lights inside the houses for warm interior glow, lantern lights as hot points in the foreground, post-process volume holding the colour grade together. Most of the work was iteration - finding the bits that weren't reading, marking them up, fixing them, finding the next bit."
        },
        {
          image: "assets/images/ue5-env/final-village.png",
          alt: "Final night village shot in Unreal Engine 5 - multiple houses with lit windows, lanterns marking a path, fog softening the depth",
          caption: "Final village from the path - lit windows, lanterns marking the way, fog softening the depth."
        },
        {
          image: "assets/images/ue5-env/final-house.png",
          alt: "Hero house at night with three warm glowing windows against a cool blue night palette",
          caption: "Hero house at night - warm window lights reading against the cool ambient blue."
        },
        {
          image: "assets/images/ue5-env/final-lantern.png",
          alt: "Quiet corner of the village at night with a single lantern on a barrel and atmospheric fog",
          caption: "Quiet corner - one lantern doing all the work, fog catching the falloff."
        },
        {
          heading: "What I Took Away",
          body: "I'm not going to ship as a lighting artist. But after this I can read a UE5 scene the way a lighting team reads it - what the post-process volume is doing, what the exponential fog is doing, where the local lights are placed and why. That makes the conversation across the table a lot shorter when an artist needs a programmer to expose the right hook on a Blueprint."
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
