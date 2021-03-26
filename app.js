
// Header Component
let header = document.createElement("div");
header.className = "header";

let logo = document.createElement("a");
logo.className = "logo";
logo.innerHTML = "Yash Sehgal";
logo.href = "index.htm"

header.append(logo);

const options = [
  {
    "title": "Resume",
    "path": "YashSehgal.pdf",
    "tag": "file"
  },
  {
    "title": "Home",
    "path": "index.htm",
    "tag": "link"
  }
];

for (let _option_list in options) {
  if (options[_option_list].tag === "link") {
    let __option = document.createElement("a");
    __option.innerHTML = options[_option_list].title;
    __option.href = options[_option_list].path;
    __option.className = "header_option";
    header.append(__option);
  } else if (options[_option_list].tag === "file") {
    let __option = document.createElement("a");
    __option.innerHTML = options[_option_list].title;
    __option.href = options[_option_list].path;
    __option.className = "header_option";
    header.append(__option);
  }
}

document.getElementById("header").appendChild(header);

/// Homepage Content

let homepage = document.createElement("div");
homepage.className = "container";
homepage.id = "homepage";


let LandingSection = document.createElement("div");
LandingSection.id = "landing-section";

let TaglineSection = document.createElement("div");
TaglineSection.className = "taglineSection";

let LandingPageTitle = document.createElement("h2");
LandingPageTitle.className = "headline";
LandingPageTitle.innerHTML = "Hey There, I hope you are doing well.";

let LandingPageDescription = document.createElement("p");
LandingPageDescription.className = "description";
LandingPageDescription.innerHTML = `I am <a href="index.htm" class="link">Yash Sehgal</a>, I am a Developer, A Designer and A Former Computer Science Student.`;

TaglineSection.append(LandingPageTitle, LandingPageDescription);

LandingSection.append(TaglineSection);

/// appending landing-section in the homepage
homepage.append(LandingSection);


/// About Me Section - Content
let AboutMeSection = document.createElement("div");
AboutMeSection.className = "section";
AboutMeSection.id = "about-me-section";
AboutMeSection.innerHTML = `
<h2 class="headline">About Me</h2>
<ul>
<li>I am a Computer Science Student who's pursuing a Computer Science Degree in Specialization with Artificial Intelligence (AI), Hell Yeah! 🔥 </li>
<li>I love to try building projects ⛏️ which can be converted to products and can help other developers or people, in general. I also like to guide people as per the basis of my knowledge, also whether it's about Coding, Software Development, Designing or Blockchain, Crypto-Currency, Neural Networks or Machine Learning, I will be there in the discussion. </li>
<li>Languages 💻 which I like to work with are as follows: C/C++, Python, JavaScript, HTML, CSS/SCSS. </li>
<li>Tools/Technologies 💻 I use on my Daily Basis: Adobe XD, Figma, Git, GitHub/BitBucket, NodeJS. </li>
<li>Also, When I am lazy/not working, I love to spend time on FL Studio and make music. Also, I have some decent sketching skills. </li>
</ul>
`;

homepage.append(AboutMeSection);

/// My Experience Section - Content
let ExperienceSection = document.createElement("div");
ExperienceSection.className = "section";
ExperienceSection.id = "experience-section";
ExperienceSection.innerHTML = `
<h2 class="headline">My Experience</h2>
<ul>
<li>Founding Creator and Lead Developer <a href="https://bit.ly/DesignSystemsOSSGitHub" class="link" target="_blank">@The DesignSystems</a>. Here we are trying to build a Community of Student/Professional Developers, Designers and those who want to contribute to Open Source Projects. We all are learning new skills & technologies, meeting new like-minded people. </li>
<li>Executive Graphic Designer <a href="https://www.instagram.com/codechef_medicaps_chapter/" class="link" target="_blank">@CodeChef Medicaps Chapter</a>, Worked on various events and sessions such as Code Medicaps (A Monthly Competitive Programming Contest) </li>
<li>Core Member - Frontend Web Developer <a href="http://medicaps.acm.org/muacm.org/" class="link" target="_blank">@ACM Medicaps Chapter</a>, Here also I have worked on various events such as Speaker Sessions, Workshops and much more. </li>
<li>Participated in Open Source Events such as HacktoberFest, DevScript Winter of Code (DSWOC), GirlScript Summer Of Code (GSSOC). </li>
</ul>
`;

homepage.append(ExperienceSection);

let EducationSection = document.createElement("div");
EducationSection.className = "section";
EducationSection.id = "education-section";
EducationSection.innerHTML = `
<h2 class="headline">Education</h2>
<ul>
<li>Pursuing a Degree in Computer Science and Engineering in Specialization with Artificial Intelligence (AI) from <a href="http://www.medicaps.ac.in/" class="link">Medicaps University</a>.</li>
<li>Completed my High-Schooling with Mathematics, Science & Computer Science from <a href="https://www.ghpsindore.org/" class="link">Guru Harkrishan Public School</a>.</li>
</ul>
`;

homepage.append(EducationSection);

/// Skills Section - Content
let SkillsSection = document.createElement("div");
SkillsSection.className = "section";
SkillsSection.id = "skills-section";
SkillsSection.innerHTML = `
<h2 class="headline">Skills I have</h2>
<div class="skills_container">
  <div class="skills-layer">
    <div id="skill">
      <i class="fab fa-python"></i>
      <p class="skill_name">Python</p>
    </div>
    <div id="skill">
      <i class="fab fa-css3-alt"></i>
      <p class="skill_name">CSS</p>
    </div>
    <div id="skill">
      <i class="fab fa-js-square"></i>
      <p class="skill_name">JavaScript</p>
    </div>
    <div id="skill">
      <i class="fab fa-sass"></i>
      <p class="skill_name">SCSS</p>
    </div>
    <div id="skill">
      <i class="fab fa-html5"></i>
      <p class="skill_name">HTML</p>
    </div>
    <div id="skill">
      <i class="fab fa-git-alt"></i>
      <p class="skill_name">Git</p>
    </div>
  </div>
  <div class="skills-layer">
    <div id="skill">
      <i class="fab fa-github-square"></i>
      <p class="skill_name">GitHub</p>
    </div>
    <div id="skill">
      <i class="fab fa-npm"></i>
      <p class="skill_name">NPM</p>
    </div>
    <div id="skill">
      <i class="fab fa-figma"></i>
      <p class="skill_name">Figma</p>
    </div>
    <div id="skill">
      <i class="fab fa-invision"></i>
      <p class="skill_name">InVision</p>
    </div>
    <div id="skill">
      <i class="fas fa-project-diagram"></i>
      <p class="skill_name">Development</p>
    </div>
    <div id="skill">
      <i class="fas fa-database"></i>
      <p class="skill_name">SQL</p>
    </div>
  </div>
</div>
`;

homepage.append(SkillsSection);

let ProjectSection = document.createElement("div");
ProjectSection.className = "section";
ProjectSection.id = "project-section";
ProjectSection.innerHTML = `
<h2 class="headline">Projects</h2>
<ul>
<li><a href="https://www.github.com/DesignSystemsOSS/eccentrictouch/" class="link" target="_blank">Eccentric Touch</a> is a CSS Library which has various UI Components and Stylesheet Methods which can be used by other developers. This can be used to reduce the amount of work load that we usually spend in writing CSS. This Project is under the initiative of <a href="https://www.github.com/DesignSystemsOSS/" class="link" target="_blank">@The DesignSystems</a>.</li>
<li><a href="" class="link" target="_blank">Events.find</a> is a short Javascript Project which has a feature to look for Upcoming Technology related events and bootcamps. I have used Technologies like Javascript, CSS/SCSS, HTML, JSON, Git.</li>
<li>I have also designed a simple Discord Bot called <a href="https://yashsehgal.github.io/designsystem-bot-website/" class="link" target=""_blank">The DesignSystems-Bot</a>, This bot program has features like saving portfolio URLs, GitHub Profiles, receiving motivational quotes and much more. I have used Python to implement the entire backend scripts and logics, whereas, DJango to host the bot on the line.</li>
</ul>
`;

homepage.append(ProjectSection);

let BlogsVideoSection = document.createElement("div");
BlogsVideoSection.className = "section";
BlogsVideoSection.id = "blogs_video-section";
BlogsVideoSection.innerHTML = `
<h2 class="headline">Blogs & Videos</h2>
<div class="blogs-container">
  <div class="blogs-layer">
    <iframe width="360" height="202.5" class="video" src="https://www.youtube.com/embed/Dp6X4J3VRbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="360" height="202.5" class="video" src="https://www.youtube.com/embed/p3pJXK8Qc0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="360" height="202.5" class="video" src="https://www.youtube.com/embed/tB54mPJpg7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="360" height="202.5" class="video" src="https://www.youtube.com/embed/eJeWAYXrW34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
`;

homepage.append(BlogsVideoSection);

let footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = `
<a href="https://www.linkedin.com/in/yash-sehgal-55b7711a4/" target="_blank" class="footer-icons"><i class="fab fa-linkedin"></i></a>
<a href="https://github.com/yashsehgal" target="_blank" class="footer-icons"><i class="fab fa-github"></i></a>
<a href="https://www.instagram.com/sehgalyash_/" target="_blank" class="footer-icons"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/YashSeh90869786" target="_blank" class="footer-icons"><i class="fab fa-twitter"></i></a>
<a href="https://www.behance.net/yashsehgaleee3" target="_blank" class="footer-icons"><i class="fab fa-behance"></i></a>
<a href="https://medium.com/@yashsehgal.study" target="_blank" class="footer-icons"><i class="fab fa-medium"></i></a>
<a href="https://dev.to/yashsehgal" target="_blank" class="footer-icons"><i class="fab fa-dev"></i></a>

<p class="headline">Designed & Developed with 💜 by <a href="index.htm" class="link">Yash Sehgal</a></p>
<hr />
<p class="description">Version (v4.0), 2021-22</p>
`;

homepage.append(footer);

document.getElementById("content").appendChild(homepage);
